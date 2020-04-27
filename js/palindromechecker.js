function palindrome(str) {
  // REMOVE PUNCTUATION
  let punctuationRemoved = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  // LOWERCASE ALL CHARACTERS
  let lowerCasing = punctuationRemoved.toLowerCase();

  // REMOVE SPACE
  let spacingRemoved = lowerCasing.replace(/\s/g, '');

  // TEST IF FORWARD MATCHES REVERSE
  function palindromeTest() {
    let forward = spacingRemoved.split('');
    let reverse = spacingRemoved.split('').reverse();

    return forward.join('') === reverse.join('');
  }

  return palindromeTest();
}

// TEST FUNCTION
console.log(palindrome('eye'));
console.log('=======================================');
console.log(palindrome('A man, a plan, a canal. Panama'));
