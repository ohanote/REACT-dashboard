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
        <div className="grid grid-cols-7 gap-2 text-sm font-light text-zinc-800 dark:text-zinc-300 items-center w-full">
            <span className="span-2">Costumer Name</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Product ID</span>
            <span>Status</span>
            <span>Option</span>
        </div>
        {CLIENTS.map((e) => {
          return (
            <div className="grid grid-cols-7 gap-2 text-sm items-center w-full">
              <div className="flex justify-start gap-2 items-center span-2">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${e.imageURL})`}}>
                </div>
                <span className="font-bold">{e.name}</span>
              </div>
              <span>{e.date}</span>
              <span>{e.Amount}</span>
              <span>{e.productId}</span>
              <span>{e.status}</span>
              <span className="text-teal-600 dark:text-teal-300">{e.option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
