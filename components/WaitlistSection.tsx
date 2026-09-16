"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  submitWaitlist,
  validateWaitlistPayload,
  type WaitlistErrors,
  type WaitlistPayload,
  type WaitlistSubmissionStatus,
} from "@/lib/waitlist";

const initialForm: WaitlistPayload = { firstName: "", email: "" };

export function WaitlistSection() {
  const [form, setForm] = useState<WaitlistPayload>(initialForm);
  const [errors, setErrors] = useState<WaitlistErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | WaitlistSubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const reduceMotion = useReducedMotion();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const nextErrors = validateWaitlistPayload(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await submitWaitlist(form);

      if (result.status === "created") {
        setStatus("created");
      } else if (result.status === "already_registered") {
        setStatus("already_registered");
      } else if (result.status === "demo_preview") {
        setStatus("demo_preview");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unable to connect to the waitlist server. Please try again.");
    }
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <section id="waitlist" className="waitlist-pattern anchor-section bg-primary py-20 text-white md:py-24 lg:py-28">
      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold text-[#FFD5B8]">BE AMONG THE FIRST</p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-[46px]">
            The App is Coming. Don’t Miss It.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/80 sm:text-lg">
            We’re building something that actually fits your life, your wallet, and your plate. Join the waitlist to get priority early access.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-card bg-white p-5 text-left text-ink shadow-lg sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {status === "created" || status === "demo_preview" ? (
              <motion.div
                key="success"
                role="status"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="flex min-h-[350px] flex-col items-center justify-center py-8 text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-[#EAF4EB] text-3xl text-primary" aria-hidden="true">
                  ✓
                </div>
                <h3 className="mt-5 text-balance font-heading text-2xl font-bold text-primary">
                  You’re on the list! 🎉
                </h3>
                <p className="mt-3 max-w-md text-pretty leading-7 text-muted">
                  Thank you for joining. We’ll notify you as soon as Chop Beta AI goes live with early access.
                </p>
                {status === "demo_preview" && (
                  <p className="mt-4 inline-block rounded-lg bg-[#FFF0E6] px-4 py-2 text-xs font-semibold text-[#B54600]">
                    Appwrite Database ready — connect your project keys in <code>.env.local</code> to persist signups.
                  </p>
                )}
                <button
                  type="button"
                  onClick={resetForm}
                  className="focus-ring mt-6 rounded-control px-4 py-2 text-sm font-bold text-primary underline"
                >
                  Register another email
                </button>
              </motion.div>
            ) : status === "already_registered" ? (
              <motion.div
                key="already_registered"
                role="status"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="flex min-h-[350px] flex-col items-center justify-center py-8 text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-[#FFF0E6] text-3xl text-accent" aria-hidden="true">
                  ✨
                </div>
                <h3 className="mt-5 text-balance font-heading text-2xl font-bold text-primary">
                  You’re already registered!
                </h3>
                <p className="mt-3 max-w-md text-pretty leading-7 text-muted">
                  We already have your spot secured with <strong>{form.email}</strong>. We’ll ping you the moment early access opens!
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="focus-ring mt-6 rounded-control px-4 py-2 text-sm font-bold text-primary underline"
                >
                  Use a different email
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-[350px]"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-bold">
                      First name <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      value={form.firstName}
                      onChange={(event) => {
                        setForm({ ...form, firstName: event.target.value });
                        if (errors.firstName) setErrors({ ...errors, firstName: undefined });
                      }}
                      aria-invalid={Boolean(errors.firstName)}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="mt-2 text-sm font-semibold text-[#B93815]">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold">
                      Email address <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(event) => {
                        setForm({ ...form, email: event.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm font-semibold text-[#B93815]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className="text-sm font-bold">
                    Which sounds like you? <span className="font-normal text-muted">(optional)</span>
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      ["student", "I’m a Student"],
                      ["general", "I’m Not a Student"],
                    ].map(([value, label]) => (
                      <label
                        key={value}
                        className="flex min-h-12 cursor-pointer items-center gap-3 rounded-control border border-black/15 px-4 transition hover:border-primary"
                      >
                        <input
                          type="radio"
                          name="userType"
                          value={value}
                          checked={form.userType === value}
                          onChange={() => setForm({ ...form, userType: value as WaitlistPayload["userType"] })}
                          className="size-4 accent-[#2D7A3A]"
                        />
                        <span className="text-sm font-semibold">{label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <Button type="submit" disabled={status === "loading"} className="mt-6 w-full text-base">
                  {status === "loading" ? "Joining…" : "Join Waitlist"}
                </Button>

                <div aria-live="polite" className="min-h-7 pt-3 text-center">
                  {status === "error" && (
                    <p className="text-sm font-semibold text-[#B93815]">
                      {errorMessage || "Something went wrong. Please try again — your details are still here."}
                    </p>
                  )}
                </div>

                <p className="mt-1 text-center text-sm text-muted">No spam. Just a ping when we launch.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
