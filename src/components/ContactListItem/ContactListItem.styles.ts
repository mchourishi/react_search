import styled from "styled-components";

export const ContactListContainer = styled.div<{ $isNested?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  width: 100%;
  background-color: #ffffff;
  border: ${({ $isNested }) => (!$isNested ? "1px solid" : "none")};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f2f5f7;
  }

  &:active {
    background-color: #e6ecef;
  }
`;

export const ThumbnailContainer = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content: center;

  .initials-fallback {
    color: #20374b,
    font-size: 16px;
    font-weight: 500;
    align: center;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #20374b;
`;

export const Email = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #5a6d80;
`;
