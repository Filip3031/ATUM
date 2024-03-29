import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./offer.scss";
import data from "../../utils/Accordion";

const Offer = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggleItem = (uuid) => {
    setExpandedItems((prevExpandedItems) => {
      const isExpanded = prevExpandedItems.includes(uuid);

      if (isExpanded) {
        return prevExpandedItems;
      } else {
        return [uuid];
      }
    });
  };

  return (
    <section id="offer">
      <div className="container">
        <div className="left-side">
          <div className="image-container">
            <img src="images/uniejow21-9.webp" alt="" />
          </div>
        </div>
        <div className="right-side">
          <span className="title">Oferujemy</span>
          <span className="question">Co możemy Tobie zaproponować?</span>
          <span className="description">
            Oferujemy wysokiej jakości namioty, punktualną dostawę i
            profesjonalny montaż oraz bogaty wybór wyposażenia dodatkowego.
            Nasze namioty są idealnym rozwiązaniem nie tylko na profesjonalne
            imprezy, ale także na wyjątkowe uroczystości, takie jak komunie i
            wesela. Zapewniamy niezawodność, elegancję i komfort, aby Twoje
            wydarzenie było wyjątkowe i niezapomniane.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={expandedItems}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${
                  expandedItems.includes(i) ? "expanded" : ""
                }`}
                key={i}
                uuid={i}
                onClick={() => handleToggleItem(i)}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="accordionButton">
                    <div className="icon">{item.icon}</div>
                    <span className="heading">{item.heading}</span>
                    <div className="icon">
                      <MdOutlineArrowDropDown size={15} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="detail">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Offer;
