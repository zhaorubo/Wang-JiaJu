let designTitle = document.querySelectorAll('.design_title_box')
let bannerTitle = document.querySelector('.banner_title')
let banner_msg_box = document.querySelector('.banner_msg_box')
let banner_title_two = document.querySelector('.banner_title_two')
anime({
    targets: bannerTitle,
    translateY: [500, 0],
    duration: 2500
    // opacity: 1
})

anime({
    targets: banner_title_two,
    translateY: [500, 0],
    duration: 2000
})

anime({
    targets: banner_msg_box,
    translateY: 40,
    loop: true,
    easing: 'easeInOutSine'
})

anime({
    targets: banner_msg_box,
    translateY: 40,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
})

anime({
    targets: designTitle,
    translateY: [-50, -100],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
})
