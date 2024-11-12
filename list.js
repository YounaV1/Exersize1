// function arrayToList(array)
// {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = { value: array[i], rest: list };
//     }
//     return list;
// }
function arrayToList(array) {
  if (array.length === 0) return "{}";
  return;
  {
    value: array[0],
    rest: arrayToList(array.slice(1))
  }
}

// function listToArray(list)
// {
//     let array = [];
//     while (list) {
//       array.push(list.value);
//       list = list.rest;
//     }
//     return array;
// }
function listToArray(list) {
  let array = [];
  while (list !== null) {
    value = list.value;
    array.push(value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, position) {
  if (!list) return undefined;
  else if (position === 0) return list.value;
  else return nth(list.rest, position - 1);
}
