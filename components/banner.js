import styles from "../styles/Banner.module.css";
function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span> <span className={styles.title2}>Stores</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops</p>
    </div>
  );
}

export default Banner;
