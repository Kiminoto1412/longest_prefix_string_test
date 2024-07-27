function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
  
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      const charCode = char.charCodeAt(0);
      if (charCode < 65 || charCode > 90) { 
        for (let j = 1; j < strs.length; j++) {
          if (i >= strs[j].length || strs[j][i] !== char) {
            return prefix;
          }
        }
        prefix += char;
      } else {
        return prefix; 
      }
    }
    return prefix;
  }
  
// test case
function testLongestCommonPrefix() {
    const testCases = [
        {
            input: ["flower", "flow", "flight"],
            expected: "fl"
        },
        {
            input: ["dog", "racecar", "car"],
            expected: ""
        },
        {
            input: ["FLower", "FLow", "FLight"],
            expected: ""
        },
        {
            input: ["", "b", "c"],
            expected: ""
        },
        {
            input: ["a"],
            expected: "a"
        },
        {
            input: ["aa", "a"],
            expected: "a"
        },
        {
            input: ["lowercase", "lower", "low"],
            expected: "low"
        },
        {
            input: ["mixedCASE", "mixed", "mix"],
            expected: "mix"
        },
        {
            input: ["same", "same", "same"],
            expected: "same"
        },
        {
            input: ["prefix", "prefixation", "pref"],
            expected: "pref"
        },
        {
            input: ["short", "sh", "sho"],
            expected: "sh"
        }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = longestCommonPrefix(input);
        console.log(`Test case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected: "${expected}", Got: "${result}")`);
    }
}

testLongestCommonPrefix();
