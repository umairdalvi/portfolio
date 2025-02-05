// Filter Gallery

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('selected'));
  
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
  
        // Get the filter class (like 'corporate', 'retail', etc.)
        const filterClass = button.classList[1].replace('-btn', '');
  
        galleryItems.forEach(item => {
          // Show or hide gallery items based on the filter
          if (filterClass === 'all' || item.classList.contains(filterClass)) {
            item.style.display = 'block'; // Show the item
          } else {
            item.style.display = 'none'; // Hide the item
          }
        });
      });
    });
  });
  