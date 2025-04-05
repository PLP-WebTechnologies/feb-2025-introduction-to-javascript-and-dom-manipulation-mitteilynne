// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = 'Text has been changed!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('changeBgColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
  });
  
  // Add or remove an element when a button is clicked
  document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added element.';
    document.querySelector('main').appendChild(newElement);
  });
  