import Image from "next/image";
import Link from "next/link";

function Card(props) {
  return (
    <>
      <Link href={props.link}>
        <a className={styles.cardLink}>
          <h2 className={styles.cardHeader}>{props.title}</h2>
          <Image className={styles.cardImage} src={props.image} width={260} height={160} />
        </a>
      </Link>
    </>
  );
}

export default Card;
