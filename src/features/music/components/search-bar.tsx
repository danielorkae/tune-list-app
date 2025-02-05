import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";
import "./search-bar.scss";

export function SearchBar() {
  return (
    <InputGroup className="search-bar">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="#fcfcff" />
      </InputLeftElement>

      <Input
        type="search"
        placeholder="Buscar"
        _placeholder={{ color: "#fcfcff" }}
        focusBorderColor="#3c3abe"
        color={"#2d2e37"}
      />
    </InputGroup>
  );
}
