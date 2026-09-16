import { NextResponse } from "next/server";
import { createAdminClient, getAppwriteConfig, ID, Query } from "@/lib/appwrite";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawFirstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
    const rawEmail = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    const rawUserType = body?.userType === "student" ? "student" : "general";

    // Validation
    if (!rawFirstName) {
      return NextResponse.json(
        { success: false, status: "error", message: "First name is required." },
        { status: 400 }
      );
    }

    if (!rawEmail || !EMAIL_PATTERN.test(rawEmail)) {
      return NextResponse.json(
        { success: false, status: "error", message: "A valid email address is required." },
        { status: 400 }
      );
    }

    const config = getAppwriteConfig();

    // Fallback if Appwrite credentials have not been configured yet
    if (!config.isConfigured) {
      console.warn(
        "[Waitlist] Appwrite environment variables are not configured. Falling back to preview mode."
      );
      return NextResponse.json(
        {
          success: true,
          status: "demo_preview",
          message: "Saved in preview mode. Configure Appwrite credentials in .env.local to persist signups.",
          entry: { firstName: rawFirstName, email: rawEmail, userType: rawUserType },
        },
        { status: 200 }
      );
    }

    const { databases, databaseId, collectionId } = createAdminClient();

    // Check if email is already registered in Appwrite
    try {
      const existing = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("email", rawEmail),
        Query.limit(1),
      ]);

      if (existing.total > 0) {
        return NextResponse.json(
          {
            success: true,
            status: "already_registered",
            message: "You're already on the waitlist! We have your spot saved.",
          },
          { status: 200 }
        );
      }
    } catch (checkError) {
      console.error("[Waitlist] Error checking duplicate email:", checkError);
      // Proceed to try creating document; if unique index exists, it will catch it
    }

    // Create document in Appwrite Collection
    const document = await databases.createDocument(databaseId, collectionId, ID.unique(), {
      firstName: rawFirstName,
      email: rawEmail,
      userType: rawUserType,
    });

    return NextResponse.json(
      {
        success: true,
        status: "created",
        message: "You're on the list! 🎉 We’ll reach out as soon as Chop Beta AI launches.",
        id: document.$id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[Waitlist] Submission error:", error);

    // If Appwrite throws 409 Conflict (e.g. Unique Index constraint violation on email)
    if (error?.code === 409 || error?.type === "document_already_exists") {
      return NextResponse.json(
        {
          success: true,
          status: "already_registered",
          message: "You're already on the waitlist! We have your spot saved.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        status: "error",
        message: error?.message || "Failed to submit waitlist registration. Please try again.",
      },
      { status: 500 }
    );
  }
}
