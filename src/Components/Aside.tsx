import MenuItems from "./MenuItems.tsx";
import IconLogout from "../../src/assets/icon-out.svg";

type AsideProps = {
  className?: string;
};

const Aside = ({ className }: AsideProps) => {
  return (
    <aside
      className={`flex w-full transition-all duration-500 fixed lg:relative z-50 pt-16 lg:py-6 p-6 lg:flex flex-col bg-white dark:bg-zinc-950 justify-between h-[100vh] border-r-zinc-200 dark:border-r-zinc-800 border-r-2 lg:translate-x-0 lg:opacity-100 ${className}`}
      id="menu"
    >
      <nav>
        <div
          className="flex
        flex-col justify-center items-center min-h-32 w-full"
        >
          <h1 className="font-bold text-2xl self-start lg:self-center">ohanote</h1>
        </div>
        <MenuItems />
      </nav>

      <div className="flex gap-2 cursor-pointer">
        <IconLogout
          className="fill-zinc-800 dark:fill-white"
          width={24}
          height={24}
        />
        LogOut
      </div>
    </aside>
  );
};

export default Aside;
