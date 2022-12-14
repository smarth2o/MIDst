export const ROUTES = {
  MAIN: "/",
  SEARCH: "/search",
  COMMUNITY: {
    ROOT: "/community",
    CREATE: "/community/communityCreate",
    DETAIL: "/community/:communityDetail",
    EDIT: "/community/:communityDetail/edit",
  },
  DIARY: {
    ROOT: "/diary",
    DETAIL: ":detail",
    CREATE: "create",
  },
  PERSONAL: "/personal",
  USER: {
    LOGIN: "/login",
    REGISTER: "/register",
    FIND_PW: "/findPassword",
    CHANGE_PW: "/changePassword",
    WITHDRAWAL: "/withdrawal",
  },
};
