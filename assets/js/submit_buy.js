// Rev. 04/26/2021 include URL parameters and redirection
var api_key = "7a2728a6a7mshbfbcb13bf45efc0p15d311jsnc8088cee3804";
var buyForm = document.getElementById("buyForm");
var amount = document.getElementById("amount");
var usd_selected = document.getElementById("usd_selected");
var crypto_coin_select = document.getElementById("crypto_coin_select");
var transaction = document.getElementById("transaction");
var submitButton_buy = document.getElementById("submitButton_buy");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknownError = document.getElementById("unknownError");

var coins_type = [''];


function afterSubmit(e, check_amount){
  e.preventDefault();

  var payment_method = buyForm.querySelector('input[name="payment_method"]:checked');
  var transaction = buyForm.querySelector('input[name="transaction"]:checked');
  //var usd_selected = buyForm.querySelector('[type="checkbox"]:checked');




  buttonText.textContent = "Searching...";
  buttonSpinner.classList.remove("d-none");
  submitButton_buy.disabled = true;

//***************************
//I MODIFIED .HTACCESS!!!!! in api.tradervise.com/ otherwise does not work CORS!!
//**************************



fetch("https://tradervise-crypto-exchange-comparator.p.rapidapi.com/v1/compare?amount="+amount.value+"&crypto_coin_select="+crypto_coin_select.value+"&payment_method="+payment_method.value+"&transaction="+transaction.value+"&usd_select="+usd_selected.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tradervise-crypto-exchange-comparator.p.rapidapi.com",
		"x-rapidapi-key": api_key
	}
})
  .then(response => response.json())
  .then(response => {
    
    //reset form?
    //buyForm.reset();

    buttonText.textContent = "Search";
    buttonSpinner.classList.add("d-none");
    submitButton_buy.disabled = false;
    var data = response ;
    data.sort((a,b) => (a.net_converted > b.net_converted) ? 1 : ((b.net_converted > a.net_converted) ? -1 : 0))
    localStorage.setItem('SearchResult', JSON.stringify(data));
    window.localStorage.setItem('SearchResult', JSON.stringify(data));
    window.localStorage.setItem('total', 100); 
    window.location.href="./Search/search_result.html";
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
