import { FilterBox, FilterWrapper } from "../styles/Search.styled";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";

const FilterCard = (): JSX.Element => {
  return (
    <FilterWrapper>
      <h2>Filters</h2>
      <FilterBox>
        <h3>Media</h3>
        <img src={arrowUp} alt="arrowUp" />
        <ul>
          <li>
            <input type="checkbox"></input>Friends
          </li>
          <li>
            <input type="checkbox"></input>Harry Potter
          </li>
        </ul>
      </FilterBox>
      <FilterBox>
        <h3>Emotion</h3>
        <img src={arrowDown} alt="arrowDown" />
      </FilterBox>
    </FilterWrapper>
  );
};

export default FilterCard;
