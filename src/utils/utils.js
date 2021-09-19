function findWordForm(amount, forms) {
  let [, nameForm] = forms;
  if (amount % 10 > 4) [, , nameForm] = forms;
  if (amount % 10 === 0) [, , nameForm] = forms;

  if (amount % 10 === 1) [nameForm] = forms;

  return nameForm;
}

export { findWordForm };
