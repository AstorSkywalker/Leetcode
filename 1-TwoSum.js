/*
  https://leetcode.com/problems/two-sum/

  

The Two Sum problem is a well-known coding practice problem, often used in technical interviews and coding challenges. Here's a description of the problem:

**Problem Statement:**

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

* `nums = [2, 7, 11, 15]`
* `target = 9`
* Output: `[0, 1]` (because `nums[0] + nums[1] = 2 + 7 = 9`)

**Constraints:**

* `2 <= nums.length <= 10^4`
* `-10^9 <= nums[i] <= 10^9`
* `-10^9 <= target <= 10^9`

**Goal:**

The goal is to write an efficient algorithm that can find the two numbers in the array that add up to the target sum, and return their indices.

This problem is often used to assess a candidate's problem-solving skills, ability to work with arrays, and understanding of algorithms and data structures.

Existe 3 posibles soluciones:
  1. Brute Force
  2. Two Pointer (Two-pass hash table)
  3. Hash Table (One-pass hash table)
*/

// Two Sum Brute Force
function twoSum_brute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`[${i}, ${j}]`);
      }
    }
  }
}

function log(message) {
  console.log(message);
}

log("Two Sum Brute Force");
twoSum_brute([2, 7, 11, 15], 9);
console.log("Complexity analysis for this problem is O(n^2)");

// Two Sum Two Pointer or Two-pass hash table
function twoSum_twoPointer(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      console.log(`[${i}, ${map.get(complement)}]`);
    }
  }
}

log("Two Sum Two Pointer");
twoSum_twoPointer([2, 7, 11, 15], 9);
console.log("Complexity analysis for this problem is O(n^2)");

// Two Sum Hash Table or One-pass hash table
function twoSum_hashTable(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      console.log(`[${map.get(complement)}, ${i}]`);
    }
    map.set(nums[i], i);
  }
}

log("Two Sum Hash Table");
twoSum_hashTable([2, 7, 11, 15], 9);
console.log("Complexity analysis for this problem is O(n)");
