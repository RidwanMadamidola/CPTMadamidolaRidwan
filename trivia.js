var correct = new Audio();
correct.src = "correct.mp3";

var wrong = new Audio();
wrong.src = "wrong.mp3";

var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="A"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Correct!"
        score++
        
    }
    else {
        wrong.play()
        document.getElementById("question").value="Not quite!"
        document.image.src="incorrect.png"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){
    y = document.getElementById("qans").value
    if(yy==="C"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="It seems like you like customizing your desktop!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
    y = document.getElementById("qans").value
    if(yy==="B"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Correct!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
    y = document.getElementById("qans").value
    if(yy==="A"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="It seems like you are a keyboard enthusiast!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
    y = document.getElementById("qans").value
    if(yy==="B"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you know your history!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
    y = document.getElementById("qans").value
    if(yy==="D"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="It seems like you like building PCs!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
    y = document.getElementById("qans").value
    if(yy==="A"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you know your lights!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
    y = document.getElementById("qans").value
    if(yy==="D"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you love coding!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
    y = document.getElementById("qans").value
    if(yy==="C"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you are informed!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
    y = document.getElementById("qans").value
    if(yy==="D"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you know your history!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===11){ 
    y = document.getElementById("qans").value
    if(yy==="C"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you know your companies!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===12){ 
    y = document.getElementById("qans").value
    if(yy==="C"){
        correct.play()
        document.image.src="correct.png"
        document.getElementById("question").value="Looks like you are a PC enthusiast!"
         score++
    }
    else {
        wrong.play()
        document.image.src="incorrect.png"
        document.getElementById("question").value="Not quite!"
        
    }
    document.view.qscore.value=score
}
else if (ans===13){ 
    
    var final_score = (score/12)*100
    var final_score_round = final_score.toFixed(1)

     if (final_score_round >= 80){
        document.getElementById("question").value="Wow, your score is %" + final_score_round + "!"
        var congrats = new Audio();
        congrats.src = "final.mp3";
        congrats.play()
        document.image.src="star.png"
    }
    else {
        document.getElementById("question").value="Your score is %" + final_score_round + ", try again?"
        var fail = new Audio();
        fail.src = "defeat.mp3";
        fail.play()
    }
}

    ans++; 
}

        

function main(){ 
if (i===1){ 
    document.view.qnum.value=i;
    document.view.question.value ="How do you install windows on a newly built computer? \na)A flash drive with windows \nb)Put the program on a CD and insert it into your PCs optical drive \nc)Boot your PC into BIOS and click the option to install windows \nd)Install windows onto a HDD or SSD and connect it to your PC";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===2){ 
    document.view.qnum.value=i; 
    document.view.question.value ="What are two popular programs for customizing your desktop? \na)Paint, Steam \nb)Unity, Rainmeter \nc)Rainmeter, Wallpaper engine \nd)Wix, Wallpaper engine";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===3){ 
    document.view.qnum.value=i; 
    document.view.question.value ="A 1080p 32-inch monitor can appear pixelated due to: \na)The resolution being larger than the display \nb)PPI(pixels per inch) \nc)DPI (dots per inch) \nd)The monitor being too close to your face";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===4){ 
    document.view.qnum.value=i; 
    document.view.question.value ="Which mechanical switch manufacturer is considered to be the most popular brand? \na)Cherry MX \nb)Kale \nc)Gateron \nd)Romer-G";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===5){ 
    document.view.qnum.value=i; 
    document.view.question.value ="What was the first message sent through the internet? \na)Hello \nb)lo \nc)abc \nd)test";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===6){ 
    document.view.qnum.value=i; 
    document.view.question.value ="What is bottlenecking? \na)The constriction of airflow \nb)The constriction of a cable or wire \nc)The lack of RAM within a PC \nd)The loss of performance when the GPU is much more powerful than the CPU or the CPU is much more powerful than the GPU";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===7){ 
    document.view.qnum.value=i; 
    document.view.question.value ="What does LED stand for? \na)Light-emitting diode \nb)Light-emitting deltoid \nc)Laser-encrypting diode \nd)Laser-encrypting deltoid";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===8){ 
    document.view.qnum.value=i; 
    document.view.question.value ="Which of the following is NOT a programing language? \na)Java script \nb)Go \nc)Elixir \nd)Inbound";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===9){ 
    document.view.qnum.value=i; 
    document.view.question.value ="Which of the following is NOT harmful to your PC? \na)Malware \nb)Trojan horse \nc)Runtime Broker \nd)Phishing";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===10){ 
    document.view.qnum.value=i; 
    document.view.question.value ="What year was Google founded? \na)1989 \nb)2003 \nc)1999 \nd)1998";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===11){ 
    document.view.qnum.value=i; 
    document.view.question.value ="Which company has the slogan “For gamers, by gamers”? \na)Corsair \nb)Logitech \nc)Razer \nd)Steelseries";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===12){ 
    document.view.qnum.value=i; 
    document.view.question.value ="Which company is known for creating GPUs? \na)Intel \nb)AMD \nc)Nvidia \nd)NZXT";
    document.view.qans.value=""
    document.image.src="filler.png"
}
else if (i===13){ 
    document.view.qnum.value=i; 
    document.view.question.value ="Click Submit Answer to see your final score";
    document.view.qans.value=""
    document.image.src="filler.png"
}


    i++; 
}