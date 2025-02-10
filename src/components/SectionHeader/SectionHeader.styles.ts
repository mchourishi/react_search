import styled from "styled-components";
import { HeaderContainerProps } from "../../types";

// Prevent the `isExpanded`, `isHovered`, and `isActive` props from being forwarded to the DOM element
export const HeaderContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isExpanded", "isHovered", "isActive"].includes(prop),
})<HeaderContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  padding: 0px 8px 0px 16px;
  border: 1px solid #e4e5e8;
  background-color: ${({ isActive, isHovered }) =>
    isActive ? "#e6ecef" : isHovered ? "#f2f5f7" : "#ffffff"};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #5a6d80;
`;

export const ChevronIcon = styled.img`
  width: 20px;
  height: 20px;
`;
