import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="User Profile"
        width={24}
        height={24}
        className="rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
