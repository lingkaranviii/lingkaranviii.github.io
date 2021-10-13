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