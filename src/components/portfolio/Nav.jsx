export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-bold text-pink-500">
          Kahkashan
        </h1>

        <ul className="flex gap-6 font-medium">
          <li>
            <a href="#home" className="hover:text-pink-500">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-pink-500">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-pink-500">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}