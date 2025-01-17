import { HomeIcon, PenSquare, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import clsx from "clsx";

export const Footer = () => {
  return (
    <div className="py-2 flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-accent">
      <Link
        href="/"
        className={clsx(buttonVariants({ variant: "outline" }), "flex-1")}
      >
        <HomeIcon size={16} />
      </Link>

      <Link
        href="/write"
        className={clsx(buttonVariants({ variant: "outline" }), "flex-1")}
      >
        <PenSquare size={16} />
      </Link>

      <Link
        href="/profile"
        className={clsx(buttonVariants({ variant: "outline" }), "flex-1")}
      >
        <User size={16} />
      </Link>
    </div>
  );
};
