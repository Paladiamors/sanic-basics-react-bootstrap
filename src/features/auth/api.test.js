import { add_user, delete_user, login, protected_, user_exists } from "./api";
import store from "../redux/store";
import jwt_decode from "jwt-decode";

const timeout = 1000;
const username = "testUser";
const email = "test@test.com";
const password = "testPassword";
const userInfo = { username, email, password };

test(
  "add_user",
  (done) => {
    user_exists({ ident: email })
      .then((data) => {
        if (data.exists) {
          return delete_user({ ident: email });
        } else {
          return null;
        }
      })
      .then(() => add_user(userInfo))
      .then((data) => {
        expect(data["ok"]).toBe(true);
        return data;
      })
      .then(() => login(userInfo))
      .then((cookies) => {
        expect(cookies).toEqual(store.getState().auth);
        return cookies;
      })
      .then(() => {
        protected_()
          .then((response) => response.json())
          .then((data) => {
            expect(data["ok"]).toEqual(true);
          });
      })
      .then(() => {
        const decoded = jwt_decode(store.getState().auth.access_token);
        expect(decoded["user_id"]).toBeDefined();
      })
      .then(() => delete_user({ ident: email }))
      .then((data) => {
        expect(data["ok"]).toBe(true);
        return null;
      })
      .then(() => user_exists({ ident: email }))
      .then((data) => {
        expect(data["exists"]).toBe(false);
        done();
      });
  },
  timeout
);
