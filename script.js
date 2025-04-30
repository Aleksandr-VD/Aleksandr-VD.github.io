function showFilters() {
    document.querySelector('.filters').style = "display: block"
    document.querySelector('.filters').style.background = "#815231"
    document.querySelector('.filters').style.color = "white"
    document.querySelector('.close-filters-but').style = "display: block"
}
function closeFilters() {
    document.querySelector('.filters').style = "display: none"
    document.querySelector('.filters').style = "background-color: inherit"
    document.querySelector('.close-filters-but').style = "display: none"
}
document.querySelector('.card')?.addEventListener('click', () => {
    document.querySelector('.description-card').style = "display: flex"
    document.querySelector('.bg').style = "display: block"
})
document.querySelector('.bg')?.addEventListener('click', () => {
    document.querySelector('.description-card').style = "display: none"
    document.querySelector('.bg').style = "display: none"
})