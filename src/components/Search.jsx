import styled from "styled-components"

const SearchContainer = styled.div`

`
const Input = styled.input`
border: none;
outline: none;
border-radius: 5px;
padding: 10px;

`

const Search = ({setQuery}) => {
  
  return (
    <SearchContainer>
      <Input 
      type="text" 
      placeholder="Search Movies..." 
      onChange={(e) => setQuery(e.target.value) } />
    </SearchContainer>
  )
}

export default Search





