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
  id?: string;
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

  const List = ({ id, value }: ListProps): JSX.Element => {
    const handleCheck = () => {};

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
            id={id}
            name="name"
            value={value}
            onChange={handleCheck}
            // onClick={getCheckedValue}
          />
          {value}
        </label>
      </li>
    );
  };

  const TitleList = ({ value, children }: ListProps): JSX.Element => {
    // const handleCheck = () => {
    //   const checkboxes = document.getElementById(value);
    //   checkboxes.forEach((checkbox) => {
    //     checkbox.checked = TitleList.checked;
    //   });

    // };
    return (
      <li>
        <label>
          <input
            type="checkbox"
            name="title"
            value={value}
            // onChange={handleCheck}
            checked
          />
          {value}
        </label>
        {children}
      </li>
    );
  };

  const handleReset = () => {
    // const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // checkboxes.forEach((checkbox) => {
    //   checkbox.checked = false;
    // });
  };

  return (
    <FilterWrapper>
      <FilterTitleWrapper>
        <h2>Filters</h2>
        <Button onClick={handleReset}>
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
            <TitleList value="Friends">
              {/* <Button>+</Button> */}
              <FilterContentWrapper>
                <List id="Friends" value="Rachel"></List>
                <List id="Friends" value="Ross"></List>
                <List id="Friends" value="Monica"></List>
                <List id="Friends" value="Chandler"></List>
                <List id="Friends" value="Pheobe"></List>
                <List id="Friends" value="Joey"></List>
              </FilterContentWrapper>
            </TitleList>
            <TitleList value="Harry Potter">
              <FilterContentWrapper>
                <List id="Harry Potter" value="Harry"></List>
                <List id="Harry Potter" value="Hermione"></List>
                <List id="Harry Potter" value="Ron"></List>
                <List id="Harry Potter" value="Dumbledore"></List>
                <List id="Harry Potter" value="Voldemort"></List>
                <List id="Harry Potter" value="Snape"></List>
                <List id="Harry Potter" value="Dobby"></List>
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
