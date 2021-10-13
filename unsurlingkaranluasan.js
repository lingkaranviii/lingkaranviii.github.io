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
      if (jawaban1=="AOD" && jawaban2=="BOD") {
      document.getElementById("demo1").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Daerah Juring yang berukuran \\[90^{\\circ}\\]</b> <br><br> Dikarenakan <b>juring</b> merupakan daerah di dalam lingkaran yang dibatasi oleh dua jari-jari dan satu busur lingkaran dengan jari-jari yang membatasi memuat titik ujung busur lingkaran maka juring yang berukuran \\[90^{\\circ}\\] yang terdapat pada gambar adalah daerah \\[AOD\\] dan \\[BOD\\]";
      MathJax.typeset();
      } else if (jawaban1!="" && jawaban2!="") {
        if (jawaban1=="BOD" && jawaban2=="AOD") {
        document.getElementById("demo1").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Daerah Juring yang berukuran \\[90^{\\circ}\\]</b> <br><br> Dikarenakan <b>juring</b> merupakan daerah di dalam lingkaran yang dibatasi oleh dua jari-jari dan satu busur lingkaran dengan jari-jari yang membatasi memuat titik ujung busur lingkaran maka juring yang berukuran \\[90^{\\circ}\\] yang terdapat pada gambar adalah daerah \\[AOD\\] dan \\[BOD\\]";
        MathJax.typeset();
        }
      else {
        document.getElementById("demo1").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
      }
    } }
     }
  
     function myFunction14() {
      let jawaban1=document.getElementById("myText14").value.split(' ').join('');
      let jawaban2=document.getElementById("myText142").value.split(' ').join('');
      
      if (jawaban1=="" && jawaban2=="") {
        document.getElementById("demo1").innerHTML = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
      } else if (jawaban1!="" && jawaban2=="") {
        document.getElementById("demo1").innerHTML = "Jawabanmu masih kosong";
      } else if (jawaban1=="" && jawaban2!="") {
        document.getElementById("demo1").innerHTML = "Jawabanmu masih kosong";
      } else if (jawaban1!="" && jawaban2!="") {
        if (jawaban1=="AC" && jawaban2=="BD") {
        document.getElementById("demo1").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>b. Daerah Tembereng Minor</b> <br><br> Dikarenakan <b>tembereng</b> merupakan daerah di dalam lingkaran yang dibatasi oleh tali busur dan busur lingkaran maka tembereng minor yang terdapat pada gambar adalah daerah \\[AC\\] dan \\[BD\\]";
        MathJax.typeset();
        } else if (jawaban1!="" && jawaban2!="") {
          if (jawaban1=="BD" && jawaban2=="AC") {
          document.getElementById("demo1").innerHTML = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>b. Daerah Tembereng Minor</b> <br><br> Dikarenakan <b>tembereng</b> merupakan daerah di dalam lingkaran yang dibatasi oleh tali busur dan busur lingkaran maka tembereng minor yang terdapat pada gambar adalah daerah \\[AC\\] dan \\[BD\\]";
          MathJax.typeset();
          }
        else {
          document.getElementById("demo1").innerHTML = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi dan ingat gunakan huruf kapital";
        }
      } }
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
  
  /*Pertanyaan 3*/
  
  function myFunction16() {
      var x = document.getElementById("myText16").value.split(' ').join('');
       var jawaban;
       if (x == "15") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[(4x+85)^{\\circ}=(8x+25)^{\\circ}\\] <br><br> \\[\\,\\,\\,85^{\\circ}-25^{\\circ}=8x^{\\circ}-4x^{\\circ}\\] <br><br> \\[\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,60^{\\circ}=4x^{\\circ}\\] <br><br> \\[\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\frac{60^{\\circ}}{4^{\\circ}}=x\\] <br><br> \\[\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,15^{\\circ}=x\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo16").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction17() {
      var x = document.getElementById("myText17").value.split(' ').join('');
       var jawaban;
       if (x == "145") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[m\\angle IGE=(4x+85)^{\\circ}\\] <br><br> \\[m\\angle IGE=4(15)^{\\circ}+85^{\\circ}\\] <br><br> \\[m\\angle IGE=60^{\\circ}+85^{\\circ}\\] <br><br> \\[m\\angle IGE=145^{\\circ}\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo17").innerHTML = jawaban;
       MathJax.typeset();
  }
  
  function myFunction18() {
      var x = document.getElementById("myText18").value.split(' ').join('');
       var jawaban;
       if (x == "35") {
         jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[m\\angle EGF=180^{\\circ}-m\\angle IGE\\] <br><br> \\[m\\angle EGF=180^{\\circ}-145^{\\circ}\\] <br><br> \\[m\\angle EGF=35^{\\circ}\\]";
       } else if (x =="") {
         jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
       } else {
         jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
       }
       document.getElementById("demo18").innerHTML = jawaban;
       MathJax.typeset();
  }

  function juring() {
    var x = document.getElementById("Textjuring").value.split(' ').join('');
    var jawaban;
    if (x == "JARI-JARI") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Jari-jari") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "jari-jari") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojuring").innerHTML = jawaban;
  }

  function juring2() {
    var x = document.getElementById("Textjuring2").value.split(' ').join('');
    var jawaban;
    if (x == "BUSUR") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Busur") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "busur") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demojuring2").innerHTML = jawaban;
  }
  
  function juring3() {
    var x = document.getElementById("Textjuring3").value.split(' ').join('');
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
    document.getElementById("demojuring3").innerHTML = jawaban;
  }

  function tembereng() {
    var x = document.getElementById("Texttembereng").value.split(' ').join('');
    var jawaban;
    if (x == "DAERAH") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "Daerah") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else if (x == "daerah") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demotembereng").innerHTML = jawaban;
  }

  function tembereng2() {
    var x = document.getElementById("Texttembereng2").value;
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
    document.getElementById("demotembereng2").innerHTML = jawaban;
  }

  function mm4() {
    var x = document.getElementById("Textmm4").value.split(' ').join('');
    var jawaban;
    if (x == "180") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm4").innerHTML = jawaban;
  }
  
  function mm5() {
    var x = document.getElementById("Textmm5").value.split(' ').join('');
    var jawaban;
    if (x == "90") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm5").innerHTML = jawaban;
  }
  
  function mm6() {
    var x = document.getElementById("Textmm6").value.split(' ').join('');
    var jawaban;
    if (x == "60") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'> \\[\\,\\,dan\\,\\,bertolak\\,\\,belakang\\,\\,dengan\\,\\,\\angle WCZ\\]"
    } else if ( x == "") {
      jawaban = "\\[\\,\\,dan\\,\\,bertolak\\,\\,belakang\\,\\,dengan\\,\\,\\angle WCZ\\]";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'> \\[\\,\\,dan\\,\\,bertolak\\,\\,belakang\\,\\,dengan\\,\\,\\angle WCZ\\]";
    }
    document.getElementById("demomm6").innerHTML = jawaban;
    MathJax.typeset();
  }
  
  function mm7() {
    var x = document.getElementById("Textmm7").value.split(' ').join('');
    var jawaban;
    if (x == "60") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm7").innerHTML = jawaban;
  }
  
  function mm8() {
    var x = document.getElementById("Textmm8").value.split(' ').join('');
    var jawaban;
    if (x == "30") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm8").innerHTML = jawaban;
  }
  
  function mm9() {
    var x = document.getElementById("Textmm9").value.split(' ').join('');
    var jawaban;
    if (x == "60") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm9").innerHTML = jawaban;
  }
  
  function mm10() {
    var x = document.getElementById("Textmm10").value.split(' ').join('');
    var jawaban;
    if (x == "120") {
      jawaban = "<img src='benar.png'  width='25px' height='25px'>"
    } else if ( x == "") {
      jawaban = "";
    } else {
      jawaban = "<img src='salah.png'  width='25px' height='25px'>";
    }
    document.getElementById("demomm10").innerHTML = jawaban;
  }
  