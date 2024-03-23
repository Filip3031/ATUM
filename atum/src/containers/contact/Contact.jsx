import React from "react";
import "./contact.scss";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="left-side">
          <div className="description-container">
            <span className="title">Wycena</span>
            <span className="title2">Zadzwoń do nas</span>
            <span className="description">
              Zadzwoń do nas i zapytaj o wycenę, abyśmy mogli lepiej zrozumieć
              Twoje potrzeby i przedstawić Ci dokładną ofertę. Jesteśmy gotowi
              pomóc i odpowiedzieć na wszystkie Twoje pytania dotyczące naszych
              usług i cen.
            </span>
          </div>
          <div className="tables">
            <div className="tables-row">
              <div className="table">
                <div className="table-container">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="detail">
                    <span> Zadzwoń do nas</span>
                    <span>+ 790 319 878</span>
                  </div>
                </div>
                <div className="button-container">
                  <a href="tel:+48790319878">
                    <div className="button">
                      <span>Zadzwoń teraz</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="tables-row">
              <div className="table">
                <div className="table-container">
                  <div className="icon">
                    <IoIosMail size={25} />
                  </div>
                  <div className="detail">
                    <span>E-mail</span>
                    <span>atum.namioty@gmail.com</span>
                  </div>
                </div>
                <div className="button-container">
                  <a href="mailto: atum.namioty@gmail.com">
                    <div className="button">
                      <span>Napisz teraz</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="image-container">
            <img src="images/biblioteka1.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
