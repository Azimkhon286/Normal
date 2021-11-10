document.addEventListener('DOMContentLoaded', init);

function init() {
	//Получаем DOM Element
	const buttonToggleItems = document.getElementsByClassName('btn--toggle-items')
	if(buttonToggleItems.length === 0) {
		throw new new Error('Кнопка не найдена в document');
	}

	const listItemsContainer = document.getElementsByClassName('list')

	buttonToggleItems[0].addEventListener(
		'click', 
		(event) => handleShowItemsButtonClick(listItemsContainer[0], event)
	)
}

function handleShowItemsButtonClick(listItemsContainer, pointerEvent) {
	const classForVisibleHiddenItems = 'list--all-hidden-visible'

	if(pointerEvent.currentTarget.innerText === 'Показать') {
		pointerEvent.currentTarget.innerText = 'Скрыть'
		listItemsContainer.classList.add(classForVisibleHiddenItems)
	}
	else {
		pointerEvent.currentTarget.innerText = 'Показать'
		listItemsContainer.classList.remove(classForVisibleHiddenItems)
	}
}