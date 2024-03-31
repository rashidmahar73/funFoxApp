import { useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import { SlideWrapper } from "../../packages";

import { ModuleHandler } from "./helpers";

import { footerBtnKeys } from "../../utils/constants";

function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const navigate = useNavigate();

  function onClickHandler(clickedItem) {
    if (clickedItem === footerBtnKeys.next) {
      if (currentSlide < 2) {
        setCurrentSlide(currentSlide + 1);
        navigate(`/${currentSlide + 1}`);
      }
    } else if (clickedItem === footerBtnKeys.previous) {
      if (currentSlide > 2) {
        setCurrentSlide(currentSlide - 1);
        navigate(`/${currentSlide - 1}`);
      } else {
        navigate("/");
        setCurrentSlide(1);
      }
    }
  }

  const isEven = currentSlide % 2 === 0;

  const conditionalRoute = currentSlide < 2 ? "/" : `/${currentSlide}`;
  return (
    <SlideWrapper onClickHandler={onClickHandler} currentSlide={currentSlide}>
      <SlideWrapper.Container isEvenSlide={isEven}>
        <Routes>
          <Route
            path={conditionalRoute}
            element={<ModuleHandler currentSlide={currentSlide} />}
          />
        </Routes>
      </SlideWrapper.Container>
    </SlideWrapper>
  );
}

export { Dashboard };
