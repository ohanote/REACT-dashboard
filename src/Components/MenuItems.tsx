import MENU_ITEMS from "../../constants/menuItems";
import { useState } from "react";

const MenuItems = () => {
  const [selected, setSelected] = useState<string>("dashboard");

  return (
    <div className="flex flex-col gap-2">
      {MENU_ITEMS.map((e) => {
        return (
          <div
            className={`flex items-center dark:text-zinc-400 justify-left gap-2 rounded-lg w-full p-2 transition-all cursor-pointer ${
              selected === e.key ? "bg-zinc-300 dark:bg-zinc-600 dark:text-white font-bold hover:bg-zinc-500 dark:hover:bg-zinc-500" : "hover:bg-zinc-500 dark:hover:bg-zinc-500"
            }`}
            key={e.key}
            id={e.key}
            onClick={(item) => {
              const key = item.currentTarget.id;
              return setSelected(key);
            }}
          >
            <img src={e.icon} alt={e.key} width={24} className="fill-svg-zinc-400"/>
            {e.name}
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
