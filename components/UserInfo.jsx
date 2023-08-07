"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";


const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <h1 className="green_gradient head_text mb-5 ml-10 font_text">HELLO</h1>
        <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 glassmorphism">
          <Image
            className="rounded-full"
            src={session?.user?.image}
            width={70}
            height={70}
          />
          <div className="font_text">
            Name: <span className="font-bold text-xl blue_gradient">{session?.user?.name}</span>
          </div>
          <div className="font_text">
            Email: <span className="font-bold text-xl blue_gradient">{session?.user?.email}</span>
          </div>
        </div>
      </>
    );
  } else {
    return <SignInBtn />;
  }
}

export default UserInfo