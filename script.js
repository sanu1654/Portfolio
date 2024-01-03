function showMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.display = "block";
    navLinks.classList.add("show");
}

function hideMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.display = "-100%";
    navLinks.classList.remove("show");
}


document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Hide the navbar on smaller screens
            if (window.innerWidth < 840) {
                var navLinks = document.getElementById("nav-links");
                navLinks.style.display = "none";
                navLinks.classList.remove("show");
            }
        });
    });

    var hiddenContent = document.getElementById('hidden-content');
    var moreBtn = document.getElementById('more-btn');
    var skillsSection = document.getElementById('skills-section');

    function toggleMore() {
        hiddenContent.classList.toggle('show');
        moreBtn.textContent = hiddenContent.classList.contains('show') ? 'Less' : 'More';

        // Adjust the margin dynamically based on the visibility of hidden content
        skillsSection.style.marginTop = hiddenContent.classList.contains('show') ? '20px' : '0';
    }

    moreBtn.addEventListener('click', toggleMore);
});
