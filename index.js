function display(ev) {
	ev.preventDefault()
  	const name = document.querySelector('#input1')
  	const room = document.querySelector ('#input2')
    const answer = document.querySelector('#result')
    answer.textContent= name.value + ' lives in University Hall room number ' +room.value
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', display)