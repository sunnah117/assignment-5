document.getElementById('donate-money-noakhali').addEventListener('click',function(event){
     event.preventDefault();
     // const addMoney=parseFloat(document.getElementById('input-add-money-noakhali').value);
     const donationAmount=getInputFieldValueById('input-add-money-noakhali');


     if (!isNaN(donationAmount) && donationAmount>0) {
          
const balanceElement=document.getElementById('btn-add-money-noakhali');
const currentBalance = parseFloat(balanceElement.innerText);
const newBalance=donationAmount+currentBalance;
balanceElement.innerText = `${newBalance} BDT`;

const totalbudget=document.getElementById('total-budget');
const currentbudget=parseFloat( totalbudget.innerText);
const newbudget=currentbudget-donationAmount;
totalbudget.innerText=`${newbudget} BDT`;
console.log(newbudget)

// succssful modal showing
showSuccessModal();

     }
     else{
          alert('failed to add the money');
     }
})

// feni
document.getElementById('donate-money-feni').addEventListener('click',function(event){
     event.preventDefault();
     // const addMoney=parseFloat(document.getElementById('input-add-money-noakhali').value);
     const donationAmount=getInputFieldValueById('input-add-money-feni');
     console.log(donationAmount);

     if (!isNaN(donationAmount) && donationAmount>0) {
          
const balanceElement=document.getElementById('btn-add-money-feni');

const currentBalance = parseFloat(balanceElement.innerText);

const newBalance=donationAmount+currentBalance;

balanceElement.innerText = `${newBalance} BDT`;

const totalbudget=document.getElementById('total-budget');
const currentbudget=parseFloat( totalbudget.innerText);
const newbudget=currentbudget-donationAmount;
totalbudget.innerText=`${newbudget} BDT`;
console.log(newbudget)
// succssful modal showing
showSuccessModal();

     }
     else{
          alert('failed to add the money');
     }
})

// quota
document.getElementById('donate-money-quota').addEventListener('click',function(event){
     event.preventDefault();
     // const addMoney=parseFloat(document.getElementById('input-add-money-noakhali').value);
     const donationAmount=getInputFieldValueById('input-add-money-quota');


     if (!isNaN(donationAmount) && donationAmount>0) {
          
const balanceElement=document.getElementById('btn-add-money-quota');
const currentBalance = parseFloat(balanceElement.innerText);
const newBalance=donationAmount+currentBalance;
balanceElement.innerText = `${newBalance} BDT`;

 const totalbudget=document.getElementById('total-budget');
 const currentbudget=parseFloat( totalbudget.innerText);
 const newbudget=currentbudget-donationAmount;
 totalbudget.innerText=`${newbudget} BDT`;
 console.log(newbudget);

showSuccessModal();
// succssful modal showing


     }
     else{
          alert('failed to add the money');
     }
})



