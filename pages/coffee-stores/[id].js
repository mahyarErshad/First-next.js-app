import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import stores from "../../db/database.json";
import styles from "../../styles/coffeeStore.module.css";

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
  const { name, address, neighbourhood } = props.coffeeStore;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <p>{name}</p>
      <p>{address}</p>
      <p>{neighbourhood}</p>
    </>
  );
}

export default coffeeStores;
