// Rev. 04/26/2021 include URL parameters and redirection

var buyForm = document.getElementById("buyForm");
var amount = document.getElementById("amount");
//var payment_method = document.getElementById("payment_method");
var usd_selected = document.getElementById("usd_selected");
var crypto_coin_select = document.getElementById("crypto_coin_select");
var transaction = document.getElementById("transaction");
var submitButton_buy = document.getElementById("submitButton_buy");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknownError = document.getElementById("unknownError");

//var check_amount;

function afterSubmit(e, check_amount){
  e.preventDefault();

  var payment_method = buyForm.querySelector('input[name="payment_method"]:checked');
  var transaction = buyForm.querySelector('input[name="transaction"]:checked');
  //var usd_selected = buyForm.querySelector('[type="checkbox"]:checked');


  var info = {
    amount: amount.value,
    payment_method: payment_method.value,
    usd_selected: usd_selected.value,
    crypto_coin_select: crypto_coin_select.value,
    transaction: transaction.value,
  };

  var url = "https://api.tradervise.com/v1/request";

  buttonText.textContent = "Searching...";
  buttonSpinner.classList.remove("d-none");
  submitButton_buy.disabled = true;

//***************************
//I MODIFIED .HTACCESS!!!!! in api.tradervise.com/ otherwise does not work CORS!!
//**************************



  fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //mode: 'no-cors',
    //cache: 'no-cache',
    //redirect: "follow",
    //headers: {
    //'Content-Type': 'application/json',
  //},
    body: JSON.stringify(info)
  })

  .then(response => response.json())
  .then(response => {
    console.log(response);
    
    //reset form?
    //buyForm.reset();

    buttonText.textContent = "Search";
    buttonSpinner.classList.add("d-none");
    submitButton_buy.disabled = false;

    var response_id = response['requests_id'];
    var response_amount = response['amount'];
    var response_crypto_coin_select = response['crypto_coin_select'];
    var response_payment_method = response['payment_method'];
    var response_transaction = response['transaction'];
    var response_usd_selected = response['usd_selected'];
    

    window.location.href = 'https://tradervise.com/crypto_search.php?id=' + response_id + '&amount=' +
    response_amount + '&crypto-coin-select=' + response_crypto_coin_select +
    '&payment-method=' + response_payment_method + '&transaction=' + response_transaction +
    '&usd-selected=' + response_usd_selected;
    
    
  })
  .catch(err => {
    console.log(err);
    console.log("Somenthing went wrong. I am here");
    setTimeout(function(){
      buttonText.textContent = "Search";
      buttonSpinner.classList.add("d-none");
      submitButton_buy.disabled = false;
    },3000);
  });







}
buyForm.addEventListener("submit",afterSubmit);
