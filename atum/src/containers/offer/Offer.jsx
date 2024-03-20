import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./offer.scss";

const Offer = () => {
  return (
    <section id="offer">
      <div className="container">
        <div className="left-side">
          <div className="image-container">
            <img src="images/uniejow21-9.jpeg" alt="" />
          </div>
        </div>
        <div className="right-side">
          <span className="title">Ofererujemy</span>
          <span className="question">Co możemy Tobie zaproponować?</span>
          <span className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
            voluptate <br /> sapiente nisi tempore dolore, quis incidunt
            possimus aspernatur eius.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Offer;
