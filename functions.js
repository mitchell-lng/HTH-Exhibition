var data;

function getData() {
    let result;
    const url = "https://raw.githubusercontent.com/monkie1357/hthexhibition/master/exhibitions.json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = "text";
    request.send();
    result = request.onload = function() {
        data = JSON.parse(request.response);
        createPage();
    }
}

function clearMain() {
    const listview = document.getElementById("listview");
    listview.innerHTML = "";

    const section = document.createElement("section");
    const openBox = document.createElement("a");
    const school = document.createElement("div");
    const teacher = document.createElement("div");
    const name = document.createElement("div");

    openBox.setAttribute("class", "no-cursor");

    school.setAttribute("class", "item-school small-item item");
    school.textContent = "School";

    teacher.setAttribute("class", "item-teacher small-item item");
    teacher.textContent = "Teacher";

    name.setAttribute("class", "item-name item");
    name.textContent = "Title";

    section.appendChild(openBox);
    openBox.appendChild(school);
    openBox.appendChild(teacher);
    openBox.appendChild(name);

    listview.appendChild(section);
}

function createPage() {
    clearMain();
    for (let x = 0; x < data.length; x++) {
        const i = data[x];
        
        var search_school = $( "#school" ).val().toLowerCase();
        var school_name = i.school.toLowerCase();
        if (!("all" == search_school)) {
            if (!(school_name == search_school)) { continue; }
        }

        var search_teacher = $( "#teacher" ).val().toLowerCase();
        var teacher_name = i.teacher.toLowerCase();
        if (!("" == search_teacher)) {
            if (teacher_name.match(search_teacher) == null) { continue; }
        }

        const listview = document.getElementById("listview");
        const section = document.createElement("section");
        const openBox = document.createElement("a");
        const school = document.createElement("div");
        const teacher = document.createElement("div");
        const name = document.createElement("div");
        const expand = document.createElement("div");
        const popup = document.createElement("article");
        const boxPopup = document.createElement("div");
        const flex = document.createElement("div");
        const sideImage = document.createElement("div");
        const descriptionDiv = document.createElement("div");
        const div = document.createElement("div");
        const ourProject = document.createElement("h1");
        const descriptionText = document.createElement("span");
        const join = document.createElement("a");
        // const close = document.createElement("div");
        const closeDiv1 = document.createElement("div");
        const closeDiv2 = document.createElement("div");
        const closeSpan = document.createElement("span");

        openBox.setAttribute("class", "open-box");
        $(openBox).click(function () {
            $(this).next().css('display', 'block')
        });
        
        school.setAttribute("class", "item-school small-item item");
        school.textContent = i.school;

        teacher.setAttribute("class", "item-teacher small-item item");
        teacher.textContent = i.teacher;

        name.setAttribute("class", "item-name item");
        name.textContent = i.title;

        expand.setAttribute("class", "expand item");

        popup.setAttribute("class", "popup");
        // $(popup).click(function () {
        //     $(this).css('display', 'none')
        // });

        boxPopup.setAttribute("class", "box-popup");

        flex.setAttribute("class", "flex");

        sideImage.setAttribute("class", "side-image");
        sideImage.setAttribute("style", "background-image: url('" + i.image + "')");

        descriptionDiv.setAttribute("class", "project-description");

        ourProject.textContent = "Our Project";

        descriptionText.textContent = i.content;

        join.setAttribute("href", i.link);
        join.setAttribute("target", "_blank")
        join.textContent = "Join our Exhibition";

        // close.setAttribute("class", "close");
        // close.textContent = "Close";

        closeDiv1.setAttribute("class", "box-2");
        $(closeDiv1).click(function () {
            $(popup).css('display', 'none')
        });
        closeDiv2.setAttribute("class", "btn btn-two");
        closeSpan.textContent = "CLOSE";
        closeSpan.setAttribute('class', 'closeSpan')
        

        section.appendChild(openBox);
        openBox.appendChild(school);
        openBox.appendChild(teacher);
        openBox.appendChild(name);
        openBox.appendChild(expand);
        section.appendChild(popup);
        popup.appendChild(boxPopup);
        boxPopup.appendChild(flex);
        flex.appendChild(sideImage);
        flex.appendChild(descriptionDiv);
        descriptionDiv.appendChild(div);
        div.appendChild(ourProject);
        div.appendChild(descriptionText);
        descriptionDiv.append(join);
        // popup.appendChild(close);
        popup.appendChild(closeDiv1);
        closeDiv1.appendChild(closeDiv2);
        closeDiv2.appendChild(closeSpan);

        listview.appendChild(section);
    }
}