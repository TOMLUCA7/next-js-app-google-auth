"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <>
      <h1 className="orange_gradient head_text mb-10 font_text">WELCOME</h1>
        <button
        onClick={() => signIn("google")}
        className="black_btn ml-8"
        >
          <span className="px-4 py-3 font_text">
            Sign in with Google
          </span>
          <Image src="/assets/images/google-logo.png" height={30} width={30} />
      </button>
    </>
  );
}

export default SignInBtn