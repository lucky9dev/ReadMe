$("#orderby_select").change(function(){
    var select_value = $(this).val();
    console.log(select_value);
    var data = JSON.parse(localStorage.getItem('SearchResult'));
    switch (select_value){
        case "be":
            data.sort((a,b) => (a.exchange_price > b.exchange_price) ? 1 : ((b.exchange_price > a.exchange_price) ? -1 : 0))
            localStorage.setItem('SearchResult', JSON.stringify(data));
            loading();
            break;
        case "we":
            data.sort((b,a) => (a.exchange_price > b.exchange_price) ? 1 : ((b.exchange_price > a.exchange_price) ? -1 : 0))
            localStorage.setItem('SearchResult', JSON.stringify(data));
            loading();
            break;
        case "bd":
            data.sort((b,a) => (a.net_converted > b.net_converted) ? 1 : ((b.net_converted > a.net_converted) ? -1 : 0))
            localStorage.setItem('SearchResult', JSON.stringify(data));
            loading();
            break;
        case "wd":
            data.sort((a,b) => (a.net_converted > b.net_converted) ? 1 : ((b.net_converted > a.net_converted) ? -1 : 0))
            localStorage.setItem('SearchResult', JSON.stringify(data));
            loading();
            break;
        default:
            break;
    }
})

var defines = {
    'binance' : 'Binance.US' ,
    'bitflyer':'BitFlyer',
    'webull':'Webull',
    'kraken':'kraken',
    'gemini':'Gemini',
    'coinbase':'CoinBase',
    'robinhood':'Robinhood',
    'kucoin':'KuCoin'
}

function loading() {

    var total = localStorage.getItem('total');
    var text = '';
    var data = localStorage.getItem("SearchResult");
    data = JSON.parse(data);
    console.log(data);
    for(var i = 0; i < data.length; i ++) {
        var eachdata = data [i] ;
        text += '<div class="col-sm-12 col-lg-12">';
        if(eachdata.exchange == "binance") {
            text += '<div id="'+ defines[eachdata.exchange] +'" style="display:block">' ;
        }
        else {
            text += '<div id="'+ defines[eachdata.exchange] +'" style="display:block ">';
        }  
text +='            <div class="card">'
+'                <div class="card-body">'
+'                    <div class="row">'
+'                        <div class="col-md-4 text-center border-right">'
+'                            <a href="https://'+ eachdata.exchange +'.com/">';
 eachdata.exchange =='webull'? text  +='<img src="./search_result_files/webull.png"  width="150" height="150" />':  text  +='<img src="./search_result_files/' + eachdata.exchange + '.svg"  width="150" height="150" />';
text +='                            </a>'
+'                        </div>'
+'                        <div class="col-md-8 text-center">'
+'                            <div class="d-flex flex-row justify-content-center border-bottom">'
+'                                <div class="d-flex flex-row justify-content-center ">'
+'                                    <div class="pd-10 text-left">'
+'                                        <div id="usd" class="">'
+'                                            <img src="./search_result_files/BTC_logo.svg" alt="BTC" width="32" height="32" />'
+'                                        </div>'
+'                                        <div id="btc" style="display:none" class="">'
+'                                            <img src="./search_result_files/dollar2.svg" alt="BTC" width="32" height="32" />'
+'                                        </div>'
+'                                    </div>'
+'                                    <div class="pd-10 text-center">'
+'                                        <h3 style="display:none">0.00</h3>'
+'                                        <h3 style="color:#5965f9">'+ Math.round((eachdata.net_converted  + Number.EPSILON) * 1000000000) / 1000000000 +'</h3>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                            <div class="d-flex flex-row align-items-start justify-content-center" style="padding-top:10px">'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-right">'
+'                                        <li style="list-style-type:none"><h7 style="color:gray">Exchange Price: </h7></li>'
+'                                    </div>'
+'                                </div>'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-left">'
+'                                        <ul class="list-group list-group-flush">'
+'                                            <h7 style="color:black">$'+ Math.round((eachdata.exchange_price  + Number.EPSILON) * 10000) / 10000 +'</h7>'
+'                                        </ul>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                            <div class="d-flex flex-row align-items-start justify-content-center ">'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-right">'
+'                                        <li style="list-style-type:none"><h7 style="color:gray">Purchase: </h7><h7 style="display:none">Sell: </h7></li>'
+'                                    </div>'
+'                                </div>'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-left">'
+'                                        <ul class="list-group list-group-flush">'
+'                                            <h7 style="color:black">$'+ Math.round((total - eachdata.usd_fixed_fees - eachdata.usd_variable_fees  + Number.EPSILON) * 100) / 100 +'</h7>'
+'                                        </ul>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                            <div class="d-flex flex-row align-items-start justify-content-center ">'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-right">'
+'                                        <li style="list-style-type:none"><a style="color:lightgray" data-container="body" data-toggle="popover" data-popover-color="default" data-placement="left" title="" data-content="Other Exchanges or Bank Fees may apply." data-original-title="Exchange Fee"><i class="fas fa-info-circle"></i></a><h7 style="color:gray"> Fixed Fee: </h7></li>'
+'                                    </div>'
+'                                </div>'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-left">'
+'                                        <ul class="list-group list-group-flush">'
+'                                            <h7 style="color:black">$'+ Math.round(( eachdata.usd_fixed_fees + Number.EPSILON) * 100)/100  +'</h7>'
+'                                        </ul>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                            <div class="d-flex flex-row align-items-start justify-content-center ">'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-right">'
+'                                        <li style="list-style-type:none"><a style="color:lightgray" data-container="body" data-toggle="popover" data-popover-color="default" data-placement="left" title="" data-content="Other Exchanges or Bank Fees may apply." data-original-title="Exchange Fee"><i class="fas fa-info-circle"></i></a><h7 style="color:gray"> Fee: </h7></li>'
+'                                    </div>'
+'                                </div>'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-left">'
+'                                        <ul class="list-group list-group-flush">'
+'                                            <h7 style="color:black">$'+ Math.round(( eachdata.usd_variable_fees + Number.EPSILON) * 100)/100 + ' (' + Math.round((eachdata.usd_variable_fees / total * 100 + Number.EPSILON)*100)/100 + '%)' +'</h7>'
+'                                        </ul>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                            <div class="d-flex flex-row align-items-start justify-content-center ">'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-right">'
+'                                        <li style="list-style-type:none"><h7 style="color:gray">Total: </h7><h7 style="display:none">Total Received: </h7></li>'
+'                                    </div>'
+'                                </div>'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-left">'
+'                                        <ul class="list-group list-group-flush">'
+'                                            <h7 style="color:black">$'+ total  +'</h7>'
+'                                            <h7 style="display:none">100.00000000 BTC</h7>'
+'                                        </ul>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                            <div style="display:none" class="d-flex flex-row align-items-start justify-content-center ">'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-right">'
+'                                        <li style="display:none"><a style="color:lightgray" data-container="body" data-toggle="popover" data-popover-color="default" data-placement="left" title="" data-content="Fee exclude on the comparative." data-original-title="Exchange Fee"><i class="fas fa-info-circle"></i></a><h7 style="color:gray"> Wire Transfer Fee: </h7></li>'
+'                                    </div>'
+'                                </div>'
+'                                <div class="col-md-6">'
+'                                    <div class="pd-1 text-left">'
+'                                        <ul class="list-group list-group-flush">'
+'                                            <h7 style="display:none">$0.00</h7>'
+'                                        </ul>'
+'                                    </div>'
+'                                </div>'
+'                            </div>'
+'                        </div>'
+'                        <div class="ml-auto text-muted">'
+'                            <a href="javascript:void(0)" class="icon d-none d-md-inline-block mr-3"><i class="far fa-thumbs-up"></i></a>'
+'                        </div>'
+'                    </div>'
+'                </div>'
+'            </div>'
+'        </div>'
+'    </div>'
    }
    $('#result').html(text);

}




