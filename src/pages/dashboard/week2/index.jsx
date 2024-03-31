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
        {subContentItems?.map(({ text, icon }) => {
          return (
            <div className="subContentParent">
              <div className="subContentChild">{RenderIcon(icon)}</div>
              <h3 className="description">{text}</h3>
            </div>
          );
        })}
      </div>
      <h4 className="question">
        So, what do you think the definition of setting is?
      </h4>
      <div className="questionDetails">
        <span>Any guesses?</span>
        <input type="text" className="answerInput" />
        <ClockIcon />
        <HomeIcon />
      </div>
      <div className="keyParentDiv">
        <h3 className="keyElements">
          Setting is the time <ClockIcon width="34.72" height="34.72" /> and
          place <HomeIcon width="34.72" height="34.72" /> of a story. It often
          answers the questions: when? and where?
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
