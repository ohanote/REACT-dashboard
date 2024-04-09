import MENU_ITEMS from "../../constants/menuItems";
import { useState } from "react";

const MenuItems = () => {
  const [selected, setSelected] = useState<string>("dashboard");

  return (
    <div className="flex flex-col gap-2">
      {MENU_ITEMS.map((e) => {
        return (
          <div
            className={`flex items-center text-neutral-400 justify-left gap-2 rounded-lg w-full p-2 transition-all cursor-pointer ${
              selected === e.key ? "bg-neutral-600 text-white font-bold hover:bg-neutral-500" : "hover:bg-neutral-700"
            }`}
            key={e.key}
            id={e.key}
            onClick={(item) => {
              const key = item.currentTarget.id;
              return setSelected(key);
            }}
          >
            <img src={e.icon} alt={e.key} width={24} className="fill-svg-neutral-400"/>
            {e.name}
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
