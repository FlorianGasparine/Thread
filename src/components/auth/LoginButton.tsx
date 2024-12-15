"use client";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useTransition } from "react";
import { Loader } from "../ui/loader";

export default function LoginButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Button
        variant="outline"
        onClick={() => {
          startTransition(() => signIn());
        }}
      >
        {isPending ? (
          <Loader className="mr-2 h-4 w-4" />
        ) : (
          <LogIn className="mr-2 h-4 w-4" />
        )}
        Login
      </Button>
    </>
  );
}
