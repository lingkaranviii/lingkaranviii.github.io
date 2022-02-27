/*Mari Mencoba 5*/

function myFunction21() {
	var x = document.getElementById("myText21").value.split(' ').join('');
     var jawaban;
     if (x == "32") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Nilai</b> \\[x\\] <br><br> Dikarenakan \\[m\\angle LKM = 50^{\\circ}\\] dan \\[m\\angle LQM = (3x+4)^{\\circ}\\] dan sudut keliling \\[\\angle LKM\\] menghadap busur yang sama dengan sudut pusat \\[m\\angle LQM\\], maka: <br><br> \\[m\\angle LQM = 2×m\\angle LKM\\] <br><br> \\[(3x+4)^{\\circ}=2×50^{\\circ}\\] <br><br> \\[(3x+4)^{\\circ}=100^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[3x^{\\circ}=100^{\\circ}-4^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[3x^{\\circ}=96^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[x=\\frac{96^{\\circ}}{3^{\\circ}}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[x=32\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo3").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction22() {
	var x = document.getElementById("myText22").value.split(' ').join('');
     var jawaban;
     if (x == "100") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>b. \\[m\\angle LQM\\]</b> <br><br> Dikarenakan nilai \\[x=32^{\\circ}\\] maka \\[m\\angle LQM\\], <br><br> \\[m\\angle LQM=(3x+4)^{\\circ}\\] <br><br> \\[m\\angle LQM=3(32^{\\circ})+4^{\\circ}\\] <br><br> \\[m\\angle LQM=96^{\\circ}+4^{\\circ}\\] <br><br> \\[m\\angle LQM=100^{\\circ}\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo3").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction23() {
	var x = document.getElementById("myText23").value.split(' ').join('');
     var jawaban;
     if (x == "113") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>c. \\[m\\angle BAC\\]</b> <br><br> Dikarenakan jumlah besar sudut yang berhadapan pada segiempat tali busur adalah \\[\\frac{1}{2}×360^{\\circ}=180^{\\circ}\\], \\[\\angle BAC\\] berhadapan dengan \\[\\angle BDC\\] dan \\[m\\angle BDC = 67^{\\circ}\\] maka: <br><br> \\[m\\angle BAC = 180^{\\circ} - m\\angle BDC\\] <br><br> \\[m\\angle BAC = 180^{\\circ} - 67^{\\circ}\\] <br><br> \\[m\\angle BAC = 113^{\\circ}\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo3").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction24() {
	var x = document.getElementById("myText24").value.split(' ').join('');
     var jawaban;
     if (x == "45") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>d. \\[m\\angle ABD\\]</b> <br><br> Dikarenakan jumlah besar sudut yang berhadapan pada segiempat tali busur adalah \\[\\frac{1}{2}×360^{\\circ}=180^{\\circ}\\], \\[\\angle ABD\\] berhadapan dengan \\[\\angle ACD\\] dan \\[m\\angle ACD = 135^{\\circ}\\] maka: <br><br> \\[m\\angle ABD = 180^{\\circ} - m\\angle ACD\\] <br><br> \\[m\\angle ABD = 180^{\\circ} - 135^{\\circ}\\] <br><br> \\[m\\angle ABD = 45^{\\circ}\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo3").innerHTML = jawaban;
     MathJax.typeset();
}

/* mari mencoba isian */

function myFunction31() {
  var x = document.getElementById("myText31").value.split(' ').join('');
   var jawaban;
   if (x == "3") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo31").innerHTML = jawaban;
}

function myFunction32() {
  var x = document.getElementById("myText32").value.split(' ').join('');
   var jawaban;
   if (x == "4") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo32").innerHTML = jawaban;
}

function myFunction33() {
  var x = document.getElementById("myText33").value.split(' ').join('');
   var jawaban;
   if (x == "100") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo33").innerHTML = jawaban;
}

function myFunction34() {
  var x = document.getElementById("myText34").value.split(' ').join('');
   var jawaban;
   if (x == "3") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo34").innerHTML = jawaban;
}

function myFunction35() {
  var x = document.getElementById("myText35").value.split(' ').join('');
   var jawaban;
   if (x == "100") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo35").innerHTML = jawaban;
}

function myFunction36() {
  var x = document.getElementById("myText36").value.split(' ').join('');
   var jawaban;
   if (x == "4") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo36").innerHTML = jawaban;
}

function myFunction37() {
  var x = document.getElementById("myText37").value.split(' ').join('');
   var jawaban;
   if (x == "3") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo37").innerHTML = jawaban;
}

function myFunction38() {
  var x = document.getElementById("myText38").value.split(' ').join('');
   var jawaban;
   if (x == "96") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo38").innerHTML = jawaban;
}

function myFunction39() {
  var x = document.getElementById("myText39").value.split(' ').join('');
   var jawaban;
   if (x == "3") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo39").innerHTML = jawaban;
}

function myFunction40() {
  var x = document.getElementById("myText40").value.split(' ').join('');
   var jawaban;
   if (x == "32") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo40").innerHTML = jawaban;
}

function myFunction41() {
  var x = document.getElementById("myText41").value.split(' ').join('');
   var jawaban;
   if (x == "4") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo41").innerHTML = jawaban;
}

function myFunction42() {
  var x = document.getElementById("myText42").value.split(' ').join('');
   var jawaban;
   if (x == "96") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo42").innerHTML = jawaban;
}

function myFunction43() {
  var x = document.getElementById("myText43").value.split(' ').join('');
   var jawaban;
   if (x == "4") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo43").innerHTML = jawaban;
}

function myFunction44() {
  var x = document.getElementById("myText44").value.split(' ').join('');
   var jawaban;
   if (x == "180") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo44").innerHTML = jawaban;
}

function myFunction45() {
  var x = document.getElementById("myText45").value.split(' ').join('');
   var jawaban;
   if (x == "67") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo45").innerHTML = jawaban;
}

function myFunction46() {
  var x = document.getElementById("myText46").value.split(' ').join('');
   var jawaban;
   if (x == "180") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo46").innerHTML = jawaban;
}

function myFunction47() {
  var x = document.getElementById("myText47").value.split(' ').join('');
   var jawaban;
   if (x == "135") {
     jawaban = "<img src='benar.png'  width='25px' height='25px'>";
   } else if (x =="") {
     jawaban = ""
   } else {
     jawaban = "<img src='salah.png'  width='25px' height='25px'>";
   }
   document.getElementById("demo47").innerHTML = jawaban;
}

/*Pertanyaan 5*/

function myFunction25() {
	var x = document.getElementById("myText25").value.split(' ').join('');
     var jawaban;
     if (x == "35") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[m\\angle QPS = 180^{\\circ} - m\\angle QRS\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[2x = 180^{\\circ} - 2x - 40^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[2x = 180^{\\circ} - 2x - 40^{\\circ}\\] <br><br> &nbsp; \\[2x + 2x= 180^{\\circ} - 40^{\\circ}\\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[4x= 140^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[x= \\frac{140^{\\circ}}{4}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[x= 35^{\\circ}\\]";
     } else if (x =="") {
      jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
    } else {
      jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo25a").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction26() {
	var x = document.getElementById("myText26").value.split(' ').join('');
     var jawaban;
     if (x == "140") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[m\\angle QPS = 2x = 2(35)^{\\circ} = 70^{\\circ}\\] <br><br><br> \\[m\\angle QNS\\,\\,minor = 2 × m\\angle QPS\\] <br><br> \\[m\\angle QNS\\,\\,minor = 2 × 70^{\\circ}\\] <br><br> \\[m\\angle QNS\\,\\,minor = 140^{\\circ}\\]";
     } else if (x =="") {
      jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
    } else {
      jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo26a").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction27() {
	var x = document.getElementById("myText27").value.split(' ').join('');
     var jawaban;
     if (x == "220") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[m\\angle QNS\\,\\,mayor = 360^{\\circ} × m\\angle QNS\\,\\,minor\\] <br><br> \\[m\\angle QNS\\,\\,mayor = 360^{\\circ} × 140^{\\circ}\\] <br><br> \\[m\\angle QNS\\,\\,mayor = 220^{\\circ}\\]";
     } else if (x =="") {
      jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
    } else {
      jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo27").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction28() {
	var x = document.getElementById("myText28").value.split(' ').join('');
     var jawaban;
     if (x == "45") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> Jumlah sudut 1 putaran \\[=360^{\\circ}\\] <br><br> Jumlah perbandingan \\[=3+7+14=24\\] <br><br><br> \\[Sudut\\,1 = \\frac{3}{24} × 360^{\\circ}\\] <br><br> \\[Sudut\\,1 = 3 × 15^{\\circ}\\] <br><br> \\[Sudut\\,1 = 45^{\\circ}\\]";
     } else if (x =="") {
      jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
    } else {
      jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo28").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction29() {
	var x = document.getElementById("myText29").value.split(' ').join('');
     var jawaban;
     if (x == "105") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> Jumlah sudut 1 putaran \\[=360^{\\circ}\\] <br><br> Jumlah perbandingan \\[=3+7+14=24\\] <br><br><br> \\[Sudut\\,2 = \\frac{7}{24} × 360^{\\circ}\\] <br><br> \\[Sudut\\,2 = 7 × 15^{\\circ}\\] <br><br> \\[Sudut\\,2 = 105^{\\circ}\\]";
      } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
      }
      document.getElementById("demo29").innerHTML = jawaban;
      MathJax.typeset();
}

function myFunction30() {
	var x = document.getElementById("myText30").value.split(' ').join('');
     var jawaban;
     if (x == "210") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> Jumlah sudut 1 putaran \\[=360^{\\circ}\\] <br><br> Jumlah perbandingan \\[=3+7+14=24\\] <br><br><br> \\[Sudut\\,3 = \\frac{14}{24} × 360^{\\circ}\\] <br><br> \\[Sudut\\,3 = 14 × 15^{\\circ}\\] <br><br> \\[Sudut\\,3 = 210^{\\circ}\\]";
      } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
      }
      document.getElementById("demo30").innerHTML = jawaban;
      MathJax.typeset();
}

/* SUBBAB 2 */

function mm11() {
  var x = document.getElementById("Textmm11").value.toLowerCase();
  var jawaban;
  if (x == "keliling") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm11").innerHTML = jawaban;
}

function mm12() {
  var x = document.getElementById("Textmm12").value.toLowerCase();
  var jawaban;
  if (x == "pusat") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm12").innerHTML = jawaban;
}

function mm13() {
  var x = document.getElementById("Textmm13").value.toLowerCase();
  var jawaban;
  if (x == "cwd") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm13").innerHTML = jawaban;
}

function mm14() {
  var x = document.getElementById("Textmm14").value.toLowerCase();
  var jawaban;
  if (x == "cod") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm14").innerHTML = jawaban;
}

function mm15() {
  var x = document.getElementById("Textmm15").value.toLowerCase();
  var jawaban;
  if (x == "eyf") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm15").innerHTML = jawaban;
}

function mm16() {
  var x = document.getElementById("Textmm16").value.toLowerCase();
  var jawaban;
  if (x == "eof") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm16").innerHTML = jawaban;
}

function mm17() {
  var x = document.getElementById("Textmm17").value.toLowerCase();
  var jawaban;
  if (x == "gjh") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm17").innerHTML = jawaban;
}

function mm18() {
  var x = document.getElementById("Textmm18").value.toLowerCase();
  var jawaban;
  if (x == "gkh") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm18").innerHTML = jawaban;
}

function mm19() {
  var x = document.getElementById("Textmm19").value.toLowerCase();
  var jawaban;
  if (x == "goh") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm19").innerHTML = jawaban;
}

function mm20() {
  var x = document.getElementById("Textmm20").value.split(' ').join('');
  var jawaban;
  if (x == "90") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm20").innerHTML = jawaban;
}

function mm21() {
  var x = document.getElementById("Textmm21").value.split(' ').join('');
  var jawaban;
  if (x == "45") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm21").innerHTML = jawaban;
}

function mm22() {
  var x = document.getElementById("Textmm22").value.split(' ').join('');
  var jawaban;
  if (x == "135") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm22").innerHTML = jawaban;
}

function mm23() {
  var x = document.getElementById("Textmm23").value.split(' ').join('');
  var jawaban;
  if (x == "67,5") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm23").innerHTML = jawaban;
}

function mm24() {
  var x = document.getElementById("Textmm24").value.split(' ').join('');
  var jawaban;
  if (x == "70") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm24").innerHTML = jawaban;
}

function mm25() {
  var x = document.getElementById("Textmm25").value.split(' ').join('');
  var jawaban;
  if (x == "35") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'> <br><br>Jadi, besar masing-masing sudut keliling pada pizza tersebut adalah \\[m\\angle CWD = 45^{\\circ}\\], \\[m\\angle EYF = 67,5^{\\circ}\\], dan \\[m\\angle GJH = m\\angle GKH = 35^{\\circ}\\]."
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm25").innerHTML = jawaban;
  MathJax.typeset();
}