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

xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
});
xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
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
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
}

var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";  
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace(" active3", "");
  }
  slides2[slideIndex-1].style.display = "block";  
  dots2[slideIndex-1].className += " active3";
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

/* mari mencoba isian */

function myFunction45() {
  var x = document.getElementById("myText45").value.split(' ').join('');
     var jawaban;
     if (x == "15") {
       jawaban = "<img src='benar.png' class='ikon1' width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png' class='ikon1' width='25px' height='25px'>";
     }
     document.getElementById("demo45").innerHTML = jawaban;
}

function myFunction46() {
  var x = document.getElementById("myText46").value.split(' ').join('');
     var jawaban;
     if (x == "8") {
       jawaban = "<img src='benar.png' class='ikon1' width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png' class='ikon1' width='25px' height='25px'>";
     }
     document.getElementById("demo46").innerHTML = jawaban;
}

function myFunction47() {
  var x = document.getElementById("myText47").value.split(' ').join('');
     var jawaban;
     if (x == "4") {
       jawaban = "<img src='benar.png' class='ikon1' width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png' class='ikon1' width='25px' height='25px'>";
     }
     document.getElementById("demo47").innerHTML = jawaban;
}

function myFunction48() {
  var x = document.getElementById("myText48").value.split(' ').join('');
     var jawaban;
     if (x == "225") {
       jawaban = "<img src='benar.png' class='ikon1' width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png' class='ikon1' width='25px' height='25px'>";
     }
     document.getElementById("demo48").innerHTML = jawaban;
}

function myFunction49() {
  var x = document.getElementById("myText49").value.split(' ').join('');
     var jawaban;
     if (x == "144") {
       jawaban = "<img src='benar.png' class='ikon1' width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png' class='ikon1' width='25px' height='25px'>";
     }
     document.getElementById("demo49").innerHTML = jawaban;
}

function myFunction50() {
  var x = document.getElementById("myText50").value.split(' ').join('');
     var jawaban;
     if (x == "81") {
       jawaban = "<img src='benar.png' class='ikon1' width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png' class='ikon1' width='25px' height='25px'>";
     }
     document.getElementById("demo50").innerHTML = jawaban;
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
     document.getElementById("demo42a").innerHTML = jawaban;
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
     document.getElementById("demo43a").innerHTML = jawaban;
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
     document.getElementById("demo44a").innerHTML = jawaban;
     MathJax.typeset();
}