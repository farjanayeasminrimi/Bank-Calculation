function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldAmount = parseFloat(inputFieldValueString);
  return inputFieldAmount;
}
function getInnerTextById(innerText){
  const innerTextElement = document.getElementById(innerText);
  const innerTextString = innerTextElement.innerText;
  const innerTextAmount = parseFloat(innerTextString);
  return innerTextAmount;
}
function setValueById(id, value){
  const theElement = document.getElementById(id);
  theElement.innerText = value;
}
function setEmptyValueById(id){
  const theElement = document.getElementById(id);
  theElement.value = '';
}