export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Skill */}
          <div className="flex items-center justify-center bg-white dark:bg-gray-700 shadow-md rounded-lg p-4">
            <span className="text-lg font-bold text-gray-900 dark:text-white">JavaScript</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
}
