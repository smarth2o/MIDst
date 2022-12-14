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
import { SearchResults } from "../../stores/FilterAtom";

interface ListProps {
  value: string;
  label: string;
  children?: React.ReactNode;
}

const FilterCard = (): JSX.Element => {
  const [results, setResults] = useRecoilState(SearchResults);
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

  let nameFilter: any[] = [];
  let titleFilter: any[] = [];

  useEffect(() => {
    const titleresult = results.filter((result) =>
      titleFilter.includes(result.title)
    );
    const nameresult = results.filter((result) =>
      nameFilter.includes(result.name)
    );
    let searchresults = titleresult.concat(nameresult);
    searchresults = searchresults.filter(
      (item, pos) => searchresults.indexOf(item) === pos
    );
    setResults(searchresults);
  }, [nameFilter, results, setResults, titleFilter]);

  const List = ({ value, label }: ListProps): JSX.Element => {
    const getCheckedValue = (event: any) => {
      if (event.target.checked) {
        nameFilter.push(event.target.value);
      } else {
        nameFilter = nameFilter.filter(
          (element) => element !== event.target.value
        );
      }
      console.log(nameFilter);
    };

    return (
      <li>
        <label>
          <input
            type="checkbox"
            name="name"
            value={value}
            onClick={getCheckedValue}
          />
          {label}
        </label>
      </li>
    );
  };

  const TitleList = ({ value, label, children }: ListProps): JSX.Element => {
    const getCheckedValue = (event: any) => {
      if (event.target.checked) {
        titleFilter.push(event.target.value);
      } else {
        titleFilter = titleFilter.filter(
          (element) => element !== event.target.value
        );
      }
      console.log(titleFilter);
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
