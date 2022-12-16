import styled from "styled-components";

export const CommunityListStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80vw;
    padding: 20px;
    .community-link {
        text-decoration: none;
        color: black;
    }

    div {
        @media all and (min-width: 1300px) {
            width: 70vw;
        }
    }
`;

export const CommunityCardAlignStyled = styled.div`
    background-color: white;
    height: 100px;
    border-radius: 20px;
    padding: 4%;
    margin-bottom: 20px;
    img {
        border-radius: 50px;
        width: 40px;
    }
    li {
        list-style: none;
    }
`;

export const CommunityInfo = styled.div`
    ul {
        padding: 0;
        display: flex;
    }
    ul li {
        padding: 10px;
    }
`;

export const CommunityWriteBtnStyled = styled.div`
    display: flex;
    justify-content: space-around;
    button {
        width: 165px;
        height: 42px;
        padding: 10px 15px;
        gap: 2px;
        background: #ffffff;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }
`;

export const CommunitySortBtnStyled = styled.div`
    padding-top: 2%;
    display: grid;
    grid-template-columns: 150px 150px 50px;
    align-items: start;
    button {
        margin-left: 0%;
        width: 121px;
        height: 42px;
        align-items: center;
        padding: 0px 15px;
        gap: 2px;
        background: #ffffff;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border: none;

        cursor: pointer;
        :hover {
            background: #d6d6d6;
        }
    }

    .plus {
        margin-left: 0%;
        width: 40px;
        height: 40px;
        align-items: center;
        padding: 0px 15px;
        gap: 2px;
        background: #a59ce1;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        border: none;

        cursor: pointer;
        :hover {
            background: #7ec9ca;
        }
    }
`;

export const CommunityAllAlignStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CommunityListAlignStyled = styled.div`
    display: flex;
    justify-content: space-around;
`;
