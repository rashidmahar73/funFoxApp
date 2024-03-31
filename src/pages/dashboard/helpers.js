import { Week1 } from "./week1";
import { Week2 } from "./week2";

function ModuleHandler({ currentSlide }) {
  if (currentSlide < 2) {
    return <Week1 />;
  } else if (currentSlide === 2) {
    return <Week2 />;
  } else {
    return null;
  }
}

export { ModuleHandler };
