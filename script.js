let observer = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.5) {
            observable.target.classList.remove('hidden')
            console.log('remove hidden');
            observer.unobserve(observable.target)
        }
    })
}, {
    threshold: [0.5]
});


let cards = document.querySelectorAll('.card')
cards.forEach(function (card) {
    card.classList.add('hidden')
    card.classList.add('up')
    observer.observe(card)
})

let rigthItems = document.querySelectorAll('.right')
rigthItems.forEach(function (rigthItem) {
    rigthItem.classList.add('hidden')
    rigthItem.classList.add('moveToLeft')
    observer.observe(rigthItem)
})

let leftItems = document.querySelectorAll('.left')
leftItems.forEach(function (leftItem) {
    leftItem.classList.add('hidden')
    leftItem.classList.add('moveToRight')
    observer.observe(leftItem)
})

let foot = document.querySelector('#foot')
console.log(foot);
foot.classList.add('hidden')
foot.classList.add('up')
observer.observe(foot)

