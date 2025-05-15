export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-indigo-300 p-6">
      <h2 className="text-5xl font-bold mb-10">Experience</h2>
      <div className="w-full max-w-7xl space-y-12">
        <div className="p-12 bg-gray-100 shadow rounded-lg flex items-start gap-14">
          <img
            src="/ericsson_logo.png"
            alt="Ericsson Logo"
            className="w-36 h-36 object-contain"
          />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">Software Developer</h3>
            <p className="text-gray-700 text-2xl">January 2022 - June 2024</p>
            <p className="mt-2 text-2xl">At Ericsson, I engineered Python-based microservices to process analytics data across active 5G radio access networks, contributing to a 60% reduction in network performance issues.
              I developed and maintained RESTful APIs supporting internal web applications and designed scalable deployment solutions using Docker Swarm and Kubernetes.
              My work included designing PostgreSQL database models with SQLite and SQLAlchemy, and implementing RabbitMQ-based messaging architecture to decouple services for more efficient task processing.
              I also improved file upload performance to MinIO servers by 20% through Python multiprocessing, created a Python identity verification library to bolster system security, and achieved 95%+ code coverage through automated unit and integration testing.
              Throughout, I actively conducted detailed code reviews and contributed to a SAFe Agile development environment.</p>
          </div>
        </div>
        <div className="p-12 bg-gray-100 shadow rounded-lg flex items-start gap-14">
          <img
              src="/nuance_logo.png"
              alt="Nuance Logo"
              className="w-36 h-36 object-contain"
            />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">Software Engineer Intern</h3>
            <p className="text-gray-700 text-2xl">May 2021 - August 2021</p>
            <p className="mt-2">- Developed a Python-based web application to streamline internal processes, enhancing team efficiency.</p>
            <p>- Collaborated with cross-functional teams to gather requirements and deliver solutions.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}