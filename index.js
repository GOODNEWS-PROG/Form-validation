
// let submit = document.getElementById('submit')
// let username = document.getElementById('username').value.trim();
// let email = document.getElementById('email').value.trim();
// let password = document.getElementById('pass1').value.trim();
// let confirmPassword = document.getElementById('Pass2').value.trim();
// let errorMessage = document.getElementById('errormsg')

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   function valiDation () {
//     if (username === '') {
//       alert(hbhbjb)
     
//     }
    
//   }

  
//   function buttOn () {
//     document.addEventListener("submit", onclick(valiDation))
//     alert(yy)
//   }
  
//   buttOn();
//   valiDation();
// });

document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById('submit');
  let errorMessage = document.getElementById('errormsg');

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    let username = document.getElementById('Username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('pass1').value.trim();
    let confirmPassword = document.getElementById('pass2').value.trim();
    
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);
    
    function valiDation() {
      if (username === '' ) {
        // alert('Username cannot be empty.');
        document.getElementById('errormsg').style.display = 'block';
     
      } else {
        document.getElementById('errormsg').style.display = 'none'; 
      }
      
      // for email

      if(email === ''){
        document.getElementById('errormsgg').style.display = 'block';
      }else {
        document.getElementById('errormsgg').style.display = 'none'; 
      }
            
      //for password
      if(password === '') {
        document.getElementById('error').style.display = 'block';
      } else{
        document.getElementById('error').style.display = 'none'; 
      }

      //for confirm password
      if(confirmPassword !==  password){
        document.getElementById('errormsag').style.display = 'block';
      } else{
        document.getElementById('errormsag').style.display = 'none';
        
      }


    }
    
    valiDation();
  });
});

