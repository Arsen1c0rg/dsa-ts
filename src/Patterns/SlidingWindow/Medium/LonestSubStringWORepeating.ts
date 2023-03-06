/* 
    Given a string s, find the length of the longest substring without repeating characters.

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/
function longestSubstringWORepeatingBrute(s: string): number {
    let maxLength = -Infinity

    for (let i = 0; i < s.length; i++) {
        let windowLength = 0

        for (let j = i; j < s.length; j++) {
            if ((i !== j) && s.charAt(i) === s.charAt(j)) {
                maxLength = Math.max(maxLength, windowLength)
                break
            }
            windowLength++
        }
    }
    return maxLength
}

console.log(longestSubstringWORepeatingBrute("abcabcbb")); // outputs 3
console.log(longestSubstringWORepeatingBrute("bbbbb")); // outputs 1
console.log(longestSubstringWORepeatingBrute("pwwkew")); // outputs 3

function longestSubstringWORepeatingOptimal(s: string): number {
    let windowStart = 0, windowEnd = 0, maxLength = -Infinity,
        windowLength = 0
    for (; windowEnd < s.length; windowEnd++) {
        windowLength++

        while ((windowStart !== windowEnd) && s.charAt(windowStart) !== s.charAt(windowEnd)) {
            maxLength = Math.max(windowLength, maxLength)
            // windowLength -= windowStart
            windowStart++
        }
    }

    return maxLength
}
console.log(longestSubstringWORepeatingOptimal("abcabcbb")); // outputs 3
console.log(longestSubstringWORepeatingOptimal("bbbbb")); // outputs 1
console.log(longestSubstringWORepeatingOptimal("pwwkew")); // outputs 3

function bruteForceApproach(s: string): number {
    if (s.length === 0) return 0;

    let maxLength = -Infinity

    for (let i = 0; i < s.length; i++) {
        let se = new Set()

        for (let j = i; j < s.length; j++) {
            if (se.has(s.charAt(j))) {
                maxLength = Math.max(maxLength, j - i)
                break
            }

            se.add(s.charAt(j))
        }
        console.log(se);

    }

    return maxLength
}
console.log(bruteForceApproach("abcabcbb")); // outputs 3
console.log(bruteForceApproach("pwwkew")); // outputs 3
console.log(bruteForceApproach("bbbbb")); // outputs 1

function lengthOfLongestSubstring(s: string): number {
    let set = new Set<string>()
    let maxLength = -Infinity
    let l = 0

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[l])
            l++
        }

        set.add(s[i])
        maxLength = Math.max(maxLength, set.size)
    }

    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb")); // outputs 3
console.log(lengthOfLongestSubstring("pwwkew")); // outputs 3
console.log(lengthOfLongestSubstring("bbbbb")); // outputs 1