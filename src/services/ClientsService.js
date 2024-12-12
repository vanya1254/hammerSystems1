import fetch from "auth/FetchInterceptor";

const clientsService = {};

clientsService.getPost = function (params) {
  return fetch({
    url: "/users",
    method: "get",
    params,
  });
};

clientsService.setPost = function (data) {
  return fetch({
    url: "/users",
    method: "post",
    data: data,
  });
};

export default clientsService;
