document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {

    }
});
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}