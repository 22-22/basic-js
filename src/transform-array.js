module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            //go to the next element of arr
            i++;
        } else if (arr[i] == '--discard-prev') {
            //remove the last element of the newArr
            newArr.pop();
        //check if the element is not the last one in arr
        } else if (arr[i] == '--double-next' && i !== arr.length-1) {
            //push the next element of arr to newArr
            newArr.push(arr[i + 1]);
        //check if the element is not the first one in arr
        }  else if (arr[i] == '--double-prev' && i !== 0) {
            //push the previous element of arr to newArr
            newArr.push(arr[i - 1]);
        } else if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
