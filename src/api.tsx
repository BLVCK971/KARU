const BASE_URL = 'data/';
import productsData from './data/productsData.json';

interface Cache {
    [key: string]: any;
}
const cache : Cache  = {};

const get = async ( endpoint: string ) => {
	if ( ! cache[ endpoint ] ) {
		console.log(await fetch( BASE_URL + endpoint ));
        
        // récupérer les données sur une api
		const data = await fetch( BASE_URL + endpoint ).then( ( res ) => res.json() );

		cache[ endpoint ] = data;
	}

	return cache[ endpoint ];
};

// Fetch all products.
// export const fetchProducts = () => {
// 	return importjson("ProductsData.json");
// };

// Fetch all products.
export const fetchProducts = () => {
	return productsData;
  };
  

// Fetch specific Product data.
export const fetchProductData = ( productId : string) => {
	// return get( `Product/${ productId }` );
	return productsData.find((product) => product.id === productId.toString());
};