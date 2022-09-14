import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import stores from "../../db/database.json";
import styles from "../../styles/coffeeStore.module.css";
import cls from "classnames";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: stores.find((store) => {
        return store.id.toString() === params.id;
      }),
    },
  };
}
export async function getStaticPaths() {
  const paths = stores.map((store) => {
    return {
      params: {
        id: store.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

function coffeeStores(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;
  function incrementLikes() {
    console.log("liked");
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
                <a>Back to home</a>
              </Link>
            </div>
            <div className={styles.nameWrapper}>
              <h1 className={styles.name}>{name}</h1>
            </div>
            <Image src={imgUrl} width={600} height={360} className={styles.storeImg} alt={name} />
          </div>
          <div className={cls("glass", styles.col2)}>
            <div className={styles.iconWrapper}>
              <Image src="" alt="address" width={24} height={24} />
              <p className={styles.text}>{address}</p>
            </div>
            <div className={styles.iconWrapper}>
              <Image src="" alt="address" width={24} height={24} />
              <p className={styles.text}>{neighbourhood}</p>
            </div>
            <div className={styles.iconWrapper}>
              <Image src="" alt="address" width={24} height={24} />
              <p className={styles.text}>1</p>
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

export default coffeeStores;
