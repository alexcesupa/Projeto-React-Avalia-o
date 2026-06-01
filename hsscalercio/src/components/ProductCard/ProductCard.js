import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <ul>
        {product.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProductCard;
