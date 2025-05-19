import Image from "next/image";
import Link from "next/link";

interface HelpProps {
  id: number;
  icon: any;
  title: string;
  link: string;
  description: string;
}

const HelpCard = ({ data }: { data: HelpProps }) => {
  const { description, icon, link, title } = data;

  return (
    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="help__items">
        <div className="icons">
          <Image src={icon} alt="img" />
        </div>
        <div className="content center">
          <h5>
            <Link href={link}>{title}</Link>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;
