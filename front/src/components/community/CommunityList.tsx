import React, { useCallback, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import {
  CommunityAllAlignStyled,
  CommunityListAlignStyled,
  CommunityListStyled,
  CommunitySortBtnStyled,
  CommunityWriteBtnStyled,
} from "../../styles/community/CommunityList";

import { communityState, CommunityType } from "../../stores/CommunityAtom";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import { useEffect } from "react";
import * as Api from "../../api";
import CommunityItem from "./CommunityItem";

export interface CommunityPropsType {
  id: number;
  author: string;
  title: string;
  createdAt: string;
  description: string;
  reply: number;
  like: number;
  communityItems: CommunityType[];
}

const CommunityList = (): JSX.Element => {
  const [communityItems, setCommunityItems] = useRecoilState(communityState);
  const [urlValue, setUrlValue] = useState(`newest`);

  useEffect(() => {
    const CommunityData = async () => {
      const response = await Api.get(`posts/all/${urlValue}`);
      if (response.status !== 200) {
        console.log(response);
      } else {
        setCommunityItems(response.data.data);
      }
    };
    CommunityData();
  }, [urlValue]);

  return (
    <>
      <CommunityAllAlignStyled>
        <CommunitySortBtnStyled>
          <button
            onClick={() => {
              setUrlValue(`popular`);
            }}
          >
            <p>
              좋아요 순 <DownOutlined />
            </p>
          </button>
          <button
            onClick={() => {
              setUrlValue(`newest`);
            }}
          >
            <p>
              최신 순 <DownOutlined />
            </p>
          </button>
          {/* <Link to={ROUTES.COMMUNITY.CREATE}>
            <button className="plus">+</button>
          </Link> */}
        </CommunitySortBtnStyled>
        <CommunityWriteBtnStyled>
          <Link to={ROUTES.COMMUNITY.CREATE}>
            <button>Write</button>
          </Link>
        </CommunityWriteBtnStyled>
        <CommunityListAlignStyled>
          <CommunityListStyled>
            {communityItems &&
              communityItems.map((communityItem: CommunityType) => {
                const { id, title, createdAt, author, description, _count } =
                  communityItem;
                return (
                  <div key={id}>
                    <Link to={`/community/${id}`} className="community-link">
                      <CommunityItem
                        id={id}
                        author={author}
                        title={title}
                        createdAt={createdAt}
                        description={description}
                        reply={_count.reply}
                        like={_count.like}
                        communityItems={communityItems}
                      />
                    </Link>
                  </div>
                );
              })}
          </CommunityListStyled>
        </CommunityListAlignStyled>
      </CommunityAllAlignStyled>
    </>
  );
};

export default CommunityList;
