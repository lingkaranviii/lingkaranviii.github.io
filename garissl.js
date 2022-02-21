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

/* mari mencoba isian */

function myFunction41() {
  var x = document.getElementById("myText41").value.split(' ').join('');
     var jawaban;
     if (x == "17") {
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
     if (x == "12") {
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
     if (x == "289") {
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
     if (x == "64") {
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
     if (x == "225") {
       jawaban = "<img src='benar.png'  width='25px' height='25px'>";
     } else if (x =="") {
       jawaban = ""
     } else {
       jawaban = "<img src='salah.png'  width='25px' height='25px'>";
     }
     document.getElementById("demo46").innerHTML = jawaban;
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
     document.getElementById("demo38a").innerHTML = jawaban;
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
     document.getElementById("demo39a").innerHTML = jawaban;
     MathJax.typeset();
}

function myFunction40() {
	var x = document.getElementById("myText40").value.split(' ').join('');
     var jawaban;
     if ((x == "26,5") || (x == "26,51") || (x == "26,514")) {
       jawaban = "<b style='color: green'><center>Jawabanmu Benar,</center></b> <br><br> \\[p=j+(R+r)\\] <br><br> \\[p=7+(15+6)\\] <br><br> \\[p=7+21\\] <br><br> \\[p=28\\,cm\\] <br><br><br> \\[l^{2}=p^{2}-(R-r)^{2}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{p^{2}-(R-r)^{2}}\\] <br><br> \\[l=\\sqrt{28^{2}-(15-6)^{2}}\\] <br><br> \\[l=\\sqrt{784-81}\\] <br><br> \\[l=\\sqrt{703}\\] <br><br> \\[l=26,5\\,cm\\]";
     } else if (x =="") {
       jawaban = "<center>Silahkan masukkan jawaban, jawaban tidak boleh kosong</center>"
     } else {
       jawaban = "<b style='color: red'><center>Jawabanmu Salah,</b> silahkan coba lagi!</center>";
     }
     document.getElementById("demo40a").innerHTML = jawaban;
     MathJax.typeset();
}