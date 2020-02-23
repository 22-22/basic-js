module.exports = function countCats(matrix)
{    
  let number = 0;

  //iterate over outer array
  for (let i = 0; i < matrix.length; i++) {
    //create variable for inner array length
    let innerLength = matrix[i].length;

    //iterate over inner array
    for (let j = 0; j < innerLength; j++) {
      if (matrix[i][j] == '^^') {
        number++;
      }
    }
  }

  return number; 
}

