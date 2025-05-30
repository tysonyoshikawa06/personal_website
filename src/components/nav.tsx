const Nav = () => {
  const date = "May 28, 2025";
  return (
    <div className="font-medium text-xl flex flex-row justify-between items-center px-[150px] h-[106px] border-b border-gray-600 text-gray-800">
      <div>Last Updated: {date}</div>
      <div>
        <a href="#projects" className="hover:text-gray-500">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Nav;
