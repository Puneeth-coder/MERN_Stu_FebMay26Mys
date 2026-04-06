// 1. Accepts the parameter 'dataToRender'
function renderProject(dataToRender = projectsData) {
    const projectsContainer = document.getElementById("projects-container");

    if(!projectsContainer){
        console.log("Project container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    // 2. CRITICAL: Use 'dataToRender' here instead of 'projectsData'
    dataToRender.forEach(function(projects){

        const card = document.createElement("div");
        card.className = "p-12 text-center bg-white rounded-3xl shadow-lg space-y-8 mb-8 bg-gradient-to-r from-green-300/80 via-purple-500/20 to-pink-200 overflow-hiddentransition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-[1.02]";

        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-5 text-green-500 text-2xl font-bold group-hover:text-red-500";
        projectName.textContent = projects.name;
        
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-in flex flex-wrap gap-2";
        projectDescription.textContent = projects.description;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "px-3 py-1 bg-blue-300 text-blue-900 text-xs font-bold rounded-full";
        projectTechnologies.textContent = projects.technologies;

        const projectStatus = document.createElement("span");
        projectStatus.className = "bg-red-300 hover:bg-indigo-500 px-10 py-4 rounded-4xl shadow-xl bg-slate-600 hover:translate-y-2 duration-500 hover:text-white hover:shadow-7xl";
        projectStatus.textContent = projects.status;

        const projectCategory = document.createElement("span");
        projectCategory.className = "text-in font-bold m-6";
        projectCategory.textContent = projects.category;

        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectCategory);
        projectsContainer.appendChild(card);
    });
}