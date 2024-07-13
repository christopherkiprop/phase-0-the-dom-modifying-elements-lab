// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();
document.addEventListener('DOMContentLoaded', function() {
    const mainElement = document.getElementById('main');
    mainElement.remove();
  
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = 'Your Name is the champion'; // Replace 'Your Name' with your actual name
  
    document.body.appendChild(newHeader);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = 'Your Name is the champion'; // Replace with your name
  
    // Append newHeader to the body or any desired parent element
    document.body.appendChild(newHeader);
  });
    