import React, { useState } from "react";
import { SearchFieldProps } from "../../types";
import { Search } from "lucide-react";
import {
  SearchFieldContainer,
  FieldRow,
  SearchIcon,
  Input,
} from "./SearchField.styles";

const SearchField: React.FC<SearchFieldProps> = ({
  onSearch,
  placeholder = "Search",
  initialValue = "",
  isNested = false,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };
  return (
    <SearchFieldContainer $isNested={isNested}>
      <FieldRow>
        <SearchIcon>
          <Search size={10} />
        </SearchIcon>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          data-testid="search-input"
        />
      </FieldRow>
    </SearchFieldContainer>
  );
};

export default SearchField;
