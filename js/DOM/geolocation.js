const d = document;
const n = navigator;

export default function returnGeolocation(geolocationSelector){
    const $geolocation = d.querySelector(geolocationSelector);
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }

    const success = (position) => {
        $geolocation.innerHTML = `
            <div>
                <p><b>Latitude:</b> ${position.coords.latitude}</p>
                <p><b>Longitude:</b> ${position.coords.longitude}</p>
                <p><b>Accuracy:</b> ${Math.floor(position.coords.accuracy)} Meters</p>
            </div>
            <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z" target="_blank" rel=""noopener>
                Check it on Google Maps
            </a>
        `
    }

    const error = (err) => {
        $geolocation.innerHTML = `<b>Error code ${err.code}:</b> ${err.message}`
    }

    n.geolocation.getCurrentPosition(success, error, options);
}