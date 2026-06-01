import { contact } from '../../data/siteData';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>HS Uniformes</strong>
        <p>Fardamentos, equipamentos e acessorios para equipes profissionais.</p>
      </div>
      <address>
        {contact.address}
        <br />
        {contact.phone} - {contact.email}
      </address>
    </footer>
  );
}

export default Footer;
