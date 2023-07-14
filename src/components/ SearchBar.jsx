import styled from "styled-components";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";


export default function SearchBar(){
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar..."
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 15px;
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
    border-radius: 10px;
    border: 1px solid #BABABA;
  flex: 1;
  outline: none;
  font-size: 16px;
  padding: 10px 10px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Ccircle cx="11" cy="11" r="8" /%3E%3Cpath d="M21 21l-4.35-4.35" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;

`;
