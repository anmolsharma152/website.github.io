export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">About</a></li>
          <li><a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Projects</a></li>
          <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Skills</a></li>
          <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
