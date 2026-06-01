import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { productLines } from '../../data/siteData';
import styles from './Products.module.css';

function Products({ onNavigate }) {
  return (
    <section className={styles.products}>
      <SectionTitle
        eyebrow="Produtos"
        title="Linhas para empresas, obras, servicos e atendimento."
        text="A catalogacao abaixo organiza as principais necessidades de quem compra uniforme: protecao, apresentacao e personalizacao."
      />

      <div className={styles.grid}>
        {productLines.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

      <div className={styles.cta}>
        <h3>Precisa de uma composicao diferente?</h3>
        <p>Envie quantidade, segmento e prazo desejado para receber uma proposta personalizada.</p>
        <button type="button" onClick={() => onNavigate('orcamento')}>Montar pedido</button>
      </div>
    </section>
  );
}

export default Products;
