export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Contact</h2>
        <div className="flex justify-center space-x-6">
          {/* Example Social Link */}
          <a href="https://github.com/yourusername" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            <i className="fab fa-github fa-2x"></i>
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </section>
  );
}
