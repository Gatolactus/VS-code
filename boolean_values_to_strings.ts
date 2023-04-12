/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

const boolToWord = (bool: boolean): string => {
  try {
    throw new Error("Not implemented!");
  }
  catch (e){
    if (bool === true){
      return "Yes";
    } else {
      return "No";
    }
  }
};  