// Currently, unless you comment out Feature One, Feature Two will not work because of a TypeError (variables defined in Feature One are null on the blog page)

// FEATURE ONE: Newsletter Sign-Up on Homepage Scroll 

// Store HTML elements in variables
const newsletterPopUp = document.querySelector('#newsletterPopUp');
const closeSpan = document.querySelector('.close'); 

// Variable that checks if the pop up has already happened 
let hasPoppedUp = false; 

// After scrolling 900px from the top, show newsletter pop up
window.onscroll = function() {
    if (window.pageYOffset > 900 && hasPoppedUp == false) {
        newsletterPopUp.style.visibility = 'visible'; 
        hasPoppedUp = true; 
    }
}

// Hide pop up when user clicks "I'm not interested"
closeSpan.addEventListener ('click', function() {
    newsletterPopUp.style.visibility = 'hidden'; 
}); 

// FEATURE TWO: Comment Confirmation Message on Blog Page 

// Store HTML elements in variables
const tyMessage = document.querySelector('#thankYouMessage');
const commentForm = document.querySelector('#commentForm'); 
const commenterName = document.querySelector('#name'); 
const commenterEmail = document.querySelector('#email'); 
const commentContent = document.querySelector('#comment'); 

commentForm.addEventListener ('submit', function(e) {
    e.preventDefault(); 
    // Store submitted name in a variable 
    let username = commenterName.value; 
    // Show the thank you message
    tyMessage.style.display = 'inline-block'; 
    tyMessage.textContent = `Thanks for submitting a comment, ${username}! It has been sent for approval. 😊`; 
    // Clear the form
    commenterName.value = '';
    commenterEmail.value = '';
    commentContent.value = '';
}); 

// Hide the thank you message when user clicks anywhere on the page
window.onclick = function() {
    tyMessage.style.display = 'none'; 
}