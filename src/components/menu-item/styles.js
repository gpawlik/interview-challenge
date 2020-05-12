import styled from "styled-components";

export const Container = styled.li`
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 12pt;
`;

export const InfoRow = styled.p`
  margin: 0;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-appearance: none;
  border: 2px solid #000;
  background: #fff;
  font-weight: bold;
  width: 26px;
  height: 26px;
  line-height: 0px;
  border-radius: 100%;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
