const liItems = document.querySelectorAll('li')
const input = document.querySelector('.search')

const drinkSearch = e => {
	liItems.forEach(li => {
		const text = new RegExp(input.value, 'i').test(li.textContent)
		if (!text) {
			li.style.display = 'none'
		} else {
			li.style.display = 'block'
		}
	})
}
input.addEventListener('keyup', drinkSearch)
