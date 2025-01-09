
function hasTargetSum(array, target) {
  // Create a set to store the numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate over the array
  for (const number of array) {
    // Calculate the complement that would sum with the current number to reach the target
    const complement = target - number;

    // Check if the complement has already been seen
    if (seenNumbers.has(complement)) {
      // If yes, we found a pair, so return true
      return true;
    }

    // Add the current number to the set of seen numbers
    seenNumbers.add(number);
  }

  // If we've iterated over the entire array and haven't found a pair, return false
  return false;
}

if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 9));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, -1, 2, -3, 1], -2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 5, 5], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 15, 3, 7], 17));
}

module.exports = hasTargetSum;