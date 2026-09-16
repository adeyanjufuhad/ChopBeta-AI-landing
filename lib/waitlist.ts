export type WaitlistPayload = {
  firstName: string;
  email: string;
  userType?: "student" | "general";
};

export type WaitlistErrors = Partial<Record<"firstName" | "email", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateWaitlistPayload(payload: WaitlistPayload): WaitlistErrors {
  const errors: WaitlistErrors = {};
  if (!payload.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!payload.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(payload.email.trim())) errors.email = "Please enter a valid email address.";
  return errors;
}

export async function submitWaitlist(payload: WaitlistPayload): Promise<boolean> {
  const cleanPayload: WaitlistPayload = {
    firstName: payload.firstName.trim(),
    email: payload.email.trim().toLowerCase(),
    ...(payload.userType ? { userType: payload.userType } : {}),
  };

  // TODO: connect to Supabase waitlist table or Resend email API
  if (process.env.NODE_ENV === "development") console.info("Waitlist preview:", cleanPayload);
  return Promise.resolve(true);
}
