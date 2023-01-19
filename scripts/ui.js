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
    messageContainer.innerText = 'You have created a food!! :)'
}

export const onShowFoodSuccess = (food) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${food.name}</h3>
        <p>${food.countryOfOrigin}</p>
        <p>${food.isVegan}</p>
        <p>${food.minutesToCook} </p>
        <p>${food._id}</p>

        <form data-id="${food._id}">
        <input type="text" name="name" value="${food.name}" />
        <input type="text" name="countryOfOrigin" value="${food.countryOfOrigin}" />
        <input type="boolean" name="isVegan" value="${food.isVegan}" />
        <input type="number" name="minutesToCook" value="${food.minutesToCook}" />
        <input type="submit" value="Update Food" />
        </form>

        <button type="button" data-id="${food._id}">Delete Food</button>
    `
    showFoodContainer.appendChild(div)
}

export const onUpdateFoodSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeleteFoodSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}