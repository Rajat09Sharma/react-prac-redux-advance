import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  { id: "p1", title: "Test 2", price: 6, description: "This is a first product - amazing!" },
  { id: "p2", title: "Test 2", price: 14, description: "This is a second product - amazing!" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(item => <ProductItem key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
