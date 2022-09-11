import Head from "next/head";
import Banner from "../components/banner";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import stores from "../db/database.json";

export async function getStaticProps(context) {
  return {
    props: {
      stores,
    },
  };
}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View stores nearby" />
        {stores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.stores.map((store) => {
                return <Card key={store.id} image={store.imgUrl} title={store.name} link={`/coffee-stores/${store.id}`} className={styles.card} />;
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
