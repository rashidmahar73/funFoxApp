import { ArrowIcon, LeftFooterIcon, RightFooterIcon } from "../../icons";
import { RenderIcon } from "../../icons/renderIcon";

import "./styles.css";

function Footer({ onClickHandler, currentSlide }) {
  return (
    <div className="footerParent">
      <LeftFooterIcon />
      <div className="footerChild">
        <div onClick={() => onClickHandler("previous")} className="slideBtns">
          {RenderIcon("previous")}
        </div>
        <div
          onClick={() => onClickHandler("pageNumber")}
          className="pageNumberClass"
        >
          <span className="secondChild">{currentSlide}</span>{" "}
          <div className="thirdChild">
            <span className="arrowIcon">
              <ArrowIcon />
            </span>
          </div>
        </div>
        <div onClick={() => onClickHandler("next")} className="slideBtns">
          {RenderIcon("next")}
        </div>
      </div>
      <RightFooterIcon />
    </div>
  );
}

export { Footer };
