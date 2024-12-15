import { getAuthSession } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { User2 } from "lucide-react";
import DropDownMenuLogout from "./DropDownMenuLogout";

export const UserProfil = async () => {
  const session = await getAuthSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{session?.user.name ?? ""}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User2 className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropDownMenuLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
