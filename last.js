/* Let us see how to use parent node  */

/*let paragraph = document.getElementById('myParagraph');
let parent = paragraph.parentNode;
parent.removeChild(paragraph);*/


const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description'); /*  since there's more than one paragraph element on the page, we'll use the class description to select just the one we want. */
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
/*const removeItemButton = document.querySelector('button.removeItemButton');*/


listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);  
    }
});


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none'){
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
    
});
descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = ''; /* This clears the input when new items added */
});

/* Now we can addEvenListener */
addItemButton.addEventListener('click', () =>{
    /* Then, we gonna learn how to how to insert content into the DOM.
    adding new node as a child rule: node.appendChild(childElement)
    So we gonna created a new list item and appended it to the DOM*/
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li); 
    addItemInput.value = ''; /* This clears the input when new items added */
});

/* how to remove an element from the DOM. */
/* The rule is : node.removeChild(childElement) */
/*removeItemButton.addEventListener('click', () =>{
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li); 
    
});*/