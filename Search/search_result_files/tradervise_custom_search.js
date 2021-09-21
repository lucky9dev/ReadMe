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
  document.getElementById("buy_logo").innerHTML = "<img src='../assets/img/crypto_logos/"+ x1 +"_logo.svg' alt='"+ x1 +"' width='32' height='32'>";
  var x2 = document.getElementById("crypto_coin_select").value;
  document.getElementById("buy_logo_name").innerHTML = x2;
  }

  window.onload = function func_select_buy() {
    var x5 = document.getElementById("crypto_coin_select").value;
    document.getElementById("buy_logo_name").innerHTML = x5;
    var x7 = document.getElementById("crypto_coin_select").value;
    document.getElementById("buy_logo").innerHTML = "<img src='../assets/img/crypto_logos/"+ x7 +"_logo.svg' alt='"+ x7 +"' width='32' height='32'>";

    var oldURL = "https://tradervise.com/crypto_search.php" + window.location.search;

    //window.alert(newURL);

    //CHECK USD OR CRYPTO PARAMETERS AT WINDOW LOAD
    var url = new URL(oldURL);
    var usd_or_crypto = url.searchParams.get("usd-selected");

    if (usd_or_crypto == 'usd'){
      document.getElementById("usd_selected").setAttribute('value','usd');
    }else{
      document.getElementById("usd_selected").setAttribute('value','crypto');
    }



    //document.getElementById("usd_selected").setAttribute('value','usd');
  }

  //CHANGE ORDERBY ORDER
function func_select_orderby() {

  var newURL = "https://tradervise.com/crypto_search.php" + window.location.search;
  var orderby_selection = document.getElementById("orderby_select").value;
  //window.alert(newURL);

  //GET URL TO SPLIT IT
  var url = new URL(newURL);
  var c = url.searchParams.get("orderby");

  //IF NOT PARAMETERS SKIP
  if (c != null){
    var newURL = newURL.split('&orderby=')[0];
  }

  window.location.href = newURL + "&orderby=" + orderby_selection;

}


//CHECKBOX TO SHOW OR HIDE RESULTS
function exchange_showMe(a) {

  var x = document.getElementById(a);

  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";

  }

}
