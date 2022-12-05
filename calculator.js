function proz(){
    let f=document.getElementById('proz2');
    f.addEventListener('input', function() {proz();});
    let s=document.getElementsByClassName("types");
    let select=s[0];
    let price=0;
    let prices=getPrices();
    let priceIndex=parseInt(select.value);
    if(priceIndex>=0){
        price=prices.Types[priceIndex];
    }
    let radioDiv=document.getElementsByClassName("radios");
    radioDiv.style.display=select.value=="2" ? "block" : "none";
    let radios=document.getElementsByName("Options");
    radios.forEach(function(radio){
        if(radio.checked){
            let optionPrice=prices.Options[radio.value];
            if(optionPrice!=undefined){
                price+=optionPrice;
            }
        }
    });
    let checkDiv=document.getElementsByClassName("checkboxes");
    checkDiv.style.display=select.value=="3" ? "block" : "none";
    let checkboxes=document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox){
        if(checkbox.checked){
            let prozPrice = prices.Properties[checkbox.name];
            if(prozPrice!=undefined){
                price+=prozPrice;
            }
        }
    });
    let f1=document.getElementById('count').value;
    s[0].addEventListener('change', function (event){
        if(select.value=='1'){
            document.getElementById('prodPrice').innerHTML=
            'Цена: ' + prices.Types[0]*f1+ ' рублей.';
        }
        else if(select.value=='2'){
            document.getElementById('prodPrice').innerHTML=
            'Цена: ' + prices.Types[1]*f1+ ' рублей.';
        }
        else if(select.value=='3'){
            document.getElementById('prodPrice').innerHTML=
            'Цена: ' + prices.Types[2]*f1+ ' рублей.';
        }
    });
    let price_end=document.getElementById('prodPrice');
    price_end.innerHTML='Цена: ' + price*f1 + ' рублей.';
}

function getPrices(){
    return {
        Types: [100, 150, 200],
        Options:{
            option1: 15,
            option2: 20,
        },
        Properties:{
            prop1: 30,
            prop2: 40,
        },
    };
}

window.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM fully loaded and parsed");
    let s=document.getElementsByClassName("types");
    let select=s[0];
    select.addEventListener("change", function(event){
        proz();
    });
    let radios=document.getElementsByName("prozoptions");
    radios.forEach(function (radio){
        radio.addEventListener("change", function(event){
            proz();
        });
    });
    let checkboxes=document.querySelectorAll("#checboxes input");
    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener("change", function(){
            proz();
        });
    });
    proz();
});
function cifra(){
    if(event.keyCode<48|| event.keyCode>57)
    event.returnValue=false;
}
