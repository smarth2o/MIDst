import {
  FilterBox,
  FilterIcon,
  FilterTitleWrapper,
  FilterWrapper,
  Button,
  DownIcon,
  UpIcon,
  FilterContentWrapper,
} from "../../styles/search/Filter.styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SearchResults } from "../../stores/SearchAtom";
import { titleFilter, nameFilter } from "../../stores/FilterAtom";

interface ListProps {
  value: string;
  label: string;
  children?: React.ReactNode;
}

const FilterCard = (): JSX.Element => {
  const [results, setResults] = useRecoilState(SearchResults);
  const [titleFilterList, setTitleFilter] = useRecoilState(titleFilter);
  const [nameFilterList, setNameFilter] = useRecoilState(nameFilter);
  const [showMedia, setShowMedia] = useState(false);
  // const [showEmotion, setShowEmotion] = useState(false);

  // const handleMedia = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   // event.preventDefault();
  //   setShowMedia((prev) => !prev);
  // };

  // const handleEmotion = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   setShowEmotion((prev) => !prev);
  // };

  const List = ({ value, label }: ListProps): JSX.Element => {
    // const handleCheck = () => {

    // }

    const getCheckedValue = (event: any) => {
      // event.preventDefault();
      console.log(event.target.value, event.target.checked);

      // if (event.target.checked) {
      //   setNameFilter((prev) => [...prev, event.target.value]);
      // } else {
      //   setNameFilter((nameFilterList) =>
      //     nameFilterList.filter((e) => e !== event.target.value)
      //   );
      // }
      // console.log("nameFilter", nameFilterList);
    };

    return (
      <li>
        <label>
          <input
            type="checkbox"
            name="name"
            value={value}
            // onChange={handleCheck}
            onClick={getCheckedValue}
          />
          {label}
        </label>
      </li>
    );
  };

  const TitleList = ({ value, label, children }: ListProps): JSX.Element => {
    const getCheckedValue = (event: any) => {
      // if (event.target.checked) {
      //   setTitleFilter((prev) => [...prev, event.target.value]);
      // } else {
      //   setTitleFilter((titleFilter) =>
      //     titleFilter.filter((e) => e !== event.target.value)
      //   );
      // }
      // console.log(titleFilter);
    };
    return (
      <li>
        <label>
          <input
            type="checkbox"
            name="title"
            value={value}
            onClick={getCheckedValue}
          />
          {label}
        </label>
        {children}
      </li>
    );
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
          <Button onClick={() => setShowMedia((prev) => !prev)}>
            {showMedia ? <UpIcon /> : <DownIcon />}
          </Button>
        </FilterTitleWrapper>
        {showMedia && (
          <FilterContentWrapper>
            <TitleList label="Friends" value="Friends">
              {/* <Button>+</Button> */}
              <FilterContentWrapper>
                <List label="Rachel" value="Rachel"></List>
                <List label="Ross" value="Ross"></List>
                <List label="Monica" value="Monica"></List>
                <List label="Chandler" value="Chandler"></List>
                <List label="Pheobe" value="Pheobe"></List>
                <List label="Joey" value="Joey"></List>
              </FilterContentWrapper>
            </TitleList>
            <TitleList label="Harry Potter" value="Harry Potter">
              <FilterContentWrapper>
                <List label="Harry" value="Harry"></List>
                <List label="Hermione" value="Hermione"></List>
                <List label="Ron" value="Ron"></List>
                <List label="Dumbledore" value="Dumbledore"></List>
                <List label="Voldemort" value="Voldemort"></List>
                <List label="Snape" value="Snape"></List>
                <List label="Dobby" value="Dobby"></List>
              </FilterContentWrapper>
            </TitleList>
          </FilterContentWrapper>
        )}
      </FilterBox>
      {/* <FilterBox>
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
      </FilterBox> */}
      {/* <SearchButton>Search</SearchButton> */}
    </FilterWrapper>
  );
};

export default FilterCard;
