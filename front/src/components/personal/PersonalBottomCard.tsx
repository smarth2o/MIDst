import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
    PBCardAlignStyled,
    PBCardItemStyled,
    PBCardTabStyled,
    PBCardWordAlignStyled,
} from "../../styles/personal/PersonalBottomCardStyled";
import PBCardData, { PBCardDataType } from "./personalData";
import { CloudEmp, CloudFull } from "../../assets/index";
import * as Api from "../../api";
import { useNavigate } from "react-router";
import { resolve } from "node:path/win32";

export interface PBCardItemType {
    userId: number;
    description: { expression: string[]; res: boolean };
    searchWord: string[];
    grammar: string[];
}

const ExpressionItem = ({ result }: any): JSX.Element => {
    const navigator = useNavigate();
    const [cloud, setCloud] = useState(false);
    // setSearchId(res.searchId);
    const [translate, setTranslate] = useState("");

    const handleTranslate = async () => {
        if (!translate) {
            try {
                const res = await Api.post("main/translate", {
                    searchSentence: result.description,
                });
                setTranslate(res.data);
            } catch (err) {
                // console.log("번역 실패");
                // console.log(err);
            }
        } else {
            setTranslate("");
        }
    };

    const handleDelete = async (props: any, cloud: boolean) => {
        // console.log(cloud);
        if (cloud) {
            if (window.confirm("삭제하시겠습니까")) {
                try {
                    await Api.delete(`main/deleteSearch/${props}`);
                    navigator(`/personal`);
                } catch (err) {}
            }
        }
    };

    return (
        <PBCardItemStyled>
            <span onClick={handleTranslate}>
                {translate ? translate : result.description}
            </span>
            <button
                onClick={() => {
                    handleDelete(result.searchId, true);
                }}
            >
                <img src={cloud ? CloudEmp : CloudFull} alt="cloud" />
            </button>
        </PBCardItemStyled>
    );
};

const PersonalBottomCard = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState<PBCardDataType>(PBCardData);

    const [cloud, setCloud] = useState(false);
    const [id, setId] = useState("");

    const tabList = ["Expressions", "Words"];
    const navigator = useNavigate();

    const tabClickHandler = (index: any) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const getPersonalData = async () => {
            const response = await Api.get(`main/getSearch`);
            if (response.status !== 200) {
            } else {
                setItems(response.data);
            }
        };
        const getId = async () => {
            const response = await Api.get("main/getSearch");
            response.data.forEach((data: any) => {
                setId(data.searchId);
            });
        };
        getId();
        getPersonalData();
    }, [cloud]);

    const handleDelete = async (props: any, cloud: boolean) => {
        // console.log(cloud);
        if (cloud) {
            if (window.confirm("삭제하시겠습니까")) {
                try {
                    await Api.delete(`main/deleteSearch/${props}`);
                    navigator(`/personal`);
                } catch (err) {}
            }
        }
    };

    const wordsItem = () => {
        const wordsFiler = items.reduce(function (item: any[], current) {
            if (
                item.findIndex(
                    ({ searchWord }) => searchWord === current.searchWord
                ) === -1
            ) {
                item.push(current);
            }
            return item;
        }, []);
        const wordsItem = wordsFiler.map((res: any) => {
            return (
                <>
                    <PBCardItemStyled>
                        {res.searchWord}
                        <button
                            onClick={() => {
                                handleDelete(res.searchId, true);
                            }}
                        >
                            <img
                                src={cloud ? CloudEmp : CloudFull}
                                alt="cloud"
                            />
                        </button>
                    </PBCardItemStyled>
                </>
            );
        });

        return <PBCardWordAlignStyled>{wordsItem}</PBCardWordAlignStyled>;
    };

    // const tabContArr = [
    //   {
    //     tabTitle: (
    //       <li
    //         className={activeIndex === 0 ? "is-active" : ""}
    //         onClick={() => tabClickHandler(0)}
    //       >
    //         Expressions
    //       </li>
    //     ),
    //     tabCont: <div>{expressionItem()}</div>,
    //   },
    //   {
    //     tabTitle: (
    //       <li
    //         className={activeIndex === 1 ? "is-active" : ""}
    //         onClick={() => tabClickHandler(1)}
    //       >
    //         Words
    //       </li>
    //     ),
    //     tabCont: <div>{wordsItem()} </div>,
    //   },
    // ];

    return (
        <>
            <PBCardAlignStyled>
                <PBCardTabStyled>
                    <ul className="tabs is-boxed">
                        {tabList.map((tab, index) => (
                            <li
                                className={
                                    activeIndex === index ? "is-active" : ""
                                }
                                onClick={() => tabClickHandler(index)}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <button className="btn-go-search">
                            <a href="/search">
                                Go Search <ArrowRightOutlined />
                            </a>
                        </button>
                    </ul>
                </PBCardTabStyled>
                {/* <div>{tabContArr[activeIndex].tabCont}</div> */}
                <PBCardWordAlignStyled>
                    {activeIndex
                        ? wordsItem()
                        : items.map((res: any) => (
                              <ExpressionItem result={res} />
                          ))}
                </PBCardWordAlignStyled>
            </PBCardAlignStyled>
        </>
    );
};

export default PersonalBottomCard;
