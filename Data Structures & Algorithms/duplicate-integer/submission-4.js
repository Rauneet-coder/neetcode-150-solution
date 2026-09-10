// JavaScript Implementation
function findDuplicatesBruteForce(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // To avoid adding the same duplicate multiple times
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}
