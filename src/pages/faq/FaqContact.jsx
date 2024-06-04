import styles from "./styles/FaqContact.module.scss";
import location from "./images/Location.svg";
import call from "./images/Calling.svg";
import mail from "./images/Mail.svg";

const FaqContact = () => {
  return (
    <>
      <div className={styles.faqCon}>
        <div className={styles.faqCon1}>
          <div className={styles.conArea}>
            <div className={styles.conArea1}>
              <img
                src={location}
                className={styles.conAreaImg}
                alt="location"
              />
            </div>
            <div className={styles.conArea2}>
              <p className={styles.conAreaW1}>Visit Us</p>
              <span className={styles.conAreaW2}>
                15a, Idejo street, Victoria Island, Lagos
              </span>
              <br />
              <span className={styles.conAreaW2}>
                Monday - Friday, 9am - 7pm EST
              </span>
            </div>
          </div>
        </div>
        <div className={styles.faqCon2}>
          <div className={styles.conArea}>
            <div className={styles.conArea1}>
              <img src={call} className={styles.conAreaImg} alt="location" />
            </div>
            <div className={styles.conArea2}>
              <p className={styles.conAreaW1}>Call Us 24/7</p>
              <span className={styles.conAreaW2}>08023522749</span>
              <br />
              <span className={styles.conAreaW2}>07010290783</span>
            </div>
          </div>
        </div>
        <div className={styles.faqCon3}>
          <div className={styles.conArea}>
            <div className={styles.conArea1}>
              <img src={mail} className={styles.conAreaImg} alt="location" />
            </div>
            <div className={styles.conArea2}>
              <p className={styles.conAreaW1}>Get in touch</p>
              <span className={styles.conAreaW2}>
                customercare@hospitalsconnect.co
              </span>
              <br />
              <span className={styles.conAreaW2}>info@hospitalsconnect.co</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContact;
