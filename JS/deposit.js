document.getElementById('deposit-btn').addEventListener('click', function(){
 const depositInputAmount = getInputValueById('deposit-field');
 const depositInnerTextAmount = getInnerTextById('deposit-value');
 const totalDepositAmount = depositInputAmount + depositInnerTextAmount;
 const setDepositValue =  setValueById('deposit-value', totalDepositAmount);
 setEmptyValueById('deposit-field');
 const balanceInnerTextAmount = getInnerTextById('balance-value');
 const currentBalance = depositInputAmount + balanceInnerTextAmount;
 const setTotalBalance =  setValueById('balance-value', currentBalance);
 return setDepositValue, setTotalBalance;
})