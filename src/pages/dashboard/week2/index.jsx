import { ClockIcon, HomeIcon } from "../../../icons";
import { RenderIcon } from "../../../icons/renderIcon";
import { subContentItems } from "./helpers";

import "./styles.css";

function Week2() {
  return (
    <div className="week2Parent">
      <h1 className="heading">
        Can you figure out the definition of setting from the following
        examples?
      </h1>
      <h2 className="subHeading">(take a minute to think about this)</h2>
      <div className="subContentTop">
        <div></div>
        {subContentItems?.map(({ text, icon }) => {
          return (
            <div className="subContentParent">
              <div className="subContentChild">{RenderIcon(icon)}</div>
              <span className="description">{text}</span>
            </div>
          );
        })}
      </div>
      <h4 className="question">
        So, what do you think the definition of setting is?
      </h4>
      <div className="questionDetails">
        <span>Any guesses?</span>
        <div className="subContentChild">
          <input type="text" className="answerInput" />
        </div>
        <p>Hint : </p>
        <div>
          <ClockIcon />
        </div>
        <div className="icon">
          <HomeIcon />
        </div>
      </div>
      <div className="keyDiv">
        <h3 className="keyElements">
          Setting is the time <HomeIcon width="34.72" height="34.72" />
          <span> and place </span>
          <ClockIcon width="34.72" height="34.72" />
          <span>
            {" "}
            of a story. It often answers the questions: when? and where{" "}
          </span>
        </h3>
      </div>
      <p className="footerText">
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </div>
  );
}
export { Week2 };
