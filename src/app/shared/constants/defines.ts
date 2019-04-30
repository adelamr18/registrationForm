export const alerts = {
  minEightCharsAlert: 'Password should be 8 or more characters',
  oneLowerCaseLetterAlert: 'Password should contain one lowercase letter',
  oneUpperCaseLetterAlert: ' Password should contain one uppercase letter',
  oneNumberAlert: 'Password should contain one number',
  oneSpecialCharacterAlert: 'Password should contain one special character'
};

export const regexPatterns = {
  oneLowerCaseLetter: '^(?=.*[a-z])',
  oneUpperCaseLetter: '^(?=.*[A-Z])',
  oneNumber: '^(?=.*[0-9])',
  oneSpecialChar: '^(?=.*?[^\w\s])'
};

