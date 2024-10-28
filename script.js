
/* <!---Tirth Shah's Portfolio---> */

window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
}

