function projectFilterInit(){

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. UI: Remove active styles from all, add to clicked
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200');
        });
        button.classList.add('bg-blue-600', 'text-white');
        button.classList.remove('bg-gray-200');

        // 2. Logic: Get the category and filter
        const selectedCategory = button.getAttribute('data-category');

        const filteredList = selectedCategory === 'all' 
            ? projectsData 
            : projectsData.filter(p => p.category === selectedCategory);

        // 3. Action: Call your function with the filtered list
        renderProject(filteredList);
    });
});
}