import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200 hover:underline p-4 rounded-md bg-blue-500/5 outline outline-1 outline-blue-500/20"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  <p>{project.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">Status: {project.status}</p>
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.month} {project.year}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
