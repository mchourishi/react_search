import React from "react";
import { SectionProps } from "../../types";
import { ItemsContainer, SectionContainer } from "./Section.styles";
import ContactListItem from "../ContactListItem/ContactListItem";

const Section: React.FC<SectionProps> = ({ items, isExpanded = true }) => {
  if (!isExpanded) return null;
  return (
    <SectionContainer>
      <ItemsContainer>
        {items.map((item, index) => (
          <ContactListItem
            key={index}
            name={item.name}
            email={item.email}
            thumbnail={item.thumbnail}
            isNested={true}
          />
        ))}
      </ItemsContainer>
    </SectionContainer>
  );
};

export default Section;
