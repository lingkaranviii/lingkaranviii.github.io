// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyC9nDwrMuB2BDep7PR9RVKE63HBy9d05CI",
    authDomain: "lingkaran8-720b4.firebaseapp.com",
    projectId: "lingkaran8-720b4",
    storageBucket: "lingkaran8-720b4.appspot.com",
    messagingSenderId: "601366976968",
    appId: "1:601366976968:web:3be0ad083c3007d5bcc8fd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
window.load = function () {
}

function ftampil(){
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
  
    for (i = 0; i < dropdown.length; i++) {
      console.log(dropdown.length);
        dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
    }
  }

let kmplanId = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
kuisfix = kuisnya.value;


function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    var task = firebase.database().ref(kuisfix);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "8A";
    } else if (kelasnya.value == "2") {
        kelasfix = "8B";
    }

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri 15 Banjarmasin";
    } 


    let jwbfixx = [];

    let jwb1 = ["b", "b", "a", "a", "d", "c", "c", "c", "b", "d", "b", "a", "b", "e", "a", "a", "d", "d", "c", "a"];
    if (kuisfix == "pretest/") {
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class = "nah"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb1;
    }

    let jwb2 = ["b", "b", "a", "c", "e", "a", "d", "c", "c", "c", "b", "e", "d", "b", "a", "b", "e", "d", "c", "a"];
    if (kuisfix == "evaluasi1/") {
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class = "nah"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb2;
    }

    if ((sekolahfix != '') && (kelasfix != '')) {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();




            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });





    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
    kuis.value = value = "pretest/";
}




// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})