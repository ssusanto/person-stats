function display(ev) {
	ev.preventDefault()
    const form = ev.target
  	const name = form.personName.value
  	const room = form.personRoom.value
    const answer = document.querySelector('#result')
    answer.textContent= name + ' lives in University Hall room number ' +room
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', display)