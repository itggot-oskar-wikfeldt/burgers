function toggleActive(element, state) {
    var classList = element.classList;
    if (state == 'active') {
        classList.remove('inactive');
        classList.add('active');
    } else {
        classList.remove('active');
        classList.add('inactive');
    }
}

function openMenu() {
    var hamburger = document.querySelector('#hamburger');
    var darkener = document.querySelector('#scrim');
    toggleActive(hamburger, 'active');
    toggleActive(darkener, 'active');
}

function closeMenu() {
    var darkener = document.querySelector('#scrim');
    if (darkener.classList.contains('active')) {
        var hamburger = document.querySelector('#hamburger');
        toggleActive(hamburger, 'inactive');
        toggleActive(darkener, 'inactive');
    }
}