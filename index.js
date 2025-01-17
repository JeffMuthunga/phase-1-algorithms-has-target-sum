function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length; i++) {
    let no = target - array[i]
    for(let j= i+1; j<array.length; j++) {
      if(no===array[j]) {
        return true
      }
    }
    return false
  }
  
      // if(element + element2 == target){
      //   return true
      // }
  

}

// arr = [22, 19, 4, 6, 30]
// arr2 = [...arr] 
// arr2.splice(0)


/* 
  O(n)
*/

/* 
  Add your pseudocode here
  Iterate through array and subtract target from each element
  iterate through the array again to try and compare whether the resulting number is present 
  if so return true  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 8, 13, 30, 12], 42));
}

module.exports = hasTargetSum;
