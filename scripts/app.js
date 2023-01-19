import { indexFood, createFood, showFood } from './api.js'
import {
	onIndexFoodSuccess,
	onFailure,
	onCreateFoodSuccess,
	onShowFoodSuccess,
} from './ui.js'

const createFoodForm = document.querySelector('#create-food-form')
const indexFoodContainer = document.querySelector('#index-food-container')

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

    showFood(id)
			.then((res) => res.json())
			.then((res) => onShowFoodSuccess(res.food))
			.catch(onFailure)
})