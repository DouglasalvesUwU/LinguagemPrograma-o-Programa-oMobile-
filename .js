// scripts.js

function toggleProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === 'none' || !projectDetails.style.display) {
        projectDetails.style.display = 'block'; /* Mostra o detalhe */
    } else {
        projectDetails.style.display = 'none'; /* Oculta o detalhe */
    }
}