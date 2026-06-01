import styles from './Hero.module.css';

function Hero({ onNavigate }) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.kicker}>Uniformes profissionais em Belem</span>
        <h1>Uniformes que deixam sua equipe pronta para trabalhar com seguranca e identidade.</h1>
        <p>
          A HS Uniformes desenvolve solucoes para empresas que precisam de padronizacao,
          resistencia e personalizacao em cada peca.
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={() => onNavigate('orcamento')}>Solicitar orcamento</button>
          <button type="button" onClick={() => onNavigate('produtos')}>Ver produtos</button>
        </div>
      </div>
      <div className={styles.panel} aria-label="Resumo de atendimento">
        <strong>Especialidades</strong>
        <span>EPIs</span>
        <span>Uniformes corporativos</span>
        <span>Personalizacao</span>
        <small>Atendimento em Belem/PA</small>
      </div>
    </section>
  );
}

export default Hero;
