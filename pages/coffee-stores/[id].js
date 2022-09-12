import Link from "next/link";
import stores from "../../db/database.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: stores.find((store) => {
        return store.id === 1;
      }),
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}

function coffeeStores() {
  return (
    <>
      <div>coffee-stores</div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}

export default coffeeStores;
