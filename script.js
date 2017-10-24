var quotes = [' In a survey, it was found that 45% population of the world believe in                    ghosts, spirits and paranormal activities.', 
              'The paranormal peaked in the US in the mid-19th and early 20th centuries with the introduction of Spiritualism, a religious philosophy that espoused that communication with the spirit world is positive.',
              ' Indian politicians placed a $2,000 bounty on vampires sucking the blood from villagers’ cattle in the town of Dharampuri in Tamil Nadu, which called to mind the 2004 exhumation and subsequent staking of a corpse in Marotinu de Sus, Romania.', 
              'The paranormal world was active in 2012 as the unexplained topped the headlines of major media outlets several times.',
              'Spirits can often be helpful, and even protective of the families they “haunt.”', 
              "Spirits have absolutely no sense of time.",
              "Dumas Beach, Surat situated along the Arabian Sea in Gujarat, is kknown for black sand and mystical activities. It's rumoured to be haunted because of open cremation. ", 
              "Jatinga, Assam is commonly known as the valley of death of birds. It is famous for bird suicides." ];



function change() {
    var x = Math.floor(Math.random() * (quotes.length));
    var elem = document.getElementById("myId");         
    elem.textContent = quotes[x];
    elem.style.color = "#f3f1f1";
    elem.style.fontSize = "35px";
    //elem.style.fontStyle = "italic";
    elem.style.fontFamily = 'Special Elite', cursive;
    elem.style.paddingLeft = "40px";
    
};
setInterval(change, 10000);





//for(i=0;i<quotes.length;i++) {
  //  console.log(quotes[x]);
// }