import styled from "styled-components";
import { font } from "../../Data"

const Modal = styled.div`
  height: 90vh;
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
      case "full":
        return "90%";
      case "lg":
        return "800px";
      default:
        return "480px";
    }
  }};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    overflow-y: auto;
    height: inherit;
    /* margin-top: 228px; */
    z-index: 1050;
    width: 100%;
    background-color: #fefefe;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    ::-webkit-scrollbar {
  width: 5px;
  background: #ffffff0;
}
::-webkit-scrollbar-thumb {
    background: #555;
}


    .box-content {
      /* padding: 24px; */
      width: 100%;
      height: auto;
    }
    .box-header {
      /* height: 48px; */
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* margin: 20px 0 -20px 0px; */
      /* border-bottom: 1px solid #c7c7c7; */
      .box-title {
        font-family: ${font.main.family};
        font-size: 40px;
        font-weight: 800;
        margin: 0 0 0 0;
        margin-left: auto;
        margin-right: auto;
        /* margin-bottom: -38px; */
      }
      .x-close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: black;
        cursor: pointer;
        
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .box-body {
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
  }
`;

export default Modal;
