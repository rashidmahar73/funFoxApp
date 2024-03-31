import { Route, Routes, useNavigate } from "react-router-dom";

import { SlideWrapper } from "../../packages";
import { Week1 } from "./week1";
import { Week2 } from "./week2";

import { footerBtnKeys } from "../../utils/constants";

function Dashboard() {
  const navigate = useNavigate();
  let intialValue = 1;
  function onClickHandler(clickedItem) {
    if (clickedItem === footerBtnKeys.next) {
      navigate(`/${intialValue + 1}`);
    } else if (clickedItem === footerBtnKeys.previous) {
      if (intialValue === 1) {
        navigate("/");
      }
    }
  }
  return (
    <SlideWrapper onClickHandler={onClickHandler}>
      <SlideWrapper.Container>
        <Routes>
          <Route path="/" element={<Week1 />} />
          <Route path="/2" element={<Week2 />} />
        </Routes>
      </SlideWrapper.Container>
    </SlideWrapper>
  );
}

export { Dashboard };
