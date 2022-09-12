import Link from "next/link";
import stores from "../../db/database.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  props: {
    coffeeStore: stores.find((store) => {
      return store.id === params.id;
    });
  }
}
export function getStaticPaths() {
  return {
    path: [{ params: { id: 1 } }, { params: { id: 2 } }],
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
