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

function sudutpusat() {
  var x = document.getElementById("Textsudutpusat").value;
  var jawaban;
  if (x == "SINAR GARIS") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if (x == "Sinar Garis") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if (x == "sinar garis") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demosudutpusat").innerHTML = jawaban;
}

function sudutpusat2() {
  var x = document.getElementById("Textsudutpusat2").value;
  var jawaban;
  if (x == "JARI-JARI") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if (x == "Jari-jari") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if (x == "jari-jari") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demosudutpusat2").innerHTML = jawaban;
}

function sudutpusat3() {
  var x = document.getElementById("Textsudutpusat3").value;
  var jawaban;
  if (x == "PUSAT") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if (x == "Pusat") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else if (x == "pusat") {
    jawaban = "<img src='benar.png'  width='25px' height='25px'>"
  } else {
    jawaban = "<img src='salah.png'  width='25px' height='25px'>";
  }
  document.getElementById("demosudutpusat3").innerHTML = jawaban;
}