/*Mari Mencoba 2*/

function myFunction() {
  
    let jawaban1=document.getElementById("myText").value.split(' ').join('');
    let jawaban2=document.getElementById("myText1").value.split(' ').join('');
    let jawaban3=document.getElementById("myText2").value.split(' ').join('');
  
    if (jawaban1=="" && jawaban2=="" && jawaban3=="") {
      document.getElementById("demo").innerHTML = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
    } else if (jawaban1!="" && jawaban2=="" && jawaban3=="") {
      document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1=="" && jawaban2!="" && jawaban3=="") {
      document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1=="" && jawaban2=="" && jawaban3!="") {
      document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1!="" && jawaban2!="" && jawaban3=="") {
      document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1=="" && jawaban2!="" && jawaban3!="") {
      document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1!="" && jawaban2=="" && jawaban3!="") {
      document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1!="" && jawaban2!="" && jawaban3!="") {
      if (jawaban1=="OD" && jawaban2=="OE" && jawaban3=="OF") {
      document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Jari-jari</b> <br><br> Dikarenakan <b>jari-jari</b> merupakan ruas yang menghubungkan titik pada lingkaran dengan titik pusat maka jari-jari yang terdapat pada gambar adalah \\[\\overline{OD}\\], \\[\\overline{OE}\\], dan \\[\\overline{OF}\\]";
      MathJax.typeset();
      }
      else if (jawaban1!="" && jawaban2!="" && jawaban3!="") {
        if (jawaban1=="OD" && jawaban2=="OF" && jawaban3=="OE") {
        document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Jari-jari</b> <br><br> Dikarenakan <b>jari-jari</b> merupakan ruas yang menghubungkan titik pada lingkaran dengan titik pusat maka jari-jari yang terdapat pada gambar adalah \\[\\overline{OD}\\], \\[\\overline{OE}\\], dan \\[\\overline{OF}\\]";
        MathJax.typeset();
        }
      else if (jawaban1!="" && jawaban2!="" && jawaban3!="") {
        if (jawaban1=="OF" && jawaban2=="OD" && jawaban3=="OE") {
        document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Jari-jari</b> <br><br> Dikarenakan <b>jari-jari</b> merupakan ruas yang menghubungkan titik pada lingkaran dengan titik pusat maka jari-jari yang terdapat pada gambar adalah \\[\\overline{OD}\\], \\[\\overline{OE}\\], dan \\[\\overline{OF}\\]";
        MathJax.typeset();
        }
      else if (jawaban1!="" && jawaban2!="" && jawaban3!="") {
        if (jawaban1=="OF" && jawaban2=="OE" && jawaban3=="OD") {
        document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Jari-jari</b> <br><br> Dikarenakan <b>jari-jari</b> merupakan ruas yang menghubungkan titik pada lingkaran dengan titik pusat maka jari-jari yang terdapat pada gambar adalah \\[\\overline{OD}\\], \\[\\overline{OE}\\], dan \\[\\overline{OF}\\]";
        MathJax.typeset();
        }
      else if (jawaban1!="" && jawaban2!="" && jawaban3!="") {
        if (jawaban1=="OE" && jawaban2=="OF" && jawaban3=="OD") {
        document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Jari-jari</b> <br><br> Dikarenakan <b>jari-jari</b> merupakan ruas yang menghubungkan titik pada lingkaran dengan titik pusat maka jari-jari yang terdapat pada gambar adalah \\[\\overline{OD}\\], \\[\\overline{OE}\\], dan \\[\\overline{OF}\\]";
        MathJax.typeset();
        }
      else if (jawaban1!="" && jawaban2!="" && jawaban3!="") {
        if (jawaban1=="OE" && jawaban2=="OD" && jawaban3=="OF") {
        document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Jari-jari</b> <br><br> Dikarenakan <b>jari-jari</b> merupakan ruas yang menghubungkan titik pada lingkaran dengan titik pusat maka jari-jari yang terdapat pada gambar adalah \\[\\overline{OD}\\], \\[\\overline{OE}\\], dan \\[\\overline{OF}\\]";
        MathJax.typeset();
        }
      else {
        document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
      }
    } } } } } } }
  
     function myFunction3() {
      var x = document.getElementById("myText3").value.split(' ').join('');
         var jawaban;
         if (x == "DE") {
           jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>b. Diameter</b> <br><br> Dikarenakan <b>diameter</b> merupakan ruas yang menghubungkan dua titik pada lingkaran dan melalui titik pusat lingkaran maka diameter yang terdapat pada gambar adalah \\[\\overline{DE}\\]";
         } else if (x =="") {
           jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
         } else {
           jawaban = "<b style='color: red'>Jawabanmu salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
         }
         document.getElementById("demo").innerHTML = jawaban;
         MathJax.typeset();
    }
  
    function myFunction4() {
      let jawaban1=document.getElementById("myText4").value.split(' ').join('');
      let jawaban2=document.getElementById("myText5").value.split(' ').join('');
      
      if (jawaban1=="" && jawaban2=="") {
        document.getElementById("demo").innerHTML = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
      } else if (jawaban1!="" && jawaban2=="") {
        document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
      } else if (jawaban1=="" && jawaban2!="") {
        document.getElementById("demo").innerHTML = "Jawabanmu masih kosong";
      } else if (jawaban1!="" && jawaban2!="") {
        if (jawaban1=="DE" && jawaban2=="EF") {
        document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>c. Tali Busur</b> <br><br> Dikarenakan <b>tali busur</b> merupakan ruas garis yang menghubungkan dua titik pada lingkaran maka tali busur yang terdapat pada gambar adalah \\[\\overline{DE}\\] dan \\[\\overline{EF}\\]";
        MathJax.typeset();
        } else if (jawaban1!="" && jawaban2!="") {
          if (jawaban1=="EF" && jawaban2=="DE") {
          document.getElementById("demo").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>c. Tali Busur</b> <br><br> Dikarenakan <b>tali busur</b> merupakan ruas garis yang menghubungkan dua titik pada lingkaran maka tali busur yang terdapat pada gambar adalah \\[\\overline{DE}\\] dan \\[\\overline{EF}\\]";
          MathJax.typeset();
          }
        else {
          document.getElementById("demo").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
        }
      } }
       }
  
       function myFunction6() {
        var x = document.getElementById("myText6").value.split(' ').join('');
           var jawaban;
           if (x == "OY") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>d. Apotema</b> <br><br> Dikarenakan <b>apotema</b> merupakan ruas garis yang menghubungkan titik pusat dengan satu titik di tali busur dan tegak lurus dengan tali busur maka apotema yang terdapat pada gambar adalah \\[\\overline{OY}\\]";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
           }
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
      
      function myFunction7() {
        var x = document.getElementById("myText7").value.split(' ').join('');
           var jawaban;
           if (x == "7,14") {
             jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>e. Panjang Apotema \\[\\overline{OY}\\]</b> <br><br> Dikarenakan tali busur \\[\\overline{EF}\\] panjangnya \\[14\\,cm\\] dengan jari-jari lingkaran \\[10\\,cm\\]: <br><br> \\[\\overline{OY}=\\sqrt{10^{2}-\\left ( \\frac{1}{2} 14 \\right )^{2}}\\] <br><br> \\[\\overline{OY}=\\sqrt{10^{2}-7^{2}}\\] <br><br> \\[\\overline{OY}=\\sqrt{100-49}\\] <br><br> \\[\\overline{OY}=\\sqrt{51}\\] <br><br> \\[\\overline{OY}=7,14\\] <br><br> Jadi, panjang <b>apotema</b> pada tali busur <b>\\[\\overline{OY}\\]</b> adalah \\[7,14\\,cm\\]";
           } else if (x =="") {
             jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
           } else {
             jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
           }
           document.getElementById("demo").innerHTML = jawaban;
           MathJax.typeset();
      }
  
  /*Pertanyaan 2*/
  
  function myFunction8() {
      var x = document.getElementById("myText8").value.split(' ').join('');
       var jawaban;
       if (x == "15") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[r=\\frac{1}{2}d\\] <br><br> \\[r=\\frac{1}{2}30\\] <br><br> \\[r=15 \\, cm\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo8").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction9() {
      var x = document.getElementById("myText9").value.split(' ').join('');
       var jawaban;
       if (x == "7,48") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[\\overline{OE}=\\sqrt{15^{2}-\\left ( \\frac{1}{2} 26 \\right )^{2}}\\] <br><br> \\[\\overline{OE}=\\sqrt{15^{2}-13^{2}}\\] <br><br> \\[\\overline{OE}=\\sqrt{225-169}\\] <br><br> \\[\\overline{OE}=\\sqrt{56}\\] <br><br> \\[\\overline{OE}=7,48 \\, cm\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo9").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction10() {
      var x = document.getElementById("myText10").value.split(' ').join('');
       var jawaban;
       if (x == "7,52") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[AE=r-OE=15-7,48=7,52\\,cm\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo10").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction11() {
      var x = document.getElementById("myText11").value.split(' ').join('');
       var jawaban;
       if (x == "16") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[d=2r=2(8)=16\\,cm\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo11").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction12() {
      var x = document.getElementById("myText12").value.split(' ').join('');
       var jawaban;
       if (x == "3,87") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[\\overline{OT}=\\sqrt{8^{2}-\\left ( \\frac{1}{2} 14 \\right )^{2}}\\] <br><br> \\[\\overline{OT}=\\sqrt{8^{2}-7^{2}}\\] <br><br> \\[\\overline{OT}=\\sqrt{64-49}\\] <br><br> \\[\\overline{OT}=\\sqrt{15}\\] <br><br> \\[\\overline{OT}=3,87 \\, cm\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo12").innerHTML = jawaban;
       MathJax.typeset();
  }

  /* SUBBAB 1 */

function busur() {
    var x = document.getElementById("Textbusur").value.split(' ').join('');
    var jawaban;
    if (x == "LENGKUNG") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Lengkung") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "lengkung") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demobusur").innerHTML = jawaban;
  } 

  function busur2() {
    var x = document.getElementById("Textbusur2").value.split(' ').join('');
    var jawaban;
    if (x == "MINOR") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Minor") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "minor") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demobusur2").innerHTML = jawaban;
  } 
  
  function busur3() {
    var x = document.getElementById("Textbusur3").value.split(' ').join('');
    var jawaban;
    if (x == "MAYOR") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Mayor") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "mayor") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demobusur3").innerHTML = jawaban;
  } 

  function busur4() {
    var x = document.getElementById("Textbusur4").value.split(' ').join('');
    var jawaban;
    if (x == "SETENGAH") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Setengah") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "setengah") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demobusur4").innerHTML = jawaban;
  } 

  function jari2() {
    var x = document.getElementById("Textjari2").value.split(' ').join('');
    var jawaban;
    if (x == "TITIK") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Titik") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "titik") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojari2").innerHTML = jawaban;
  }

  function jari3() {
    var x = document.getElementById("Textjari3").value.split(' ').join('');
    var jawaban;
    if (x == "PUSAT") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Pusat") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "pusat") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojari3").innerHTML = jawaban;
  }
  
  function diameter() {
    var x = document.getElementById("Textdiameter").value;
    var jawaban;
    if (x == "DUA") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Dua") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "dua") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demodiameter").innerHTML = jawaban;
  }

  function diameter2() {
    var x = document.getElementById("Textdiameter2").value;
    var jawaban;
    if (x == "O") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "o") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demodiameter2").innerHTML = jawaban;
  }

  function diameter3() {
    var x = document.getElementById("Textdiameter3").value;
    var jawaban;
    if (x == "RUAS") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Ruas") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "ruas") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demodiameter3").innerHTML = jawaban;
  }
  
  function talibusur() {
    var x = document.getElementById("Texttalibusur").value;
    var jawaban;
    if (x == "DUA") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Dua") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "dua") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demotalibusur").innerHTML = jawaban;
  }

  function talibusur2() {
    var x = document.getElementById("Texttalibusur2").value;
    var jawaban;
    if (x == "PUSAT") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Pusat") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "pusat") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demotalibusur2").innerHTML = jawaban;
  }
  
  function apotema0() {
    var x = document.getElementById("Textapotema0").value;
    var jawaban;
    if (x == "GARIS") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Garis") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "garis") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demoapotema0").innerHTML = jawaban;
  }
  
  function apotema() {
    var x = document.getElementById("Textapotema").value;
    var jawaban;
    if (x == "TALI BUSUR") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Tali Busur") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "tali busur") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demoapotema").innerHTML = jawaban;
  }

  function apotema2() {
    var x = document.getElementById("Textapotema2").value;
    var jawaban;
    if (x == "TALI BUSUR") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Tali Busur") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "tali busur") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demoapotema2").innerHTML = jawaban;
  }
  
  function mm1() {
    var x = document.getElementById("Textmm1").value.split(' ').join('');
    var jawaban;
    if (x == "12") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm1").innerHTML = jawaban;
  }
  
  function mm2() {
    var x = document.getElementById("Textmm2").value.split(' ').join('');
    var jawaban;
    if (x == "16") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'> <br><br> \\[Apotema\\,MN=\\sqrt{12^{2}-\\left ( \\frac{1}{2} 16 \\right )^{2}}\\]";
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm2").innerHTML = jawaban;
    MathJax.typeset();
  }
  
  function mm3() {
    var x = document.getElementById("Textmm3").value.split(' ').join('');
    var jawaban;
    if (x == "8,94") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'> <br><br> Jadi, panjang <b>apotema</b> pada tali busur \\[\\overline{MN}\\] adalah \\[8,94\\,cm\\]"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm3").innerHTML = jawaban;
    MathJax.typeset();
  }