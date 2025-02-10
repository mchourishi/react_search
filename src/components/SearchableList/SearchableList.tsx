import React, { useState } from "react";
import { SearchableListWithHeaderProps } from "../../types";
import { Container, ContentContainer } from "./SearchableList.styles";
import SearchField from "../SearchField/SearchField";
import Section from "../Section/Section";
import { defaultItems } from "./contactsData";
import SectionHeader from "../SectionHeader/SectionHeader";

const SearchableList: React.FC<SearchableListWithHeaderProps> = ({
  items = defaultItems,
  initialExpandedSections = { attended: true, absent: true }, // Allow external control
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState(
    initialExpandedSections
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  // First filter by search query if exists
  const filteredItems = searchQuery
    ? items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery) ||
          (item.email?.toLowerCase() || "").includes(searchQuery)
      )
    : items;
  const attendedItems = filteredItems.filter(
    (item) => item.status === "attended"
  );
  const absentItems = filteredItems.filter((item) => item.status === "absent");

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Container>
      <ContentContainer>
        <SearchField
          onSearch={handleSearch}
          placeholder="Search"
          isNested={true}
        />
        <SectionHeader
          title="Attended"
          isExpanded={expandedSections.attended}
          onToggle={() => toggleSection("attended")}
        />
        {expandedSections.attended && <Section items={attendedItems} />}
        <SectionHeader
          title="Absent"
          isExpanded={expandedSections.absent}
          onToggle={() => toggleSection("absent")}
        />
        {expandedSections.absent && <Section items={absentItems} />}
      </ContentContainer>
    </Container>
  );
};

export default SearchableList;
