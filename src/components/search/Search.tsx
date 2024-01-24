import React from "react";
import { SearchWrapper } from "./styled";
import iconSearch from "../../assets/icon-search.svg";
import { useDebounce } from "../../hook/useDebounce";
type searchProps = {
  handlerChange: (q: string) => void;
};

const Search: React.FC<searchProps> = ({ handlerChange }) => {
  const [value, setValue] = React.useState<string>("");
  const debouncedValue = useDebounce<string>(value, 750);

  const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    handlerChange(value);
  }, [debouncedValue]);

  return (
    <SearchWrapper>
      <img src={iconSearch} alt="icon searh" loading="lazy" />
      <input
        onChange={changeSearchValue}
        value={value}
        type="text"
        name="search"
      />
    </SearchWrapper>
  );
};

export default Search;
