import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

function Card(props) {
  return (
    <>
      <Link href={props.link}>
        <a className={styles.cardLink}>
          <div className={styles.container}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{props.title}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image className={styles.cardImage} src={props.image} width={260} height={160} />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Card;
