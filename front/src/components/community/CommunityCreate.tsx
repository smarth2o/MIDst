import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";

const CommunityCreate = (): JSX.Element => {
  return (
    <>
      <CommunityCreateAlign>
        <CommunityCreateStyled>
          <input
            className="community-create-title"
            placeholder="제목을 입력하세요."
          ></input>
          <input
            className="community-create-main"
            placeholder="내용을 입력하세요."
          ></input>
          <CommunityCreateBtnAlignStyled>
            <button>삭제</button>
            <button>저장</button>
          </CommunityCreateBtnAlignStyled>
        </CommunityCreateStyled>
      </CommunityCreateAlign>
    </>
  );
};

export default CommunityCreate;
