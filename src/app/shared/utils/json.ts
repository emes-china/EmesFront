export function camelCaseJSONKey(jsonObj) {
  let result;
  if (Array.isArray(jsonObj)) {
    // tslint:disable-next-line:forin
    for (let key in jsonObj) {
      let keyval = jsonObj[key];
      if (typeof jsonObj[key] === 'object') {
        keyval = camelCaseJSONKey(jsonObj[key]);
      }

      key = key.replace(key[0], key[0].toLowerCase());
      jsonObj[key] = keyval;
    }
    result = jsonObj;
  } else {
    result = {};
    // tslint:disable-next-line:forin
    for (let key in jsonObj) {
      let keyval = jsonObj[key];
      if (typeof jsonObj[key] === 'object') {
        keyval = camelCaseJSONKey(jsonObj[key]);
      }

      key = key.replace(key[0], key[0].toLowerCase());
      result[key] = keyval;
    }
  }
  return result;
}
export function isJson(str) {
  try {
    if (typeof JSON.parse(str) === 'object') {
      return true;
    }
  } catch (e) {}
  return false;
}

export function getRealJsonData(baseStr) {
  if (!baseStr || typeof baseStr !== 'string') return baseStr;
  let jsonData = null;
  try {
    jsonData = JSON.parse(baseStr);
  } catch (err) {
    return null;
  }
  const needReplaceStrs = [];
  loopFindArrOrObj(jsonData, needReplaceStrs);
  needReplaceStrs.forEach(replaceInfo => {
    const matchArr = baseStr.match(eval('/"' + replaceInfo.key + '":[0-9]{15,}/'));
    if (matchArr) {
      const str = matchArr[0];
      let replaceStr = str.replace('"' + replaceInfo.key + '":', '"' + replaceInfo.key + '":"');
      replaceStr += '"';
      baseStr = baseStr.replace(str, replaceStr);
    }
  });
  let returnJson = null;
  try {
    returnJson = JSON.parse(baseStr);
  } catch (err) {
    return null;
  }
  return returnJson;
}

// 遍历对象类型的
export function getNeedRpStrByObj(obj, needReplaceStrs) {
  // tslint:disable-next-line:forin
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'number' && value > 9007199254740992) {
      needReplaceStrs.push({ key });
    }
    loopFindArrOrObj(value, needReplaceStrs);
  }
}

// 遍历数组类型的
export function getNeedRpStrByArr(arr, needReplaceStrs) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    loopFindArrOrObj(value, needReplaceStrs);
  }
}

// 递归遍历
function loopFindArrOrObj(value, needRpStrArr) {
  const valueTypeof = Object.prototype.toString.call(value);
  if (valueTypeof === '[object Object]') {
    needRpStrArr.concat(getNeedRpStrByObj(value, needRpStrArr));
  }
  if (valueTypeof === '[object Array]') {
    needRpStrArr.concat(getNeedRpStrByArr(value, needRpStrArr));
  }
}
