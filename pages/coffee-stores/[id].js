import Link from "next/link";
import coffeeStores from "../../db/database.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  props: {
    coffeeStore: coffeeStores.find((store) => {
      return store.id === params.id;
    });
  }
}
export function getStaticPaths() {
  path: [{ params: { id: 1 } }, { params: { id: 2 } }];
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
