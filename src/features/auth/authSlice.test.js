import store from "../redux/store.js";
import { setToken, clearToken } from "./authSlice.js";

test("token_test", (done) => {
  const token = { access_token: "123", access_token_signature: "456" };
  const emptyToken = { access_token: "", access_token_signature: "" };
  store.dispatch(setToken(token));
  expect(store.getState().auth).toStrictEqual(token);

  store.dispatch(clearToken(token));
  expect(store.getState().auth).toStrictEqual(emptyToken);
  done();
});
