window.addEventListener('DOMContentLoaded', function (event){
  let s=document.getElementsByName("myselectname");
  s[0].addEventListener("change", function(event){
    let select = event.target;
    let radios = document.getElementsByClassName("myradios");
    console.log(select.value);
    if(select.value=="3"){
      radios.style.display= "none";
    }
    else{
      radios.style.display= "block";
    }
  });

  let r = document.querySelectorAll(".myradios input[type=radio]");
  r.forEach(function(radio){
    radio.addEventListener("change", function(event){
      let r =event.target;
      console.log(r.value);
    });
  });
});

function getPrices()
{
  return {
    proztype: [100,150,200],
    prozoptions:{
      option1: 15,
      option2: 20,
    },
    prozproperties:{
      prozboxes1: 15,
      prozboxes2: 20,
    }
  };
}
