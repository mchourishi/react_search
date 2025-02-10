import React, { useState } from "react";
import { SectionHeaderProps } from "../../types";
import { Title, HeaderContainer } from "./SectionHeader.styles";
import { ChevronDown, ChevronRight } from "lucide-react";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title = "Absent",
  isExpanded = false,
  onToggle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const getChevronIcon = () => {
    if (isExpanded) {
      if (isActive) return <ChevronDown className="text-blue-500" />;
      if (isHovered) return <ChevronDown className="text-gray-500" />;
      return <ChevronDown data-testid="chevron-icon" className="text-black" />;
    } else {
      if (isActive) return <ChevronRight className="text-blue-500" />;
      if (isHovered) return <ChevronRight className="text-gray-500" />;
      return <ChevronRight data-testid="chevron-icon" className="text-black" />;
    }
  };

  return (
    <HeaderContainer
      isExpanded={isExpanded}
      isHovered={isHovered}
      isActive={isActive}
      onClick={onToggle} // No internal state change, just call parent function
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <Title>{title}</Title>
      {getChevronIcon()}
    </HeaderContainer>
  );
};

export default SectionHeader;
