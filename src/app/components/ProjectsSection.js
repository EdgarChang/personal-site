export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-300 to-blue-300 p-6">
      <h2 className="text-5xl font-bold mb-10">Projects</h2>
      <div className="w-full max-w-7xl space-y-12">
        <div className="p-12 bg-green-50 shadow rounded-lg flex items-start gap-14">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">This Personal Website</h3>
            <p className="mt-2 text-2xl">I built this personal website using Next.js. I designed it from scratch to practice my frontend development skills.
              The website is fully responsive and features a modern design with smooth animations and transitions. It is hosted on Vercel, ensuring fast load times and reliability.
              In the future, I plan to add backend functionality to make it full stack.
            </p>
          </div>
        </div>
        <div className="p-12 bg-green-50 shadow rounded-lg flex items-start gap-14">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">Cell Forces Data Analysis Suite</h3>
            <p className="mt-2 text-2xl">In a team of three students, I designed a software suite to perform cell forces analysis as the Capstone project of my engineering degree.
              Professor Allen Erlicher's bioengineering laboratory was using legacy MATLAB programs to analyze cellular traction force microscopy (TFM) data. Using the pyTFM package
              and the Bokeh data visualization library in Python, we built a softare suite that delivered the functionality of the legacy programs through a web-based user interface
              that allowed users to easily generate and visualize TFM data. Furthermore, our software suite was dockerized and fully deployed on Azure, making it easy to maintain and
              continously develop in the future.</p>
          </div>
        </div>
        <div className="p-12 bg-green-50 shadow rounded-lg flex items-start gap-14">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">Vaccination database application</h3>
            <p className="mt-2 text-2xl">I built a vaccination database applicatioon as part of my Databse System course at McGill.
              Using Java, SQL, and IBM Db2 database, I created a Java application that allows users to manage vaccination records.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}