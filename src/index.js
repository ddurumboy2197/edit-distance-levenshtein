function levenshteinDistance(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
    }

    return dp[m][n];
}

console.log(levenshteinDistance("kitten", "sitting")); // 3
console.log(levenshteinDistance("hello", "world")); // 4
console.log(levenshteinDistance("abc", "abc")); // 0
console.log(levenshteinDistance("", "abc")); // 3
console.log(levenshteinDistance("abc", "")); // 3
