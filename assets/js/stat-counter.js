$(document).ready(function () {
    let animated = false; // Ensure the animation runs only once

    // Function to check if the element is in the viewport
    function checkVisibility() {
        const statCounter = $('.stat-counter');
        if (statCounter.length === 0) return; // Exit if no .stat-counter found

        const offset = statCounter.offset().top;
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();

        // Subtract an estimated taskbar height (e.g., 40px)
        const taskbarHeight = 60;
        const adjustedViewportBottom = scrollTop + windowHeight - taskbarHeight;

        // Trigger animation only when stat-counter enters the viewport
        if (!animated && adjustedViewportBottom > offset) {
            animated = true; // Mark animation as started

            // Add delay before animation starts
            setTimeout(() => {
                $('.counting').each(function () {
                    const $this = $(this);
                    const countTo = parseInt($this.attr('data-count'), 10);

                    $({ countNum: 0 }).animate(
                        { countNum: countTo },
                        {
                            duration: 3500,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum); // Ensure final value
                            },
                        }
                    );
                });
            }, 700); // Delay in milliseconds
        }
    }

    // Run the checkVisibility function on page load
    checkVisibility();

    // Attach checkVisibility to the scroll event
    $(window).on('scroll', checkVisibility);
});

