import React from "react";
import { SearchWrapper } from "./styled";
import iconSearch from "../../assets/icon-search.svg";
import { useDebounce } from "../../hook/useDebounce";
type searchProps = {
  handlerChange: (q: string) => void;
  search: string;
};

const Search: React.FC<searchProps> = ({ handlerChange, search }) => {
  const [value, setValue] = React.useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

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
      {value.length !== 0 && <button onClick={() => setValue("")}>x</button>}
    </SearchWrapper>
  );
};

export default Search;
