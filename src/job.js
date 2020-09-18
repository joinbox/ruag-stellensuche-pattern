scrollingHeader();
toggleSection();


function scrollingHeader() {
    const scrollingHeader = document.querySelector('.js-job-detail-scrolling-header');
    const aside = document.querySelector('.js-job-detail-aside');

    if (!scrollingHeader || !aside) return;

    window.addEventListener('scroll', (event) => {
        const asideTopPosition = aside.getBoundingClientRect().top;

        if (asideTopPosition < 0) {
            if (scrollingHeader.classList.contains('ruag-c-job__scrolling-header--hidden')) {
                scrollingHeader.classList.remove('ruag-c-job__scrolling-header--hidden');
            }
        } else {
            if (!scrollingHeader.classList.contains('ruag-c-job__scrolling-header--hidden')) {
                scrollingHeader.classList.add('ruag-c-job__scrolling-header--hidden');
            }
        }
    });
}

function toggleSection() {
    const toggleSections = document.querySelectorAll('.js-job-detail-toggle-section');

    for (const toggleSection of toggleSections) {
        const heading = toggleSection.querySelector('.ruag-e-heading');
        heading.addEventListener('click', (event) => {
            toggleSection.classList.toggle('ruag-c-job__toggle-section--open');
        });
    }
}
