const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Right side: Logo */}
      <div>
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Left side: Links */}
      <div className="flex items-center">
        <a href="#" className="mr-4">
          Hem
        </a>
        <a href="#" className="mr-4">
          Om oss
        </a>
        <a href="#" className="mr-4">
          Kontakt
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
