export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card */}
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
            <img src="/path/to/image.jpg" alt="Project Image" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-400">Brief description of the project.</p>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}
