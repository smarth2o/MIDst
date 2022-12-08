export const ROUTES = {
  MAIN: "/",
  SEARCH: "/search",
  DIARY: {
    ROOT: "/diary",
    DETAIL: ":detail",
    CREATE: "create",
  },
  USER: {
    LOGIN: "/login",
    REGISTER: "/register",
    FIND_PW: "/findPassword",
    CHANGE_PW: "/changePassword",
  },
  PERSONAL: "/personal",
  COMMUNITY: {
    ROOT: "/community",
    CREATE: "/community/communityCreate",
    DETAIL: "/community/:communityDetail",
    EDIT: "/community/edit",
  },
};
