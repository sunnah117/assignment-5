function getInputFieldValueById(id){
     const inputvalue=document.getElementById(id).value;
     const inputNumber=parseFloat(inputvalue);
     return inputNumber;
}


function getTextFieldValueById(id){
     const textValue=document.getElementById(id).innerText;
     const textNumber=parseFloat(textValue);
     return textNumber;
}


function showModal(modalId) {
     // Function to show a modal by removing the hidden class
     const modal = document.getElementById(modalId);
     modal.classList.remove('hidden');
 }
 
 function closeModal(modalId) {
     // Function to hide a modal by adding the hidden class
     const modal = document.getElementById(modalId);
     modal.classList.add('hidden');
 }

 function showSuccessModal() {
     const successModal = document.getElementById('success-modal');
     successModal.showModal();}