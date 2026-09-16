export type WaitlistPayload = {
  firstName: string;
  email: string;
  userType?: "student" | "general";
};

export type WaitlistErrors = Partial<Record<"firstName" | "email", string>>;

export type WaitlistSubmissionStatus = "created" | "already_registered" | "demo_preview" | "error";

export interface WaitlistResponse {
  success: boolean;
  status: WaitlistSubmissionStatus;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateWaitlistPayload(payload: WaitlistPayload): WaitlistErrors {
  const errors: WaitlistErrors = {};
  if (!payload.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!payload.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(payload.email.trim())) errors.email = "Please enter a valid email address.";
  return errors;
}

export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistResponse> {
  const cleanPayload: WaitlistPayload = {
    firstName: payload.firstName.trim(),
    email: payload.email.trim().toLowerCase(),
    ...(payload.userType ? { userType: payload.userType } : {}),
  };

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cleanPayload),
    });

    const data = await response.json();

    if (!response.ok && !data?.status) {
      return {
        success: false,
        status: "error",
        message: data?.message || "Failed to submit waitlist registration.",
      };
    }

    return {
      success: Boolean(data?.success),
      status: (data?.status as WaitlistSubmissionStatus) || "created",
      message: data?.message || "You're on the list!",
    };
  } catch (err) {
    console.error("Waitlist API request failed:", err);
    return {
      success: false,
      status: "error",
      message: "Network error occurred. Please check your connection and try again.",
    };
  }
}
