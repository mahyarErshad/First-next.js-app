import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import stores from "../../db/database.json";
import styles from "../../styles/coffeeStore.module.css";
import cls from "classnames";
import { useState } from "react";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: stores.results.find((store) => {
        return store.fsq_id.toString() === params.id;
      }),
    },
  };
}
export async function getStaticPaths() {
  const paths = stores.results.map((store) => {
    return {
      params: {
        id: store.fsq_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

function CoffeeStores(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  const [likes , setLikes] = useState(0)
  const { name, location, image } = props.coffeeStore;
  function incrementLikes() {
    setLikes(prev => prev + 1)
  }
  return (
    <>
      <div className={styles.layout}>
        <Head>
          <title>{name}</title>
        </Head>
        <div className={styles.container}>
          <div className={styles.col1}>
            <div className={styles.backToHomeLink}>
              <Link href="/">
                <a>◄ Back to home</a>
              </Link>
            </div>
            <div className={styles.nameWrapper}>
              <h1 className={styles.name}>{name}</h1>
            </div>
            <Image src={image} width={600} height={360} className={styles.storeImg} alt={name} />
          </div>
          <div className={cls("glass", styles.col2)}>
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/places.svg" alt="address" width={24} height={24} />
              <p className={styles.text}>{location.address}</p>
            </div>
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/nearMe.svg" alt="near me" width={24} height={24} />
              <p className={styles.text}>{location.neighborhood}</p>
            </div>
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/star.svg" alt="Star" width={24} height={24} />
              <p className={styles.text}>{likes}</p>
            </div>
            <button className={styles.upvoteButton} onClick={incrementLikes}>
              Like
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoffeeStores;
