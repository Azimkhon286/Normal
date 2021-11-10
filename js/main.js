document.addEventListener('DOMContentLoaded', init);

function init() {

	const buttonToggleItems = document.getElementsByClassName('btn--toggle-items')
	if(buttonToggleItems.length === 0) {
		throw new new Error('Кнопка не найдена в document');
	}

	const listItemsContainer = document.getElementsByClassName('list')

	buttonToggleItems[0].addEventListener(
		'click', 
		(event) =>
		 handleShowItemsButtonClick(listItemsContainer[0], event)
	)
}

function handleShowItemsButtonClick(listItemsContainer, pointerEvent) {
	const classForVisibleHiddenItems = 'list--all-hidden-visible'

	if(pointerEvent.currentTarget.innerText === 'Show itens') {
		pointerEvent.currentTarget.innerText = 'Hide itens'
		listItemsContainer.classList.add(classForVisibleHiddenItems)
		return
	}
	
		pointerEvent.currentTarget.innerText = 'Show itens'
		listItemsContainer.classList.remove(classForVisibleHiddenItems)
	
}
