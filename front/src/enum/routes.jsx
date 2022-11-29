export const ROUTES = {
  MAIN: "/",
  SEARCH: "/search",
  SHARE: "/share",
  DIARY: {
    ROOT: "/diary",
    DIARY_CREATE: "/diary/diaryCreate",
    DIARY_DETAIL: "/diary/diaryDetail/:no",
  },
  USER: { LOGIN: "/login", REGISTER: "/register", FIND_PW: "/findPassword" },
  PERSONAL: "/personal",
  COMMUNITY: {
    ROOT: "/community",
    COMMUNITY_CREATE: "/community/communityCreate",
    COMMUNITY_DETAIL: "/community/communityDetail",
    COMMUNITY_EDIT: "/community/communityEdit",
  },
};
