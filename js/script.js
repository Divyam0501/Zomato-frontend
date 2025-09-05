document.addEventListener('DOMContentLoaded', () => {

    // --- Animations ---
    const mainContent = document.querySelector('main');
    const header = document.querySelector('header');

    // Set initial state for fade-in animation
    header.style.opacity = 0;
    mainContent.style.opacity = 0;

    // Trigger the fade-in animation after a short delay
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease-in-out';
        mainContent.style.transition = 'opacity 1s ease-in-out';
        header.style.opacity = 1;
        mainContent.style.opacity = 1;
    }, 100);


    // --- Frontend Logic ---
    const searchInput = document.querySelector('main input');
    
    // Dynamically create a search button for better user experience
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    
    // Style the new search button
    searchButton.style.padding = '15px 30px';
    searchButton.style.fontSize = '18px';
    searchButton.style.marginLeft = '10px';
    searchButton.style.border = 'none';
    searchButton.style.borderRadius = '8px';
    searchButton.style.backgroundColor = '#cb202d'; // Zomato Red
    searchButton.style.color = 'white';
    searchButton.style.cursor = 'pointer';
    searchButton.style.transition = 'background-color 0.3s ease';
    
    // Create a container to hold both the input and the button
    const searchContainer = document.createElement('div');
    searchContainer.style.display = 'flex';
    searchContainer.style.justifyContent = 'center';
    searchContainer.style.alignItems = 'center';
    searchContainer.style.width = '60%';

    // Place the container in the DOM and move the input field into it
    searchInput.parentNode.insertBefore(searchContainer, searchInput);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    // Adjust input width to fit nicely within the new container
    searchInput.style.width = '70%'; 

    // --- Event Listeners ---

    // Function to handle the search action
    const handleSearch = () => {
        const query = searchInput.value.trim();
        if (query === '') {
            alert('Please enter a restaurant, cuisine, or dish to search for!');
        } else {
            // In a real application, this is where you would trigger the search functionality
            alert(`Searching for: "${query}"`);
        }
    };

    // Listen for clicks on the search button
    searchButton.addEventListener('click', handleSearch);

    // Allow search on pressing the 'Enter' key in the input field
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Add a hover effect to the button
    searchButton.addEventListener('mouseover', () => {
        searchButton.style.backgroundColor = '#e74c3c'; // Lighter red on hover
    });

    searchButton.addEventListener('mouseout', () => {
        searchButton.style.backgroundColor = '#cb202d'; // Return to original Zomato Red
    });
});
