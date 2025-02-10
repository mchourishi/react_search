export interface SearchFieldProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  initialValue?: string;
  isNested?: boolean;
}

export interface ContactListItemProps {
  name: string;
  email?: string;
  thumbnail?: string;
  isNested?: boolean;
  onClick?: () => void;
}

export interface SectionHeaderProps {
  title?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export interface ListItem {
  name: string;
  email?: string;
  thumbnail?: string;
  status: "attended" | "absent";
}

export interface SectionProps {
  items: ListItem[];
  isExpanded?: boolean;
}

export interface SearchableListWithHeaderProps {
  items?: ListItem[];
  initialExpandedSections?: { [key: string]: boolean }; // Allow indexing with strings
}

export interface HeaderContainerProps {
  isExpanded: boolean;
  isHovered: boolean;
  isActive: boolean;
}
