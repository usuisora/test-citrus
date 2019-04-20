

var card = document.getElementById('card')
var focus = document.getElementById('focus')
var orn = '#F6731C';
var grn = '#7EB105';
var diod = document.querySelector(".instock > div");
var text = document.querySelector(".instock > span");
const showFocus = () =>{
  
    diod.style.backgroundColor = '#7EB105'
    text.innerHTML = 'В наличии'
    text.style.color = '#7EB105'

    focus.className = 'focus'
}

const hideFocus = () =>{
    diod.style.backgroundColor = '#F6731C'
    text.innerHTML = 'Количество ограничено'
    text.style.color = '#F6731C'

    focus.className = 'hidden'

}
