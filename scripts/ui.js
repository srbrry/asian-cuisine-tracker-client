const indexFoodContainer = document.querySelector('#index-food-container')
const messageContainer = document.querySelector('#message-container')
const showFoodContainer = document.querySelector('#show-food-container')

export const onIndexFoodSuccess = (foods) => {
    foods.forEach(food => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${food.name} from ${food.countryOfOrigin}</h3>
            <button data-id="${food._id}" >Show Food</button>
        `

        indexFoodContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateFoodSuccess = () => {
    messageContainer.innerText = 'You have created an Asian food!! :)'
}

export const onShowFoodSuccess = (food) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${food.name}</h3>
        <p>${food.countryOfOrigin}</p>
        <p>${food.isVegan}</p>
        <p>${food.minutesToCook} </p>
        <p>${food._id}</p>
    `
    showFoodContainer.appendChild(div)
}