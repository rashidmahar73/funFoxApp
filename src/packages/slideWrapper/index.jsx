import { Footer } from "../footer";
import { SideLayer } from "../sideLayer";

import { leftItems, rightItems } from "./helpers";

import { Logo, Week1Icon } from "../../icons";

import "./styles.css";

function SlideWrapper({ children, onClickHandler }) {
  return (
    <>
      <div className="parent">
        <Header />
        <div className="child">
          <div style={{ display: "flex" }}>{children}</div>
        </div>
        <Footer onClickHandler={onClickHandler} />
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

function Container({ children }) {
  return (
    <>
      <SideLayer items={leftItems} direction={1} />
      <div className="content">{children}</div>
      <SideLayer items={rightItems} direction={2} />
    </>
  );
}

SlideWrapper.Container = Container;

export { SlideWrapper };
