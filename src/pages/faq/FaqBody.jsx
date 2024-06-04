import styles from "./styles/FaqBody.module.scss";
import faqImage from "./images/FAQs-amico 1.svg";

const FaqBody = () => {
  return (
    <>
      <div className={styles.faqBody}>
        <div className={styles.faqBody1}></div>
        <div className={styles.faqBody2}>
          <img src={faqImage} alt="FAQ" className={styles.faqImg} />
        </div>
      </div>
    </>
  );
};

export default FaqBody;
