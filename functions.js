function getData() {
    let result;
    const url = "https://raw.githubusercontent.com/monkie1357/hthexhibition/master/exhibitions.json";
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = "string";
    request.send();
    result = request.onload = function() {
        createPage(JSON.parse(request.response));
    }
}

function createPage(exhibitions) {
    for (let x = 0; x < exhibitions.length; x++) {
        const i = exhibitions[x];
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
        
        school.setAttribute("class", "item-school small-item");
        school.textContent = i.school;

        teacher.setAttribute("class", "item-teacher small-item");
        teacher.textContent = i.teacher;

        name.setAttribute("class", "item-name item");
        name.textContent = i.title;

        expand.setAttribute("class", "expand item");

        popup.setAttribute("class", "popup");
        $(popup).click(function () {
            $(this).css('display', 'none')
        });

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
        closeDiv2.setAttribute("class", "btn btn-two");
        closeSpan.textContent = "CLOSE";

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