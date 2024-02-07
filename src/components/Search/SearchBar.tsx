import React, { useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { SearchContainer, SearchInput, SearchIcon } from '../../styles/components/searchBarStyle';

interface SearchBarProps {
  onSearch: (term: string) => void;
  setDebouncedSearch: (term: string) => void;
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchTerm, setDebouncedSearch }) => {
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  useEffect(() => {
    setDebouncedSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setDebouncedSearch]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder=""
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
      <SearchIcon className="material-icons">search</SearchIcon>
    </SearchContainer>
  );
};
export default SearchBar;
