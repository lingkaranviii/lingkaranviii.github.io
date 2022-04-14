// menguhubungkan ke firebase
var firebaseConfig = {
    apiKey: "AIzaSyC9nDwrMuB2BDep7PR9RVKE63HBy9d05CI",
    authDomain: "lingkaran8-720b4.firebaseapp.com",
    projectId: "lingkaran8-720b4",
    storageBucket: "lingkaran8-720b4.appspot.com",
    messagingSenderId: "601366976968",
    appId: "1:601366976968:web:3be0ad083c3007d5bcc8fd"
  };

  firebase.initializeApp(firebaseConfig);


window.onload = function () {
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

function readlah() {
    var task = firebase.database().ref("kuis2/");
    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    let kelasfix = '';
    let sekolahfix = '';

    if (kelasnya.value == "1") {
        kelasfix = "8A";
    } else if (kelasnya.value == "2") {
        kelasfix = "8B";
    } else if (kelasnya.value == "3") {
        kelasfix = "8C";
    } 

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri 15 Banjarmasin";
    }

    if ((sekolahfix != '') && (kelasfix != '')) {
       task.orderByChild("hari").on("child_added", function(data){
        //task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1 table1">${taskvalue.sekolah}</td>
                            <td class="ukr3 table1">${taskvalue.kelas}</td>
                            <td class="ukr1 table1">${taskvalue.nama}</td>
                            <td class="ukr3 table1">${taskvalue.nilai}</td>
                            <td class="ukr2 table1">${taskvalue.hari}</td>
                            <td class="ukr2 table1">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else if (sekolahfix != '') {
        task.orderByChild("hari").on("child_added", function(data){
        //task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
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