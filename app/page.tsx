import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

import { SiFiverr } from "react-icons/si";
import { SocialLinks } from "./components/footer";

import { formatDate, getBlogPosts } from "app/lib/posts";

export default function Page() {
  let allBlogs = getBlogPosts();

  // Sort blogs by date (newest first)
  const latestBlog = allBlogs
    .sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt))
    .slice(0, 1);
  return (
    <section>
      
      <div className="mx-auto sm:float-right sm:ml-5 sm:mb-5">
        <a href={socialLinks.github} target="_blank">
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="bg-gray-100 block rounded-lg lg:mt-5 mt-0 lg:mb-5 mb-10"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <SocialLinks />
      </div>
      

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my portfolio!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello, and welcome to my corner of the web!
        </p>
        <p>
          My name is Dave, and I’m a passionate developer with a strong focus on Javascript, Typescript and C#. Over the years, I have honed my expertise in web development, game development, game modding and design.
        </p>
        
        <p>
          This portfolio is a glimpse into my journey—a showcase of projects, experiences, and achievements that reflect my dedication and love for what I do. Whether you’re here to explore my work, collaborate, or simply get to know me better, I’m glad you stopped by.
        </p>

        <p>
          Feel free to explore my featured projects, learn more about my professional background, or reach out if you’re interested in working together. I’m always excited to connect with like-minded individuals and take on new challenges.
        </p>

        <p>
          Thank you for visiting. Let’s build something amazing together!
        </p>

        <hr className="border-t-2 border-slate-500/50 w-full my-4" />

        <b>Freelance Services at Your Fingertips</b>

        <p>
          As an active freelancer on Fiverr, I bring a diverse range of skills to help turn your ideas into reality. Whether it’s developing modern websites, crafting functional Telegram bots, designing captivating visuals, or diving into the exciting world of game modding, I’m here to deliver solutions tailored to your needs.
        </p>

        <p>
          Each project I take on is approached with passion, attention to detail, and a commitment to excellence. My goal is not just to complete tasks but to create work that truly resonates with your vision.
        </p>

        <p>
          Let’s collaborate and bring your projects to life. Explore my portfolio or connect with me to discuss your ideas—I’m always open to new challenges!
        </p>
        <div className="p-6 h-[600px]">
          <iframe
            src={socialLinks.fiverr}
            className="w-full h-full rounded-lg"
            title="My Fiverr Preview"
          ></iframe>
        </div>
        
      </div>

      <hr className="border-t-2 border-slate-500/50 w-full my-4" />

      <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Read Latest Our Blog</h1>
        <div>
          {latestBlog.map((post) => (
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
          <Link href='/blog'>
            <div className="flex justify-center items-center transition-opacity duration-200 hover:opacity-80 py-4 w-full rounded-md bg-blue-500/5 outline outline-1 outline-blue-500/40">
              <p className="text-black dark:text-white hover:underline">
                Read more
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
