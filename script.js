/* HTML elements */

const apiKey = '5bad5ad1e6304887aba30357242609'
const buttonEl = document.querySelector('#submit-button')
const userInput = document.querySelector('#text-input')

// Display values 

const locationDisplay = document.querySelector('#location-info')

const lastUpdate = document.querySelector('#last-update')
const localTime = document.querySelector('#local-time')

const weatherIcon = document.querySelector('#weather-icon')
const weatherCondition = document.querySelector('#condition')

const temp = document.querySelector('#temp')
const heatIndex = document.querySelector('#heat-index')
const uvIndex = document.querySelector('#uv-index')


const wind = document.querySelector('#visibility')
const visibility = document.querySelector('#wind')

buttonEl.addEventListener('click', async () => {
    let city = userInput.value
    console.log(city)

    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    console.log(response) 

    let weatherPic = response.data.current.condition.icon

    // Interpuct (·) between each entry, still looks good even if there is no region in API pull

    locationDisplay.textContent = `${response.data.location.name} · ${response.data.location.region} · ${response.data.location.country}`
    localTime.textContent = `Local time: ${response.data.location.localtime}`
    lastUpdate.textContent = `Last updated: ${response.data.current.last_updated}`
    
    
    // locationDisplay.textContent = locationText
    // locationDisplay.textContent = `${response.data.location.name} · ${response.data.location.country}`
    weatherIcon.setAttribute ('src', weatherPic)
    weatherIcon.setAttribute ('alt', city)
    weatherCondition.textContent = `${response.data.current.condition.text}`

    temp.textContent = `${response.data.current.temp_f} (°F) · (${response.data.current.temp_c}(°C)`
    heatIndex.textContent = `${response.data.current.heatindex_f} (°F) · ${response.data.current.heatindex_c} (°C)`
    uvIndex.textContent =  `${response.data.current.uv}`
    
    wind.textContent = `${response.data.current.wind_mph} (mph) ${response.data.current.wind_mph} (km)`
    visibility.textContent = `${response.data.current.vis_miles} (miles) · ${response.data.current.vis_km} (km)`

    if (response.data.current.temp_f < 30) {
        document.body.style.background = 'linear-gradient(silver, gray, lightgray, silver)'
    } else if (response.data.current.temp_f >= 30 && response.data.current.temp_f < 40) {
        document.body.style.background = 'linear-gradient(silver, lightgray, lightblue, silver, green)'
    } else if (response.data.current.temp_f >= 40 && response.data.current.temp_f < 50) {
            document.body.style.background = 'linear-gradient(lightblue, cyan, cyan, green)'
    } else if (response.data.current.temp_f >= 50 && response.data.current.temp_f < 60) {
            document.body.style.background = 'linear-gradient(blue, cyan, cyan, green)'
    } else if (response.data.current.temp_f >= 60 && response.data.current.temp_f < 75) {
        document.body.style.background = 'linear-gradient(blue, purple, orange, orange)'
    } else if (response.data.current.temp_f >= 75 && response.data.current.temp_f <= 90) {
        document.body.style.background = 'linear-gradient(orange, darkgoldenrod, orange, red)'
    } else {
        document.body.style.background = 'linear-gradient(orange, red, red)'
    }

    // Fixes repeating background
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.backgroundSize = 'auto'
})
background: linear-gradient(blue, cyan, cyan, green);