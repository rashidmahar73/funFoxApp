import { leftSideLayer, rightSideLayer } from "../../icons";
import { RenderIcon } from "../../icons/renderIcon";
import "./styles.css";

function SideLayer({ items, direction }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: direction===1?"87%":"96%",
        position: "relative",
        justifyContent: "space-between",
        marginTop: direction===1?"80px":"0px",
        marginBottom: direction===1?"20px":"50px",
        backgroundImage: `url(${
          direction === 1 ? leftSideLayer : rightSideLayer
        })`,
        backgroundSize:"cover",
        backgroundPosition:"topLeft",
      }}
      className="sideLayer"
    >
      {items?.map(({ key }) => {
        return <>{RenderIcon(key)}</>;
      })}
    </div>
  );
}

export { SideLayer };
