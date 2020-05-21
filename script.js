$(document).ready(function() {
    getData();

    const schoolElement = document.getElementById('school');
    schoolElement.addEventListener('change', (event) => {
        createPage();
    });

    $("#teacher").on("change paste keyup", function() {
        createPage();
    });
});