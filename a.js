let input = document.querySelector('.salam')
let ul = document.querySelector('#ul')
let search = document.querySelector('.search')
let alertF = document.querySelector('#alert')
let x = document.querySelector('.xIcon')

x.addEventListener('click', () => {
    alertF.style.cssText = 'display:hidden'
  })

input.addEventListener('keypress', function(item){   //creating list
    if(item.code == 'Enter') {
        let li = document.createElement('li')
        li.classList.add('li')
        li.textContent = input.value
        ul.append(li)
        input.value = ''
    }
})

search.addEventListener('keypress', function(item){     // searching on list
    if(item.code == 'Enter'){
        let all = document.querySelectorAll('.li')
        let NotFound = true
        all.forEach(element => {
            WordByWord = element.textContent.split(' ')
            
            WordByWord.forEach(word => {
                if(word.toLowerCase() === search.value.toLowerCase()) {
                    NotFound = false
                    element.style.cssText = `
                    transition-property: background-color;
                    transition-duration: 0.4s;
                    background-color:green;
                    `
                }
            })
        })
        if (NotFound) {alertF.style.cssText = "display: block;"}
    }   
})