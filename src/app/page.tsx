import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "@/components/PostList";

export default async function Home() {
  const posts = await getLastPost();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="main-heading text-center">
        <h1 className="text-4xl font-bold">Selamat Datang di JS Apps</h1>
        <p className="subtitle text-justify mt-4 max-w-3xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          nostrum debitis dolorem dignissimos est, possimus, sunt nesciunt sed
          at cumque reprehenderit autem voluptate quidem in eveniet illo,
          dolores harum molestias!
        </p>
      </div>

      <PostList posts={posts} />
    </div>
  );
}