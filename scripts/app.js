import { indexFood, createFood, showFood, updateFood, deleteFood } from './api.js'
import { 
	onIndexFoodSuccess, 
	onFailure, 
	onCreateFoodSuccess, onShowFoodSuccess, onUpdateFoodSuccess, onDeleteFoodSuccess, 
} from './ui.js'

const createFoodForm = document.querySelector('#create-food-form')
const indexFoodContainer = document.querySelector('#index-food-container')
const showFoodContainer = document.querySelector('#show-food-container')

indexFood()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexFoodSuccess(res.foods)
    })
    .catch(onFailure)


createFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const foodData = {
			food: {
				name: event.target['name'].value,
				countryOfOrigin: event.target['countryOfOrigin'].value,
				isVegan: event.target['isVegan'].value,
				minutesToCook: event.target['minutesToCook'].value,
			},
		}

    // console.log(foodData)
    createFood(foodData)
			.then(onCreateFoodSuccess)
			.catch(onFailure)
})

indexFoodContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

	if (!id) return

    showFood(id)
			.then((res) => res.json())
			.then((res) => onShowFoodSuccess(res.food))
			.catch(onFailure)
})

showFoodContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const foodData = {
		food: {
			name: event.target['name'].value,
			countryOfOrigin: event.target['countryOfOrigin'].value,
			isVegan: event.target['isVegan'].value,
			minutesToCook: event.target['minutesToCook'].value,
		},
	}

    if (!id) return

	updateFood(foodData, id)
		// this function (onUpdateFoodSuccess) does not need anything to run. NO params
		.then(onUpdateFoodSuccess)
		.catch(onFailure)
})

showFoodContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteFood(id)
		.then(onDeleteFoodSuccess)
		.catch(onFailure)
})