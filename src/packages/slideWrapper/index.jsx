import { Footer } from "../footer";
import { SideLayer } from "../sideLayer";

import { rightOddItems, rightEvenItems, leftItems } from "./helpers";

import { Logo, Week1Icon } from "../../icons";

import "./styles.css";

function SlideWrapper({ children, onClickHandler, currentSlide }) {
  return (
    <>
      <div className="parent">
        <Header />
        <div className="child">
          <div style={{ display: "flex" }}>{children}</div>
        </div>
        <Footer onClickHandler={onClickHandler} currentSlide={currentSlide} />
      </div>
    </>
  );
}

function Header() {
  return (
    <div className="icons">
      <Logo />
      <Week1Icon />
    </div>
  );
}

function Container({ children, isEvenSlide }) {
  const modifiedRightSlide = isEvenSlide ? rightEvenItems : rightOddItems;

  return (
    <>
      <SideLayer items={leftItems} direction={1} />
      <div className="content">{children}</div>
      <SideLayer items={modifiedRightSlide} direction={2} />
    </>
  );
}

SlideWrapper.Container = Container;

export { SlideWrapper };
