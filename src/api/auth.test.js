import { add_user, delete_user, login, protected_ } from "./auth";
import store from "../redux/store";
import jwt_decode from "jwt-decode";

const timeout = 1000;
const username = "testUser";
const email = "test@test.com";
const password = "testPassword";
const userInfo = { username, email, password };
test(
  "delete_user",
  (done) => {
    delete_user({}).then((data) => {
      expect(data["ok"]).toBe(true);
      done();
    });
  },
  timeout
);

test(
  "add_user",
  (done) => {
    add_user(userInfo).then((data) => {
      expect(data["ok"]).toBe(true);
      done();
    });
  },
  timeout
);

test(
  "login",
  (done) => {
    login(userInfo)
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
        expect(decoded["user_id"]).toEqual(1);
        done();
      });
  },
  timeout
);

test(
  "login fail",
  (done) => {
    login({ username: 2 }).then((cookies) => {
      expect(cookies.exception).toEqual("AuthenticationFailed");
      done();
    });
  },
  timeout
);
