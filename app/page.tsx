import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

import { SiFiverr } from "react-icons/si";
import { SocialLinks } from "./components/footer";

export default function Page() {
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

        <hr className="border-t-2 border-prose-neutral w-full my-4" />

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
        <div className="p-6 h-[800px]">
          <iframe
            src={socialLinks.fiverr}
            className="w-full h-full rounded-lg"
            title="My Fiverr Preview"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}
