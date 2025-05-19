import Image from "next/image";
import Link from "next/link";

interface KnowledgeProps {
  id: number;
  icon: any;
  title: string;
  link: string;
  description: string;
}

const KnowledgeCard = ({ data }: { data: KnowledgeProps }) => {
  const { description, icon, link, title } = data;
  return (
    <div
      className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
      data-wow-duration="1.1s"
    >
      <div className="help__items">
        <div className="icons">
          <Image src={icon} alt="img" />
        </div>
        <div className="content">
          <h5>
            <Link href={link}>{title}</Link>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
