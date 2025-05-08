export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center bg-primary justify-center p-6 relative"
    >
      <div className="min-h-screen flex gap-28">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start bg-accent justify-center text-left p-6">
          <h1 className="text-6xl font-extrabold text-left">Hi, I'm Edgar Chang</h1>
          <p className="text-3xl mt-16 leading-relaxed">
            I’m a software developer based in Toronto, with a Software Engineering degree from McGill University.
            I specialize in building Python microservices that scale, but I’ve also dabbled in frontend design and software testing.
            I love solving real-world problems with code, and I’m always exploring new tools, tech, and ideas to grow as a developer.
          </p>
        </div>

        {/* Right Content (Photo) */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/profile.jpg"
            alt="Edgar Chang"
            className="w-full h-3/4 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

