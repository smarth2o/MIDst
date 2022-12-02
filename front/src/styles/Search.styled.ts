import styled from "styled-components";
import background from "../assets/pinkbrain.png";
import search from "../assets/search.svg";

export const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center;
  width: 100%;
  min-height: 100vh;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Suggestions = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
`;

export const Suggest = styled.div`
  width: fit-content;
  height: 25px;

  background: rgba(126, 114, 213, 0.7);
  backdrop-filter: blur(12px);

  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3px 20px;
  margin-right: 10px;

  p {
    font-family: "Saira";
    font-weight: 500;
    font-size: 14px;
    text-align: center;

    color: #ffffff;
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
  border: 1px solid rgba(85, 85, 85, 0.2);
  border-radius: 40px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

  font-family: "Saira";
  font-size: 18px;
  font-weight: 600;
  padding-left: 30px;
  color: #7e72d5;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #7e72d5;
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

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 103px;
  margin-left: 85px;
  margin-right: 57px;

  h2 {
    // font-family: "Saira";
    font-weight: 600;
    font-size: 18px;

    color: #333333;

    padding-left: 20px;
  }
`;

export const FilterBox = styled.div`
  width: 228px;

  background: #ffffff;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  padding: 10px 25px;
  margin-bottom: 20px;

  flex: display;
  flex-direction: column;
  align-items: center;
  position: relative;

  h3 {
    // font-family: "Saira";
    font-weight: 600;
    font-size: 16px;

    color: #999999;
  }

  ul {
    list-style-type: none;
  }

  img {
    position: absolute;
    right: 30px;
    top: 23px;
  }
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
    // font-family: "Saira";
    font-weight: 600;
    font-size: 18px;

    color: #333333;
  }

  p {
    // font-family: "Saira";
    font-weight: 400;
    font-size: 14px;

    color: #555555;
  }
`;

export const SearchResultSort = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 136px;
  height: 31px;
  right: 50px;
  top: 35px;

  background: #ffffff;
  border: 1px solid rgba(153, 153, 153, 0.5);
  border-radius: 10px;
`;

export const SearchResults = styled.div``;

export const SearchResult = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 0.5px rgba(128, 128, 128, 0.652);
  border-radius: 10px;

  padding: 12px 18px;
  margin: 15px 5px;

  p {
    // font-family: "Saira";
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
