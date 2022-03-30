/*Mari Mencoba 3*/

function myFunction13() {
    let jawaban1=document.getElementById("myText13").value.split(' ').join('');
    let jawaban2=document.getElementById("myText132").value.split(' ').join('');
    
    if (jawaban1=="" && jawaban2=="") {
      document.getElementById("demo1").innerHTML = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
    } else if (jawaban1!="" && jawaban2=="") {
      document.getElementById("demo1").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1=="" && jawaban2!="") {
      document.getElementById("demo1").innerHTML = "Jawabanmu masih kosong";
    } else if (jawaban1!="" && jawaban2!="") {
      if ((jawaban1=="AOD" || jawaban1=="DOA") && (jawaban2=="BOD" || jawaban2=="DOB")) {
      document.getElementById("demo1").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Daerah Juring yang berukuran \\[90^{\\circ}\\]</b> <br><br> Dikarenakan <b>juring</b> merupakan daerah di dalam lingkaran yang dibatasi oleh dua jari-jari dan satu busur lingkaran dengan jari-jari yang membatasi memuat titik ujung busur lingkaran maka juring yang berukuran \\[90^{\\circ}\\] yang terdapat pada gambar adalah daerah \\[AOD\\] dan \\[BOD\\]";
      MathJax.typeset();
      } else if (jawaban1!="" && jawaban2!="") {
        if ((jawaban1=="BOD" || jawaban1=="DOB") && (jawaban2=="AOD" || jawaban2=="DOA")) {
        document.getElementById("demo1").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Daerah Juring yang berukuran \\[90^{\\circ}\\]</b> <br><br> Dikarenakan <b>juring</b> merupakan daerah di dalam lingkaran yang dibatasi oleh dua jari-jari dan satu busur lingkaran dengan jari-jari yang membatasi memuat titik ujung busur lingkaran maka juring yang berukuran \\[90^{\\circ}\\] yang terdapat pada gambar adalah daerah \\[AOD\\] dan \\[BOD\\]";
        MathJax.typeset();
        }
      else {
        document.getElementById("demo1").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
      }
    } }
     }
  
     function myFunction14() {
      var x = document.getElementById("myText14").value.split(' ').join('');
       var jawaban;
       if (x == "6") {
         jawaban = "<b style='color: green'>Jawabanmu Benar</b> <br><br> Pembahasan: <b>b. Jumlah daerah tembereng</b> <br><br> Dikarenakan ada daerah tembereng minor dan mayor yaitu tembereng \\[AC\\] minor dan \\[AC\\] mayor, tembereng \\[BD\\] minor dan \\[BD\\] mayor, dan 2 tembereng \\[AB\\] minor maka jumlah daerah tembereng ada 6.";
       } else if (x =="") {
         jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
       } else {
         jawaban = "<b style='color: red'>Jawabanmu Salah,</b> silahkan coba lagi!";
       }
       document.getElementById("demo1").innerHTML = jawaban;
       MathJax.typeset();
      }
  
  function myFunction15() {
      var x = document.getElementById("myText15").value.split(' ').join('');
       var jawaban;
       if (x == "45") {
         jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>c. \\[m\\angle DOE\\]</b> <br><br> Dikarenakan \\[\\angle DOB\\] adalah sudut siku-siku atau \\[90^{\\circ}\\] maka \\[m\\angle DOE\\] setengah dari \\[\\angle DOB\\] <br><br> \\[m\\angle DOE=\\frac{1}{2}\\angle DOB\\] <br><br> \\[m\\angle DOE=\\frac{1}{2}90^{\\circ}\\] <br><br> \\[m\\angle DOE=45^{\\circ}\\]";
       } else if (x =="") {
         jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
       } else {
         jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
       }
       document.getElementById("demo1").innerHTML = jawaban;
       MathJax.typeset();
  }

  /* mari mencoba isian */

  function myFunction19() {
    var x = document.getElementById("myText19").value.split(' ').join('');
     var jawaban;
     if (x == "DOB" || x == "BOD") {
       jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
     }
     document.getElementById("demo19").innerHTML = jawaban;
  }

  function myFunction20() {
    var x = document.getElementById("myText20").value.split(' ').join('');
     var jawaban;
     if (x == "90") {
       jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
     }
     document.getElementById("demo20").innerHTML = jawaban;
  }
  
  /*Pertanyaan 3*/
  
  function myFunction16() {
      var x = document.getElementById("myText16").value.split(' ').join('');
       var jawaban;
       if (x == "98") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br>\\[L_{Segitiga}\\,BAC=\\frac{1}{2}×alas×tinggi\\] <br><br>\\[L_{Segitiga}\\,BAC=\\frac{1}{2}×14×14\\] <br><br>\\[L_{Segitiga}\\,BAC=98\\,cm^{2}\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo16a").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction17() {
      var x = document.getElementById("myText17").value.split(' ').join('');
       var jawaban;
       if (x == "4,67") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br>\\[L_{Tembereng}\\,BC=L_{Juring}\\,BAC-L_{Segitiga}\\,BAC\\] <br><br>\\[L_{Tembereng}\\,BC=(\\frac{Besar\\,Sudut\\,Pusat}{360^{\\circ}}×\\pi×r^{2})-(\\frac{1}{2}×alas×tinggi)\\] <br><br>\\[L_{Tembereng}\\,BC=(\\frac{60^{\\circ}}{360^{\\circ}}×\\frac{22}{7}×14×14)-(\\frac{1}{2}×14×14)\\] <br><br>\\[L_{Tembereng}\\,BC=(\\frac{1}{6}×44×14)-(7×14)\\] <br><br>\\[L_{Tembereng}\\,BC=(\\frac{1}{6}×616)-(98)\\] <br><br>\\[L_{Tembereng}\\,BC=102,67-98\\] <br><br>\\[L_{Tembereng}\\,BC=4,67\\,cm^{2}\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo17a").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction18() {
      var x = document.getElementById("myText18").value.split(' ').join('');
       var jawaban;
       if (x == "205,33") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br>\\[L_{Juring}\\,CAD=\\frac{Besar\\,Sudut\\,Pusat}{360^{\\circ}}×\\pi×r^{2}\\] <br><br>\\[L_{Juring}\\,CAD=\\frac{120^{\\circ}}{360^{\\circ}}×\\frac{22}{7}×14×14\\] <br><br>\\[L_{Juring}\\,CAD=\\frac{1}{3}×22×2×14\\] <br><br>\\[L_{Juring}\\,CAD=\\frac{1}{3}×44×14\\] <br><br>\\[L_{Juring}\\,CAD=\\frac{1}{3}×616\\] <br><br>\\[L_{Juring}\\,CAD=205,33\\,cm^{2}\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo18a").innerHTML = jawaban;
       MathJax.typeset();
  }

  function juring() {
    var x = document.getElementById("Textjuring").value.split(' ').join('').toLowerCase();
    var jawaban;
    if (x == "jari-jari") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
    } else if (x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojuring").innerHTML = jawaban;
  }

  function juring2() {
    var x = document.getElementById("Textjuring2").value.split(' ').join('').toLowerCase();
    var jawaban;
    if (x == "busur") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
    } else if (x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojuring2").innerHTML = jawaban;
  }
  
  function juring3() {
    var x = document.getElementById("Textjuring3").value.split(' ').join('').toLowerCase();
    var jawaban;
    if (x == "titik") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
    } else if (x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojuring3").innerHTML = jawaban;
  }

  function juring4() {
    var x = document.getElementById("Textjuring4").value.split(' ').join('').toLowerCase();
    var jawaban;
    if (x == "dalam") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
    } else if (x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojuring4").innerHTML = jawaban;
  }

  function tembereng() {
    var x = document.getElementById("Texttembereng").value.split(' ').join('').toLowerCase();
    var jawaban;
    if (x == "daerah") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
    } else if (x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demotembereng").innerHTML = jawaban;
  }

  function tembereng2() {
    var x = document.getElementById("Texttembereng2").value.toLowerCase();
    var jawaban;
    if (x == "tali busur") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>";
    } else if (x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demotembereng2").innerHTML = jawaban;
  }

  function mm1() {
    var x = document.getElementById("Textmm1").value.split(' ').join('');
    var jawaban;
    if (x == "90") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm1").innerHTML = jawaban;
  }
  
  function mm2() {
    var x = document.getElementById("Textmm2").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm2").innerHTML = jawaban;
  }
  
  function mm3() {
    var x = document.getElementById("Textmm3").value.split(' ').join('');
    var jawaban;
    if (x == "90") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm3").innerHTML = jawaban;
  }
  
  function mm4() {
    var x = document.getElementById("Textmm4").value.split(' ').join('');
    var jawaban;
    if (x == "360") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm4").innerHTML = jawaban;
  }
  
  function mm5() {
    var x = document.getElementById("Textmm5").value.split(' ').join('');
    var jawaban;
    if (x == "22") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm5").innerHTML = jawaban;
  }
  
  function mm6() {
    var x = document.getElementById("Textmm6").value.split(' ').join('');
    var jawaban;
    if (x == "7") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm6").innerHTML = jawaban;
  }
  
  function mm7() {
    var x = document.getElementById("Textmm7").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm7").innerHTML = jawaban;
  }

  function mm8() {
    var x = document.getElementById("Textmm8").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm8").innerHTML = jawaban;
  }

  function mm9() {
    var x = document.getElementById("Textmm9").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm9").innerHTML = jawaban;
  }
  
  function mm10() {
    var x = document.getElementById("Textmm10").value.split(' ').join('');
    var jawaban;
    if (x == "90") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm10").innerHTML = jawaban;
  }

  function mm11() {
    var x = document.getElementById("Textmm11").value.split(' ').join('');
    var jawaban;
    if (x == "360") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm11").innerHTML = jawaban;
  }

  function mm12() {
    var x = document.getElementById("Textmm12").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm12").innerHTML = jawaban;
  }

  function mm13() {
    var x = document.getElementById("Textmm13").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm13").innerHTML = jawaban;
  }

  function mm14() {
    var x = document.getElementById("Textmm14").value.split(' ').join('');
    var jawaban;
    if (x == "22") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm14").innerHTML = jawaban;
  }

  function mm15() {
    var x = document.getElementById("Textmm15").value.split(' ').join('');
    var jawaban;
    if (x == "7") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm15").innerHTML = jawaban;
  }

  function mm16() {
    var x = document.getElementById("Textmm16").value.split(' ').join('');
    var jawaban;
    if (x == "441") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm16").innerHTML = jawaban;
  }

  function mm17() {
    var x = document.getElementById("Textmm17").value.split(' ').join('');
    var jawaban;
    if (x == "1") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm17").innerHTML = jawaban;
  }

  function mm18() {
    var x = document.getElementById("Textmm18").value.split(' ').join('');
    var jawaban;
    if (x == "4") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm18").innerHTML = jawaban;
  }

  function mm19() {
    var x = document.getElementById("Textmm19").value.split(' ').join('');
    var jawaban;
    if (x == "22") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm19").innerHTML = jawaban;
  }

  function mm20() {
    var x = document.getElementById("Textmm20").value.split(' ').join('');
    var jawaban;
    if (x == "63") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm20").innerHTML = jawaban;
  }

  function mm21() {
    var x = document.getElementById("Textmm21").value.split(' ').join('');
    var jawaban;
    if (x == "1") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm21").innerHTML = jawaban;
  }

  function mm22() {
    var x = document.getElementById("Textmm22").value.split(' ').join('');
    var jawaban;
    if (x == "4") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm22").innerHTML = jawaban;
  }

  function mm23() {
    var x = document.getElementById("Textmm23").value.split(' ').join('');
    var jawaban;
    if (x == "1386") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm23").innerHTML = jawaban;
  }

  function mm24() {
    var x = document.getElementById("Textmm24").value.split(' ').join('');
    var jawaban;
    if (x == "346,5") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm24").innerHTML = jawaban;
  }

  function mm25() {
    var x = document.getElementById("Textmm25").value.split(' ').join('');
    var jawaban;
    if (x == "1") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm25").innerHTML = jawaban;
  }

  function mm26() {
    var x = document.getElementById("Textmm26").value.split(' ').join('');
    var jawaban;
    if (x == "2") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm26").innerHTML = jawaban;
  }

  function mm27() {
    var x = document.getElementById("Textmm27").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm27").innerHTML = jawaban;
  }

  function mm28() {
    var x = document.getElementById("Textmm28").value.split(' ').join('');
    var jawaban;
    if (x == "21") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm28").innerHTML = jawaban;
  }

  function mm29() {
    var x = document.getElementById("Textmm29").value.split(' ').join('');
    var jawaban;
    if (x == "1") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm29").innerHTML = jawaban;
  }

  function mm30() {
    var x = document.getElementById("Textmm30").value.split(' ').join('');
    var jawaban;
    if (x == "2") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm30").innerHTML = jawaban;
  }

  function mm31() {
    var x = document.getElementById("Textmm31").value.split(' ').join('');
    var jawaban;
    if (x == "441") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm31").innerHTML = jawaban;
  }

  function mm32() {
    var x = document.getElementById("Textmm32").value.split(' ').join('');
    var jawaban;
    if (x == "220,5") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm32").innerHTML = jawaban;
  }

  function mm33() {
    var x = document.getElementById("Textmm33").value.split(' ').join('');
    var jawaban;
    if (x == "346,5") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm33").innerHTML = jawaban;
  }

  function mm34() {
    var x = document.getElementById("Textmm34").value.split(' ').join('');
    var jawaban;
    if (x == "220,5") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm34").innerHTML = jawaban;
  }

  function mm35() {
    var x = document.getElementById("Textmm35").value.split(' ').join('');
    var jawaban;
    if (x == "126") {
      jawaban = "<img class='ikon1' src='benar.png'  width='25px' height='25px'> <br><br> Jadi, \\[Luas\\,\\,Tembereng\\,BC\\] adalah \\[126\\,cm^{2}\\]"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img class='ikon1' src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm35").innerHTML = jawaban;
    MathJax.typeset();
  }