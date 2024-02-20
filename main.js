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
    })
    .to(letters[1], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[2], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[3], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[4], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[5], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[6], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[7], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[8], {
        duration: duration,
        y: "-100%",
    }, `-=${delay}`)
    .to(letters[9], {
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
    .to(letters[2], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[3], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[4], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[5], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[6], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[7], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[8], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .to(letters[9], {
        duration: duration,
        y: "0%",
    }, `-=${delay}`)
    .eventCallback("onComplete", replayTimeline);
