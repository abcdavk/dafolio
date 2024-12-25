import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Our Blog</h1>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80 p-4 rounded-md bg-blue-500/5 outline outline-1 outline-blue-500/20"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                {/* Title and Summary */}
                <div className="flex-1 hover:underline">
                  <p className="text-black dark:text-white tracking-tight">
                    {post.metadata.title}
                  </p>
                  <p className="hover:underline text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {post.metadata.summary}
                  </p>
                </div>
                {/* Date */}
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm sm:ml-4">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>

          ))}
      </div>
    </section>
  );
}
