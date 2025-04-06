export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-slate-700 p-6">
      <div className="min-h-screen flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center bg-slate-700 justify-center p-6">
          <h1 className="text-4xl font-bold text-white">Hi, I'm Edgar</h1>
          <p className="text-xl mt-2 text-gray-300">Software Developer | Problem Solver</p>
        </div>

        {/* Right Content (Photo) */}
        <div className="flex-1">
          <img
            src="/profile_photo.jpg"
            alt="Edgar Chang"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

