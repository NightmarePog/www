import { Card } from "./ui/card";
import { Description } from "./ui/typography/Description";

interface props {
  name: string;
  description: string;
  link: string;
  image: string;
  reverse: boolean;
}

const ProjectComponent = ({ name, description, link, image, reverse }: props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="m-3 sm:m-5 bg-primary p-0 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className={`flex flex-col sm:flex-row ${reverse ? "sm:flex-row-reverse" : ""}`}>
          <img className="w-full sm:w-1/2 h-auto object-cover" src={image} alt={name} />
          <div className="m-3 sm:m-5 sm:w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-5">{name}</h2>
            <Description>{description}</Description>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default ProjectComponent;
