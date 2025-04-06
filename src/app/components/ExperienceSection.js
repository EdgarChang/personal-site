export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="w-full max-w-4xl space-y-4">
        <div className="p-4 bg-gray-100 shadow rounded-lg">
          <h3 className="text-2xl font-semibold">Software Developer at Ericsson</h3>
          <p className="text-gray-700">Jan 2020 - Present</p>
          <p className="mt-2">- Developed scalable web applications using React and Node.js.</p>
          <p>- Collaborated with cross-functional teams to deliver high-quality software.</p>
        </div>
        <div className="p-4 bg-gray-100 shadow rounded-lg">
          <h3 className="text-2xl font-semibold">Intern at ABC Tech</h3>
          <p className="text-gray-700">Jun 2019 - Dec 2019</p>
          <p className="mt-2">- Assisted in building internal tools to improve team productivity.</p>
          <p>- Gained hands-on experience with cloud technologies and CI/CD pipelines.</p>
        </div>
      </div>
    </section>
  );
}