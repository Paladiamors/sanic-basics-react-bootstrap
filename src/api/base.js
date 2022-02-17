class ApiBase {
  static apiPrefix = "api";
  static prefix_ = null;
  static fields_ = null;

  static url() {
    return `${this.apiPrefix}/${this.prefix_}`;
  }

  static fields() {
    return this.fields_;
  }

  static post(data, handler = (response) => {}) {
    fetch(this.url(), {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => handler(data));
  }
}

class TestBase extends ApiBase {
  static prefix_ = "test";
  static fields_ = [
    { type: "FormEmail", name: "email", label: "Email", required: true },
    { type: "FormText", name: "username", label: "Username", required: true },
    {
      type: "FormPassword",
      name: "password",
      label: "Password",
      required: true,
    },
  ];
}

console.log(TestBase.url(), TestBase.fields());
