import { Route, Routes, useNavigate } from "react-router-dom";

import { SlideWrapper } from "../../packages";
import { Week1 } from "./week1";

import { footerBtnKeys } from "../../utils/constants";
import { Week2 } from "./week2";
import { useState } from "react";

function Dashboard() {
  const [slide, setSlide] = useState(1);

  const navigate = useNavigate();

  function onClickHandler(clickedItem) {
    if (clickedItem === footerBtnKeys.next) {
      setSlide(slide + 1);
      navigate(`/${slide}`);
    } else if (clickedItem === footerBtnKeys.previous) {
      if (slide === 1) {
        setSlide(1);
        navigate("/");
      } else {
        // setSlide(slide - 1);
        // navigate(`/${slide}`);
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
