import { Title } from "solid-start";
import Categories from "~/components/Categories/Categories";
import Header from "~/components/Header/Header";
import ProductsView from "~/components/ProductsView/ProductsView";

export default function Home() {
  return (
    <main>
      <div class="content">
      <Header/>
      <Categories/>
      <ProductsView/>
      </div>

    </main>
  );
}
