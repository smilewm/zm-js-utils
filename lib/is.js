/**
 * 验证数据类型
 * @param param
 * @param type
 * @returns boolean
 */
function checkType(param, type) {
  const result = toString.call(param).slice(8, -1).toLocaleLowerCase();
  return result === type.toLocaleLowerCase();
}

/**
 * 是否为数组
 * @param param
 * @returns boolean
 */
export const isArray = function (param) {
  return checkType(param, "array");
};

/**
 * 是否为Boolean
 * @param param
 * @returns boolean
 */
export const isBoolean = function (param) {
  return checkType(param, "boolean");
};

/**
 * 是否为方法
 * @param param
 * @returns boolean
 */
export const isFunction = function (param) {
  return checkType(param, "function");
};

/**
 * 是否为数字
 * @param param
 * @returns boolean
 */
export const isNumber = function (param) {
  return checkType(param, "number");
};

/**
 * 是否为string
 * @param {*} param
 * @returns
 */
export const isSting = function (param) {
  return checkType(param, "string");
};

/**
 * 是否为undefined
 * @param {*} param
 * @returns
 */
export const isUndefined = function (param) {
  return checkType(param, "undefined");
};

/**
 * 是否为regexp正则表达式
 * @param {*} param
 * @returns
 */
export const isRegexp = function (param) {
  return checkType(param, "regexp");
};

/**
 * 是否为promise
 * @param {*} param
 * @returns
 */
export const isPromise = function (param) {
  return checkType(param, "promise");
};

/**
 * 是否为date
 * @param {*} param
 * @returns
 */
export const isDate = function (param) {
  return checkType(param, "date");
};

/**
 * 是否为Object
 * @param {*} param
 * @returns
 */
export const isObject = function (param) {
  return checkType(param, "object");
};

/**
 * 判断是否为空
 * @param value
 * @returns boolean
 */
export const isEmpty = function (value) {
  return (
    value === null ||
    typeof value === "undefined" ||
    (typeof value === "string" && value === "" && value !== "undefined") ||
    value === "[]"
  );
};

/**
 * 是否为Element元素
 * @param element
 * @returns boolean
 */
export const isElement = function (element) {
  return !!(element && element.nodeType === 1);
};

/**
 * 是否为null
 * @param {*} param
 * @returns
 */
export const isNull = function (param) {
  return param === null;
};
