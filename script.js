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
for (var i = 0, len = cards.length; i < len; i++) {
  cards[i].classList.add('hidden')
  cards[i].classList.add('up')
  observer.observe(cards[i])
}

let rigthItems = document.querySelectorAll('.right')
for (var i = 0, len = rigthItems.length; i < len; i++) {
  rigthItems[i].classList.add('hidden')
  rigthItems[i].classList.add('up')
  observer.observe(rigthItems[i])
}

let leftItems = document.querySelectorAll('.left')
for (var i = 0, len = leftItems.length; i < len; i++) {
  leftItems[i].classList.add('hidden')
  leftItems[i].classList.add('up')
  observer.observe(leftItems[i])
}

let foot = document.querySelector('#foot')
foot.classList.add('hidden')
foot.classList.add('up')
observer.observe(foot)

