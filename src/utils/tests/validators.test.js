import {
  validate_int,
  validate_float,
  validate_boolean,
  validate_string,
} from "../validators";

// integer tests
test("validate integer true", () => {
  expect(validate_int(10)).toBe(true);
});

test("validate integer with float false", () => {
  expect(validate_int(10.1)).toBe(false);
});

test("validate integer string true", () => {
  expect(validate_int("10")).toBe(true);
});

test("validate negative integer string true", () => {
  expect(validate_int("-10")).toBe(true);
});

test("validate integer minimum true", () => {
  expect(validate_int(1, { min_: 0 })).toBe(true);
});

test("validate integer below minimum false", () => {
  expect(validate_int(1, { min_: 2 })).toBe(false);
});

test("validate integer below max true", () => {
  expect(validate_int(1, { max_: 2 })).toBe(true);
});

test("validate integer above max false", () => {
  expect(validate_int(1, { max_: 0 })).toBe(false);
});

test("validate negative float string false", () => {
  expect(validate_int("-10.1")).toBe(false);
});

//float tests
test("validate float with int true", () => {
  expect(validate_int(10)).toBe(true);
});

test("validate float with float true", () => {
  expect(validate_float(10.1)).toBe(true);
});

test("validate float string true", () => {
  expect(validate_float("10.23")).toBe(true);
});

test("validate negative float string true", () => {
  expect(validate_float("-10.23")).toBe(true);
});

test("validate float minimum true", () => {
  expect(validate_float(1.5, { min_: 0 })).toBe(true);
});

test("validate float below minimum false", () => {
  expect(validate_float(1.5, { min_: 2.2 })).toBe(false);
});

test("validate float below max true", () => {
  expect(validate_float(1.5, { max_: 2.2 })).toBe(true);
});

test("validate float above max false", () => {
  expect(validate_float(1.2, { max_: 0 })).toBe(false);
});

// boolean tests

test("validate boolean true", () => {
  expect(validate_boolean(true)).toBe(true);
});

test("validate boolean2 true", () => {
  expect(validate_boolean(false)).toBe(true);
});

test("validate boolean string false", () => {
  expect(validate_boolean("false")).toBe(false);
});

// validate strings
