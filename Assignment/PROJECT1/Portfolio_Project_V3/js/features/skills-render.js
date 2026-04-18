function renderSkills(filter = "All") {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = "";

    // IMPORTANT: Ensure 'skill.category' exists in your data
    const filteredSkills = filter === "All" 
        ? skillsData 
        : skillsData.filter(skill => skill.category === filter);

    if (filteredSkills.length === 0) {
        skillsContainer.innerHTML = "<p class='col-span-full text-center text-gray-500'>No skills found in this category.</p>";
        return;
    }

    filteredSkills.forEach(function(skill) {
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg transition-all duration-300";

        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";
        
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = skill.shortLabel;
        iconBox.appendChild(iconText);

        const skillName = document.createElement("h3");
        skillName.className = "text-2xl font-bold mb-2"; // Fixed your 'tect' and 'blod' typos
        skillName.textContent = skill.name;

        const skillDescription = document.createElement("p");
        skillDescription.className = "text-sm text-gray-600";
        skillDescription.textContent = skill.description;

        card.appendChild(iconBox);
        card.appendChild(skillName);
        card.appendChild(skillDescription);
        skillsContainer.appendChild(card);
      });
}