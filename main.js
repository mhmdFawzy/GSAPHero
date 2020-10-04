let animation = gsap.timeline({
  paused: false, // default is false
});
animation.fromTo(
  ".building--left",
  {
    width: "0",
    x: -120,
    ease: Expo.easeInOut,
  },
  {
    x: 0,
    width: "25%",
  }
);
animation.fromTo(
  ".building--goright",
  {
    width: "40%",
    opacity: "0",
    ease: Expo.easeInOut,
    x: -100,
    duration: "1",
  },
  {
    x: "100vw",
    width: "0",
    opacity: "1",
  }
);

animation.fromTo(
  ".building--right--content--img",
  {
    delay: 0.5,
    x: -20,
    width: "0",
    x: -50,
    ease: Expo.easeInOut,
  },
  {
    x: 0,
    width: "40vw",
  },
  "-=0.7"
);
animation.from(
  ".building--left--logo",
  {
    delay: 0.5,
    x: -20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  "-=0.7"
);
animation.from(
  ".building--left--questions",
  {
    x: -50,
    opacity: 0,
    scale: 2.5,
    ease: Expo.easeInOut,
  },
  "-=0.7"
);
animation.from(
  ".building--right--content--text",
  {
    delay: 1,
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  "-=0.7"
);
animation.from(
  ".menu--container",
  {
    y: 20,
    opacity: 0,
    rotation: 90,
    ease: Expo.easeInOut,
  },
  "<=0.1"
);
animation.from(
  ".building--right--content--social li",
  2,
  {
    stagger: 0.1, // stagger start times
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut,
  },
  "-=1"
);
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    animation.play();
  }
});

let menuIcon = document.getElementsByClassName("menu--container")[0];
let menuList = document.getElementsByClassName("building--goright")[0];
menuIcon.addEventListener("click", () => {
  //   menuList.style.left = "-40%";
  menuIcon.classList.toggle("open");
  if (menuIcon.classList.contains("open")) {
    gsap.to(".building--goright", {
      left: "-40%",
      width: "40%",
    });
    gsap.fromTo(
      ".building--goright ul li",
      {
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      },
      {
        delay: "0.5",
        stagger: 0.1,
        opacity: "1",
      }
    );
  } else {
    gsap.to(".building--goright ul li", {
      stagger: 0.1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
    gsap.to(".building--goright", {
      delay: "0.7",
      left: "50%",
      opacity: "1",
    });
  }
});
