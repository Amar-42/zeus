
    // Function to toggle the sidebar
    function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0';
}
    function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const openSidebarButton = document.querySelector('.open-sidebar-button');

    if (sidebar.style.width === '200px') {
        sidebar.style.width = '0';
        openSidebarButton.innerHTML = '☰'; // Change to three lines icon
    } else {
        sidebar.style.width = '200px';
        openSidebarButton.innerHTML = '✖'; // Change to cross icon
    }
}

    // Function to scroll to the "home" section smoothly
    function scrollToHome() {
        const homeSection = document.getElementById('home');
        homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    window.addEventListener('load', hideSidebar);
    
    