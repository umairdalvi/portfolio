document.addEventListener('DOMContentLoaded', function () {
  console.log('Script is running!'); // Debug message

  // Get the current page URL path (excluding domain and query parameters)
  var currentPage = window.location.pathname;
  console.log('Current page:', currentPage); // Log current page

  var navLinks = document.querySelectorAll('.nav-link');
  console.log('Navbar links found:', navLinks.length); // Log number of links

  navLinks.forEach(function (link) {
    var linkHref = link.getAttribute('href');
    console.log('Link href:', linkHref); // Debugging each link's href

    // Normalize the linkHref by removing './' if it exists
    if (linkHref.startsWith('./')) {
      linkHref = linkHref.substring(2); // Remove the './' part for comparison
    }

    // Add a leading '/' to linkHref to make sure it matches the pathname format
    if (linkHref !== '/' && !linkHref.startsWith('/')) {
      linkHref = '/' + linkHref; // Add leading '/' for consistency
    }

    // Compare the normalized linkHref with currentPage
    if (linkHref === currentPage) {
      link.classList.add('active');   
    }
  });
});




