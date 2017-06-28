function display(ev) {
	ev.preventDefault()
    const form = ev.target
  	const name = form.personName.value
  	const room = form.personRoom.value
    const color = form.favoriteColor.value


    
    const answer = document.querySelector('#result')
    
    const list = document.createElement('ul')
    
    const nameValue = document.createElement('li')
    nameValue.textContent = `Name: ${name}`
    list.appendChild(nameValue)
    
    const roomValue = document.createElement('li')
    roomValue.textContent = `Room Number: ${room}`
    list.appendChild(roomValue)
    
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '
    colorItem.style.width = '6rem'
    colorItem.style.height = '3rem'

    
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv)
    
    list.appendChild(colorItem)
    
    answer.appendChild(list)

    //answer.textContent= name.value + ' lives in University Hall room number ' +room.value

}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', display)