import {
  FilterBox,
  FilterIcon,
  FilterTitleWrapper,
  FilterWrapper,
  Button,
  DownIcon,
} from "../styles/Filter.styled";

const FilterCard = (): JSX.Element => {
  return (
    <FilterWrapper>
      <FilterTitleWrapper>
        <h2>Filters</h2>
        <Button>
          <FilterIcon />
        </Button>
      </FilterTitleWrapper>
      <FilterBox>
        <FilterTitleWrapper>
          <h3>Media</h3>
          <Button>
            <DownIcon />
          </Button>
        </FilterTitleWrapper>
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
        <FilterTitleWrapper>
          <h3>Emotion</h3>
          <Button>
            <DownIcon />
          </Button>
        </FilterTitleWrapper>
      </FilterBox>
    </FilterWrapper>
  );
};

export default FilterCard;
