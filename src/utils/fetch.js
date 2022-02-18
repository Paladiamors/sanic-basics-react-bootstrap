import store from "../redux/store.js";
// import fetch from "node-fetch";
import { setToken, clearToken } from "../redux/authSlice.js";

// make the dev prefix configurable
const devPrefix = "http://localhost:4000";

// parses the set cookie component from a response and returns
// is as an object
function parseCookies(response) {
  const raw = response.headers.raw()["set-cookie"];
  return raw
    .map((entry) => {
      const parts = entry.split(";");
      const cookiePart = parts[0];
      return cookiePart;
    })
    .join(";");
}

// if auth tokens are set, automatically adds them when in dev mode
// otherwise just passes through a fetch request
export default async function fetch_(input, init = {}) {
  if (process.env.NODE_ENV === "production") {
    return fetch(input, init);
  } else {
    const state = store.getState();
    if (state.auth.access_token && state.auth.access_token_signature) {
      const auth = {
        cookie: `access_token=${state.auth.access_token}; access_token_signature=${state.auth.access_token_signature}`,
      };
      init.headers = { ...init.headers, ...auth };
    }
    const url = input[0] === "/" ? devPrefix + input : devPrefix + "/" + input;
    return fetch(url, init);
  }
}

export async function fetchResponse(url, data) {
  let body;
  if (data instanceof Object) {
    body = JSON.stringify(data);
  } else {
    body = data;
  }
  return fetch_(url, {
    method: "POST",
    body: body,
  });
}

export async function fetchJson(url, data) {
  return fetchResponse(url, data).then((response) => response.json());
}

// use this to perform a login into the system
// the cookie is then saved to the store
// use this for testing purposes
export function login(url, email, password) {
  fetch_(url, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    const cookies = parseCookies(response);
    store.dispatch(setToken(cookies));
  });
}
