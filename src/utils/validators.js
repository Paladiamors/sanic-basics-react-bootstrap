function check_min_max(value, { min_ = null, max_ = null } = {}) {
  if (min_ !== null) {
    if (value < min_) {
      return false;
    }
  }
  if (max_ !== null) {
    if (value > max_) {
      return false;
    }
  }
  return true;
}

export function validate_int(value, { min_ = null, max_ = null } = {}) {
  if (typeof value !== "string" && typeof value !== "number") {
    return false;
  }
  if (typeof value === "string") {
    if (isNaN(value)) {
      return false;
    } else {
      value = parseFloat(value);
    }
  }

  if (value % 1 !== 0) {
    // the number is not an integer
    return false;
  }
  return check_min_max(value, { min_, max_ });
}

export function validate_float(value, { min_ = null, max_ = null } = {}) {
  if (typeof value !== "string" && typeof value !== "number") {
    return false;
  }
  if (typeof value === "string") {
    if (isNaN(value)) {
      return false;
    } else {
      value = parseFloat(value);
    }
  }

  return check_min_max(value, { min_, max_ });
}

export function validate_boolean(value) {
  return typeof value === "boolean";
}

export function validate_string(value) {
  // contains no unicode values
  if (!typeof value === "string") {
    return false;
  }

  return !/[^\u0000-\u00ff]/.test(s);
}
