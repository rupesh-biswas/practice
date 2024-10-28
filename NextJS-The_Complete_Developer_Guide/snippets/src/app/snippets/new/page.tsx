"use client";
import * as actions from "@/actions";
import { useState } from "react";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  function handleCaptachVerification(token: string | null) {
    setCaptchaVerified(!!token);
  }
  return (
    <form action={action}>
      <h3 className="m-3 font-bold">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="w-full rounded border p-2"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            code
          </label>
          <textarea
            name="code"
            id="code"
            className="w-full rounded border p-2"
          />
        </div>

        {formState.message ? (
          <div className="my-2 rounded border border-red-400 bg-red-200 p-2">
            {formState.message}
          </div>
        ) : null}

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          onChange={handleCaptachVerification}
        />

        <button
          type="submit"
          disabled={!captchaVerified}
          className={`ml-12 rounded p-2 ${captchaVerified ? "bg-blue-200 hover:bg-blue-300 active:bg-blue-400" : "cursor-not-allowed bg-gray-200"}`}
        >
          Create
        </button>
      </div>
    </form>
  );
}
