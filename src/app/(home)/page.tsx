import Post from "@/components/post/Post";
import { getLatestPosts } from "@/query/post.query";

export default async function Home() {
  //const session = await getAuthSession();

  const posts = await getLatestPosts();

  return (
    <div className="divide-y divid-muted">
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
