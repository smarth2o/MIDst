import {
  FilterBox,
  FilterIcon,
  FilterTitleWrapper,
  FilterWrapper,
  Button,
  DownIcon,
  UpIcon,
  FilterContentWrapper,
  SearchButton,
} from "../../styles/Filter.styled";
import { useState } from "react";

interface ListProps {
  label: string;
  children?: React.ReactNode;
}

const List = ({ label, children }: ListProps): JSX.Element => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {label}
      </label>
      {children}
    </li>
  );
};

const FilterCard = (): JSX.Element => {
  const [showMedia, setShowMedia] = useState(false);
  const [showEmotion, setShowEmotion] = useState(false);

  const handleMedia = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowMedia((prev) => !prev);
  };

  const handleEmotion = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowEmotion((prev) => !prev);
  };

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
          <Button onClick={handleMedia}>
            {showMedia ? <UpIcon /> : <DownIcon />}
          </Button>
        </FilterTitleWrapper>
        {showMedia && (
          <FilterContentWrapper>
            <List label="Friends">
              {/* <Button>+</Button> */}
              <FilterContentWrapper>
                <List label="Rachel"></List>
                <List label="Ross"></List>
                <List label="Monia"></List>
                <List label="Chandler"></List>
                <List label="Pheobe"></List>
                <List label="Joey"></List>
              </FilterContentWrapper>
            </List>
            <List label="Harry Potter">
              <FilterContentWrapper>
                <List label="Harry"></List>
                <List label="Hermione"></List>
                <List label="Ron"></List>
                <List label="Dumbledore"></List>
                <List label="Voldemort"></List>
                <List label="Snape"></List>
                <List label="Dobby"></List>
              </FilterContentWrapper>
            </List>
          </FilterContentWrapper>
        )}
      </FilterBox>
      <FilterBox>
        <FilterTitleWrapper>
          <h3>Emotion</h3>
          <Button onClick={handleEmotion}>
            {showEmotion ? <UpIcon /> : <DownIcon />}
          </Button>
        </FilterTitleWrapper>
        {showEmotion && (
          <FilterContentWrapper>
            <List label="joy"></List>
            <List label="sadnes"></List>
            <List label="anger"></List>
            <List label="surprise"></List>
            <List label="fear"></List>
            <List label="disgust"></List>
            <List label="neutral"></List>
          </FilterContentWrapper>
        )}
      </FilterBox>
      <SearchButton>Search</SearchButton>
    </FilterWrapper>
  );
};

export default FilterCard;
