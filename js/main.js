on(window, 'load', function () {
    var view = new View();
    var game = new Game();
    game.init(view);
    event(game);
});

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro-animation');
    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000);
    }, 2000);
});
