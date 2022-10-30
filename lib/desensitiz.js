/**
 * 字符串脱敏
 * @param {*} data 脱敏字符串
 * @param {*} prefix 前位保留位数
 * @param {*} suffix 后位保留位数
 * @param {*} symbol 替换符，默认*
 * @returns
 */
export const desensitiz = function (data, prefix, suffix, symbol = "*") {
  let remain = prefix + suffix;
  if (data.length <= remain) return data;

  const medium = data.length - remain;
  const replaceStr = `\$1${repeat(symbol, medium)}\$2`;
  return data.replace(
    new RegExp(`^(.{${prefix}})(?:.+)(.{${suffix}})$`),
    replaceStr
  );
};
