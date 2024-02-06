let certificateStyles = {
    "mentalfortitude": {
        name: "Mental Fortitude",
        path: "certificates/mental.png"
    },
    "posture": {
        name: "Ryan Posture"
    },
    "option3": {
        name: "Somethibng"
    }
}

function createOption(name="option",cert) {
    if(cert == null) return;
    let op = document.createElement("option")
    op.value = name
    op.innerText = cert.name
    return op
}
function updateCert(e){
    console.log(e.target.value);
    const certDisplay = document.getElementById("certDisplay");
    const certData = certificateStyles[styleSelector.value];
    if(certDisplay != null && certData != null){
        console.log(certData)
    }
}
function submit(e) {
    e.preventDefault();

    const styleSelector = document.getElementById("certstyle");
    const nameInput = document.getElementById("name");
    if(nameInput != null && styleSelector !=null){
        updateCert(styleSelector.value)

        console.log(nameInput.value)
        certDisplay.setAttribute("src",certData.path);
    }
}
function updateName(e){
    console.log(e.target.value);
}

document.addEventListener("DOMContentLoaded", () => {
    const styleSelector = document.getElementById("certstyle");
    const submitData = document.getElementById("submit");
    const nameInput = document.getElementById("name");

    if (styleSelector != null) {
        if(submitData != null && nameInput != null ){
            submitData.addEventListener("click",submit);
            nameInput.addEventListener("change",updateName)
        }
        for (const [certVal,certName] of Object.entries(certificateStyles)) {
            styleSelector.appendChild(createOption(certVal,certName))
        }
        styleSelector.addEventListener("change",updateCert)
    }  
    
    
})

