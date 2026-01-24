const Nav = () => {
  const date = "January 23, 2026";
  return (
    <div
      className="
        font-medium text-base sm:text-lg md:text-xl
        flex flex-col sm:flex-row justify-between items-center
        px-6 sm:px-12 md:px-[150px] 
        h-auto sm:h-[106px]
        py-4 sm:py-0
        border-b border-gray-600 text-gray-800
        text-center sm:text-left;
      "
    >
      <div className="mb-2 sm:mb-0">Last Updated: {date}</div>

      <div>
        <a href="#recent-project" className="hover:text-gray-500 underline">
          Recent Project
        </a>
      </div>
    </div>
  );
};

export default Nav;
