//wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
/*space 공백이 아닌 것을 모두 찾아서 replace. $&에는 찾아낸 문자들이 들어있음
즉 <span class="letter">gorgeoushe</span>가 <h1 class="ml12"></h1> 사이에 들어가는 것*/
anime.timeline().add({
    targets: ".ml12 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 2000 + 60 * i,
});
/*
https://xn--xy1bk56a.run/anime/documentation/
https://xn--xy1bk56a.run/anime/
*/

TweenMax.from(".left", 3, {
    left: "-50%",
    ease: Expo.easeInOut,
    delay: 3.4,
});

TweenMax.from(".header h1", 3, {
    left: "-140%",
    ease: Expo.easeInOut,
    delay: 3.4,
});

TweenMax.staggerFrom(
    ".images > div",
    1,
    {
        y: "60",
        opacity: 0,
        ease: Power2.easeOut,
        delay: 6,
    },
    0.2
);

TweenMax.staggerFrom(
    ".header > p",
    1,
    {
        y: "60",
        opacity: 0,
        ease: Power2.easeOut,
        delay: 5.6,
    },
    0.2
);

TweenMax.from(".link", 1, {
    opacity: 0,
    ease: SteppedEase.config(1),
    repeat: -1,
    repeatDelay: 0.2,
    delay: 7.8,
});