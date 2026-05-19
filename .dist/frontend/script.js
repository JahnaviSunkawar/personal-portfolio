fetch("http://localhost:5000/projects")
.then(res => res.json())
.then(data => {

    const container = document.getElementById("projects");

    data.forEach(project => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        container.appendChild(div);
    });

});


// Temporary Project Data

const projects = [
    {
        title: "Electric Bill Management System",
        description: "A Java-based application to calculate and manage electricity bills efficiently."
    },

    {
        title: "NeuroLoop – AI Based Early Stage Dementia Detection",
        description: "An AI-powered system designed to detect early signs of dementia using patient data analysis."
    },

    {
        title: "Study Hub",
        description: "A platform for uploading, sharing, and accessing study materials easily."
    }
];

const container = document.getElementById("projects");

projects.forEach(project => {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    container.appendChild(div);
});