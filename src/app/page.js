import Head from "next/head";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal website for Edgar Chang." />
      </Head>
      <div className="min-h-screen flex flex-col bg-teal-500">
        <Navbar />
        <HomeSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}
