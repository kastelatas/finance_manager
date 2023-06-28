import _ from "lodash";

class Conf {
  constructor() {
    const domain = process.env.REACT_APP_BASE_API_URL ?? "localhost:8000";
    const IS_DEV_ENV = process.env.REACT_APP_IS_DEV ?? "false";
    const isDev = IS_DEV_ENV === "true";
    const schema = process.env.NODE_ENV
      ? window.location.protocol.substr(0, window.location.protocol.length - 1)
      : "http";
    _.extend(this, {
      domain: domain,
      host: schema + "://" + "" + domain,
      media: schema + "://" + domain + "/" + "api" + "/media",
      api: {
        domain: domain + "/" + "api",
        host: schema + "://" + domain + "/" + "api",
      },
    });
  }

  domain;
  host;
  media;
  api;
}

const $config = new Conf();

export default $config;
