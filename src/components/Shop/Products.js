import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const JSON_DATA = [
  {
    id: "1",
    title: "BMW GT",
    description: "Luxury Cars",
    price: 8000000,
  },
  {
    id: "2",
    title: "Audi A8",
    description: "Luxury Cars",
    price: 15000000,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {JSON_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
