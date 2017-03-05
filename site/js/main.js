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

function mobileSearch() {
    var searchBar = document.querySelector('#search_bar');
    if (!searchBar.classList.contains('hidden-search')) {
        searchBar.classList.remove('shown-search');
        searchBar.classList.add('hidden-search');
        setTimeout(function() {
            $(searchBar).css('display', 'none');
        }, 300);
    }else {
        $(searchBar).css('display', 'flex');
        setTimeout(function() {
            searchBar.classList.remove('hidden-search');
            searchBar.classList.add('shown-search');
        }, 50);


    }

}

function clearSearch() {
    document.getElementById("skrovmal_search").reset();
}