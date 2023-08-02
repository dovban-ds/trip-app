export const filterArr = (arr, targetElement) => {
  let index = 0;

  while (index < arr.length) {
    if (arr[index].datetime === targetElement) {
      break;
    }
    arr.splice(index, 1);
  }

  return arr;
};
