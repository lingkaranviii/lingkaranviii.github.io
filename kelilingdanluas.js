/*Mari Mencoba 4*/

function myFunction19() {
	var x = document.getElementById("myText19").value.split(' ').join('');
    var jawaban;
     if (x == "31,4") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>Keliling Piring</b> <br><br> Dikarenakan jari-jari piring tersebut diketahui \\[5\\,cm\\] dan \\[\\pi=3,14\\] maka kelilingnya, <br><br> \\[K=2 \\pi r\\] <br><br> \\[K=2×3,14×5\\] <br><br> \\[K=31,4\\,cm\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo2").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction20() {
	var x = document.getElementById("myText20").value.split(' ').join('');
     var jawaban;
     if (x == "78,5") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>Luas Piring</b> <br><br> \\[L=\\pi r^{2}\\] <br><br> \\[L=3,14×5×5\\] <br><br> \\[L=78,5\\,cm^{2}\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo2").innerHTML = jawaban;
     MathJax.typeset();
}

/* mari mencoba isian */

function myFunction21() {
  var x = document.getElementById("myText21").value.split(' ').join('');
   var jawaban;
   if (x == "2") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo21").innerHTML = jawaban;
}

function myFunction22() {
  var x = document.getElementById("myText22").value.split(' ').join('');
   var jawaban;
   if (x == "3,14") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo22").innerHTML = jawaban;
}

function myFunction23() {
  var x = document.getElementById("myText23").value.split(' ').join('');
   var jawaban;
   if (x == "5") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo23").innerHTML = jawaban;
}

function myFunction24() {
  var x = document.getElementById("myText24").value.split(' ').join('');
   var jawaban;
   if (x == "3,14") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo24").innerHTML = jawaban;
}

function myFunction25() {
  var x = document.getElementById("myText25").value.split(' ').join('');
   var jawaban;
   if (x == "5") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo25").innerHTML = jawaban;
}

function myFunction26() {
  var x = document.getElementById("myText26").value.split(' ').join('');
   var jawaban;
   if (x == "5") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo26").innerHTML = jawaban;
}

function d1() {
  var x = document.getElementById("textd1").value;
  var jawaban;
  if (x == "12,2") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod1").innerHTML = jawaban;
}

function k1() {
  var x = document.getElementById("textk1").value;
  var jawaban;
  if (x == "38,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok1").innerHTML = jawaban;
}

function pi1() {
  var x = document.getElementById("textpi1").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi1").innerHTML = jawaban;
}

function d2() {
  var x = document.getElementById("textd2").value;
  var jawaban;
  if (x == "9,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod2").innerHTML = jawaban;
}

function k2() {
  var x = document.getElementById("textk2").value;
  var jawaban;
  if (x == "29,2") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok2").innerHTML = jawaban;
}

function pi2() {
  var x = document.getElementById("textpi2").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi2").innerHTML = jawaban;
}

function d3() {
  var x = document.getElementById("textd3").value;
  var jawaban;
  if (x == "4,8") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod3").innerHTML = jawaban;
}

function k3() {
  var x = document.getElementById("textk3").value;
  var jawaban;
  if (x == "15,1") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok3").innerHTML = jawaban;
}

function pi3() {
  var x = document.getElementById("textpi3").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi3").innerHTML = jawaban;
}

function d4() {
  var x = document.getElementById("textd4").value;
  var jawaban;
  if (x == "7,1") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod4").innerHTML = jawaban;
}

function k4() {
  var x = document.getElementById("textk4").value;
  var jawaban;
  if (x == "22,8") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok4").innerHTML = jawaban;
}

function pi4() {
  var x = document.getElementById("textpi4").value;
  var jawaban;
  if (x == "3,21") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi4").innerHTML = jawaban;
}

function d5() {
  var x = document.getElementById("textd5").value;
  var jawaban;
  if (x == "5,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod5").innerHTML = jawaban;
}

function k5() {
  var x = document.getElementById("textk5").value;
  var jawaban;
  if (x == "16,7") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok5").innerHTML = jawaban;
}

function pi5() {
  var x = document.getElementById("textpi5").value;
  var jawaban;
  if (x == "3,15") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi5").innerHTML = jawaban;
}

function d6() {
  var x = document.getElementById("textd6").value;
  var jawaban;
  if (x == "5,4") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod6").innerHTML = jawaban;
}

function k6() {
  var x = document.getElementById("textk6").value;
  var jawaban;
  if (x == "17") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok6").innerHTML = jawaban;
}

function pi6() {
  var x = document.getElementById("textpi6").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi6").innerHTML = jawaban;
}

function d7() {
  var x = document.getElementById("textd7").value;
  var jawaban;
  if (x == "3,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod7").innerHTML = jawaban;
}

function k7() {
  var x = document.getElementById("textk7").value;
  var jawaban;
  if (x == "10,4") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok7").innerHTML = jawaban;
}

function pi7() {
  var x = document.getElementById("textpi7").value;
  var jawaban;
  if (x == "3,15") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi7").innerHTML = jawaban;
}

function d8() {
  var x = document.getElementById("textd8").value;
  var jawaban;
  if (x == "3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod8").innerHTML = jawaban;
}

function k8() {
  var x = document.getElementById("textk8").value;
  var jawaban;
  if (x == "9,4") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok8").innerHTML = jawaban;
}

function pi8() {
  var x = document.getElementById("textpi8").value;
  var jawaban;
  if (x == "3,13") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi8").innerHTML = jawaban;
}

function d9() {
  var x = document.getElementById("textd9").value;
  var jawaban;
  if (x == "2,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod9").innerHTML = jawaban;
}

function k9() {
  var x = document.getElementById("textk9").value;
  var jawaban;
  if (x == "7,2") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok9").innerHTML = jawaban;
}

function pi9() {
  var x = document.getElementById("textpi9").value;
  var jawaban;
  if (x == "3,13") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi9").innerHTML = jawaban;
}

function d10() {
  var x = document.getElementById("textd10").value;
  var jawaban;
  if (x == "2") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod10").innerHTML = jawaban;
}

function k10() {
  var x = document.getElementById("textk10").value;
  var jawaban;
  if (x == "6,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok10").innerHTML = jawaban;
}

function pi10() {
  var x = document.getElementById("textpi10").value;
  var jawaban;
  if (x == "3,15") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi10").innerHTML = jawaban;
}

function r1() {
  var x = document.getElementById("textr1").value;
  var jawaban;
  if (x == "31,48") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demor1").innerHTML = jawaban;
}

function r2() {
  var x = document.getElementById("textr2").value;
  var jawaban;
  if (x == "10") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demor2").innerHTML = jawaban;
}

function r3() {
  var x = document.getElementById("textr3").value;
  var jawaban;
  if (x == "3,148") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demor3").innerHTML = jawaban;
}

function ksmpl1() {
  var x = document.getElementById("textksmpl1").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demoksmpl1").innerHTML = jawaban;
}

function ksmpl2() {
  var x = document.getElementById("textksmpl2").value;
  var jawaban;
  if (x == "7") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demoksmpl2").innerHTML = jawaban;
}

function ksmpl3() {
  var x = document.getElementById("textksmpl3").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demoksmpl3").innerHTML = jawaban;
}