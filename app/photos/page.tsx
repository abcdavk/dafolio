import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Galery</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/profile.png",
            alt: "Dave",
            href: "/profile.png",
          },
          {
            src: "/photos/photo1.png",
            alt: "Pando",
            href: "/photos/photo1.png",
          },
          {
            src: "/photos/photo2.png",
            alt: "Pando",
            href: "/photos/photo2.png",
          }
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.png", alt: "Pando" },
          { src: "/photos/photo2.png", alt: "Pando" }
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.png", alt: "Pando" },
          { src: "/photos/photo1.png", alt: "Pando" },
          { src: "/photos/photo1.png", alt: "Pando" },
          { src: "/photos/photo1.png", alt: "Pando" }
        ]}
      />
    </section>
  );
}
