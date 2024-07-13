


interface AchivmentCardProps {
  src: string;
  title: string;
}

const AchivmentCard: React.FC<AchivmentCardProps> = ({src, title}) => {
  return (
    <div className="max-w-[300px] md:max-w-[420px] lg:max-w-[420px]  bg-[#919090] rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={src}
        alt={title}
        className="w-full  object-cover rounded-t-md"
      />
    </div>
  );
};

export default AchivmentCard;
