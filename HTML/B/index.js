const openButton = document.getElementById('submit');
const closeButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');
let fields={firstName:"",lastName:"",dob:"",country:"",gender:"",profession:"",email:"",mobile:""}
let errorList={firstName:"errorFirstName",lastName:"errorLastName",dob:"errordob",country:"errorCountry",gender:"errorGender",profession:"errorProfession",email:"errorEmail",mobile:"errorMobile"}
let inputFieldList={firstName:"inputFirstName",lastName:"inputLastName",dob:"inputdob",country:"inputCountry",gender:fields.gender,profession:"inputProfession",email:"inputEmail",mobile:"inputMobile"}

openButton.addEventListener('click', (event) => {
    event.preventDefault();

        let flag=false;
        
        Object.keys(fields).map((val,ind)=>{

            if(!fields[val]){
                document.getElementById(errorList[val]).innerText=`${val} Should not be Empty`;
                document.getElementById(errorList[val]).style.display="block";
                flag=true;
            }
            else
            {
                document.getElementById(`${val}`).innerHTML=fields[val];
                document.getElementById(errorList[val]).style.display="none";
            }
        })

        if(!flag){
            popup.style.display = 'block';
        }
    });

closeButton.addEventListener('click', () => {
        window.location.reload();
        popup.style.display = 'none';
    });

const handleChange=(des,curr)=>{
    let myVal=document.getElementById(curr).value;
    fields[des]=myVal;
}

const handleCheck=(val,event)=>{
    console.log(event)
    if(val){
        document.getElementById("Female").checked = false;
        fields.gender="Male";
    }
    else{
        document.getElementById("Male").checked = false;
        fields.gender="Female";
    }
    event.preventDefault();
    

}