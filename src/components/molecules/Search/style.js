import styled from 'styled-components';

export const Search = styled.form`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 50px;

  label {
    color: #ccc;
  }
  input {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 3px;
    padding: 5px 10px;
    color: #333;
    text-transform: uppercase;
    flex: 1 1 50%;
    border-radius: 0;

    &::placeholder {
      color: #ccc;
      text-transform: uppercase;
    }
  }

  button {
    height: 100%;
    flex: 1 1 50%;
  }

  .search {
    &__input {
      flex: 1 1 50%;
      position: relative;
      border: 1px solid #ccc;
      svg {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateX(-50%);
        color: #159177;
      }
    }
  }
`;
