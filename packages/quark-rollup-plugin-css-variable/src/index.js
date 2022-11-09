const queryRE = /\?.*$/s;
const hashRE = /#.*$/s;
const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");

function cssVariable(userOptions = {}) {
  if (!userOptions.variableMap) {
    throw Error("options.variableMap is required");
  }
  if (typeof userOptions.variableMap !== "object") {
    throw Error("options.variableMap should be an object");
  }
  userOptions.prefix = userOptions.prefix || "CSSVAR-";

  const reg = new RegExp(`${userOptions.prefix}([a-zA-Z-_]+)`, "gi");
  return {
    name: "css-variable",
    transform(code, url) {
      if (cleanUrl(url).indexOf(".css") > -1) {
        return code.replace(reg, (matchStr, key) => {
          const val = userOptions.variableMap[key];
          if (!val) {
            return matchStr;
          }
          return val;
        });
      }
      return code;
    },
  };
}

module.exports = cssVariable;
