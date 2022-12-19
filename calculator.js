function  proiz() {
    let f = document.getElementById('count');
    f.addEventListener('input', function () { proiz(); });
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = select.value == "2" ? "block" : "none";
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = select.value == "3" ? "block" : "none";
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    let f2 =document.getElementById('count').value;
    s[0].addEventListener('change', function () {
      if (select.value === '1') {
  
        document.getElementById('prodPrice').innerHTML =
          'Цена: ' + prices.prodTypes[0] * f2 + ' рублей';
      }
      else if (select.value === '2') {
        document.getElementById('prodPrice').innerHTML =
          'Цена: ' + prices.prodTypes[1] * f2 + ' рублей.';
      }
      else if (select.value === '3') {
        document.getElementById('prodPrice').innerHTML =
          'Цена: ' + prices.prodTypes[2] * f2 + ' рублей.';
      } 
    });
    let price_pr = document.getElementById('prodPrice');
    price_pr.innerHTML = 'Цена: ' + price*f2  + ' рублей.';
  }
  function getPrices() {
    return {
      prodTypes: [100, 150, 200],
      prodOptions: {
        option1: 15,
        option2: 20,
      },
      prodProperties: {
        prop1: 30,
        prop2: 40,
      },
    };
  }
  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function (event) {
      proiz();
    });
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
      radio.addEventListener("change", function (event) {
        proiz();
      });
    });
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function (event) {
        proiz();
      });
    });
    proiz();
  });
  function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}
