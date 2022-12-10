import styled from "styled-components";
import background from "../assets/pinkbrain.png";
import search from "../assets/search.svg";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${background}) no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input::placeholder {
    color: #c9c5ec;
  }
`;

export const MainSearchWrapper = styled(SearchWrapper)`
  margin: 20rem auto;

  input::placeholder {
    color: #7e72d5;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  align-items: center;
  width: 35em;
`;

export const Suggest = styled.button`
  width: fit-content;
  height: fit-content;
  box-sizing: content-box;

  background: rgba(126, 114, 213, 0.7);
  backdrop-filter: blur(12px);
  border: none;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4em 0.6em;
  margin-right: 1em;

  font-family: "Saira";
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #ffffff;

  cursor: pointer;
  transition: 0.3s;

  :hover {
    padding: 0.5em 0.6em;
    margin-right: 0.6em;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const SearchbarWrapper = styled.div`
  position: relative;
  padding: 0px;
`;

export const Search = styled.input`
  box-sizing: border-box;
  width: 650px;
  height: 60px;
  margin-top: 15px;
  margin-bottom: 32px;
  padding: 10px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.9) 69.79%
  );
  border: none;
  border-radius: 40px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

  font-family: "Saira";
  font-size: 18px;
  font-weight: 600;
  padding-left: 30px;
  color: #333333;

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: transparent;
`;

export const SearchIcon = styled.img.attrs({
  src: search,
  alt: "search",
})`
  width: 25px;
  height: 25px;
  background-color: transparent;
`;

export const SearchPageLayout = styled.div`
  display: flex;
  width: 100%;
  margin-top: 67px;
`;

export const SearchLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 51px;
`;

export const SearchResultBox = styled.div`
  width: 931px;

  background: #ffffff;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  padding: 35px 50px;
  position: relative;

  h3 {
    font-family: "Saira";
    font-weight: 600;
    font-size: 18px;
    color: #333333;
  }

  p {
    font-family: "Saira";
    font-weight: 400;
    font-size: 14px;
    color: #555555;
  }
`;

export const SearchResultSort = styled.div`
  box-sizing: border-box;
  width: 8em;
  height: 2em;

  position: absolute;
  right: 3.5em;
  top: 2.5em;

  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid rgba(153, 153, 153, 0.5);
  border-radius: 10px;

  span {
    font-family: "Saira";
    font-weight: 400;
    font-size: 14px;
    color: #555555;

    padding-left: 1.2em;
  }
`;

export const Button = styled.button`
  padding: 0.2em;

  position: absolute;
  right: 0.8em;
  top: 0;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchResults = styled.div``;

export const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 0.5px rgba(128, 128, 128, 0.652);
  border-radius: 10px;

  padding: 0.5em 1em;
  margin: 0.8em 0.2em;

  p {
    font-family: "Saira";
    font-weight: 400;
    font-size: 16px;
    color: #333333;
    margin: 0px;
  }

  button {
    border: none;
    background-color: white;
    &:active {
      border: none;
    }
  }
`;
