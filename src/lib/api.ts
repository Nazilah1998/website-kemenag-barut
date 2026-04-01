type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export async function getLastPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  if (!res.ok) {
    throw new Error("Gagal mengambil data post");
  }

  const posts: Post[] = await res.json();
  return posts;
}