var x4 = document.getElementById("kalkulator");
var xx4= document.querySelector('.kalkulator');

xx4.addEventListener("click",function(){
    x4.classList.toggle("hilang");
  });

  /* kalkulator */
function view(val) {
    document.getElementById("viewer").value += val;
  }
  
  function clean() {
    document.getElementById("viewer").value = "";
  }
  
  function backspace() {
    var val = document.getElementById("viewer").value;
    document.getElementById("viewer").value = val.substring(
      0,
      val.length - 1
    );
  }
  
  function equal() {
    var val = document.getElementById("viewer").value;
    if (val) {
      document.getElementById("viewer").value = eval(val);
    }
  }
  
  function sqrt() {
    var val = document.getElementById("viewer").value;
    document.getElementById("viewer").value = Math.sqrt(val);
  }