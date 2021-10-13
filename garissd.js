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