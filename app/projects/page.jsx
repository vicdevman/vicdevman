import React from "react";
import Projects from "../components/projects";
import Header from "../components/header";
import Footer from "../components/footer";
import Lines from "@/components/lines";

export default function page() {
  return (
    <div className="mb-8 mt-30">
      <Header />
      <Lines />
      <Projects show={false} />
      <Footer />
    </div>
  );
}
