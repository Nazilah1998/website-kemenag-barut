import Link from "next/link";
function PostList(props) {
  const { posts } = props; 
  return (
    <div className="post-list mt-8 space-y-4">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h2 className="text-xl font-semibold">
            <Link href="/">{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default PostList