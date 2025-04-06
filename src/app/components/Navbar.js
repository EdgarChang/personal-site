export default function Navbar() {
  return (
    <div className="sticky top-0 bg-teal-700 text-white py-4 px-6 shadow-md z-10">
      <div className="flex justify-center gap-4">
        <a href="#home" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Home</a>
        <a href="#projects" className="px-4 py-2 bg-green-500 text-white rounded-lg">Projects</a>
        <a href="#experience" className="px-4 py-2 bg-gray-800 text-white rounded-lg">Experience</a>
        <a href="#contact" className="px-4 py-2 bg-purple-500 text-white rounded-lg">Contact</a>
      </div>
    </div>
  );
}