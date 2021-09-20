var Position = {
    'binance' : 'Binance.US' ,
    'bitflyer':'BitFlyer',
    'webull':'Webull',
    'kraken':'kraken',
    'gemini':'Gemini',
    'coinbase':'CoinBase',
    'robinhood':'Robinhood',
    'kucoin':'KuCoin'
}

var api_key = '7a2728a6a7mshbfbcb13bf45efc0p15d311jsnc8088cee3804';

var names = [
    'BTC','ETH','ADA','DOGECOIN'
] ;
var results = [] ;
for( var i=0;i<names.length ; i++) {
    fetch("https://tradervise-crypto-exchange-comparator.p.rapidapi.com/v1/compare?amount="+100+"&crypto_coin_select="+names[i]+"&payment_method=ach-bank&transaction=buy&usd_select=usd", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tradervise-crypto-exchange-comparator.p.rapidapi.com",
		"x-rapidapi-key": api_key
	}
})
  .then(response => response.json())
  .then(response => {
    
    var data = response  , result = { position : '' , price : 0 };
    var title = '';
    console.log(data);
    data.sort((a,b) => (a.exchange_price > b.exchange_price) ? 1 : ((b.exchange_price > a.exchange_price) ? -1 : 0))
    result.position = Position[data[0].exchange];
    if(data[0].pair.includes('BTC') || data[0].pair == 'XBTUSDT' || data[0].pair == 'btcusd' ) {
        title = 'BTC';
        result.price = Math.round((data[0].exchange_price + + Number.EPSILON)*100) / 100 ;
    }
    else if(data[0].pair.includes('ETH') || data[0].pair == 'ethusd') {
        title = "ETH";
        result.price = Math.round((data[0].exchange_price + + Number.EPSILON)*100) / 100 ;
    }
    else if(data[0].pair == 'ADAUSDT' || data[0].pair == 'ADA' || data[0].pair == 'ADA-USD' ) {
        title = "ADA";
        result.price = Math.round((data[0].exchange_price + + Number.EPSILON)*10000) / 10000 ;
    }
    else {
        result.price = Math.round((data[0].exchange_price + + Number.EPSILON)*10000) / 10000 ;
        title = "DOGECOIN";
    }
    var price_id = "#" + title + '_best_buying_price';
    var position_id = "#" + title + '_best_buying_position';
    $(price_id).text( '$ ' + result.price);
    $(position_id).text( "Best buying price at " + result.position ); 
    results.push(result);
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