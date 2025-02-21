export class Dropdown {
    constructor(dropdownElement) {
        this.dropdownElement = dropdownElement;
        this.dropdownContent = dropdownElement.querySelector('.dropdown-content');
        
        this.initializeDropdown();
    }

    initializeDropdown() {
        // Add click event to toggle dropdown
        this.dropdownElement.addEventListener('click', (event) => {
            // Prevent event from bubbling
            event.stopPropagation();
            
            // Toggle dropdown visibility
            if (this.dropdownContent.style.display === 'block') {
                this.hide();
            } else {
                this.show();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            this.hide();
        });

        // Prevent dropdown from closing when clicking inside
        this.dropdownContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    show() {
        this.dropdownContent.style.display = 'block';
    }

    hide() {
        this.dropdownContent.style.display = 'none';
    }
}

// Initialize all dropdowns on the page
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        new Dropdown(dropdown);
    });
});