import React, { useState } from "react";
import { ContactListItemProps } from "../../types";
import {
  ContactListContainer,
  Email,
  Name,
  TextContainer,
  Thumbnail,
  ThumbnailContainer,
} from "./ContactListItem.styles";

const ContactListItem: React.FC<ContactListItemProps> = ({
  name = "Jane Doe",
  email,
  thumbnail,
  isNested,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <ContactListContainer $isNested={isNested} onClick={onClick}>
      <ThumbnailContainer>
        {thumbnail && !imageError ? (
          <Thumbnail src={thumbnail} alt={name} />
        ) : (
          <div className="initials-fallback">{initials}</div>
        )}
      </ThumbnailContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </TextContainer>
    </ContactListContainer>
  );
};

export default ContactListItem;
