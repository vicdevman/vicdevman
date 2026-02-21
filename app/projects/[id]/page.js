import Header from "@/app/components/header";
import Lines from "@/components/lines";
import React from "react";
import ProjectsDetail from "@/app/components/projectDetail";

export default function Page() {
  return (
    <div>
      <Header />
      <Lines />
      <ProjectsDetail />
    </div>
  );
}
