import { createEffect, createMemo, createSignal } from "solid-js";
import { fetchProductData, fetchProducts } from "../api";

export default function useProducts() {
  const [products, setProducts] = createSignal<Product[]>([]);
  const [isLoading, setIsLoading] = createSignal(false);


  // // Fetch products data.
  // function fetchData() {
    setIsLoading(true);
    setProducts([]);

    // Get all Products.
    const productsData = fetchProducts();
    const data = new Map<number, Product>();


        productsData.map(async ({ id}  ) => {
          const productDetails =  fetchProductData(id);

          if (productDetails && productDetails.id) {
            data.set(parseInt(productDetails.id), productDetails);
          }
        })
      setProducts(Array.from(data.values()));
      setIsLoading(false);
    // };


  return {
    data: products(),
    isLoading
  };
}





// export default function useProducts() {
//   const [products, setProducts] = createSignal<any[]>([]);
//   const [isLoading, setIsLoading] = createSignal(false);

//   // const category = createMemo(() => {
//   //   return categories.find((cat) => cat.id === categoryId);
//   // });

//   // Fetch products data by category.
//   async function fetchData() {
//     setIsLoading(true);
//     setProducts([]);

//     // Get all Products.
//     fetchProducts().then(async (response: { results: ProductResult[] }) => {
//       const data: any[] = [];

//       // Get data for each specific Product.
//       await Promise.all(
//         response.results.map(async ({ name }) => {
//           const product = await fetchProductData(name);

//           data[product.id] = product;
//         })
//       );

//       setProducts(data);
//       setIsLoading(false);
//     });
//   }

//   // Refetch on category change.
//   // createEffect(() => {
//   //   if (categoryId) {
//   //     fetchData();
//   //   }
//   // });

//   return {
//     data: products(),
//     refetch: fetchData(),
//     isLoading,
//   };
// }