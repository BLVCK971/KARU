import { createSignal, createEffect, For } from "solid-js";
// import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import "./ProductsView.css";
import Card from "../Card/Card";
import useProducts from "~/hooks/useProducts";
import { createStore } from "solid-js/store";

export default function ProductsView() {
	const [products, setProducts] = createStore<Product[]>([]);
	const { data, isLoading } = useProducts();

	createEffect( () => {
		setProducts( data );
	});

  return (
    <div class="product-view">
			{/* {products.map((product : Product) => {
					return (
						<Card product={ product } onClick={() => console.log("Clicked:", product.id)} />
						// <Card product={ product } key={ product.id } onClick={ () => setCurrentProductId( product.id ) } />
					);
				} )} */}

			<For each={ products } fallback={<Loader />}>
				{(product) => <Card product={ product } onClick={() => console.log("Clicked:", product.id)} />}
			</For>
			
		</div>
  );
}
