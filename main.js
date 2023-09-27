var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult= function (event){
    console.log(event)
    var Content=event.results[0][0].transcript;
    console.log(Content);
    if (Content=="selfie"){
        console.log("taking pic");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
   

    setTimeout(function(){
        img_id="selfie3";
        takeSnapshot();
        speak_data="Taking your third selfie";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000)

    setTimeout(function(){
        img_id="selfie2";
        takeSnapshot();
        speak_data="Taking your second selfie";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000)

    setTimeout(function(){
        img_id="selfie1";
        takeSnapshot();
        speak_data="Taking your first selfie";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)

    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function takeSnapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}

function save(){
    pogo=document.getElementById("link");
    piclink=document.getElementById("image").src;
    pogo.href=piclink;
    pogo.click();
}
