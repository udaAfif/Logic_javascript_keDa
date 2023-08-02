// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

function Num2(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let currentSummary = 0;
  let maxSummary = 0;
  for (let i = 0; i < num; i++) {
    currentSummary += arr[i];
  }

  maxSummary = currentSummary;
  for (let i = num; i < arr.length; i++) {
    currentSummary = currentSummary - arr[i - num] + arr[i];
    maxSummary = Math.max(maxSummary, currentSummary);
  }

  return maxSummary;
}

console.log(Num2([100, 200, 300, 400], 2)); // Output: 700
console.log(Num2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
console.log(Num2([-3, 4, 0, -2, 6, -1], 2)); // Output: 5
module.exports = Num2;
