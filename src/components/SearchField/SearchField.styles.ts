import styled from "styled-components";

export const SearchFieldContainer = styled.div<{ $isNested?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 416px;
  min-width: 280px;
  gap: 4px;
  background-color: #ffffff;
  overflow: hidden;
  border: ${({ $isNested }) => (!$isNested ? "1px solid" : "none")};
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  gap: 8px;
  padding: 8px 16px;
  background-color: #ffffff;
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #20374b;
  background: transparent;

  &::placeholder {
    color: #8e9aa5;
  }

  &:focus {
    outline: none;
  }
`;
