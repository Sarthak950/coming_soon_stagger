import gsap from "gsap";

const letters = document.querySelectorAll(".letters");

const tl = gsap.timeline({});
const delay = .95;
const duration = 1;
const gap = 1;

const replayTimeline = () => {
    // add a delay
    setTimeout(() => {
        tl.restart();
    }, gap * 1000);
};
tl
    .to(letters[0], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[1], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    // .to(letters[2], {
    //     duration: duration,
    //     y: "-100%",
    // }, `-=${delay}`)
    .to(letters[3], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[4], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    // .to(letters[5], {
    //     duration: duration,
    //     y: "-100%",
    // }, `-=${delay}`)
    .to(letters[6], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[7], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    // .to(letters[8], {
    //     duration: duration,
    //     y: "-100%",
    // }, `-=${delay}`)
    .to(letters[9], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[10], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    // reverse the above
    .to(letters[0], {
        duration: duration,
        y: "0%",
    }, `+=${gap}`)
    .to(letters[1], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    // .to(letters[2], {
    //     duration: duration,
    //     y: "0%",
    // }, `-=${delay}`)
    .to(letters[3], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[4], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    // .to(letters[5], {
    //     duration: duration,
    //     y: "0%",
    // }, `-=${delay}`)
    .to(letters[6], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[7], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    // .to(letters[8], {
    //     duration: duration,
    //     y: "0%",
    // }, `-=${delay}`)
    .to(letters[9], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[10], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .eventCallback("onComplete", replayTimeline);

// Set the launch date and time
const launchDate = new Date("March 10, 2024 06:00:00").getTime();

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

    day_0[0].innerHTML = formattedCountdown[0];
    day_1[0].innerHTML = formattedCountdown[1];

    hr_0[0].innerHTML = formattedCountdown[3];
    hr_1[0].innerHTML = formattedCountdown[4];

    min_0[0].innerHTML = formattedCountdown[6];
    min_1[0].innerHTML = formattedCountdown[7];

    sec_0[0].innerHTML = formattedCountdown[9];
    sec_1[0].innerHTML = formattedCountdown[10];

    day_0[1].innerHTML = formattedCountdown[0];
    day_1[1].innerHTML = formattedCountdown[1];

    hr_0[1].innerHTML = formattedCountdown[3];
    hr_1[1].innerHTML = formattedCountdown[4];

    min_0[1].innerHTML = formattedCountdown[6];
    min_1[1].innerHTML = formattedCountdown[7];

    sec_0[1].innerHTML = formattedCountdown[9];
    sec_1[1].innerHTML = formattedCountdown[10];

    // document.getElementById("countdown").innerHTML = formattedCountdown;

    // Check if the launch date and time have passed
    // if (timeDifference < 0) {
    //     clearInterval(countdown);
    //     document.getElementById("countdown").innerHTML = "Launch has occurred!";
    // }
}, 1000);
