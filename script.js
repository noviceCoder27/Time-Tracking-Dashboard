let daily = document.querySelector('.daily');
let weekly = document.querySelector('.weekly');
let monthly = document.querySelector('.monthly');
daily.style.opacity = 1;


let getData = async function() {
    let data;
    try {
        data = await fetch('data.json');
    } catch {
        console.log("failed to fetch the data");
    }

    response = await data.json();
    displayData(response);
   
}

getData();

function displayData(data) {
    if(daily) {
        daily.addEventListener('click',() => {
            daily.style.opacity = 1;
            weekly.style.opacity = 0.7;
            monthly.style.opacity = 0.7;
            for(let i = 0; i < data.length; i++) {
                dataset(data[i].title,data,'daily');
            }
        });
    }
    if(weekly) {
        weekly.addEventListener('click',() => {
            weekly.style.opacity = 1;
            daily.style.opacity = 0.7;
            monthly.style.opacity = 0.7;
            for(let i = 0; i < data.length; i++) {
                dataset(data[i].title,data,'weekly');
            }
        });
    }

    if(monthly) {
        monthly.addEventListener('click',() => {
            monthly.style.opacity = 1;
            daily.style.opacity = 0.7;
            weekly.style.opacity = 0.7;
            for(let i = 0; i < data.length; i++) {
                dataset(data[i].title,data,'monthly');
            }
        });
    }
    
}

function getHrs(val,data,duration,hrs,prevHrs) {
    if(data[val]['timeframes'][duration]['current'] !== 1) {
        hrs.innerText = `${data[val]['timeframes'][duration]['current']}hrs`;
    } else {
        hrs.innerText = `${data[val]['timeframes'][duration]['current']}hr`;
    }
    if(data[val]['timeframes'][duration]['previous'] !== 1) {
        prevHrs.innerText = `${data[val]['timeframes'][duration]['previous']}hrs`;
    } else {
        prevHrs.innerText = `${data[val]['timeframes'][duration]['previous']}hr`;
    }
}

function dataset(doSomething,data,duration) {
    let hrs;
    let prevHrs;
    switch(doSomething) {
        case "Work": 
            hrs = document.querySelector('.work-hours');
            prevHrs = document.querySelector('.work-prev');
            getHrs(0,data,duration,hrs,prevHrs);
            break;

        case "Play":
            hrs = document.querySelector('.play-hours');
            prevHrs = document.querySelector('.play-prev');
            getHrs(1,data,duration,hrs,prevHrs);
            break;

        case "Study":
            hrs = document.querySelector('.study-hours');
            prevHrs = document.querySelector('.study-prev');
            getHrs(2,data,duration,hrs,prevHrs);
            break;

        case "Exercise":
            hrs = document.querySelector('.exercise-hours');
            prevHrs = document.querySelector('.exercise-prev');
            getHrs(3,data,duration,hrs,prevHrs);
            break;
                
        case "Social":
            hrs = document.querySelector('.social-hours');
            prevHrs = document.querySelector('.social-prev');
            getHrs(4,data,duration,hrs,prevHrs);
            break;
                
        case "Self Care":
            hrs = document.querySelector('.care-hours');
            prevHrs = document.querySelector('.care-prev');
            getHrs(5,data,duration,hrs,prevHrs);
            break;
    }

}

/*cursor over the ellipsis */

let dataSection = document.getElementsByClassName('data');

let ellipsis = document.getElementsByClassName('ellipsis');

let darkBlue = window.getComputedStyle(document.documentElement).getPropertyValue('--dark-blue');

let blue =  window.getComputedStyle(document.documentElement).getPropertyValue('--desaturated-blue');


_.each(ellipsis, element => {
    element.addEventListener('click', () => {
        _.each(dataSection, data => {
            data.style.backgroundColor = `${darkBlue}`;
        });
        
    });
});

_.each(dataSection, data => {
    data.addEventListener('mouseover', () => {
        data.style.backgroundColor = `${blue}`;
    });
});

_.each(dataSection, data => {
    data.addEventListener('mouseout', () => {
        data.style.backgroundColor = `${darkBlue}`;
    });
});











