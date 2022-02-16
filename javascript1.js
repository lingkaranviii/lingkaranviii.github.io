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
var x5 = document.getElementById("tujuan3");
var xx5= document.querySelector('.tujuan3');

xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
});
xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
});
xx3.addEventListener("click",function(){
  x3.classList.toggle("hilang");
});
xx5.addEventListener("click",function(){
  x5.classList.toggle("hilang");
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

function sudutpusat() {
  var x = document.getElementById("Textsudutpusat").value.toLowerCase();
  var jawaban;
  if (x == "sinar garis") {
    jawaban = "<img class='ikon2' src='benar.png'  width='25px' height='25px'>"
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img class='ikon2' src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demosudutpusat").innerHTML = jawaban;
}

function sudutpusat2() {
  var x = document.getElementById("Textsudutpusat2").value.toLowerCase();
  var jawaban;
  if (x == "jari-jari" || x == "jari jari") {
    jawaban = "<img class='ikon2' src='benar.png'  width='25px' height='25px'>"
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img class='ikon2' src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demosudutpusat2").innerHTML = jawaban;
}

function sudutpusat3() {
  var x = document.getElementById("Textsudutpusat3").value.toLowerCase();
  var jawaban;
  if (x == "pusat") {
    jawaban = "<img class='ikon2' src='benar.png'  width='25px' height='25px'>"
  } else if (x == "") {
    jawaban = "";
  } else {
    jawaban = "<img class='ikon2' src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demosudutpusat3").innerHTML = jawaban;
}