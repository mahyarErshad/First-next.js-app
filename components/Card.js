import Image from "next/image";
import Link from "next/link";

function Card(props) {
  return (
    <>
      <Link href={props.link}>
        <a>
          <h2>{props.title}</h2>
          <Image src={props.image} width={260} height={160} />
        </a>
      </Link>
    </>
  );
}

export default Card;
