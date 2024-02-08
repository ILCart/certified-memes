let certificateStyles = {
    "mentalfortitude": {
        name: "Mental Fortitude",
        path: "certificates/mental.png",         
    },
    "posture": {
        name: "Ryan Posture",
        path: "certificates/ryan.png"
    },
    "option3": {
        name: "Somethibng"
    }
}

function createOption(name = "option", cert) {
    if (cert == null) return;
    let op = document.createElement("option")
    op.value = name
    op.innerText = cert.name
    return op
}
function updateDisplay(certValue) {
    const certDisplay = document.getElementById("certDisplay");
    const certData = certificateStyles[certValue];
    if (certDisplay != null && certData != null){
        certDisplay.setAttribute("src", certData.path);
        // console.log(certData)
    }
}

function getDate(){
    const date = new Date;
    const day = date.getDate(), month = date.getMonth()+1, year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

function setText(element,value){
    if(element){
        element.innerText = value;
    }
}


function setCertificate(current, data){
    //console.log(data)
    current = certificateStyles[current];
    if(current == null) return;
    for (const [field,fieldVal] of data) {
        console.log(field,fieldVal)
        const elementCurrent = document.getElementById(`${field}Text`);
        
        if(elementCurrent != null) {
                setText(elementCurrent,fieldVal);
        }
    }
}

function updateCert() {
    const input = document.getElementById("input");
    let formData = new FormData(input);
    for (const [key, val] of formData.entries()) {
        if (key == "style") {
            updateDisplay(val);
            setCertificate(val,formData.entries());
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
    setText(document.getElementById("dateText"),getDate());
    updateCert();
    const input = document.getElementById("input");
    if (styleSelector != null) {
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

