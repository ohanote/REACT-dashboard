import BarsCharts from "./BarsCharts";
import CustomPieCharts from "./CustomPieCharts";
import LinesCharts from "./LinesCharts";
import MainCard from "./MainCard";

const Dashboard = () => {
  return (
    <section className="flex flex-col p-16 border-l-zinc-700 border-l-2 h-[100vh]">
      <header className="items-center justify-between flex pb-8">
        <h1 className="font-bold text-2xl">Overview</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="search"
            className="py-2 px-4 rounded-full bg-zinc-950 border-2 border-zinc-700 hover:bg-zinc-700 focus-within:outline-none w-96"
          />
          <img
            src="../../src/assets/icon-search.svg"
            alt="search"
            width={24}
            className="ml-[-36px] mr-4 cursor-pointer"
          />
        </div>
        <div className="flex gap-2">
          <div className="border-2 rounded-md border-zinc-700 bg-zinc-950 p-2 w-12 h-12 flex items-center justify-center hover:bg-zinc-700 cursor-pointer transition-all">
            <img
              src="../../src/assets/icon-dark-mode.svg"
              alt="dark-mode"
              width={24}
            />
          </div>
          <div className="border-2 rounded-md border-zinc-700 bg-zinc-950 p-2 w-12 h-12 flex items-center justify-center hover:bg-zinc-700 cursor-pointer transition-all">
            <img
              src="../../src/assets/icon-notification.svg"
              alt="dark-mode"
              width={24}
            />
          </div>
          <div className="border-2 rounded-md border-zinc-700 bg-zinc-950 overflow-hidden w-12 h-12 flex items-center justify-center cursor-pointer transition-all">
            <img
              src="https://source.unsplash.com/random/900×700/?profile"
              alt="dark-mode"
              className="min-h-full min-w-full size-fit"
            />
          </div>
        </div>
      </header>

      <main className="grid grid-cols-3 grid-rows-2 w-full h-full gap-6">
        <MainCard
          title="Profit"
          subtitle="Results of the period"
          mainText="$12 895.5"
          description="+14% Since last week"
          bgColor="bg-teal-800"
          icon="../../src/assets/icon-profit.svg"
        />
        <BarsCharts
          title="Sales Report"
          subtitle="Earnings"
          bgColor="bg-zinc-600"
          icon="../../src/assets/icon-sales.svg"
          textColor="#5eead4"
        />
        <LinesCharts
          title="Analytical AI"
          subtitle="April 2024"
          bgColor="bg-zinc-600"
          icon="../../src/assets/icon-ai.svg"
          textColor="#5eead4"
        />
        <div className="card span-2">teste</div>
        <CustomPieCharts
          title="Activity"
          bgColor="bg-zinc-600"
          icon="../../src/assets/icon-activity.svg"
          textColor="#fff"
        />
      </main>
    </section>
  );
};

export default Dashboard;