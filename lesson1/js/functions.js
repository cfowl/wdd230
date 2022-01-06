function toggleNav($id) {
    let ul = document.getElementById($id);
    ul.classList.toggle('hide');
    ul.parentElement.firstElementChild.firstElementChild.classList.toggle('rotate90');

}