export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-fuchsia-300 p-6">
      <h2 className="text-4xl font-bold mb-4">Experience</h2>
      <div className="w-full max-w-6xl space-y-4"> {/* Updated max-w-4xl to max-w-6xl */}
        <div className="p-4 bg-gray-100 shadow rounded-lg flex items-start gap-14"> {/* Added flex and gap */}
          <img
            src="/ericsson_logo.png" // Replace with the actual logo path
            alt="Ericsson Logo"
            className="w-36 h-36 object-contain" // Adjust size as needed
          />
          <div>
            <h3 className="text-3xl font-semibold">Software Developer at Ericsson</h3>
            <p className="text-gray-700 text-2xl">January 2022 - June 2024</p>
            <p className="mt-2 text-2xl">At Ericsson, I engineered Python-based microservices to process analytics data across active 5G radio access networks, contributing to a 60% reduction in network performance issues.
              I developed and maintained RESTful APIs supporting internal web applications and designed scalable deployment solutions using Docker Swarm and Kubernetes.
              My work included designing PostgreSQL database models with SQLite and SQLAlchemy, and implementing RabbitMQ-based messaging architecture to decouple services for more efficient task processing.
              I also improved file upload performance to MinIO servers by 20% through Python multiprocessing, created a Python identity verification library to bolster system security, and achieved 95%+ code coverage through automated unit and integration testing.
              Throughout, I actively conducted detailed code reviews and contributed to a SAFe Agile development environment.</p>
          </div>
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