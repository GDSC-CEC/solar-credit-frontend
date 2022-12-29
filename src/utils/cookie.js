import { Cookies } from "react-cookie";

const cookies = new Cookies();

const set = (name, value, expire) => {
  cookies.set(name, value, {
    expires: expire,
  });
};

const get = (name) => {
  return cookies.get(name);
};

const remove = (name) => {
  cookies.remove(name);
};

export const cookie = {
  get,
  remove,
  set,
};
