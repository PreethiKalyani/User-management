const loginPage = document.getElementById('create');

loginPage.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './userReg.html';
});


function validate(e){
    e.preventDefault();
    let adminName = document.getElementById('adminname').value;
    let adminPassword = document.getElementById('adminpass').value;
    
    if(adminName == 'Admin' && adminPassword == 'Admin.456ad'){
        window.location.href = './adminPage.html';
        return true;
    }
    else{
        alert('Invalid Username or Password');
    }
}

function register(e) {
    e.preventDefault();
    
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({
        userName : document.getElementById('userName').value,
        userEmail : document.getElementById('userEmail').value,
        userPassword : document.getElementById('userPass').value,
        userMobileNumber : document.getElementById('mobile').value,
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    document.querySelector('form').reset();
}


function check(e){
    e.preventDefault();
    let userName = document.getElementById('uName').value;
    let userPassword = document.getElementById('uPass').value;
    let formData = JSON.parse(localStorage.getItem('formData'));
    for(let i = 0; i < formData.length; i++){
        if((formData[i].userName == userName) && (formData[i].userPassword == userPassword)){
            window.location.href = './userPage.html';
            return true;
        }
    }
}

function userData(){
    console.log(localStorage.getItem('formData'));
   if(localStorage.getItem('formData')){
       var output = document.querySelector('tbody');
       output.innerHTML = "";
       JSON.parse(localStorage.getItem('formData')).forEach(data => {
           output.innerHTML += `
           <tr>
              <td>${data.userName}</td>
              <td>${data.userEmail}</td>
              <td>${data.userPassword}</td>
              <td>${data.userMobileNumber}</td>
              <td><label class="switch">
              <input type="checkbox">
              <span class="slider"></span>
            </label></td>
            </tr>`;
       })
   }
}

function displayUserDetails(){
    var userName = document.getElementById('uName').value;
    var userPassword = document.getElementById('uPass').value;
    // console.log(userName);
    let div = document.querySelector('tbody');
    // div.innerHTML = "";
    let formData = JSON.parse(localStorage.getItem('formData'));
    // console.log(formData);
   
    formData.forEach(data => {
        if((data.userName == userName) && (data.userPassword == userPassword)){
           console.log(data);
           console.log(userName);
           console.log(data.userPassword);
        }
    })
}
