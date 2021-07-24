export const isValidEmail = emailStr => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const result = reg.test(emailStr);
  console.log(result);
  return result;
};
