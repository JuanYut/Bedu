const btnOne = document.getElementById('btn-one')
let theTag = 'a-link'
const tag = document.getElementById(theTag)

btnOne.addEventListener('click', () => {
  if ( tag.hasAttribute("href") ) {
    btnOne.innerText = "Add"
    tag.removeAttribute("href")
  } else {
    btnOne.innerText = "Remove"
    tag.setAttribute("href", "https://noobsjs.com/")
  }
})