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
import { useState } from "react";
import { ShowState } from "../../stores/FilterAtom";
import { useRecoilState } from "recoil";

interface ListProps {
  value: string;
  id: string;
  children?: React.ReactNode;
}

const FilterCard = (): JSX.Element => {
  const [show, setShow] = useRecoilState(ShowState);
  // const [showEmotion, setShowEmotion] = useState(false);

  const List = ({ id, value }: ListProps): JSX.Element => {
    const [checked, setChecked] = useState<boolean>(true);

    const handleCheck = () => {
      setChecked(!checked);
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
            checked={checked}
          />
          {value}
        </label>
      </li>
    );
  };

  const TitleList = ({ id, value, children }: ListProps): JSX.Element => {
    const [checked, setChecked] = useState<boolean>(true);

    const handleCheck = () => {
      setChecked(!checked);
      const checkboxes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll("#" + id);
      checkboxes.forEach((checkbox) => {
        checkbox.checked = !checked;
      });
    };

    return (
      <li>
        <label>
          <input
            type="checkbox"
            id={id}
            name="title"
            value={value}
            onChange={handleCheck}
            checked={checked}
          />
          {value}
        </label>
        {children}
      </li>
    );
  };

  const handleReset = () => {
    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      'input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
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
          <Button onClick={() => setShow((prev) => !prev)}>
            {show ? <UpIcon /> : <DownIcon />}
          </Button>
        </FilterTitleWrapper>
        {show && (
          <FilterContentWrapper>
            <TitleList id="Friends" value="Friends">
              {/* <Button>+</Button> */}
              <FilterContentWrapper>
                <List id="Friends" value="Rachel"></List>
                <List id="Friends" value="Ross"></List>
                <List id="Friends" value="Monica"></List>
                <List id="Friends" value="Chandler"></List>
                <List id="Friends" value="Phoebe"></List>
                <List id="Friends" value="Joey"></List>
              </FilterContentWrapper>
            </TitleList>
            <TitleList id="Harry" value="Harry Potter">
              <FilterContentWrapper>
                <List id="Harry" value="Harry Potter"></List>
                <List id="Harry" value="Hermione Granger"></List>
                <List id="Harry" value="Ron Weasley"></List>
                <List id="Harry" value="Albus Dumbledore"></List>
                <List id="Harry" value="Voldemort"></List>
                <List id="Harry" value="Severus Snape"></List>
                <List id="Harry" value="Dobby"></List>
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
