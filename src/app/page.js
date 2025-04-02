import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal website for Edgar Chang." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold">Hi, I'm Edgar</h1>
        <p className="text-xl mt-2">Software Developer | Problem Solver</p>
        <div className="mt-4 flex gap-4">
          <Link href="/projects" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Projects</Link>
          <Link href="/experience" className="px-4 py-2 bg-green-500 text-white rounded-lg">Experience</Link>
          <Link href="/contact" className="px-4 py-2 bg-gray-800 text-white rounded-lg">Contact</Link>
        </div>
      </div>
    </>
  );
}
