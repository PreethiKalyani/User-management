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
    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.userName.toLowerCase() == document.getElementById('userName').value.toLowerCase() && data.userEmail.toLowerCase() == document.getElementById('userEmail').value.toLowerCase());

    if(!exist){
        formData.push({
            userName : document.getElementById('userName').value,
            userEmail : document.getElementById('userEmail').value,
            userPassword : document.getElementById('userPass').value,
            userMobileNumber : document.getElementById('mobile').value,
            id : new Date().getTime(),
            status : 'Inactive',                    
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        alert('User Registered Successfully');
    }
    else{
        alert('User Already Exist');
    }
}
function check(e){
    e.preventDefault();
    let userName = document.getElementById('uName').value;
    let userPassword = document.getElementById('uPass').value;
    let formData = JSON.parse(localStorage.getItem('formData'));
    for(let i = 0; i < formData.length; i++){
        if((formData[i].userName == userName) && (formData[i].userPassword == userPassword)){
            if(formData[i].status == "Active"){
                localStorage.setItem('userName', JSON.stringify(formData[i].userName));
                localStorage.setItem('userEmail', JSON.stringify(formData[i].userEmail));
                localStorage.setItem('userMobileNumber', JSON.stringify(formData[i].userMobileNumber));
                window.location.href = './userPage.html';
            }
            else if(formData[i].status == "Inactive"){
                alert('Your Account is Inactive');
            }
        }
    }
}

function handleChange(id){
    let button = document.getElementById(id);
    let data = JSON.parse(localStorage.getItem('formData'));
        button.addEventListener('click', function(){
            if(button.id == id){
                for(let i = 0; i < data.length; i++){
                    if(data[i].id == id){
                       if(data[i].status == 'Inactive'){
                           data[i].status = 'Active';
                            button.innerHTML = 'Active';
                       }
                       else{
                           data[i].status = 'Inactive';
                           button.innerHTML = 'Inactive';
                       }
                    }
                }
                localStorage.setItem('formData', JSON.stringify(data));
            }
            
        });
}

function userData(){
    let formData = JSON.parse(localStorage.getItem('formData'));
    let output = document.querySelector('tbody');
    output.innerHTML = "";
    formData.forEach(data => {
        output.innerHTML += `
           <tr>
              <td>${data.userName}</td>
              <td>${data.userEmail}</td>
              <td>${data.userPassword}</td>
              <td>${data.userMobileNumber}</td>
              <td>
              <button id="${data.id}" class="bton" onclick="handleChange(${data.id})">${data.status}</button>
              </td>
            </tr>
        `;
    })
}

function displayUserDetails(){
   let userName = JSON.parse(localStorage.getItem('userName'));
   let userEmail = JSON.parse(localStorage.getItem('userEmail'));
   let userMobileNumber = JSON.parse(localStorage.getItem('userMobileNumber'));
   let details = document.getElementById('details');
   details.innerHTML = `
   <h2>Hello ${userName.toUpperCase()}!!</h2>
   <h3>Your Email is  <span>${userEmail}<span></h3>
   <h3>Your Mobile Number is  <span>${userMobileNumber}</span></h3>`;
}
//