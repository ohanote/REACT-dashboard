type MainCardProps = {
  title: string;
  icon: string;
  subtitle?: string;
  mainText: string;
  description: string;
  bgColor: string;
};

const MainCard = ({
  title,
  icon,
  subtitle,
  mainText,
  description,
  bgColor,
}: MainCardProps) => {
  return (
    <div className={`card ${bgColor}`}>
      <div className="flex gap-2 justify-start items-center">
        <div className="flex flex-col h-full py-2">
          <img src={icon} alt={title} width={48} />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="h-full w-full flex flex-col items-start justify-center">
        <span className="font-bold text-3xl">{mainText}</span>
        <span className="font-light text-sm">{description}</span>
      </div>
    </div>
  );
};

export default MainCard;
