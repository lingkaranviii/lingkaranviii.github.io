function ftampil(){

	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
		console.log(dropdown.length);
  		dropdown[i].addEventListener("click", function() {
  			this.classList.toggle("active2");
  			var dropdownContent = this.nextElementSibling;
  			if (dropdownContent.style.display === "block") {
  				dropdownContent.style.display = "none";
  			} else {
  				dropdownContent.style.display = "block";
  			}
  		});
	}
}

var x1 = document.getElementById("tujuan");
var xx1= document.querySelector('.tujuan');
var x2 = document.getElementById("tujuan1");
var xx2= document.querySelector('.tujuan1');
var x3 = document.getElementById("tujuan2");
var xx3= document.querySelector('.tujuan2');


xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
});
xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
});
xx3.addEventListener("click",function(){
  x3.classList.toggle("hilang");
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

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

/*Mari Mencoba 5*/

function myFunction21() {
	var x = document.getElementById("myText21").value.split(' ').join('');
     var jawaban;
     if (x == "32") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Pembahasan: <b>a. Nilai</b> \\[x\\] <br><br> Dikarenakan \\[m\\angle LKM = 50^{\\circ}\\] dan \\[m\\angle LQM = (3x+4)^{\\circ}\\] dan sudut keliling \\[\\angle LKM\\] menghadap busur yang sama dengan sudut pusat \\[m\\angle LQM\\], maka: <br><br> \\[m\\angle LQM = 2×m\\angle LKM\\] <br><br> \\[(3x+4)^{\\circ}=2×50^{\\circ}\\] <br><br> \\[(3x+4)^{\\circ}=100^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[3x^{\\circ}=100^{\\circ}-4^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[3x^{\\circ}=96^{\\circ}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[x=\\frac{96^{\\circ}}{3^{\\circ}}\\] <br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \\[x=32^{\\circ}\\]";
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
     document.getElementById("demo25").innerHTML = jawaban;
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
     document.getElementById("demo26").innerHTML = jawaban;
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

/*Mari Mencoba 7*/

function myFunction37() {
	var x = document.getElementById("myText37").value.split(' ').join('');
     var jawaban;
     if (x == "15") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Dikarenakan jarak pusat kedua lingkaran adalah \\[17\\,cm\\] dan jari-jarinya \\[12\\,cm\\] dan \\[4\\,cm\\], maka: <br><br> \\[GH=\\sqrt{EF^{2}-(EG-FH)^{2}}\\] <br><br> \\[GH=\\sqrt{EF^{2}-(R-r)^{2}}\\] <br><br> \\[GH=\\sqrt{17^{2}-(12-4)^{2}}\\] <br><br> \\[GH=\\sqrt{289-64}\\] <br><br> \\[GH=\\sqrt{225}\\] <br><br> \\[GH=15\\,cm\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong";
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo5").innerHTML = jawaban;
     MathJax.typeset();
}

/*Pertanyaan 7*/

function myFunction38() {
	var x = document.getElementById("myText38").value.split(' ').join('');
     var jawaban;
     if (x == "30") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[p^{2}=l^{2}+(R-r)^{2}\\] <br><br> \\[p=\\sqrt{l^{2}+(R-r)^{2}}\\] <br><br> \\[p=\\sqrt{24^{2}+(20-2)^{2}}\\] <br><br> \\[p=\\sqrt{576+324}\\] <br><br> \\[p=\\sqrt{900}\\] <br><br> \\[p=30\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>";
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo38").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction39() {
	var x = document.getElementById("myText39").value.split(' ').join('');
     var jawaban;
     if (x == "8") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[j=p-(R+r)\\] <br><br> \\[j=30-(20+2)\\] <br><br> \\[j=30-22\\] <br><br> \\[j=8\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>";
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo39").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction40() {
	var x = document.getElementById("myText40").value.split(' ').join('');
     var jawaban;
     if (x == "26,5") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[p=j+(R+r)\\] <br><br> \\[p=7+(15+6)\\] <br><br> \\[p=7+21\\] <br><br> \\[p=28\\,cm\\] <br><br><br> \\[l^{2}=p^{2}-(R-r)^{2}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{28^{2}-(15-6)^{2}}\\] <br><br> \\[l=\\sqrt{784-81}\\] <br><br> \\[l=\\sqrt{703}\\] <br><br> \\[l=26,5\\,cm\\]";
     } else if (x == "26,514") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[p=j+(R+r)\\] <br><br> \\[p=7+(15+6)\\] <br><br> \\[p=7+21\\] <br><br> \\[p=28\\,cm\\] <br><br><br> \\[l^{2}=p^{2}-(R-r)^{2}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{28^{2}-(15-6)^{2}}\\] <br><br> \\[l=\\sqrt{784-81}\\] <br><br> \\[l=\\sqrt{703}\\] <br><br> \\[l=26,514\\,cm\\]";
     } else if (x == "26,51") {
        jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[p=j+(R+r)\\] <br><br> \\[p=7+(15+6)\\] <br><br> \\[p=7+21\\] <br><br> \\[p=28\\,cm\\] <br><br><br> \\[l^{2}=p^{2}-(R-r)^{2}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{28^{2}-(15-6)^{2}}\\] <br><br> \\[l=\\sqrt{784-81}\\] <br><br> \\[l=\\sqrt{703}\\] <br><br> \\[l=26,51\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo40").innerHTML = jawaban;
     MathJax.typeset();
}

/*Mari Mencoba 8*/

function myFunction41() {
	var x = document.getElementById("myText41").value.split(' ').join('');
     var jawaban;
     if (x == "9") {
      jawaban = "<b style='color: green'>Jawabanmu Benar</b>, <br><br> Dikarenakan jarak antara lingkaran \\[A\\] dan \\[B\\] adalah \\[3\\,cm\\] dan jari-jarinya \\[8\\,cm\\] dan \\[4\\,cm\\], maka: <br><br> Cari terlebih dahulu jarak titik pusat kedua lingkaran, <br><br> \\[p=j+(R+r)\\] <br><br> \\[p=3+(8+4)\\] <br><br> \\[p=15\\,cm\\] <br><br><br> \\[d=\\sqrt{p^{2}-(R+r)^{2}}\\] <br><br> \\[d=\\sqrt{15^{2}-(8+4)^{2}}\\] <br><br> \\[d=\\sqrt{225-144}\\] <br><br> \\[d=\\sqrt{81}\\] <br><br> \\[d=9\\,cm\\]";
    } else if (x =="") {
      jawaban = "Silahkan masukkan jawaban, jawaban tidak boleh kosong"
    } else {
      jawaban = "<b style='color: red'>Jawabanmu Salah</b>, silahkan coba lagi!";
    }
     document.getElementById("demo6").innerHTML = jawaban;
     MathJax.typeset();
}

/*Pertanyaan 8*/

function myFunction42() {
	var x = document.getElementById("myText42").value.split(' ').join('');
     var jawaban;
     if (x == "16") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[d^{2}=p^{2}-(R+r)^{2}\\] <br><br> \\[d=\\sqrt{p^{2}-(R+r)^{2}}\\] <br><br> \\[d=\\sqrt{20^{2}-(7+5)^{2}}\\] <br><br> \\[d=\\sqrt{20^{2}-12^{2}}\\] <br><br> \\[d=\\sqrt{400-144}\\] <br><br> \\[d=\\sqrt{256}\\] <br><br> \\[d=16\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo42").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction43() {
	var x = document.getElementById("myText43").value.split(' ').join('');
     var jawaban;
     if (x == "8") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[j=p-(R+r)\\] <br><br> \\[j=20-(7+5)\\] <br><br> \\[j=20-12\\] <br><br> \\[j=8\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo43").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction44() {
	var x = document.getElementById("myText44").value.split(' ').join('');
     var jawaban;
     if (x == "13") {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[p^{2}=d^{2}+(R+r)^{2}\\] <br><br> \\[p=\\sqrt{d^{2}+(R+r)^{2}}\\] <br><br> \\[p=\\sqrt{12^{2}+(3+2)^{2}}\\] <br><br> \\[p=\\sqrt{12^{2}+5^{2}}\\] <br><br> \\[p=\\sqrt{144+25}\\] <br><br> \\[p=\\sqrt{169}\\] <br><br> \\[p=13\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo44").innerHTML = jawaban;
     MathJax.typeset();
}

/* SUBBAB 1 */

function busur() {
  var x = document.getElementById("Textbusur").value.split(' ').join('');
  var jawaban;
  if (x == "BUSUR") {
    jawaban = "<ol><li>Busur merupakan kurva lengkung yang berhimpit dengan lingkaran.</li><br><li>Lingkaran <b>pertama</b> pada gambar 5, ukuran sudut pusatnya kurang dari setengah lingkaran atau < 180° maka disebut busur minor.</li><br><li>Kemudian lingkaran <b>kedua</b> pada gambar 5, ukuran sudut pusatnya lebih dari setengah lingkaran atau > 180° maka disebut busur mayor.</li><br><li>Lingkaran <b>ketiga</b> pada gambar 5, busur setengah lingkaran berukuran sudut pusat = 180°.</li></ol><br><br><br> <b><i>Keterangan:</b></i> Untuk selanjutnya, jika tidak disebutkan mayor atau minor, maka yang dimaksud adalah minor.";
  } else if (x == "Busur") {
    jawaban = "<ol><li>Busur merupakan kurva lengkung yang berhimpit dengan lingkaran.</li><br><li>Lingkaran <b>pertama</b> pada gambar 5, ukuran sudut pusatnya kurang dari setengah lingkaran atau < 180° maka disebut busur minor.</li><br><li>Kemudian lingkaran <b>kedua</b> pada gambar 5, ukuran sudut pusatnya lebih dari setengah lingkaran atau > 180° maka disebut busur mayor.</li><br><li>Lingkaran <b>ketiga</b> pada gambar 5, busur setengah lingkaran berukuran sudut pusat = 180°.</li></ol><br><br><br> <b><i>Keterangan:</b></i> Untuk selanjutnya, jika tidak disebutkan mayor atau minor, maka yang dimaksud adalah minor.";
  } else if (x == "busur") {
    jawaban = "<ol><li>Busur merupakan kurva lengkung yang berhimpit dengan lingkaran.</li><br><li>Lingkaran <b>pertama</b> pada gambar 5, ukuran sudut pusatnya kurang dari setengah lingkaran atau < 180° maka disebut busur minor.</li><br><li>Kemudian lingkaran <b>kedua</b> pada gambar 5, ukuran sudut pusatnya lebih dari setengah lingkaran atau > 180° maka disebut busur mayor.</li><br><li>Lingkaran <b>ketiga</b> pada gambar 5, busur setengah lingkaran berukuran sudut pusat = 180°.</li></ol><br><br><br> <b><i>Keterangan:</b></i> Untuk selanjutnya, jika tidak disebutkan mayor atau minor, maka yang dimaksud adalah minor.";
  } else {
    jawaban = "";
  }
  document.getElementById("demobusur").innerHTML = jawaban;
} 

function jari2() {
  var x = document.getElementById("Textjari2").value.split(' ').join('');
  var jawaban;
  if (x == "JARI-JARI") {
    jawaban = "<ol><li>Jari-jari r pada gambar 6 yang berupa ruas dari pusat ke titik lingkaran.</li><br><li>Menghubungkan titik pada lingkaran dengan titik pusat.</li><br></ol>"
  } else if (x == "Jari-jari") {
    jawaban = "<ol><li>Jari-jari r pada gambar 6 yang berupa ruas dari pusat ke titik lingkaran.</li><br><li>Menghubungkan titik pada lingkaran dengan titik pusat.</li><br></ol>"
  } else if (x == "jari-jari") {
    jawaban = "<ol><li>Jari-jari r pada gambar 6 yang berupa ruas dari pusat ke titik lingkaran.</li><br><li>Menghubungkan titik pada lingkaran dengan titik pusat.</li><br></ol>"
  } else {
    jawaban = "";
  }
  document.getElementById("demojari2").innerHTML = jawaban;
}

function diameter() {
  var x = document.getElementById("Textdiameter").value.split(' ').join('');
  var jawaban;
  if (x == "DIAMETER") {
    jawaban = "<ol><li>Diameter pada gambar 7 yang berupa ruas.</li><br><li>Menghubungkan dua titik pada lingkaran yaitu \\[BD\\].</li><br><li>Melalui titik pusat lingkaran \\[O\\].</li><br></ol>"
  } else if (x == "Diameter") {
    jawaban = "<ol><li>Diameter pada gambar 7 yang berupa ruas.</li><br><li>Menghubungkan dua titik pada lingkaran yaitu \\[BD\\].</li><br><li>Melalui titik pusat lingkaran \\[O\\].</li><br></ol>"
  } else if (x == "diameter") {
    jawaban = "<ol><li>Diameter pada gambar 7 yang berupa ruas.</li><br><li>Menghubungkan dua titik pada lingkaran yaitu \\[BD\\].</li><br><li>Melalui titik pusat lingkaran \\[O\\].</li><br></ol>"
  } else {
    jawaban = "";
  }
  document.getElementById("demodiameter").innerHTML = jawaban;
  MathJax.typeset();
}

function talibusur() {
  var x = document.getElementById("Texttalibusur").value;
  var jawaban;
  if (x == "TALI BUSUR") {
    jawaban = "<ol><li>Contoh tali busur pada gambar 8 yang berupa ruas garis.</li><br><li>Menghubungkan dua titik pada lingkaran, bisa melalui titik pusat ataupun tidak.</li><br></ol>"
  } else if (x == "Tali Busur") {
    jawaban = "<ol><li>Contoh tali busur pada gambar 8 yang berupa ruas garis.</li><br><li>Menghubungkan dua titik pada lingkaran, bisa melalui titik pusat ataupun tidak.</li><br></ol>"
  } else if (x == "tali busur") {
    jawaban = "<ol><li>Contoh tali busur pada gambar 8 yang berupa ruas garis.</li><br><li>Menghubungkan dua titik pada lingkaran, bisa melalui titik pusat ataupun tidak.</li><br></ol>"
  } else {
    jawaban = "";
  }
  document.getElementById("demotalibusur").innerHTML = jawaban;
}

function apotema() {
  var x = document.getElementById("Textapotema").value.split(' ').join('');
  var jawaban;
  if (x == "APOTEMA") {
    jawaban = "<ol><li>Contoh apotema pada gambar 9 yang berupa ruas garis.</li><br><li>Menghubungkan titik pusat dengan satu titik di tali busur.</li><br><li>Tegak lurus dengan tali busur.</li><br></ol>"
  } else if (x == "Apotema") {
    jawaban = "<ol><li>Contoh apotema pada gambar 9 yang berupa ruas garis.</li><br><li>Menghubungkan titik pusat dengan satu titik di tali busur.</li><br><li>Tegak lurus dengan tali busur.</li><br></ol>"
  } else if (x == "apotema") {
    jawaban = "<ol><li>Contoh apotema pada gambar 9 yang berupa ruas garis.</li><br><li>Menghubungkan titik pusat dengan satu titik di tali busur.</li><br><li>Tegak lurus dengan tali busur.</li><br></ol>"
  } else {
    jawaban = "";
  }
  document.getElementById("demoapotema").innerHTML = jawaban;
}

function mm1() {
  var x = document.getElementById("Textmm1").value.split(' ').join('');
  var jawaban;
  if (x == "12") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
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
    jawaban = "<img src='benar.png'  width='25px' height='25px'> <br><br> \\[Apotema\\,MN=\\sqrt{12^{2}-\\left ( \\frac{1}{2} 16 \\right )^{2}}\\]"
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

function juring() {
  var x = document.getElementById("Textjuring").value.split(' ').join('');
  var jawaban;
  if (x == "JURING") {
    jawaban = "<ol><li>Contoh juring pada gambar 10 yang berupa daerah di dalam lingkaran.</li><br><li>Dibatasi oleh dua jari-jari dan satu busur lingkaran.</li><br><li>Jari-jari yang membatasi memuat titik ujung busur lingkaran.</li><br></ol>"
  } else if (x == "Juring") {
    jawaban = "<ol><li>Contoh juring pada gambar 10 yang berupa daerah di dalam lingkaran.</li><br><li>Dibatasi oleh dua jari-jari dan satu busur lingkaran.</li><br><li>Jari-jari yang membatasi memuat titik ujung busur lingkaran.</li><br></ol>"
  } else if (x == "juring") {
    jawaban = "<ol><li>Contoh juring pada gambar 10 yang berupa daerah di dalam lingkaran.</li><br><li>Dibatasi oleh dua jari-jari dan satu busur lingkaran.</li><br><li>Jari-jari yang membatasi memuat titik ujung busur lingkaran.</li><br></ol>"
  } else {
    jawaban = "";
  }
  document.getElementById("demojuring").innerHTML = jawaban;
}

function tembereng() {
  var x = document.getElementById("Texttembereng").value.split(' ').join('');
  var jawaban;
  if (x == "TEMBERENG") {
    jawaban = "<ol><li>Contoh tembereng pada gambar 11 yang berupa daerah di dalam lingkaran.</li><br><li>Dibatasi oleh tali busur dan busur lingkaran.</li><br></ol> <i><b>Keterangan</b></i>: untuk istilah busur, juring, tembereng, maupun sudut, jika tidak disebutkan secara spesifik minor atau mayor, maka disepakati minor."
  } else if (x == "Tembereng") {
    jawaban = "<ol><li>Contoh tembereng pada gambar 11 yang berupa daerah di dalam lingkaran.</li><br><li>Dibatasi oleh tali busur dan busur lingkaran.</li><br></ol> <i><b>Keterangan</b></i>: untuk istilah busur, juring, tembereng, maupun sudut, jika tidak disebutkan secara spesifik minor atau mayor, maka disepakati minor."
  } else if (x == "tembereng") {
    jawaban = "<ol><li>Contoh tembereng pada gambar 11 yang berupa daerah di dalam lingkaran.</li><br><li>Dibatasi oleh tali busur dan busur lingkaran.</li><br></ol> <i><b>Keterangan</b></i>: untuk istilah busur, juring, tembereng, maupun sudut, jika tidak disebutkan secara spesifik minor atau mayor, maka disepakati minor."
  } else {
    jawaban = "";
  }
  document.getElementById("demotembereng").innerHTML = jawaban;
}

function sudutpusat() {
  var x = document.getElementById("Textsudutpusat").value;
  var jawaban;
  if (x == "SUDUT PUSAT") {
    jawaban = "<ol><li>Perhatikan contoh sudut pusat pada gambar 4 yang terbentuk dari dua sinar garis (kaki sudut).</li><br><li>Kaki sudut berhimpit dengan jari-jari lingkaran.</li><br><li>Titik sudut berhimpit dengan titik pusat lingkaran.</li></ol><br>"
  } else if (x == "Sudut Pusat") {
    jawaban = "<ol><li>Perhatikan contoh sudut pusat pada gambar 4 yang terbentuk dari dua sinar garis (kaki sudut).</li><br><li>Kaki sudut berhimpit dengan jari-jari lingkaran.</li><br><li>Titik sudut berhimpit dengan titik pusat lingkaran.</li></ol><br>"
  } else if (x == "sudut pusat") {
    jawaban = "<ol><li>Perhatikan contoh sudut pusat pada gambar 4 yang terbentuk dari dua sinar garis (kaki sudut).</li><br><li>Kaki sudut berhimpit dengan jari-jari lingkaran.</li><br><li>Titik sudut berhimpit dengan titik pusat lingkaran.</li></ol><br>"
  } else {
    jawaban = "";
  }
  document.getElementById("demosudutpusat").innerHTML = jawaban;
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

/* SUBBAB 2 */

function mm11() {
  var x = document.getElementById("Textmm11").value.split(' ').join('');
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
  var x = document.getElementById("Textmm12").value.split(' ').join('');
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
  var x = document.getElementById("Textmm13").value.split(' ').join('');
  var jawaban;
  if (x == "CWD") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm13").innerHTML = jawaban;
}

function mm14() {
  var x = document.getElementById("Textmm14").value.split(' ').join('');
  var jawaban;
  if (x == "COD") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm14").innerHTML = jawaban;
}

function mm15() {
  var x = document.getElementById("Textmm15").value.split(' ').join('');
  var jawaban;
  if (x == "EYF") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm15").innerHTML = jawaban;
}

function mm16() {
  var x = document.getElementById("Textmm16").value.split(' ').join('');
  var jawaban;
  if (x == "EOF") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm16").innerHTML = jawaban;
}

function mm17() {
  var x = document.getElementById("Textmm17").value.split(' ').join('');
  var jawaban;
  if (x == "GJH") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm17").innerHTML = jawaban;
}

function mm18() {
  var x = document.getElementById("Textmm18").value.split(' ').join('');
  var jawaban;
  if (x == "GKH") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if ( x == "") {
    jawaban = "";
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demomm18").innerHTML = jawaban;
}

function mm19() {
  var x = document.getElementById("Textmm19").value.split(' ').join('');
  var jawaban;
  if (x == "GOH") {
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