function checkuser() {
  
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  
  if( username != "" && password != "" ){
  var xhttp;  
  xhttp = new XMLHttpRequest();
  xhttp.open("POST", "checklogin.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username="+username+"&password="+password);   

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      if (data == "true" ){
        Swal.fire({
            icon : 'success',
            title: '"Success Login"',
            showConfirmButton: false,
            timer: 2000,
            text: 'Berhasil Login',
            
            }).then (function(result) {
                  window.location.href='dashboard.php';
            }) 
      } else if (data == "false"){
        Swal.fire({
            icon : 'error',
            title: '"Error Login"',
            showConfirmButton: false,
            timer: 3000,
            text: 'Login Gagal'
            })
      } 
    }
  };
  
  }
}