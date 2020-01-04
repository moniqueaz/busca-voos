import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const PopUp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  display: none;

  .pop-up {
    &__title {
      display: block;
    }
    &__content {
      display: block;
    }
    &__overlay {
      display: none;
    }
  }
  svg {
    color: #159177;
  }
`;
const PopUpComponet = ({ children, title }) => {
  function closePopUp(e) {
    console.log(e.target);
  }

  return (
    <PopUp>
      <button onClick={closePopUp}>
        <FaTimes />
      </button>
      {title && <span className="pop-up__title">{title}</span>}
      <div className="pop-up__content">{children}</div>
      <div className="pop-up__overlay"></div>
    </PopUp>
  );
};

export default PopUpComponet;
