import React from "react";
import ToggleButtonTheme from "../toggleButton/ToggleButton";
import LoginButton from "../auth/LoginButton";
import { getAuthSession } from "@/lib/auth";
import { UserProfil } from "../auth/UserProfil";

const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center py-2 m(auto gap-1">
        <h1 className="text-2xl font-bold mr-auto">Thread</h1>
        {session?.user ? <UserProfil /> : <LoginButton />}
        <ToggleButtonTheme />
      </div>
    </header>
  );
};

export default Header;
