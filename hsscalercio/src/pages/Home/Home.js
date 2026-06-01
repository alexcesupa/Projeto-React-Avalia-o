import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { advantages, productLines } from '../../data/siteData';
import styles from './Home.module.css';

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <section className={styles.section}>
        <SectionTitle
          eyebrow="Solucoes"
          title="Da linha de seguranca ao uniforme do atendimento."
          text="Um site pensado para apresentar a HS Uniformes como fornecedora objetiva, confiavel e pronta para demandas corporativas."
        />
        <div className={styles.grid}>
          {productLines.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </section>

      <section className={styles.band}>
        <SectionTitle eyebrow="Diferenciais" title="Por que escolher a HS Uniformes?" />
        <div className={styles.advantages}>
          {advantages.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
