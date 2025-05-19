import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type FacilitieProps = {
  id: number;
  icon: StaticImageData;
  title: string;
  link: string;
  description: string;
};

const FacilitieCard = ({ data }: { data: FacilitieProps }) => {
  const { description, icon, id, link, title } = data;
  return (
    <div
      key={id}
      className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
      data-wow-duration="1.2s"
    >
      <div className="hotel__facilities__item">
        <div className="head__wrap">
          <Image src={icon} alt={title} />
          <h5>
            <Link href={link}>{title}</Link>
          </h5>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FacilitieCard;
