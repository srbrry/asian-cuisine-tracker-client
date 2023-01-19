export const indexFood = () => {
    return fetch(`http://localhost:2001/foods`)
}

export const createFood = (data) => {
    return fetch(`http://localhost:2001/foods`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showFood = (id) => {
    return fetch(`http://localhost:2001/foods/${id}`)
}