import styled, { keyframes, css } from 'styled-components';

import { device, colors, font } from '../../../style/variaveis';

export const HeaderMiddleContainer = styled.form.attrs(props => ({}))`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px;
  border-bottom: 2px solid ${colors.gray};
  width: 100%;
  position: absolute;
  left: 0;
  top: 130px;
  background-color: ${colors.white};
  display: block;
  z-index: 1;
    ${props =>
      props.status === 'disabled' &&
      css`
        & {
          display: none;
        }
      `}
    @media ${device.laptop} {
    position: static;
    display: block;
    display: flex;
    border: 1px solid ${colors.grayLight};
    padding: 0;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    background-color: transparent;
    border: 1px solid ${colors.gray};
    width: 100%;
    padding: 10px;
    color: ${colors.primary};
    font-weight: bold;
    margin-bottom: 10px;
    font-family: ${font.family.primary};

    @media ${device.laptop} {
      border: 0;
      margin-bottom: 0;
      padding: 0;
      font-size: ${font.desktop.md};
    }

    @media ${device.laptopL} {
      font-size: ${font.desktop.lg};
    }

    &::placeholder {
      color: ${colors.grayLight};
    }
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    color: ${colors.primary};
    transform: translateY(-50%);
    @media ${device.laptop} {
      width: 25px;
      height: 25px;
    }
  }
`;
export const Filter = styled.button`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  width: 100%;

  @media ${device.laptop} {
    display: none;
  }

  svg {
    color: ${colors.primary};
  }
`;
export const Trip = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  white-space: nowrap;
  padding-right: 5px;
  span {
    font-weight: bold;
    font-size: ${font.mobile.ms};
  }
  svg {
    margin-right: 5px;
  }
`;
export const Dates = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  border: 1px solid ${colors.gray};
  border-top: 0;
  border-bottom: 0;
  flex: 1 1 33.333%;
`;
export const DateT = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: ${font.mobile.sm};
  flex: 1 1 50%;
  white-space: nowrap;
  & + div {
    padding-left: 10px;
  }
  svg {
    margin-right: 5px;
  }
`;
export const Adults = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: ${font.mobile.sm};
  flex: 1 1 25%;
  white-space: nowrap;
  padding-left: 5px;
  svg {
    margin-right: 5px;
  }
`;
export const Submit = styled.div`
  width: 100%;
  height: auto;
  text-align: right;
  /* flex: 0 0 33.333%; */
  /* display: none; */

  @media ${device.laptop} {
    flex: 1 1 16.666%;
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    /* flex: inherit; */
  }
  button {
    background-color: ${colors.primary};
    border-radius: 5px;
    width: 100%;
    padding: 20px 30px;

    @media ${device.laptop} {
      padding: 20px 10px;
      width: auto;
    }

    @media ${device.laptopL} {
      padding: 20px 30px;
    }

    span {
      font-weight: bold;
      color: ${colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${colors.white};
        position: static;
        transform: none;
        margin-right: 5px;
        @media ${device.laptop} {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;
