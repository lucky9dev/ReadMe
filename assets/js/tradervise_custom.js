function fuc_usd_btc() {
  var x = document.getElementById("usd");
  var y = document.getElementById("btc");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    //Set checkbox value to USD
    document.getElementById("usd_selected").setAttribute('value','usd');
  } else {
    x.style.display = "none";
    y.style.display = "block";
    //Set checkbox value to crypto
    document.getElementById("usd_selected").setAttribute('value','crypto');
  }
}

function func_select_buy_logo() {
  var x1 = document.getElementById("crypto_coin_select").value;
  document.getElementById("buy_logo").innerHTML = "<img src='https://tradervise.com/assets/img/crypto_logos/"+ x1 +"_logo.svg' alt='"+ x1 +"' width='32' height='32'>";
  var x2 = document.getElementById("crypto_coin_select").value;
  document.getElementById("buy_logo_name").innerHTML = x2;
  }

  window.onload = function func_select_buy() {
    document.getElementById("usd_selected").setAttribute('value','usd');
    var x5 = document.getElementById("crypto_coin_select").value;
    document.getElementById("buy_logo_name").innerHTML = x5;
    var x7 = document.getElementById("crypto_coin_select").value;
    document.getElementById("buy_logo").innerHTML = "<img src='https://tradervise.com/assets/img/crypto_logos/"+ x7 +"_logo.svg' alt='"+ x7 +"' width='32' height='32'>";

  }





$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
