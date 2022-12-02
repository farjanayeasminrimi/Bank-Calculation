document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawInputAmount = getInputValueById('withdraw-field');
  const withdrawInnerTextAmount = getInnerTextById('withdraw-value');
  const totalWithdrawAmount = withdrawInputAmount + withdrawInnerTextAmount;
  setEmptyValueById('withdraw-field');
  const balanceInnerTextAmount = getInnerTextById('balance-value');
  if(withdrawInputAmount > balanceInnerTextAmount){
    alert('You wanted to withdraw too much money. That much money you do not have in your account.')
    return;
  }
  const setWithdrawValue = setValueById('withdraw-value', totalWithdrawAmount);
  const currentBalanceAmount = balanceInnerTextAmount - withdrawInputAmount;
  const setBalanceValue = setValueById('balance-value', currentBalanceAmount);
  return setWithdrawValue, setBalanceValue;
})