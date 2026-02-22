import Header from "@/app/components/header";
import Lines from "@/components/lines";
import React from "react";
import ProjectsDetail from "@/app/components/projectDetail";
import { projects } from "@/app/data/projects.data";

export async function generateMetadata({ params }) {
  const id = params.id;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  const image = project.image || "/vicdevman.webp";
  return {
    title: `${project.title} — Victor Adeiza`,
    description: project.description || project.longDescription?.slice(0, 160),
    openGraph: {
      title: `${project.title} — Victor Adeiza`,
      description: project.description || project.longDescription?.slice(0, 160),
      url: `https://vicdevman.dev/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.title,
          type: image.endsWith(".webp") ? "image/webp" : "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Victor Adeiza`,
      description: project.description || project.longDescription?.slice(0, 160),
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <div>
      <Header />
      <Lines />
      <ProjectsDetail />
    </div>
  );
}
