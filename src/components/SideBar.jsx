import { categories } from "./../constants/index";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <div className="flex flex-col p-1 md:px-4">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div
            style={{
              background: selectedCategory.name === item.name && "#2d2d2d",
            }}
            className="flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-sm cursor-pointer rounded-md hover:bg-[#2d2d2d]"
          >
            <span className="max-md:text-lg">{item.icon}</span>
            <span className="max-md:hidden">{item.name} </span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
