function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    var element = document.getElementById("dr");
    element.classList.toggle("clicked");
}

