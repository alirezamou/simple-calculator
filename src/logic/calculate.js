import Big from "big.js";
import operate from "./operate";
import isNumber from "../utils/isNumber";

export default function calculate(obj, buttonName) {
  if(buttonName === "AC") {
    return {total: null, next: null, operation: null};
  }

  const obj_t = {...obj};

  if(isNumber(buttonName)) {
    if(buttonName === "0" && obj_t.next === "0") {
      return obj_t;
    }
    if(obj_t.operation) {
      if(obj_t.next) {
        obj_t.next = obj_t.next + buttonName;
        return obj_t;
      }
      obj_t.next = buttonName;
      return obj_t;
    }
    if(obj_t.next) {
      const next_t = (obj_t.next === "0") ? buttonName : (obj_t.next + buttonName);
      obj_t.next = next_t;
      obj_t.total = null;
      return obj_t;
    }
    obj_t.next = buttonName;
    obj_t.total = null;
    return obj_t;
  }

  if(buttonName === "%") {
    if(obj_t.operation && obj_t.next) {
      const result = operate(obj_t.total, obj_t.next, obj_t.operation);
      obj_t.total = Big(result).div(Big("100")).toString();
      obj_t.next = null;
      obj_t.operation = null;
      return obj_t;
    }
    if(obj_t.next) {
      obj_t.next = Big(obj_t.next).div(Big("100")).toString();
      return obj_t;
    }
    return obj_t;
  }
  if (buttonName === ".") {
    if (obj_t.next) {
      if (obj_t.next.includes(".")) {
        return obj_t;
      }
      obj_t.next = obj_t.next + ".";
      return obj_t;
    }
    obj_t.next = "0.";
    return obj_t;
  }
  if (buttonName === "=") {
    if (obj_t.next && obj_t.operation) {
      obj_t.total = operate(obj_t.total, obj_t.next, obj_t.operation);
      obj_t.next = null;
      obj_t.operation = null;
      return obj_t;
    } else {
      return obj_t;
    }
  }
  if (buttonName === "+/-") {
    if (obj_t.next) {
      obj_t.next = -1 * parseFloat(obj_t.next).toString();
      return obj_t;
    }
    if (obj_t.total) {
      obj_t.total = -1 * parseFloat(obj_t.total).toString();
      return obj_t;
    }
    return obj_t;
  }
  if (obj_t.operation) {
    obj_t.total = operate(obj_t.total, obj_t.next, obj_t.operation);
    obj_t.operation = buttonName;
    return obj_t;
  }
  if (!obj_t.next) {
    obj_t.operation = buttonName;
    return obj_t;
  }
  obj_t.total = obj_t.next;
  obj_t.next = null;
  obj_t.operation = buttonName;
  return obj_t;
};
