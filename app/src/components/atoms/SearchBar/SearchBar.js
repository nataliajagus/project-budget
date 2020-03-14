import styled from 'styled-components'

const SearchBar = styled.input`
    height: 50px;
    width: 100%;
    background: #fff;
    box-shadow: 1px 1px 12px #0000000d;
    border: 0;
    border-radius: 50px;
   /* max-width: 850px; */
    
    font-size: 1rem;
    padding-left: 20px;
    outline: none;

    &::placeholder {
        color: #BFBFBF;
    }

    @media (min-width: 636px) {
       width: 90%;
    }

    /* @media (min-width: 946px) {
        max-width: 890px;
    }  */

    display: block;
    width: 80%;
`;

export default SearchBar;