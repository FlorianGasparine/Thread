import { PostHome } from "@/query/post.query";
import React from "react";
import PostLayout from "./PostLayout";
import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, MessageCircle } from "lucide-react";

type PostProps = {
  post: PostHome;
};

const Post = ({ post }: PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/post/${post.id}`} className="text-sm text-foregorund">
        {post.content}
      </Link>

      <div className="flex gap-2 item-center">
        <Button size="icon" variant="ghost">
          <Heart size={20} />
        </Button>

        <Button size="icon" variant="ghost">
          <MessageCircle size={20} />
        </Button>
      </div>

      <div>
        <Link
          className="text-muted-foreground text-sm"
          href={`/post/${post.id}`}
        >
          {post._count.likes} likes
        </Link>
        {" • "}

        <Link
          className="text-muted-foreground text-sm"
          href={`/post/${post.id}`}
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};

export default Post;
