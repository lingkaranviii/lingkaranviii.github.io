/*Mari Mencoba 4*/

function myFunction19() {
	var x = document.getElementById("myText19").value.split(' ').join('');
    var jawaban;
     if (x == "25,12") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>Keliling Piring</b> <br><br> Dikarenakan jari-jari piring tersebut diketahui \\[5\\,cm\\] dan \\[\\pi=3,14\\] maka kelilingnya, <br><br> \\[K=2 \\pi r\\] <br><br> \\[K=2×3,14×5\\] <br><br> \\[K=25,12\\,cm\\]";
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

function d1() {
  var x = document.getElementById("textd1").value;
  var jawaban;
  if (x == "3,6") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod1").innerHTML = jawaban;
}

function k1() {
  var x = document.getElementById("textk1").value;
  var jawaban;
  if (x == "11,3") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
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
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi1").innerHTML = jawaban;
}

function d2() {
  var x = document.getElementById("textd2").value;
  var jawaban;
  if (x == "2,7") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod2").innerHTML = jawaban;
}

function k2() {
  var x = document.getElementById("textk2").value;
  var jawaban;
  if (x == "8,5") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok2").innerHTML = jawaban;
}

function pi2() {
  var x = document.getElementById("textpi2").value;
  var jawaban;
  if (x == "3,15") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi2").innerHTML = jawaban;
}

function d3() {
  var x = document.getElementById("textd3").value;
  var jawaban;
  if (x == "4,7") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod3").innerHTML = jawaban;
}

function k3() {
  var x = document.getElementById("textk3").value;
  var jawaban;
  if (x == "14,8") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok3").innerHTML = jawaban;
}

function pi3() {
  var x = document.getElementById("textpi3").value;
  var jawaban;
  if (x == "3,15") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi3").innerHTML = jawaban;
}

function d4() {
  var x = document.getElementById("textd4").value;
  var jawaban;
  if (x == "5") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod4").innerHTML = jawaban;
}

function k4() {
  var x = document.getElementById("textk4").value;
  var jawaban;
  if (x == "15,7") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok4").innerHTML = jawaban;
}

function pi4() {
  var x = document.getElementById("textpi4").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi4").innerHTML = jawaban;
}

function d5() {
  var x = document.getElementById("textd5").value;
  var jawaban;
  if (x == "8") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demod5").innerHTML = jawaban;
}

function k5() {
  var x = document.getElementById("textk5").value;
  var jawaban;
  if (x == "25,1") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demok5").innerHTML = jawaban;
}

function pi5() {
  var x = document.getElementById("textpi5").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demopi5").innerHTML = jawaban;
}

function ksmpl1() {
  var x = document.getElementById("textksmpl1").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
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
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demoksmpl1").innerHTML = jawaban;
}

function ksmpl3() {
  var x = document.getElementById("textksmpl3").value;
  var jawaban;
  if (x == "3,14") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demoksmpl3").innerHTML = jawaban;
}