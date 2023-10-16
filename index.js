function hasTargetSum(array, target) {
  // Create a Set to store elements we've seen so far
  const seenElements = new Set();

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Calculate the difference needed for the target sum
    const difference = target - array[i];

    // Check if the difference is in the Set (a matching pair was found)
    if (seenElements.has(difference)) {
      return true;
    }

    // Add the current element to the Set
    seenElements.add(array[i]);
  }

  // If the loop completes without finding a pair, return false
  return false;
}

// Pseudocode:
// 1. Create a Set to store seen elements.
// 2. Iterate through the array.
// 3. For each element, calculate the needed difference for the target sum.
// 4. Check if the difference is in the Set (a pair was found).
// 5. If found, return true.
// 6. Otherwise, add the current element to the Set.
// 7. If the loop completes, return false (no pair found).

// You can run this function with your own test cases or use the provided tests in the code.

if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
