let certificateStyles = {
    "posture": {

    },
    "mentalfortitude": {

    },
    "posture": {

    }
}

function createOption() {
    let op = document.createElement("option")
    op.value = "1"
    op.innerText = "options"
    return op
}
document.addEventListener("DOMContentLoaded", () => {
    let styleSelector = document.getElementById("certstyle");
    if (styleSelector != null) {
        styleSelector.appendChild(        createOption()        )
        console.log(styleSelector.options)
    }
})