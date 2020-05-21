function getData() {
    /*const json = '[
    {
        "title": "Our Book Club and Research",
        "school": "HTHM",
        "teacher": "David Roney",
        "image": "http://hthmfarmtomesa.com/images/IMG_0777.JPG",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan augue, ut semper eros. Nullam augue tellus, sagittis eget tortor commodo, aliquam interdum nisi. Cras pretium, ex in commodo fermentum, orci quam eleifend diam, ac sollicitudin odio risus vitae massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in velit nisl. Vivamus consequat sodales neque volutpat bibendum. Nulla lectus nibh, molestie ac feugiat facilisis, efficitur a magna.",
        "link": "https://hthmfarmtomesa.com"
    }
]'
    */
    var reader = new FileReader();

    reader.addEventListener("loadend", function() {
        return JSON.parse(reader.result);
    });

    reader.readAsText('exhibitions.json', "UTF-8");
}

function createPage() {
    exhibitions = getData();

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
        const close = document.createElement("div");

        openBox.setAttribute("class", "open-box");
        
        school.setAttribute("class", "item-school small-item");
        school.textContent = i.school;

        teacher.setAttribute("class", "item-teacher small-item");
        teacher.textContent = i.teacher;

        name.setAttribute("class", "item-name item");
        name.textContent = i.title;

        expand.setAttribute("class", "expand item");

        popup.setAttribute("class", "popup");

        boxPopup.setAttribute("class", "box-popup");

        flex.setAttribute("class", "flex");

        sideImage.setAttribute("class", "side-image");
        sideImage.setAttribute("style", "background-image: url('" + i.image + "')");

        descriptionDiv.setAttribute("class", "project-description");

        ourProject.textContent = "Our Project";

        descriptionText.textContent = i.content;

        join.setAttribute("href", i.link);
        join.textContent = "Join our Exhibition";

        close.setAttribute("class", "close");
        close.textContent = "Close";

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
        popup.appendChild(close);

        listview.appendChild(section);
    }
}

function close() {
    $('.popup').click(function () {
        $(this).css('display', 'none')
    });
}

function open() {
    $('.open-box').click(function () {
        $(this).next().css('display', 'block')
    });
}