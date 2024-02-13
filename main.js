let certificateStyles = {
    "mentalfortitude": {
        disname: "Mental Fortitude",
        title: "Mental Fortitude",
        desc: "For solving day 5 of Advent of Code",
        path: "certificates/oriental.png",
    },
    "posture": {
        disname: "Ryan Posture",
        title: "Ryan Posture",
        desc: "For their shrimp like posture",
        path: "certificates/gold.png",
    },"nolife": {
        disname: "No Life",
        title: "Cave Living",
        desc: '"Go outside"',
        path: "certificates/grey.png",
    }
}

function createOption(name = "option", cert) {
    if (cert == null) return;
    let op = document.createElement("option")
    op.value = name
    op.innerText = cert.disname
    return op
}
function updateDisplay(certValue) {
    console.log(certValue)
    const certDisplay = document.getElementById("certDisplay");
    const certData = certificateStyles[certValue];
    if (certDisplay != null && certData != null) {
        for (const [key, data] of Object.entries(certData)) {
            const elementCurrent = document.getElementById(`${key}Text`);

            if (elementCurrent != null) {
                setText(elementCurrent, data);
            }
        }
        certDisplay.setAttribute("src", certData.path);
        // console.log(certData)
    }
}

function getDate() {
    const date = new Date;
    const day = date.getDate(), month = date.getMonth() + 1, year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

function setText(element, value) {
    if (element && value != "") {
        element.innerText = value;
    }
}


function setCertificate(current, data) {
    updateDisplay(current);
    console.log(data);
    current = certificateStyles[current];
    if (current == null) return;
    for (const [field, fieldVal] of Object.entries(data)) {
        const elementCurrent = document.getElementById(`${field}Text`);

        if (elementCurrent != null) {
            setText(elementCurrent, fieldVal);
        }
    }
}

function updateCert() {
    const input = document.getElementById("input");
    let formData = new FormData(input);
    for (const [key, val] of formData.entries()) {
        if (key == "style") {
            setCertificate(val, Object.fromEntries(formData.entries()));
        }
    }
    // const nameInput = document.getElementById("name");
    // if(nameInput != null && styleSelector !=null){
    //     updateCert(styleSelector.value)
    //     console.log(nameInput.value)
    // }
}


document.addEventListener("DOMContentLoaded", () => {
    const styleSelector = document.getElementById("certstyle");

    const input = document.getElementById("input");
    if (styleSelector != null) {
        setText(document.getElementById("dateText"), getDate());
        updateDisplay(Object.keys(certificateStyles)[0]);
        if (input != null) {
            input.addEventListener("change", updateCert);
            input.addEventListener("submit", (e) => e.preventDefault());
            //nameInput.addEventListener("change",updateName)
        }
        for (const [certVal, certName] of Object.entries(certificateStyles)) {
            styleSelector.appendChild(createOption(certVal, certName))
        }
    }


})

