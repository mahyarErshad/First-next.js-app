import Head from "next/head";
import Banner from "../components/banner";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View stores nearby" />
        <div className={styles.cardLayout}>
          <Card image="/static/test.jpg" title="test" link="/coffee-stores/test" className={styles.card} />
        </div>
      </main>
    </div>
  );
}
