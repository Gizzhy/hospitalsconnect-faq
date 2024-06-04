import styles from "./styles/FaqBody.module.scss";
import faqImage from "./images/FAQs-amico 1.svg";
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { faq } from "../../data/data";

const FaqBody = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={styles.faqBody}>
        <div className={styles.faqBody1}>
          <div className={styles.faq}>
            <h1 className={styles.faqHeader}>FAQs & Answers.</h1>
            <p className={styles.faqContent}>
              You have Questions
              <br /> and we have Answers
            </p>
            <div>
              {faq.map((details, index) => (
                <div key={index} className={styles.accordionContainer}>
                  <div className={styles.question}>
                    <p className={styles.questionText}>{details.question}</p>
                    {activeTab === details.id ? (
                      <IoIosArrowDropup
                        color="white"
                        size={25}
                        cursor={"pointer"}
                        onClick={() => setActiveTab(null)}
                      />
                    ) : (
                      <IoIosArrowDropdown
                        color="white"
                        onClick={() => setActiveTab(index)}
                        size={22}
                        cursor={"pointer"}
                      />
                    )}
                  </div>
                  {activeTab === details.id && (
                    <div className={styles.answer}> {details.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.faqBody2}>
          <img src={faqImage} alt="FAQ" className={styles.faqImg} />
        </div>
      </div>
    </>
  );
};

export default FaqBody;
