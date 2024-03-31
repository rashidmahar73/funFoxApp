import { LeftFooterIcon, RightFooterIcon } from "../../icons";
import { RenderIcon } from "../../icons/renderIcon";
import { btnItems } from "./helpers";

import "./styles.css";

function Footer({ onClickHandler }) {
  return (
    <div className="footerParent">
      <LeftFooterIcon />
      <div className="footerChild">
        {btnItems?.map(({ text }) => {
          return (
            <button onClick={() => onClickHandler(text)}>
              {RenderIcon(text)}
            </button>
          );
        })}
      </div>
      <RightFooterIcon />
    </div>
  );
}

export { Footer };
