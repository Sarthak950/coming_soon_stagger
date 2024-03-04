import gsap from "gsap";

const letters = document.querySelectorAll(".letters");
let prevDay_0 = 0;
let prevDay_1 = 0;
let prevHr_0 = 0;
let prevHr_1 = 0;
let prevMin_0 = 0;
let prevMin_1 = 0;
let prevSec_0 = 0;
let prevSec_1 = 0;

// Set the launch date and time
const launchDate = new Date("March 12, 2024 06:00:00").getTime();

let stateDay_0 = 0;
let stateDay_1 = 0;
let stateHr_0 = 0;
let stateHr_1 = 0;
let stateMin_0 = 0;
let stateMin_1 = 0;
let stateSec_0 = 0;
let stateSec_1 = 0;

// Update the countdown every 1 second
const countdown = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeDifference = launchDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown in the specified format
    const formattedCountdown = `${String(days).padStart(2, "0")}-${String(hours).padStart(2, "0")
        }-${String(minutes).padStart(2, "0")}-${String(seconds).padStart(2, "0")}`;

    console.log(formattedCountdown);

    const day_0 = document.getElementsByClassName("day_0");
    const day_1 = document.getElementsByClassName("day_1");

    const hr_0 = document.getElementsByClassName("hr_0");
    const hr_1 = document.getElementsByClassName("hr_1");

    const min_0 = document.getElementsByClassName("min_0");
    const min_1 = document.getElementsByClassName("min_1");

    const sec_0 = document.getElementsByClassName("sec_0");
    const sec_1 = document.getElementsByClassName("sec_1");

    const currentDay_0 = formattedCountdown[0];
    const currentDay_1 = formattedCountdown[1];
    const currentHr_0 = formattedCountdown[3];
    const currentHr_1 = formattedCountdown[4];
    const currentMin_0 = formattedCountdown[6];
    const currentMin_1 = formattedCountdown[7];
    const currentSec_0 = formattedCountdown[9];
    const currentSec_1 = formattedCountdown[10];

    if (prevDay_0 !== currentDay_0) {
        if (stateDay_0 === 0) {
            day_0[1].innerHTML = currentDay_0;
            gsap.fromTo(day_0[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(day_0[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            day_0[0].innerHTML = currentDay_0;
            gsap.fromTo(day_0[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(day_0[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateDay_0 = stateDay_0 === 0 ? 1 : 0;
    }

    if (prevDay_1 !== currentDay_1) {
        if (stateDay_1 === 0) {
            day_1[1].innerHTML = currentDay_1;
            gsap.fromTo(day_1[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(day_1[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            day_1[0].innerHTML = currentDay_1;
            gsap.fromTo(day_1[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(day_1[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateDay_1 = stateDay_1 === 0 ? 1 : 0;
    }

    if (prevHr_0 !== currentHr_0) {
        if (stateHr_0 === 0) {
            hr_0[1].innerHTML = currentHr_0;
            gsap.fromTo(hr_0[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(hr_0[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            hr_0[0].innerHTML = currentHr_0;
            gsap.fromTo(hr_0[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(hr_0[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateHr_0 = stateHr_0 === 0 ? 1 : 0;
    }

    if (prevHr_1 !== currentHr_1) {
        if (stateHr_1 === 0) {
            hr_1[1].innerHTML = currentHr_1;
            gsap.fromTo(hr_1[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(hr_1[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            hr_1[0].innerHTML = currentHr_1;
            gsap.fromTo(hr_1[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(hr_1[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateHr_1 = stateHr_1 === 0 ? 1 : 0;
    }

    if (prevMin_0 !== currentMin_0) {
        if (stateMin_0 === 0) {
            min_0[1].innerHTML = currentMin_0;
            gsap.fromTo(min_0[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(min_0[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            min_0[0].innerHTML = currentMin_0;
            gsap.fromTo(min_0[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(min_0[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateMin_0 = stateMin_0 === 0 ? 1 : 0;
    }

    if (prevMin_1 !== currentMin_1) {
        if (stateMin_1 === 0) {
            min_1[1].innerHTML = currentMin_1;
            gsap.fromTo(min_1[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(min_1[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            min_1[0].innerHTML = currentMin_1;
            gsap.fromTo(min_1[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(min_1[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateMin_1 = stateMin_1 === 0 ? 1 : 0;
    }

    if (prevSec_0 !== currentSec_0) {
        if (stateSec_0 === 0) {

            sec_0[1].innerHTML = currentSec_0;
            gsap.fromTo(sec_0[0], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(sec_0[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            sec_0[0].innerHTML = currentSec_0;
            gsap.fromTo(sec_0[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(sec_0[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateSec_0 = stateSec_0 === 0 ? 1 : 0;
    }

    if (prevSec_1 !== currentSec_1) {
        if (stateSec_1 === 0) {
            // update the html 
            sec_1[1].innerHTML = currentSec_1;
            gsap.fromTo(sec_1[0], { y: "0%" }, { y: "100%", duration: 1});
            gsap.fromTo(sec_1[1], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        } else {
            // update the html
            sec_1[0].innerHTML = currentSec_1;
            gsap.fromTo(sec_1[1], { y: "0%" }, { y: "100%", duration: 1 });
            gsap.fromTo(sec_1[0], {
                y: "-100%",
            }, {
                y: "0%",
                duration: 1,
            });
        }

        stateSec_1 = stateSec_1 === 0 ? 1 : 0;
    }

    prevDay_0 = currentDay_0;
    prevDay_1 = currentDay_1;
    prevHr_0 = currentHr_0;
    prevHr_1 = currentHr_1;
    prevMin_0 = currentMin_0;
    prevMin_1 = currentMin_1;
    prevSec_0 = currentSec_0;
    prevSec_1 = currentSec_1;

    // day_0[0].innerHTML = currentDay_0;
    // day_1[0].innerHTML = currentDay_1;
    // hr_0[0].innerHTML = currentHr_0;
    // hr_1[0].innerHTML = currentHr_1;
    // min_0[0].innerHTML = currentMin_0;
    // min_1[0].innerHTML = currentMin_1;
    // sec_0[0].innerHTML = currentSec_0;
    // sec_1[0].innerHTML = currentSec_1;
    //
    // day_0[1].innerHTML = currentDay_0;
    // day_1[1].innerHTML = currentDay_1;
    // hr_0[1].innerHTML = currentHr_0;
    // hr_1[1].innerHTML = currentHr_1;
    // min_0[1].innerHTML = currentMin_0;
    // min_1[1].innerHTML = currentMin_1;
    // sec_0[1].innerHTML = currentSec_0;
    // sec_1[1].innerHTML = currentSec_1;
}, 1000);
