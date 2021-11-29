// 1. Change the title of the page to `Hello AltCampus!`
document.title=`Hello AltCampus`
// 2. Select the element using the children property:
document.body.children[0]
//    - Select the `h1` element and change the value to `Learning DOM`
let child=document.body.children[0];
child="Learning DOM";
//    - Select the first `li` element inside the `ul` with class `topics` and change the innerText to `all about document`
let y=document.getElementsByClassName("list")
y[0].innerText="inputCheckBox"
//    - Select the input element with name `email`
document.getElementsByName("email")
// 3. Log the number (using console.log) of children of all the `li` element inside the ul with class `topics`
console.log(document.body.children[5].children.length)
// 4. Select the first input using the `type` selector and store them in variable named `emailInput`
let email=document.querySelector(`input`)
// 5. Select the ul element using class selector and store in `topics`

let topics=document.querySelector("ul")
// 6. Select the first label element and store in `label`
let label=document.querySelector(`label`)
// 7. Select the input of type `checkbox` with the `id` selector and store in `inputCheckbox`
let inputCB=document.querySelector("#remember")
// 8. Select the input of type password using Attribute selectors. (eg: input[type="text"]) and store in `password`
let attribute=document.querySelector(`input[type="password"]`)
// 9. Select the input using the placeholder attribute selector with value `password` and store in `attrPassword`

// 10. Select all the `li` element and store in `allTopics`
let allTopics=document.querySelectorAll(`li`)
// 11. Select all the input element of any type and store in `allInput`
let allInput=document.querySelectorAll(`input`)
// 12. Use forEach to console the `innerText` property of all the li element in `allTopics` variable.
allTopics.forEach(elm=>{console.log(elm.innerText)})
// 13. Select all the elements with class `list` and store in variable `listOfSelectedTopics`
let listOfSelectedTopics=document.querySelectorAll(`.list`)
// 14. Select the first li element inside the `ul` element using `>` (direct child) and store in `firstLi`
let something=document.querySelector(`ul>li`)
// 15. Select all the img element and log the number of element saying `The total number of img element is ---`
let img=document.querySelectorAll(`img`);
console.log(`the number of images are ${img.length}`)
// 16. Select all the `p` element and store in `allPElement`

let allP=document.querySelector(`p`)
// 17. Select all the buttons and log the count of buttons.
let allbutton=document.querySelector(`button`)

// 18. Select all the `label` element and log the count.
let alllabel=document.querySelectorAll(`label`)

undefined
alllabel.length
3
// 19. Select all the elements with `id` of `test`
let allId=document.querySelectorAll(`#test`)
// 20. Select the first element with id `test` using `getElementById`
let ID=document.getElementById(`test`)
// 21. Select the parent element of the element stored in `topics` variable (#5) and log the element.
let parent=topics.parentElement
// 22. Select the next element sibling of the element stored in `topics` variable (#5) and log the element.
let sibling=topics.nextElementSibling
// 23. Select the previous element sibling of the element stored in `topics` variable (#5) and change the `innerText` property to `Learning About Walking the DOM`.
topics.previousElementSibling
// 24. Select the first element child of the element stored in `topics` variable (#5) and change the `innerText` property of the element to `This is the first child element`.
topics.firstElementChild
<li class=​"list">​…​</li>​
// 25. Select the last element child of the element stored in `topics` variable (#5) and log the `typeof` the element.
topics.lastElementChild
// 26. Select the element with type `fieldset` and store in a variable named `fieldsetElm`.
let fieldset=document.querySelector(`fieldset`)

// 27. Select the parent element of the element stored in `fieldsetElm` variable (#5) and log the `typeof` the element.
fieldset.parentElement
