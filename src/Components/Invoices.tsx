import React from "react";
import CLIENTS from "../../constants/clients";

type InvoicesProps = {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  bgColor: string;
  textColor: string;
};

const Invoices = ({ title, icon, subtitle, bgColor }: InvoicesProps) => {
  return (
    <div className="card span-2">
      <div className={`${bgColor}`}>
        <div className="card-header">
          <div className="card-icon">
            {icon}
          </div>
          <div className="card-text">
            <h2 className="card-title">{title}</h2>
            <p className="card-paragraph">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-5 gap-2">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-2 text-sm font-light text-zinc-800 dark:text-zinc-300 items-center w-full">
            <span className="col-span-2 lg:col-span-4">Costumer Name</span>
            <span className="hidden lg:block col-span-2">Date</span>
            <span className="col-span-1 lg:col-span-2">Amount</span>
            <span className="hidden lg:block ">ID</span>
            <span className="col-span-1 lg:col-span-2 text-center">Status</span>
            <span className="hidden lg:block">Option</span>
        </div>
        {CLIENTS.map((e) => {
          return (
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-2 text-sm items-center w-full">
              <div className="flex justify-start gap-2 items-center col-span-2 lg:col-span-4 w-max">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-cover bg-center hidden md:block lg:block" style={{backgroundImage: `url(${e.imageURL})`}}>
                </div>
                <span className="font-bold">{e.name}</span>
              </div>
              <span className="hidden lg:block w-min col-span-2">{e.date}</span>
              <span className="col-span-1 lg:col-span-2">{e.Amount}</span>
              <span className="hidden lg:block w-min">{e.productId}</span>
              <span className="col-span-1 lg:col-span-2 text-center">{e.status}</span>
              <span className="text-teal-600 dark:text-teal-300 hidden lg:block w-min">{e.option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
