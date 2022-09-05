import styles from "../styles/Banner.module.css";
function Banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coffee Stores</h1>
      <p className={styles.subtitle}>Discover your local coffee shops</p>
      <button className={styles.button}>{props.buttonText}</button>
    </div>
  );
}

export default Banner;
