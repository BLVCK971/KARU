import "./Card.css";

interface Product {
  name: string;
  id: string;
  imgURL: string;
}

interface CardProps {
  product: Product;
  onClick: () => void;
}

export default function Card({ product, onClick} : CardProps,) {
  if ( ! product ) {
		return null;
	}

  const { name, id, imgURL } = product;

  console.log("src/media/products/"+imgURL);
  return (
    <>
      <div class="ProductCard" onClick={ onClick }>
        <img class="ArticleImage" alt={ name } src={ "src/media/products/"+imgURL }></img>
        <div class="ArticleTitle">{ name }</div>
      </div>
    </>
  );
}
