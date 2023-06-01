
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the timeline ul element and the default line element
    var timelineUl = document.querySelector('.timeline ul');
    var defaultLine = document.querySelector('.default-line');


    // Set the height of the default line to match the height of the timeline ul minus the height of the last div
    function setDefaultLineHeight() {
        var timelineHeight = timelineUl.offsetHeight;
        var lastDivHeight = document.querySelector('.timeline li:last-child').offsetHeight;
        defaultLine.style.height = (timelineHeight - lastDivHeight) + 'px';
    }


    // Call the function initially and whenever the window is resized
    setDefaultLineHeight();
    window.addEventListener('resize', setDefaultLineHeight);

    // Scroll behavior of the timeline
    var items = document.querySelectorAll('.timeline li');
    var lineToDraw = document.querySelector('.draw-line');

    function updateTimeline() {
        var redLineHeight = lineToDraw.offsetHeight;
        var greyLineHeight = defaultLine.offsetHeight;
        var windowDistance = window.pageYOffset;
        var windowHeight = window.innerHeight / 2;
        var timelineDistance = document.querySelector('.timeline').offsetTop;

        if (windowDistance >= timelineDistance - windowHeight) {
            var line = windowDistance - timelineDistance + windowHeight;

            if (line <= greyLineHeight) {
                lineToDraw.style.height = line + 20 + 'px';
            }
        }

        var bottom = lineToDraw.offsetTop + lineToDraw.offsetHeight;
        items.forEach(function (item) {
            var circlePosition = item.offsetTop;

            if (bottom > circlePosition) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    }

    // Call the function initially and whenever the window is scrolled
    updateTimeline();
    window.addEventListener('scroll', updateTimeline);
});

