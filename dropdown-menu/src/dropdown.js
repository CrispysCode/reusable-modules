export class Dropdown {
    constructor(dropdownElement) {
        this.dropdownElement = dropdownElement;
        this.dropdownContent = dropdownElement.querySelector('.dropdown-content');
        
        this.initializeDropdown();
    }

    initializeDropdown() {
        // Optional: If you want to add manual toggle functionality
        const dropdownButton = this.dropdownElement.querySelector('button');
        
        dropdownButton.addEventListener('click', () => {
            this.toggleDropdown();
        });
    }

    toggleDropdown() {
        const isHidden = this.dropdownContent.style.display === 'none' || 
                         this.dropdownContent.style.display === '';
        
        this.dropdownContent.style.display = isHidden ? 'block' : 'none';
    }

    // Optional method to manually show/hide dropdown
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