import { v4 as uuidV4 } from "uuid";

export function buildWithUniqueIds(item = "", type = "word") {
  const result = {};
  const itemArray = type === "word" ? item.split(" ") : item.split("");

  for (let i = 0; i < itemArray.length; i++) {
    const key = uuidV4();
    result[key] = itemArray[i];
  }

  return objectToArray(result);
}

const objectToArray = (obj) => {
  const array = [];
  for (let key in obj) {
    array.push([key, obj[key]]);
  }
  return array;
};
