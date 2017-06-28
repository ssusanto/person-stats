function display(ev) {
	ev.preventDefault()
    const form = ev.target
  	
    const name = form.personName.value
  	const room = form.personRoom.value
    const color = form.favoriteColor.value



    
    const answer = document.querySelector('#result')

    const createList = renderList(name, room, color) 
    answer.appendChild(createList) //This is to display the List



    
    // const nameValue = document.createElement('li')
    // nameValue.textContent = `Name: ${name}`
    // list.appendChild(nameValue)
    
    // const roomValue = document.createElement('li')
    // roomValue.textContent = `Room Number: ${room}`
    // list.appendChild(roomValue)
    
    // const colorItem = document.createElement('li') "Ask Seth Tomorrow"
    // colorItem.textContent = 'Favorite Color: '
    // colorItem.style.width = '6rem'
    // colorItem.style.height = '3rem'

    
    //const colorDiv = document.createElement('div')
    //colorDiv.style.backgroundColor = color
    // colorDiv.style.width = '6rem'
    // colorDiv.style.height = '3rem'
    // colorItem.appendChild(colorDiv)
    
    // list.appendChild(colorItem)


    //answer.textContent= name.value + ' lives in University Hall room number ' +room.value

}

function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return (colorDiv)

}

function renderListItem(text) {
    
    const listItem = document.createElement('li')
    listItem.textContent = text
    return(listItem)

}

function renderList(name, room, color) {
    const list = document.createElement('ul')
    const listItem1 = renderListItem(name)
    const listItem2 = renderListItem(room)
    const colorDiv = renderColor(color)

    list.appendChild(listItem1)
    list.appendChild(listItem2)
    list.appendChild(colorDiv)

    return(list)
    
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', display)