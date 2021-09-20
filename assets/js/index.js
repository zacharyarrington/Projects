var darkMode = window.localStorage.getItem('darkMode');

function initDarkmode() {

    if (!darkMode) {
        darkMode = false;
        // map.setStyle('mapbox://styles/mapbox/streets-v11')
        mode()

    } else if (darkMode === "true") {
        darkMode = true;
        // map.setStyle('mapbox://styles/mapbox/dark-v10')
        mode()
    } else {
        darkMode = false;
        // map.setStyle('mapbox://styles/mapbox/streets-v11')
        mode()
    }
}


// mode();


function darkToggle() {
    toggle();
    mode();
}

function mode() {
    var button = document.getElementById("darkmode");
    if (darkMode || darkMode) {
        document.body.classList.add("dark");
        document.querySelectorAll('.box').forEach(box => {
            box.classList.add("dark");
        })
        map.setStyle('mapbox://styles/mapbox/dark-v10')
        // button.innerText = "Light Mode";
    } else {
        document.body.classList.remove("dark");
        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove("dark");
        })
        map.setStyle('mapbox://styles/mapbox/streets-v11')
        // button.innerText = "Dark Mode";
    }
}

function toggle() {
    darkMode = !darkMode;
    window.localStorage.setItem('darkMode', darkMode);
}

// console.log('darkk')
// let body = document.querySelector('body')

// if (darkMode.darkmode == 'true') {
//     console.log('darkkk')

//     body.classList.add('dark');

//     map.setStyle('mapbox://styles/mapbox/dark-v10')

// } else {

//     body.classList.remove('dark');

//     map.setStyle('mapbox://styles/mapbox/streets-v11')
// }