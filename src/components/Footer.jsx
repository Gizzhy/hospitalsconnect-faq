import styles from "./styles/Footer.module.scss";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <img
            src={logo}
            className={styles.footerImg}
            alt="hospitals  connect"
          />
        </div>
        <div className={styles.footer2}>
          <p className={styles.footerWords}>
            Address: 15a, Idejo street, VI, Lagos
          </p>
          <p className={styles.footerWords}>Phone: 09017085343</p>
          <p className={styles.footerWords}>
            Email: customerservice@hospitalsconect.co
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
