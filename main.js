function startmodel() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    soundmodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Qu_jOUD2L/model.json", modelloaded);
}

function modelloaded() {
    console.log("My Model Loaded");
    soundmodel.classify(getresults);
}

function getresults(errorarray, resultsarray) {
    if (errorarray) {
        console.error(errorarray);
    } else {
        console.log(resultsarray);
        var randomred = Math.floor(Math.random() * 255);
        var randomblue = Math.floor(Math.random() * 255);
        var randomgreen = Math.floor(Math.random() * 255);
        document.getElementById("soundname").innerHTML = "I can hear you " + resultsarray[0].label;
        document.getElementById("soundconfidence").innerHTML = "I am " + Math.floor(resultsarray[0].confidence * 100) + "% confident";

        var alien1 = document.getElementById("alien1");
        var alien2 = document.getElementById("alien2");
        var alien3 = document.getElementById("alien3");
        var alien4 = document.getElementById("alien4");

        if (resultsarray[0].label == "Scream") {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png"
            alien3.src = "aliens-03.gif"
            alien4.src = "aliens-04.png"
        }

        if (resultsarray[0].label == "Knock") {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.gif";
        }

        if (resultsarray[0].label == "Snap") {
            alien1.src = "aliens-01.gif";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }

        if (resultsarray[0].label == "Clap") {
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.gif";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }



    }

}