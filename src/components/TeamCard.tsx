import Image from "next/image";
interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <Image
        src={image}
        alt={name}
        width={200}
        height={100}
        className=" rounded-lg"
      />
      <div className="col-span-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};
