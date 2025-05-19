import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Item = [StaticImageData, string];

interface SocialProps {
  items: Item[];
}

const Social = ({ items }: SocialProps) => {
  return (
    <ul className="social d-flex gap-3">
      {items.map(([itm, url], i) => (
        <li key={i}>
          <Link href={url} className="social__icon">
            <Image src={itm} alt="svg" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
