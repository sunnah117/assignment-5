





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
const commentContainer = document.getElementById('history-content');

// Function to create and append a new div
  // Create a new div element
  const newDiv = document.createElement('div');
  
  // Add CSS styles to the new div (inline style)
  newDiv.style.backgroundColor = "#f9f9f9";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px 0";
  newDiv.style.border = "1px solid #ccc";

  // Create a new h1 element
  const h1 = document.createElement('h1');
  h1.textContent = `${donationAmount}TK is donated for Flood at Noakhali ,Bnagladesh`; // Set the text for the h1 tag
  
  // Add CSS styles to the h1 element (inline style)
  h1.style.color = "blue";
  h1.style.fontSize = "24px";
  
  // Create a new p element
  const p = document.createElement('p');
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(); // Get date as a string
  const timeString = currentDate.toLocaleTimeString(); // Get time as a string
  
  // Set the text content of the p tag to the current date and time
  p.textContent = `Date: ${dateString}, Time: ${timeString}`; // Set the text for the p tag
  
  // Add CSS styles to the p element (inline style)
  p.style.color = "gray";
  p.style.fontSize = "16px";
  
  // Append the h1 and p elements to the new div
  newDiv.appendChild(h1);
  newDiv.appendChild(p);
  
  // Append the new div to the main div (commentContainer)
  commentContainer.appendChild(newDiv);


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

const commentContainer = document.getElementById('history-content');

// Function to create and append a new div
  // Create a new div element
  const newDiv = document.createElement('div');
  
  // Add CSS styles to the new div (inline style)
  newDiv.style.backgroundColor = "#f9f9f9";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px 0";
  newDiv.style.border = "1px solid #ccc";

  // Create a new h1 element
  const h1 = document.createElement('h1');
  h1.textContent = `${donationAmount}TK is donated for Flood at feni ,Bnagladesh`; // Set the text for the h1 tag
  
  // Add CSS styles to the h1 element (inline style)
  h1.style.color = "blue";
  h1.style.fontSize = "24px";
  
  // Create a new p element
  const p = document.createElement('p');
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(); // Get date as a string
  const timeString = currentDate.toLocaleTimeString(); // Get time as a string
  
  // Set the text content of the p tag to the current date and time
  p.textContent = `Date: ${dateString}, Time: ${timeString}`;// Set the text for the p tag
  
  // Add CSS styles to the p element (inline style)
  p.style.color = "gray";
  p.style.fontSize = "16px";
  
  // Append the h1 and p elements to the new div
  newDiv.appendChild(h1);
  newDiv.appendChild(p);
  
  // Append the new div to the main div (commentContainer)
  commentContainer.appendChild(newDiv);

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
 

 

showSuccessModal();
// succssful modal showing

const commentContainer = document.getElementById('history-content');

// Function to create and append a new div
  // Create a new div element
  const newDiv = document.createElement('div');
  
  // Add CSS styles to the new div (inline style)
  newDiv.style.backgroundColor = "#f9f9f9";
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px";
  newDiv.style.border = "1px solid #ccc";

  // Create a new h1 element
  const h1 = document.createElement('h1');
  h1.textContent = `${donationAmount}TK is donated for Quota movement,Bnagladesh`; // Set the text for the h1 tag
  
  // Add CSS styles to the h1 element (inline style)
  h1.style.color = "blue";
  h1.style.fontSize = "24px";
  
  // Create a new p element
  const p = document.createElement('p');
  
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(); // Get date as a string
  const timeString = currentDate.toLocaleTimeString(); // Get time as a string
  
  // Set the text content of the p tag to the current date and time
  p.textContent = `Date: ${dateString}, Time: ${timeString}`;// Set the text for the p tag
  
  // Add CSS styles to the p element (inline style)
  p.style.color = "gray";
  p.style.fontSize = "16px";
  
  // Append the h1 and p elements to the new div
  newDiv.appendChild(h1);
  newDiv.appendChild(p);
  
  // Append the new div to the main div (commentContainer)
  commentContainer.appendChild(newDiv);


     }
     else{
          alert('failed to add the money');
     }
})



window.onload = function() {
     document.getElementById('history-content').style.display = 'none'; // Hide history content
     document.getElementById('donate-main').style.display = 'block'; // Show donation-related sections
 };
 
 // When Donation button is clicked, hide history-content and show donate-main
 document.getElementById('donation-conatiner').addEventListener('click', function() {
     // Hide history-content div
     document.getElementById('history-content').style.display = 'none';
     // Show the donation-related section (donate-main)
     document.getElementById('donate-main').style.display = 'block';
 });
 
 // When History button is clicked, hide donate-main and show history-content
 document.getElementById('history-container').addEventListener('click', function() {
     // Show history-content div
     document.getElementById('history-content').style.display = 'block';
     // Hide the donation-related section (donate-main)
     document.getElementById('donate-main').style.display = 'none';
 });
