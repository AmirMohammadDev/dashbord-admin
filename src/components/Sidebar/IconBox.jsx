export default function IconBox({ Icon, title, active }) {
  return (
    <div className="flex justify-between items-center hover:cursor-pointer">
      <div
        className={`px-5 flex gap-5 items-center h-10 transition-colors duration-300 ${
          active ? "text-[#7551FF]" : "text-gray-400"
        }`}
      >
        <Icon className="transition-colors duration-300" />
        <p
          className={`font-medium transition-colors duration-300 ${
            active ? "text-black dark:text-white" : ""
          }`}
        >
          {title}
        </p>
      </div>

      <div
        className={`h-10 bg-[#7551FF] rounded-4xl transition-all duration-300 ease-in-out ${
          active
            ? "w-1.5 opacity-100 translate-x-0"
            : "w-0 opacity-0 -translate-x-2"
        }`}
      ></div>
    </div>
  );
}
