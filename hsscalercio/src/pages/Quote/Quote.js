import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { contact } from '../../data/siteData';
import styles from './Quote.module.css';

const initialForm = {
  name: '',
  company: '',
  phone: '',
  category: 'EPIs e seguranca',
  quantity: '20',
  message: '',
};

function Quote() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className={styles.quote}>
      <div>
        <SectionTitle
          eyebrow="Orcamento"
          title="Conte sua necessidade para a HS Uniformes."
          text="O formulario simula o envio de uma solicitacao e mostra uma confirmacao na propria pagina."
        />
        <div className={styles.contact}>
          <strong>Contato direto</strong>
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
          <span>{contact.address}</span>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Seu nome" />
        </label>
        <label>
          Empresa
          <input name="company" value={form.company} onChange={handleChange} required placeholder="Nome da empresa" />
        </label>
        <label>
          WhatsApp
          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(00) 00000-0000" />
        </label>
        <label>
          Linha de produto
          <select name="category" value={form.category} onChange={handleChange}>
            <option>EPIs e seguranca</option>
            <option>Profissional urbano</option>
            <option>Personalizados</option>
          </select>
        </label>
        <label>
          Quantidade estimada
          <input name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} />
        </label>
        <label className={styles.full}>
          Detalhes do pedido
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Informe cores, tamanhos, prazo ou tipo de personalizacao."
          />
        </label>
        <button type="submit">Enviar solicitacao</button>
        {sent && (
          <p className={styles.success}>
            Pedido recebido, {form.name}. A equipe retornara pelo WhatsApp informado.
          </p>
        )}
      </form>
    </section>
  );
}

export default Quote;
