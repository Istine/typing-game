import { v4 as uuidV4 } from "uuid";

export function buildWithUniqueIds(item = "", type = "word") {
  const result = {};
  const itemArray = type === "word" ? item.split(" ") : item.split("");

  for (let i = 0; i < itemArray.length; i++) {
    if (type === "word") {
      const key = uuidV4();
      const spaceKey = uuidV4();
      result[key] = itemArray[i];
      result[spaceKey] = "_";
    } else {
      const key = uuidV4();
      result[key] = itemArray[i];
    }
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

export const buildTypedWords = (
  value,
  currentIndex,
  setCurrentIndex,
  words,
  setPoints,
  setWords,
  correctStyle,
  incorrectStyle,
  storedWords
) => {
  if (!!value) {
    let inputArray = value.split(" ");
    const len = inputArray.length;
    for (let i = currentIndex + 1; i < len; i++) {
      const inputWordComplete = inputArray[i].length === words[i][1].length;
      const areWordsEqual = inputArray[i] === words[i][1];

      const key = words[i][0];

      if (inputWordComplete) {
        if (areWordsEqual) {
          setPoints((prevPoints) => prevPoints + 1);
        }
        const data = storedWords.map(([k, v, style = {}]) =>
          k === key
            ? [k, v, areWordsEqual ? correctStyle : incorrectStyle]
            : [k, v, style]
        );

        setWords(data);
        setCurrentIndex(i);
      }
    }
  }
};
