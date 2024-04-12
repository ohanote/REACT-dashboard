import { useState, useEffect } from "react";
import Aside from "./Aside";
import BarsCharts from "./BarsCharts";
import CustomPieCharts from "./CustomPieCharts";
import LinesCharts from "./LinesCharts";
import MainCard from "./MainCard";
import Invoices from "./Invoices";
import IconSearch from "../../src/assets/icon-search.svg";
import IconDarkMode from "../../src/assets/icon-dark-mode.svg";
import IconLightMode from "../../src/assets/icon-light-mode.svg";
import IconNotification from "../../src/assets/icon-notification.svg";
import IconSales from "../../src/assets/icon-sales.svg";
import IconProfit from "../../src/assets/icon-profit.svg";
import IconAI from "../../src/assets/icon-ai.svg";
import IconActivity from "../../src/assets/icon-activity.svg";
import IconInvoice from "../../src/assets/icon-invoice.svg";
import IconMenu from "../../src/assets/icon-menu.svg";

const Dashboard = () => {
  const [theme, setTheme] = useState("light");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex lg:grid lg:grid-flow-col lg:grid-cols-[200px_1fr] h-full">
      <Aside className={`${openMenu ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"}`}/>
      <section className="pb-8 flex flex-col lg:pb-5 px-6 lg:px-6 border-l-zinc-300 dark:border-l-zinc-700 border-l-2 h-full w-full lg:h-[100vh] lg:overflow-scroll">
        <header className="sticky top-0 py-8 z-50 flex items-center justify-between pb-8 w-full bg-white dark:bg-zinc-950 ">
          <h1 className="font-bold text-2xl lg:block hidden">Overview</h1>
          <div className="flex gap-2 justify-between w-full">
            <div
              className="border-2 rounded-md border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 p-2 w-12 h-12 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer transition-all lg:hidden"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <IconMenu
                width={24}
                height={24}
                className="cursor-pointer stroke-zinc-800 dark:stroke-white fill-none"
              />
            </div>
            <div className="flex gap-2 justify-end w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="search"
                  className="lg:p-1 lg:py-2 lg:px-4 lg:rounded-full dark:bg-zinc-950 bg-white border-2 border-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-700 hover:bg-zinc-300 focus-within:outline-none focus-within:bg-zinc-300 dark:focus-within:bg-zinc-700 lg:w-96 w-12 placeholder:text-transparent lg:placeholder:text-zinc-500
            
              rounded-md p-2 h-12 flex items-center justify-center cursor-pointer transition-all
              "
                />
                <IconSearch
                  width={24}
                  height={24}
                  className="ml-[-36px] mr-4 cursor-pointer stroke-zinc-800 dark:stroke-white fill-none"
                />
              </div>
              <div
                className="border-2 rounded-md border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 p-2 w-12 h-12 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer transition-all"
                onClick={handleThemeSwitch}
              >
                {theme === "light" ? (
                  <IconDarkMode
                    width={24}
                    height={24}
                    className="fill-zinc-800 dark:fill-white"
                  />
                ) : (
                  <IconLightMode
                    width={24}
                    height={24}
                    className="fill-zinc-800 dark:fill-white"
                  />
                )}
              </div>
              <div className="border-2 rounded-md border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950 p-2 w-12 h-12 flex items-center justify-center hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer transition-all">
                <IconNotification
                  width={24}
                  height={24}
                  className="fill-zinc-800 dark:fill-white"
                />
              </div>
              <div className="border-2 rounded-md border-zinc-700 bg-zinc-950 overflow-hidden w-12 h-12 flex items-center justify-center cursor-pointer transition-all">
                <img
                  src="https://source.unsplash.com/random/900×700/?profile"
                  alt="profile"
                  className="min-h-full min-w-full size-fit"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 w-full h-[80%] lg:h-max gap-6 lg:gap-3 mb-8 lg:mb-0">
          <h1 className="font-bold text-2xl block lg:hidden">Overview</h1>
          <MainCard
            title="Profit"
            subtitle="Results of the period"
            mainText="$12 895.5"
            description="+14% Since last week"
            bgColor="dark:bg-teal-800 bg-teal-300"
            icon={
              <IconProfit
                className="fill-none stroke-zinc-700 dark:stroke-white"
                width={36}
                height={36}
              />
            }
          />
          <BarsCharts
            title="Sales Report"
            subtitle="Earnings"
            bgColor="dark:bg-zinc-800 bg-zinc-300"
            icon={
              <IconSales
                className="stroke-none fill-zinc-700 dark:fill-white"
                width={36}
                height={36}
              />
            }
            textColor={theme === "light" ? "#27272a" : "#5eead4"}
          />
          <LinesCharts
            title="Analytical AI"
            subtitle="April 2024"
            bgColor="dark:bg-zinc-800 bg-zinc-300"
            icon={
              <IconAI
                className="fill-none stroke-zinc-700 dark:stroke-white"
                width={36}
                height={36}
              />
            }
            textColor={theme === "light" ? "#27272a" : "#5eead4"}
          />
          <Invoices
            title={"Invoices"}
            icon={
              <IconInvoice
                className="stroke-none fill-zinc-700 dark:fill-white"
                width={36}
                height={36}
              />
            }
            bgColor={""}
            textColor={""}
          />
          <CustomPieCharts
            title="Activity"
            bgColor="dark:bg-zinc-800 bg-zinc-300"
            icon={
              <IconActivity
                className="stroke-none fill-zinc-700 dark:fill-white"
                width={36}
                height={36}
              />
            }
            textColor={theme === "light" ? "#27272a" : "#5eead4"}
          />
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
