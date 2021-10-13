/*Mari Mencoba 6*/

function myFunction31() {
	var x = document.getElementById("myText31").value.split(' ').join('');
     var jawaban;
     if (x == "6,1055") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Panjang Busur</b> <br><br> Dikarenakan besar sudut pusatnya \\[70^{\\circ}\\] dan jari-jarinya \\[5\\,cm\\], maka: <br><br> \\[Panjang\\,Busur = \\frac{\\alpha}{360^{\\circ}}×K_{lingkaran}\\] <br><br> \\[Panjang\\,Busur = \\frac{\\alpha}{360^{\\circ}}×2\\pi r\\] <br><br> \\[Panjang\\,Busur = \\frac{70^{\\circ}}{360^{\\circ}}×(2×3,14×5)\\] <br><br> \\[Panjang\\,Busur = \\frac{70^{\\circ}}{360^{\\circ}}×31,4\\] <br><br> \\[Panjang\\,Busur = 6,1055\\,cm\\]";
    } else if (x == "6,11") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Panjang Busur</b> <br><br> Dikarenakan besar sudut pusatnya \\[70^{\\circ}\\] dan jari-jarinya \\[5\\,cm\\], maka: <br><br> \\[Panjang\\,Busur = \\frac{\\alpha}{360^{\\circ}}×K_{lingkaran}\\] <br><br> \\[Panjang\\,Busur = \\frac{\\alpha}{360^{\\circ}}×2\\pi r\\] <br><br> \\[Panjang\\,Busur = \\frac{70^{\\circ}}{360^{\\circ}}×(2×3,14×5)\\] <br><br> \\[Panjang\\,Busur = \\frac{70^{\\circ}}{360^{\\circ}}×31,4\\] <br><br> \\[Panjang\\,Busur = 6,1055 = 6,11\\,cm\\]";
    } else if (x == "6,1056") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Panjang Busur</b> <br><br> Dikarenakan besar sudut pusatnya \\[70^{\\circ}\\] dan jari-jarinya \\[5\\,cm\\], maka: <br><br> \\[Panjang\\,Busur = \\frac{\\alpha}{360^{\\circ}}×K_{lingkaran}\\] <br><br> \\[Panjang\\,Busur = \\frac{\\alpha}{360^{\\circ}}×2\\pi r\\] <br><br> \\[Panjang\\,Busur = \\frac{70^{\\circ}}{360^{\\circ}}×(2×3,14×5)\\] <br><br> \\[Panjang\\,Busur = \\frac{70^{\\circ}}{360^{\\circ}}×31,4\\] <br><br> \\[Panjang\\,Busur = 6,10555 = 6,1056\\,cm\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
     document.getElementById("demo4").innerHTML = jawaban;
     MathJax.typeset();
} }

function myFunction32() {
	var x = document.getElementById("myText32").value.split(' ').join('');
     var jawaban;
     if (x == "38,5") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>b. Luas Juring</b> <br><br> Dikarenakan besar sudut pusatnya \\[90^{\\circ}\\] dan jari-jarinya \\[7\\,cm\\], maka: <br><br> \\[Luas\\,Juring = \\frac{\\alpha}{360^{\\circ}}×L_{lingkaran}\\] <br><br> \\[Luas\\,Juring = \\frac{\\alpha}{360^{\\circ}}×\\pi r^{2}\\] <br><br> \\[Luas\\,Juring = \\frac{90^{\\circ}}{360^{\\circ}}×(\\frac{22}{7}×7×7)\\] <br><br> \\[Luas\\,Juring = \\frac{90^{\\circ}}{360^{\\circ}}×(\\frac{22}{7}×49)\\] <br><br> \\[Luas\\,Juring = \\frac{90^{\\circ}}{360^{\\circ}}×154\\] <br><br> \\[Luas\\,Juring = 38,5\\,cm^{2}\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo4").innerHTML = jawaban;
     MathJax.typeset();
}

/*Pertanyaan 6*/

function myFunction33() {
	var x = document.getElementById("myText33").value.split(' ').join('');
     var jawaban;
     if (x == "616") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[L = \\pi r^{2}\\] <br><br> \\[L = \\frac{22}{7}×14×14\\] <br><br> \\[L = 22×2×14\\] <br><br> \\[L = 616\\,cm^{2}\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo33").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction34() {
	var x = document.getElementById("myText34").value.split(' ').join('');
     var jawaban;
     if (x == "88") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[K = 2\\pi r\\] <br><br> \\[K = 2×\\frac{22}{7}×14\\] <br><br> \\[K = 2×22×2\\] <br><br> \\[K = 88\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo34").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction35() {
	var x = document.getElementById("myText35").value.split(' ').join('');
     var jawaban;
     if (x == "136,89") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> Dikarenakan besar sudut pusat adalah \\[80^{\\circ}\\] dan luas lingkaran adalah \\[616\\,cm^{2}\\], maka: <br><br> \\[L_{juring}=\\frac{\\alpha}{360^{\\circ}}×Luas\\,Lingkaran\\] <br><br> \\[L_{juring}=\\frac{80^{\\circ}}{360^{\\circ}}×616\\] <br><br> \\[L_{juring}=136,89\\,cm\\]";
     } else if (x == "136,9") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> Dikarenakan besar sudut pusat adalah \\[80^{\\circ}\\] dan luas lingkaran adalah \\[616\\,cm^{2}\\], maka: <br><br> \\[L_{juring}=\\frac{\\alpha}{360^{\\circ}}×Luas\\,Lingkaran\\] <br><br> \\[L_{juring}=\\frac{80^{\\circ}}{360^{\\circ}}×616\\] <br><br> \\[L_{juring}=136,89=136,9\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>";
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo35").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction36() {
	var x = document.getElementById("myText36").value.split(' ').join('');
     var jawaban;
     if (x == "19,56") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> Dikarenakan besar sudut pusat adalah \\[80^{\\circ}\\] dan keliling lingkaran adalah \\[88\\,cm\\], maka: <br><br> \\[Panjang\\,Busur=\\frac{\\alpha}{360^{\\circ}}×Keliling\\,Lingkaran\\] <br><br> \\[Panjang\\,Busur=\\frac{80^{\\circ}}{360^{\\circ}}×88\\] <br><br> \\[Panjang\\,Busur=19,56\\,cm\\]";
      } else if (x =="") {
        jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>";
      } else {
        jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo36").innerHTML = jawaban;
     MathJax.typeset();
}

/* tabel */

function pb1() {
  let jawaban1=document.getElementById("textpb1").value.split(' ').join('');
  let jawaban2=document.getElementById("textpb2").value.split(' ').join('');
      
    if (jawaban1=="3" && jawaban2=="4") {
      document.getElementById("demopb1").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demopb1").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function lj1() {
  let jawaban1=document.getElementById("textlj1").value.split(' ').join('');
  let jawaban2=document.getElementById("textlj2").value.split(' ').join('');
      
    if (jawaban1=="3" && jawaban2=="4") {
      document.getElementById("demolj1").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demolj1").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function pb2() {
  let jawaban1=document.getElementById("textpb3").value.split(' ').join('');
  let jawaban2=document.getElementById("textpb4").value.split(' ').join('');
      
    if (jawaban1=="1" && jawaban2=="2") {
      document.getElementById("demopb2").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demopb2").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function lj2() {
  let jawaban1=document.getElementById("textlj3").value.split(' ').join('');
  let jawaban2=document.getElementById("textlj4").value.split(' ').join('');
      
    if (jawaban1=="1" && jawaban2=="2") {
      document.getElementById("demolj2").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demolj2").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function pb3() {
  let jawaban1=document.getElementById("textpb5").value.split(' ').join('');
  let jawaban2=document.getElementById("textpb6").value.split(' ').join('');
      
    if (jawaban1=="1" && jawaban2=="4") {
      document.getElementById("demopb3").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demopb3").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function lj3() {
  let jawaban1=document.getElementById("textlj5").value.split(' ').join('');
  let jawaban2=document.getElementById("textlj6").value.split(' ').join('');
      
    if (jawaban1=="1" && jawaban2=="4") {
      document.getElementById("demolj3").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demolj3").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function pb4() {
  let jawaban1=document.getElementById("textpb7").value.split(' ').join('');
  let jawaban2=document.getElementById("textpb8").value.split(' ').join('');
      
    if (jawaban1=="5" && jawaban2=="36") {
      document.getElementById("demopb4").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demopb4").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function lj4() {
  let jawaban1=document.getElementById("textlj7").value.split(' ').join('');
  let jawaban2=document.getElementById("textlj8").value.split(' ').join('');
      
    if (jawaban1=="5" && jawaban2=="36") {
      document.getElementById("demolj4").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demolj4").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function pb5() {
  let jawaban1=document.getElementById("textpb9").value.split(' ').join('');
  let jawaban2=document.getElementById("textpb10").value.split(' ').join('');
      
    if (jawaban1=="1" && jawaban2=="12") {
      document.getElementById("demopb5").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demopb5").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function lj5() {
  let jawaban1=document.getElementById("textlj9").value.split(' ').join('');
  let jawaban2=document.getElementById("textlj10").value.split(' ').join('');
      
    if (jawaban1=="1" && jawaban2=="12") {
      document.getElementById("demolj5").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demolj5").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function pb6() {
  let jawaban1=document.getElementById("textpb11").value;
  let jawaban2=document.getElementById("textpb12").value;
      
    if (jawaban1=="panjang busur" && jawaban2=="keliling lingkaran") {
      document.getElementById("demopb6").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demopb6").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

function lj6() {
  let jawaban1=document.getElementById("textlj11").value;
  let jawaban2=document.getElementById("textlj12").value;
      
    if (jawaban1=="luas juring" && jawaban2=="luas lingkaran") {
      document.getElementById("demolj6").innerHTML = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      document.getElementById("demolj6").innerHTML = "<img src='salah.png'  width='25px' height='25px'>";
    }
}

/* SUBBAB 3 */

function mm26() {
  var x = document.getElementById("Textmm26").value.split(' ').join('');
  var jawaban;
  if (x == "30") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm26").innerHTML = jawaban;
}

function mm27() {
  var x = document.getElementById("Textmm27").value.split(' ').join('');
  var jawaban;
  if (x == "150") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm27").innerHTML = jawaban;
}

function mm28() {
  var x = document.getElementById("Textmm28").value.split(' ').join('');
  var jawaban;
  if (x == "12") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm28").innerHTML = jawaban;
}

function mm29() {
  var x = document.getElementById("Textmm29").value.split(' ').join('');
  var jawaban;
  if (x == "30") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm29").innerHTML = jawaban;
}

function mm30() {
  var x = document.getElementById("Textmm30").value.split(' ').join('');
  var jawaban;
  if (x == "1800") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm30").innerHTML = jawaban;
}

function mm31() {
  var x = document.getElementById("Textmm31").value.split(' ').join('');
  var jawaban;
  if (x == "60") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'> <br><br>Jadi, panjang busur \\[CD\\] pada lingkaran \\[O\\] adalah \\[60\\,cm\\]."
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm31").innerHTML = jawaban;
  MathJax.typeset();
}