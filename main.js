let certificateStyles = {
    "mentalfortitude": {
        name: "Mental Fortitude",
        path: "certificates/mental.png",
        recipient: [100,200],
        signature: [200,300],
        date: [200,200]

    },
    "posture": {
        name: "Ryan Posture",
        path: "certificates/ryan.png"
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
function updateCert(certValue){
    const certDisplay = document.getElementById("certDisplay");
    const certData = certificateStyles[certValue];
    if(certDisplay != null && certData != null){
        certDisplay.setAttribute("src",certData.path);
        console.log(certData)
    }
}
function setCertificate(){

}
function submit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    for(const [key,val] of formData.entries()){
        switch (key) {
            case "style":
                updateCert(val);
                break;
            default:
                break;
        }
        console.log(key,val)
    }
    // const nameInput = document.getElementById("name");
    // if(nameInput != null && styleSelector !=null){
    //     updateCert(styleSelector.value)
    //     console.log(nameInput.value)
    // }
}
function updateName(e){
    console.log(e.target.value);
}

document.addEventListener("DOMContentLoaded", () => {
    const styleSelector = document.getElementById("certstyle");
    const input = document.getElementById("input");
    const nameInput = document.getElementById("name");
    if (styleSelector != null) {
        if(input != null && nameInput != null ){
            input.addEventListener("submit",submit);
            nameInput.addEventListener("change",updateName)
        }
        for (const [certVal,certName] of Object.entries(certificateStyles)) {
            styleSelector.appendChild(createOption(certVal,certName))
        }
        styleSelector.addEventListener("change",()=>{
            updateCert(styleSelector.value);
        })
    }  
    
    
})

