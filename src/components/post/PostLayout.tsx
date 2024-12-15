import { PostHome } from "@/query/post.query";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"];
  createdAt?: Date;
  className?: string;
  postId?: string;
}>;

export const PostLayout = ({
  className,
  user,
  createdAt,
  children,
}: PostLayoutProps) => {
  return (
    <div className={clsx("flex w-full flew-row items-start p-4", className)}>
      <Avatar>
        {user.image ? (
          <AvatarImage src={user.image} alt={user.username} />
        ) : null}
        <AvatarFallback>
          {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        <Link href={`/user/${user.id}`}>
          <div className="flex flex-row items-center gap-2">
            <p className="text-sm text-card-foreground mr-auto">
              {user.username}
            </p>
            {createdAt ? (
              <p className="text-sm text-muted-foreground">
                {formatDate(createdAt)}
              </p>
            ) : null}
            <Button variant="ghost">
              <MoreHorizontal size={20} />
            </Button>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default PostLayout;
