let allCars = [];
async function fetchCarData() {

    try {
        // fetch the JSON file containing car data
        const response = await fetch("cars.json");
        // Parse the JSON response into a JS object
        const data = await response.json()


        // Store the array of cars in the global variable
        // "allCars" for future filtering
        allCars = data.cars
        displayCars(allCars)
        console.log(data.cars);

    } catch (error) {
        console.error("Error fetch car Data: ", error);
    }
}

// Define a function to display the car cards on the webpage
function displayCars(cars) {
    const carContainer = document.getElementById("carContainer");

    // clear any existing container inside the conatiner
    carContainer.innerHTML = ""

    cars.forEach(car => {
        const carCard = document.createElement("div");

        carCard.classList.add("card")

        carCard.innerHTML = `
            <img src="${car.image}" alt= "${car.name} ${car.model}" width="300">
            <h2>${car.name}</h2>
            <p>Model: ${car.model}</p>
        `
        carContainer.appendChild(carCard)
    })
}

window.onload = fetchCarData()