console.log("Hello");


function myFunction() {
  if(/^[a-zA-Z\s]+$/.test(document.getElementById('nama').value) == false){
    document.getElementById('namaErr').innerHTML = 'Nama harus dalam alfabet';
    return false;
  } else {
    document.getElementById('namaErr').innerHTML = '';
  }

  if(/^\d+$/.test(document.getElementById('kode').value) == false || document.getElementById('kode').value.toString().length != 5) {
    document.getElementById('kodeErr').innerHTML = 'Kode Pos berisi 5 digit angka';
    return false;
  } else {
    document.getElementById('kodeErr').innerHTML = '';
  }

  if(document.getElementById('nik').value.toString().length != 16 || /^\d+$/.test(document.getElementById('nik').value) != true) {
    document.getElementById('nikErr').innerHTML = 'NIK berisi 16 digit angka';
    return false;
  } else {
    document.getElementById('nikErr').innerHTML = '';
  }
  return true;
}

function fileValidation() {
  var fileInput =
      document.getElementById('formFile');
   
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions =
          /(\.jpg|\.jpeg|\.png)$/i;

  const fsize = filePath.files.item(i).size;
  const file = Math.round((fsize / 1024));
  // The size of the file.
  if (file >= 512) {
    alert("File too Big, please select a file less than 512kb");
    return false;
  }
   
  if (!allowedExtensions.exec(filePath)) {
      document.getElementById('fileErr').innerHTML = "Harus merupakan file foto";
      fileInput.value = '';
      return false;
  }
  else
  {
   
      // Image preview
      if (fileInput.files && fileInput.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById(
                  'fileErr').innerHTML =
                  '<img src="' + e.target.result + '"'
                  + 'width="180"' + '/>';
          };
           
          reader.readAsDataURL(fileInput.files[0]);
      }
  }
}