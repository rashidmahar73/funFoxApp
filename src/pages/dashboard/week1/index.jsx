import {
  CharactersPointIcon,
  ConflictIcon,
  GirlWritingIcon,
  PlotPointIcon,
  ResolutionIcon,
  SettingPointIcon,
  listItemBg,
} from "../../../icons";

import "./styles.css";

function Week1() {
  return (
    <div>
      <div className="headingParent">
        <h1 className="heading">Elements of Story Writing</h1>
      </div>
      <h2 className="subHeading">
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey? Over the next week, we will be practicing the different
        elements of story writing. Our aim is to make stories more interesting
        and exciting.
      </h2>
      <div className="keyParentDiv">
        <h3 className="keyElements">
          There are <span style={{ fontWeight: "700" }}>five</span> elements
          which make the foundation for story <br /> writing. An element is an
          essential part of something and <br /> every fiction story has the
          same key elements:
        </h3>
        <div className="girlWritingIcon">
          <GirlWritingIcon />
        </div>
      </div>

      <div className="listItemIcons">
        <SettingPointIcon />
        <CharactersPointIcon />
        <PlotPointIcon />
        <ConflictIcon />
        <ResolutionIcon />
      </div>
      <h4 className="familiar">
        You must be familiar with some of these. If not, do not worry! we will
        cover all these elements as we go along.
      </h4>
      <div
        className="listItemParent"
        style={{
          backgroundImage: `url(${listItemBg})`,
        }}
      >
        <ul className="listUlClass">
          <li>
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
          </li>
          <li className="list2ndLi">
            The setting is an important element of every fiction story.
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Week1 };
