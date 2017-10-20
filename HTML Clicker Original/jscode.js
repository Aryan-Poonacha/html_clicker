/* ||||||||||||||||||||||||||||||||||||||||GLOBAL VAR DECLARATIONS|||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

var ATP = 9999999;
var ATPIncrement = 1;

var cells = 1;
var divideCost = 15;

var chloros = 0;
var chloroCost = 100;
var chloroCheck = 0;
var chloroStopper;

var mitos = 0;
var mitoCost = 150;
var mitoCheck = 0;
var mitoStopper;

var immuneCheck = 0;
var lysos = 0;
var lysoCost = 500;

var endos = 0;
var erCost = 5000;
var erCheck = 0;
var erMultiplier = 1;

var ribos = 0;
var riboCost = 10000;

var progress = 99;
var progIncrement = 0;
var reqATP, reqCells, reqChloros, reqMitos, reqLysos, reqEndos, reqRibos = 0;

var evolveCost = 50;
var difficulty = "";

var attackCheck;

var check1 = 0;
var check2 = 0;
var check3 = 0;
var checklength = 13;
var counter1 = 0;


/*||||||||||||||||||||||||||||||||||||||||||||||||CONSTANT CHECKS|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
 attackCheck = setInterval(function() { cellAttack(); },30000);
/*||||||||||||||||||||||||||||||||||||||||||||||||FREQUENTLY USED|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

function display(x)
{
  var z = document.getElementById('centretext').innerHTML;
  document.getElementById('centretext').innerHTML = x + "<br>" +  z;
  check2 = check2 + 1;
if(check2 == checklength)
{
  document.getElementById('centretext').innerHTML = "" + x;
  check2 = 0;
}
}

function makeATP(no)
{
  ATP = Math.round((ATP + no));
  document.getElementById('ATPcount').innerHTML = "ATP = " +"<i class='fa fa-bolt'></i> "+  ATP;
}

function negtozero(no)
{
  if(no<=-1)
  {
    return 0;
  }
else
{
  return no;
}
}

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
/*||||||||||||||||||||||||||||||||||||||||||||||||MISC|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
function acknowledge()
{
  document.getElementById('centretext').innerHTML = "You could do with some energy. <br> Why not try respiring?";
  document.getElementById('button1').style.display = "none";
  document.getElementById('centretext').style.fontSize = "120%";
  document.getElementById('centretext').style.textAlign = "left";
  document.getElementById('centretext').style.left = "20px";
  document.getElementById('centretext').style.fontWeight = "normal";
  document.getElementById('respirebtn').style.display = "inline";
  document.getElementById('ATPcount').style.display = "inline";
  document.getElementById('ATPcount').innerHTML = "ATP =<i class='fa fa-bolt'></i> " +ATP;
}
/*|||||||||||||||||||||||||||||||||||||||||||||||||||WAR||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
function cellAttack()
{
  if((cells>=23)&&(chloros>=10))
  {
    var flag = 0;
  var generated = randomInt(1,100);
  if(generated<=cells)
    {
      flag = 1;
    }
  }
  if(flag == 1)
   {
    clearInterval(attackCheck);
    difficulty = determineDifficulty();
    document.getElementById('centretext').innerHTML = "";
    if(immuneCheck == 0)
    {
      display('Evolving an immune system will enable you to fight.');
    }
    display('They are of '+difficulty + ' difficulty.');
    display('Do you choose to <b>fight</b> or to <em>flee</em>?')
    display('<b>You\'re under attack by an opposing species!</b>');
    document.getElementById('fightbtn').style.display = "inline";
    document.getElementById('fleebtn').style.display = "inline";
   }
}

function determineDifficulty() //WORKS FINE
{
  var generated = randomInt(1,100);
  if((cells<=30)||(chloros<=15)||(mitos<=5))
  {
    if(generated<=85)
    {
      return "easy";
    }
    else if((generated>85)&&(generated<=95))
    {
      return "average";
    }
    else if(generated>95)
    {
      return "challenging";
    }
  }
  else if(((cells>30)&&(cells<=40))||((chloros>15)&&(chloros<=30))||((mitos>5)&&(mitos<=10)))
  {
    if(generated<=40)
    {
      return "easy";
    }
    else if((generated>40)&&(generated<=90))
    {
      return "average";
    }
    else if(generated>90)
    {
      return "challenging";
    }
  }
  else if((cells>40)||(chloros>30)||(mitos>10))
  {
    if(generated<=25)
    {
      return "easy";
    }
    else if((generated>25)||(generated<=60))
    {
      return "average";
    }
    else if(generated>60)
    {
      return "challenging";
    }
  }
}

function flee()
{
  var cellsLost, chlorosLost, mitosLost, endosLost, ribosLost = 0;

  if(difficulty=="easy")
  {
    if(cells>0)
    {
      cellsLost = Math.round((randomInt(1,10)-lysos/3));
      cellsLost = negtozero(cellsLost);
    }
    if(chloros>0)
    {
      chlorosLost = Math.round((randomInt(1,5)-lysos/2));
      chlorosLost = negtozero(chlorosLost);
    }
    if(mitos>0)
    {
      mitosLost = Math.round((randomInt(0,3)-lysos/1.2));
      mitosLost = negtozero(mitosLost);
    }
    if(endos>0)
    {
      endosLost = Math.round((randomInt(0,2)-lysos/1.09));
      endosLost = negtozero(endosLost);
    }
    if(ribos>0)
    {
      ribosLost = Math.round((randomInt(0,1)-lysos));
      ribosLost = negtozero(ribosLost);
    }
  }
  if(difficulty=="average")
  {
    if(cells>0)
    {
      cellsLost = Math.round((randomInt(3,12)-lysos/4));
      cellsLost = negtozero(cellsLost);
    }
    if(chloros>0)
    {
      chlorosLost = Math.round((randomInt(2,8)-lysos/2.5));
      chlorosLost = negtozero(chlorosLost);
    }
    if(mitos>0)
    {
      mitosLost = Math.round((randomInt(1,5)-lysos/1.5));
      mitosLost = negtozero(mitosLost);
    }
    if(endos>0)
    {
      endosLost = Math.round((randomInt(0,4)-lysos/1.2));
      endosLost = negtozero(endosLost);
    }
    if(ribos>0)
    {
      ribosLost = Math.round((randomInt(0,3)-lysos/1.4));
      ribosLost = negtozero(ribosLost);
    }
  }
  if(difficulty=="challenging")
  {
    if(cells>0)
    {
      cellsLost = Math.round((randomInt(5,20)-lysos/5));
      cellsLost = negtozero(cellsLost);
    }
    if(chloros>0)
    {
      chlorosLost = Math.round((randomInt(4,12)-lysos/3));
      chlorosLost = negtozero(chlorosLost);
    }
    if(mitos>0)
    {
      mitosLost = Math.round((randomInt(2,10)-lysos/2));
      mitosLost = negtozero(mitosLost);
    }
    if(endos>0)
    {
      endosLost = Math.round((randomInt(1,8)-lysos/1.5));
      endosLost = negtozero(endosLost);
    }
    if(ribos>0)
    {
      ribosLost = Math.round((randomInt(1,6)-lysos/1.3));
      ribosLost = negtozero(ribosLost);
    }
  }

  ribos -= ribosLost;
  ribos = negtozero(ribos);

  endos -= endosLost;
  endos = negtozero(endos);
  erMultiplier = endos+1;

  chloros -= chlorosLost;
  chloros = negtozero(chloros);

  mitos -= mitosLost;
  mitos = negtozero(mitos);

  cells-= cellsLost;
  cells = negtozero(cells);
  ATPIncrement = cells + 1;

  riboCost = (Math.round(10000*(Math.pow(1.15,ribos))));

  divideCost = Math.round((15*(Math.pow(1.15,cells))));
  divideCost = Math.round((divideCost - ((2.5*ribos/100)*divideCost)));
  if(divideCost<15)
  {
    divideCost = 15;
  }
  chloroCost = Math.round((100*(Math.pow(1.15,chloros))));
  chloroCost = Math.round((chloroCost - ((2.2*ribos/100)*chloroCost)));
  if(chloroCost<100)
  {
    chloroCost = 100;
  }
  mitoCost = (Math.round(150*(Math.pow(1.15,mitos))));
  mitoCost = Math.round((mitoCost - ((1.6*ribos/100)*mitoCost)));
  if(mitoCost<150)
  {
    mitoCost = 150;
  }
  lysoCost = (Math.round(500*(Math.pow(1.15,lysos))));
  lysoCost = Math.round((lysoCost - ((1.09*ribos/100)*lysoCost)));
  if(lysoCost<500)
  {
    lysoCost = 500;
  }
  erCost = (Math.round(5000*(Math.pow(1.15,endos))));
  erCost = Math.round((erCost - ((ribos/100)*erCost)));
  if(erCost<5000)
  {
    erCost = 5000;
  }

  evolveCost = Math.round((evolveCost - ((2.7*ribos/100)*evolveCost)));

  clearInterval(chloroStopper);
  if(erCheck = 1)
  {
  chloroStopper = setInterval(function() { makeATP((chloros*erMultiplier)); }, 1000);
  chloroCheck = 1;
  }
  if(erCheck == 0)
  {
    chloroStopper = setInterval(function() { makeATP(chloros); }, 1000);
    chloroCheck = 1;
  }

clearInterval(mitoStopper);
if(erCheck == 1)
{
mitoStopper = setInterval(function() { makeATP((mitos*5*(1/2*erMultiplier))); }, 1000);
mitoCheck = 1;
}
else if(erCheck == 0)
{
  mitoStopper = setInterval(function() { makeATP((mitos*5)); }, 1000);
  mitoCheck = 1;
}


  document.getElementById('cellscount').innerHTML = "Cells = " +cells;
  document.getElementById('chlorocount').innerHTML = "<i class = 'fa fa-flask'></i> " + "Chloroplast = " +chloros;
  document.getElementById('mitocount').innerHTML = "Mitochondria = " +mitos;
  document.getElementById('ercount').innerHTML = "ER = " +endos;
  document.getElementById('ribocount').innerHTML = "Ribosomes = " +ribos;


  document.getElementById('erbtn').innerHTML = "Endoplasmic Reticulum<br>("+erCost+ " <i class='fa fa-bolt'></i>)";
  document.getElementById('dividebtn').innerHTML = "Divide("+divideCost+" <i class='fa fa-bolt'></i>)";
  document.getElementById('chlorobtn').innerHTML = "<i class = 'fa fa-flask'></i> "+ "Chloroplast("+chloroCost+" <i class='fa fa-bolt'></i>)";
  document.getElementById('mitobtn').innerHTML = "Mitochondria("+mitoCost+" <i class='fa fa-bolt'></i>)";
  document.getElementById('lysobtn').innerHTML = "Lysosomes("+lysoCost+" <i class='fa fa-bolt'></i>)";
  document.getElementById('evolvebtn').innerHTML = "EVOLVE<br>("+evolveCost+" <i class='fa fa-bolt'></i>)";

  document.getElementById('fleebtn').style.display = "none";
  document.getElementById('fightbtn').style.display = "none";

  attackCheck = setInterval(function() { cellAttack(); },30000);
}

/*|||||||||||||||||||||||||||||||||||||||||||EVOLUTION ||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||| */
function EVOLVE1()
{
  if(ATP>=evolveCost)
  {
  display('Your cell now has the ability to divide.');
  display('Each new cell provides more ATP per respiration.');
  ATP = Math.round(ATP) - evolveCost;
  document.getElementById('cellscount').innerHTML = "Cells = " +cells;
  document.getElementById('ATPcount').innerHTML = "ATP = " + " <i class='fa fa-bolt'></i> " +ATP;
  document.getElementById('dividebtn').style.display = "inline";
  document.getElementById('cellscount').style.display = "inline";
  document.getElementById('dividebtn').innerHTML = "Divide(" + divideCost + " <i class='fa fa-bolt'></i>)";
  evolveCost = (Math.round(12*(1.25*evolveCost)));
  document.getElementById('evolvebtn').innerHTML = "EVOLVE("+evolveCost+" <i class='fa fa-bolt'></i>)";
  document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE2()");
   }
  else
  {
    display('Not enough ATP.');
  }
}

function EVOLVE2()
{
  if(ATP>=evolveCost)
  {
    display('Your cell has evolved chloroplasts.');
    display('Each chloroplast produces 1 ATP automatically every second.');
    ATP = Math.round((ATP - evolveCost));
    document.getElementById('ATPcount').innerHTML = "ATP = <i class='fa fa-bolt'></i> " +ATP;
    document.getElementById('chlorobtn').innerHTML ="<i class = 'fa fa-flask'></i> "+ "Chloroplast(" +chloroCost + " <i class='fa fa-bolt'></i>)";
    document.getElementById('chlorobtn').style.display = "inline";
    document.getElementById('chlorocount').style.display = "inline";
    document.getElementById('chlorocount').innerHTML ="<i class = 'fa fa-flask'></i> "+ "Chloroplast = "+chloros;
    evolveCost = (Math.round(12*(1.25*evolveCost)));
    document.getElementById('evolvebtn').innerHTML = "EVOLVE("+evolveCost+" <i class='fa fa-bolt'></i>";
    document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE3()");
    document.getElementById('left').style.width = "266px";
    document.getElementById('respirebtn').style.left = "62px";
    document.getElementById('dividebtn').style.left = "30px";
    document.getElementById('chlorobtn').style.left = "10px";
  }
  else
  {
    display('Not enough ATP.');
  }
}

function EVOLVE3()
{
  if(ATP>=evolveCost)
  {
    display('Whoa! Your cells merge with mitochondria!');
    display('They produce 5 ATP every second!');
    ATP = Math.round((ATP - evolveCost));
    document.getElementById('ATPcount').innerHTML = "ATP = " + " <i class='fa fa-bolt'></i> " +ATP;
    document.getElementById('mitobtn').innerHTML = "Mitochondria(" +mitoCost + " <i class='fa fa-bolt'></i>)";
    document.getElementById('mitobtn').style.display = "inline";
    document.getElementById('mitocount').style.display = "inline";
    document.getElementById('mitocount').innerHTML = "Mitochondria = "+mitos;
    evolveCost = (Math.round(7*(1.12*evolveCost)));
    document.getElementById('evolvebtn').innerHTML = "EVOLVE("+evolveCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE4()");
  }
  else
  {
    display('Not enough ATP.');
  }
}

function EVOLVE4()
{
  if(ATP>=evolveCost)
  {
  immuneCheck = 1;
  display('Each lysosome reduces the effect of attacks and betters the chances of victory.');
  display('Success! Your species now has the ability to defend itself.');
  ATP = Math.round((ATP-evolveCost));
  document.getElementById('ATPcount').innerHTML = "ATP = " + " <i class='fa fa-bolt'></i> "+ATP;
  document.getElementById('lysobtn').innerHTML = "Lysosomes(" +lysoCost +" <i class='fa fa-bolt'></i>)";
  document.getElementById('lysobtn').style.display = "inline";
  document.getElementById('lysocount').style.display = "inline";
  document.getElementById('lysocount').innerHTML = "Lysosomes = "+lysos;
  evolveCost = (Math.round(7*(1.09*evolveCost)));
  document.getElementById('evolvebtn').innerHTML = "EVOLVE("+evolveCost+" <i class='fa fa-bolt'></i>)";
  document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE5()");
}
}

function EVOLVE5()
{
  if(ATP>=evolveCost)
  {
    display('They carry around materials more efficiently and multiply <i class="fa fa-bolt"></i>ATP production by chloroplast and mitochondria!');
    display('Yay! Your cells have evolved Endoplasmic Reticulum.');
    ATP = Math.round((ATP - evolveCost));
    document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> "+ATP;
    document.getElementById('erbtn').innerHTML = "Endoplasmic Reticulum<br>(" +erCost + " <i class='fa fa-bolt'></i>)";
    document.getElementById('erbtn').style.display = "inline";
    document.getElementById('ercount').style.display = "inline";
    document.getElementById('ercount').innerHTML = "ER = "+endos;
    evolveCost = (Math.round(7*(1.09*evolveCost)));
    document.getElementById('evolvebtn').innerHTML = "EVOLVE("+evolveCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE6()");
  }
  else
  {
    display('Not enough ATP.');
  }
}

function EVOLVE6()
{
  if(ATP>=evolveCost)
  {
    display('They synthesize proteins for you, discounting the cost of all other organelles and of evolution!');
    display('Your cell now has the ability to make ribosomes!');
    ATP = Math.round((ATP - evolveCost));
    document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> "+ATP;
    document.getElementById('ribobtn').innerHTML = "Ribosome(" +riboCost + " <i class='fa fa-bolt'></i>)";
    document.getElementById('ribobtn').style.display = "inline";
    document.getElementById('ribocount').style.display = "inline";
    document.getElementById('ribocount').innerHTML = "Ribosomes = "+ribos;
    evolveCost = (evolveCost*evolveCost);
    document.getElementById('evolvebtn').innerHTML = "EVOLVE<br>("+evolveCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE7()");
  }
  else
  {
    display('Not enough ATP.');
  }
}

function EVOLVE7()
{
  if(ATP>=evolveCost)
  {
    specialiseNeeds();
    document.getElementById('specialisebtn').innerHTML = "SPECIALISE<br>"+reqATP+"ATP "+reqCells+"  Cells " + reqChloros
    +"  Chloroplasts  "+reqMitos+"  Mitochondria  "+ reqLysos + "  Lysosomes  "+reqEndos + "  Endoplasmic Reticula " + reqRibos
    + "  Ribosomes ";
    document.getElementById('specialisebtn').style.display = "inline";
    document.getElementById('bottom').style.display = "inline";
    document.getElementById('canvas').style.display = "block";

    document.getElementById('canvastext').innerHTML = progress + "%";
    document.getElementById('canvastext').style.display = "inline";

    document.getElementById('centretext').innerHTML = "";
    display('It\'s going to take a lot of resources, though!');
    display('It looks like your cells are ready to start specialising!');

    document.getElementById('evolvebtn').innerHTML = "EVOLVE<br>(Specialisation Required!)";
    document.getElementById('evolvebtn').setAttribute("onclick", "EVOLVE8()");
  }
  else
  {
    display('Not enough ATP.');
  }
}
/*|||||||||||||||||||||||||||||||||||||||||||PURCHASE FUNCS ||||||||||||||||||| |||||||||||||||||||||||||||||||||||||||| */

function respire()
{
  display('You take a deep breath. Energy is made!');
  ATP = (Math.round(ATP) + ATPIncrement);
  document.getElementById('ATPcount').innerHTML = "ATP = "+ " <i class='fa fa-bolt'></i> "+ATP;
      if((ATP >= 50) && (check1 == 0))
      {
        display('Congratulations! You have enough <i class="fa fa-bolt"></i>ATP to evolve.');
        document.getElementById('evolvebtn').style.display = "inline";
        document.getElementById('evolvebtn').innerHTML = "EVOLVE("+evolveCost+" <i class='fa fa-bolt'></i>)";
        check1 = 1;
      }
}

function divide()
{
  if(ATP>=divideCost)
  {
  ATP = (Math.round((ATP - divideCost)));
  document.getElementById('ATPcount').innerHTML = "ATP = "+ " <i class='fa fa-bolt'></i> " + ATP;
  ATPIncrement +=1;
  display('Division successful!');
  cells+=1;
  document.getElementById('cellscount').innerHTML = "Cells = " +cells;
  divideCost = Math.round((15*(Math.pow(1.15,cells))));
  divideCost = Math.round((divideCost - ((2.5*ribos/100)*divideCost)));
  if(divideCost<15)
  {
    divideCost = 15;
  }
  document.getElementById('dividebtn').innerHTML = "Divide("+divideCost+" <i class='fa fa-bolt'></i>)";
  }
 else
 {
  display('Not enough <i class="fa fa-bolt"></i>ATP.');
 }
}

function chloroplast()
{
  if(ATP>=chloroCost)
  {
  ATP = (Math.round((ATP-chloroCost)));
  document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> " + ATP;
  chloros += 1;
  document.getElementById('chlorocount').innerHTML ="<i class = 'fa fa-flask'></i> "+ "Chloroplast = " +chloros;
  chloroCost = Math.round((100*(Math.pow(1.15,chloros))));
  chloroCost = Math.round((chloroCost - ((2.2*ribos/100)*chloroCost)));
  if(chloroCost<100)
  {
    chloroCost = 100;
  }
  document.getElementById('chlorobtn').innerHTML = "<i class = 'fa fa-flask'></i> "+"Chloroplast("+chloroCost+" <i class='fa fa-bolt'></i>)";
  display('Chloroplast created!');
  if(chloroCheck == 1)
  {
    clearInterval(chloroStopper);
  }
  if(erCheck = 1)
  {
  chloroStopper = setInterval(function() { makeATP((chloros*erMultiplier)); }, 1000);
  chloroCheck = 1;
  }
  if(erCheck == 0)
  {
    chloroStopper = setInterval(function() { makeATP(chloros); }, 1000);
    chloroCheck = 1;
  }
}
  else
  {
    display('Not enough <i class="fa fa-bolt"></i>ATP.');
  }
}

function mitochondria()
{
  if(ATP>=mitoCost)
  {
    ATP = (Math.round((ATP - mitoCost)));
    document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> " + ATP;
    mitos += 1;
    document.getElementById('mitocount').innerHTML = "Mitochondria = "+mitos;
    mitoCost = (Math.round(150*(Math.pow(1.15,mitos))));
    mitoCost = Math.round((mitoCost - ((1.6*ribos/100)*mitoCost)));
    if(mitoCost<150)
    {
      mitoCost = 150;
    }
    document.getElementById('mitobtn').innerHTML = "Mitochondria("+mitoCost+" <i class='fa fa-bolt'></i>)";
    display('Mitochondira synthesized!');
    if(mitoCheck==1)
    {
      clearInterval(mitoStopper);
    }
    if(erCheck == 1)
    {
    mitoStopper = setInterval(function() { makeATP((mitos*5*(1/2*erMultiplier))); }, 1000);
    mitoCheck = 1;
    }
    else if(erCheck == 0)
    {
      mitoStopper = setInterval(function() { makeATP((mitos*5)); }, 1000);
      mitoCheck = 1;
    }
  }
  else
  {
    display('Not enough <i class="fa fa-bolt"></i>ATP.');
  }
}

function lysosome()
{
  if(ATP>=lysoCost)
  {
    ATP = (Math.round((ATP - lysoCost)));
    document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> " + ATP;
    lysos += 1;
    document.getElementById('lysocount').innerHTML = "Lysosomes = "+lysos;
    lysoCost = (Math.round(500*(Math.pow(1.15,lysos))));
    lysoCost = Math.round((lysoCost - ((1.09*ribos/100)*lysoCost)));
    if(lysoCost<500)
    {
      lysoCost = 500;
    }
    document.getElementById('lysobtn').innerHTML = "Lysosomes("+lysoCost+" <i class='fa fa-bolt'></i>)";
    display('Lysosome formed!');
  }
  else
  {
    display('Not enough <i class="fa fa-bolt"></i>ATP.');
  }
}

function ER()
{
  if(ATP>=erCost)
  {
    ATP = (Math.round((ATP - erCost)));
    document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> " + ATP;
    endos += 1;
    erMultiplier +=1;
    document.getElementById('ercount').innerHTML = "ER = "+endos;
    erCost = (Math.round(5000*(Math.pow(1.15,endos))));
    erCost = Math.round((erCost - ((ribos/100)*erCost)));
    if(erCost<5000)
    {
      erCost = 5000;
    }
    document.getElementById('erbtn').innerHTML = "Endoplasmic Reticulum<br>("+erCost+" <i class='fa fa-bolt'></i>)";
    display('Endoplasmic Reticulum network constructed!');
    if(erCheck == 0)
    {
      display('You will need to buy more chloroplast and mitochondria for the effect to take place.');
    }
    erCheck = 1;
  }
  else
    {
      display('Not enough <i class="fa fa-bolt:></i>ATP.');
    }
  }

function ribosome()
{
  if(ATP>=lysoCost)
  {
    ATP = (Math.round((ATP - riboCost)));
    document.getElementById('ATPcount').innerHTML = "ATP = "+" <i class='fa fa-bolt'></i> " + ATP;
    ribos += 1;
    document.getElementById('ribocount').innerHTML = "Ribosomes = "+ribos;
    riboCost = (Math.round(10000*(Math.pow(1.15,ribos))));
    document.getElementById('ribobtn').innerHTML = "Ribosomes("+riboCost+" <i class='fa fa-bolt'></i>)";
    display('Ribosome synthesized!');

    divideCost = Math.round((15*(Math.pow(1.15,cells))));
    divideCost = Math.round((divideCost - ((2.5*ribos/100)*divideCost)));
    if(divideCost<15)
    {
      divideCost = 15;
    }
    chloroCost = Math.round((100*(Math.pow(1.15,chloros))));
    chloroCost = Math.round((chloroCost - ((2.2*ribos/100)*chloroCost)));
    if(chloroCost<100)
    {
      chloroCost = 100;
    }
    mitoCost = (Math.round(150*(Math.pow(1.15,mitos))));
    mitoCost = Math.round((mitoCost - ((1.6*ribos/100)*mitoCost)));
    if(mitoCost<150)
    {
      mitoCost = 150;
    }
    lysoCost = (Math.round(500*(Math.pow(1.15,lysos))));
    lysoCost = Math.round((lysoCost - ((1.09*ribos/100)*lysoCost)));
    if(lysoCost<500)
    {
      lysoCost = 500;
    }
    erCost = (Math.round(5000*(Math.pow(1.15,endos))));
    erCost = Math.round((erCost - ((ribos/100)*erCost)));
    if(erCost<5000)
    {
      erCost = 5000;
    }

    evolveCost = Math.round((evolveCost - ((2.7*ribos/100)*evolveCost)));

    document.getElementById('erbtn').innerHTML = "Endoplasmic Reticulum<br>("+erCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('dividebtn').innerHTML = "Divide("+divideCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('chlorobtn').innerHTML ="<i class = 'fa fa-flask'></i> "+ "Chloroplast("+chloroCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('mitobtn').innerHTML = "Mitochondria("+mitoCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('lysobtn').innerHTML = "Lysosomes("+lysoCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('evolvebtn').innerHTML = "EVOLVE<br>("+evolveCost+" <i class='fa fa-bolt'></i>)";
  }
  else
  {
    display('Not enough <i class="fa fa-bolt"></i>ATP.');
  }
}

function specialiseNeeds()
{
  if(progress<=25)
  {
    reqATP = randomInt(1000,10000);
    reqCells = randomInt(10,30);
    reqChloros = randomInt(10,25);
    reqMitos = randomInt(4,20);
    reqEndos = randomInt(2,10);
    reqLysos = randomInt(3,15);
    reqRibos = randomInt(1,5);
    progIncrement = randomInt(10,15);
  }
  if((progress>25)&&(progress<=50))
  {
    reqATP = randomInt(5000,20000);
    reqCells = randomInt(20,40);
    reqChloros = randomInt(15,30);
    reqMitos = randomInt(6,24);
    reqEndos = randomInt(3,12);
    reqLysos = randomInt(6,18);
    reqRibos = randomInt(2,8);
    progIncrement = randomInt(8,14);
  }
  if((progress>50)&&(progress<=75))
  {
    reqATP = randomInt(10000,40000);
    reqCells = randomInt(40,75);
    reqChloros = randomInt(20,60);
    reqMitos = randomInt(10,30);
    reqEndos = randomInt(9,20);
    reqLysos = randomInt(8,32);
    reqRibos = randomInt(6,12);
    progIncrement = randomInt(8,13);
  }
  if((progress>50)&&(progress<=75))
  {
    reqATP = randomInt(10000,40000);
    reqCells = randomInt(50,90);
    reqChloros = randomInt(30,70);
    reqMitos = randomInt(20,45);
    reqEndos = randomInt(12,32);
    reqLysos = randomInt(12,40);
    reqRibos = randomInt(8,20);
    progIncrement = randomInt(10,12);
  }
  if((progress>75)&&(progress<100))
  {
    reqATP = randomInt(30000,80000);
    reqCells = randomInt(60,90);
    reqChloros = randomInt(50,80);
    reqMitos = randomInt(30,60);
    reqEndos = randomInt(20,45);
    reqLysos = randomInt(20,38);
    reqRibos = randomInt(10,35);
    progIncrement = randomInt(5,20);
  }
}

function specialise()
{
  if((ATP>=reqATP)&&(cells>=reqCells)&&(mitos>=reqMitos)&&(chloros>=reqMitos)&&(endos>=reqEndos)&&(ribos>=reqRibos)&&(lysos>=reqLysos))
  {
    ATP -= reqATP;
    document.getElementById('ATPcount').innerHTML = "ATP = "+ " <i class='fa fa-bolt'></i> "+ ATP;

    ribos -= reqRibos;
    riboCost = (Math.round(10000*(Math.pow(1.15,ribos))));
    document.getElementById('ribobtn').innerHTML = "Ribosomes("+riboCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('ribocount').innerHTML = "Ribosomes = "+ribos;

    endos -= reqEndos;
    erMultiplier -= reqEndos;
    if(erMultiplier<=0)
    {
      erMultiplier = 1;
    }
    erCost = (Math.round(5000*(Math.pow(1.15,endos))));
    erCost = Math.round((erCost - ((ribos/100)*erCost)));
    if(erCost<5000)
    {
      erCost =5000;
    }
    document.getElementById('erbtn').innerHTML = "Endoplasmic Reticula("+erCost+" <i class='fa fa-bolt'></i>)";
    document.getElementById('ercount').innerHTML = "ER = "+endos;

    chloros -= reqChloros;
    document.getElementById('chlorocount').innerHTML ="<i class = 'fa fa-flask'></i> "+ "Chloroplast = " +chloros;
    chloroCost = Math.round((100*(Math.pow(1.15,chloros))));
    chloroCost = Math.round((chloroCost - ((3*ribos/100)*chloroCost)));
    if(chloroCost<100)
    {
      chloroCost = 100;
    }
    document.getElementById('chlorobtn').innerHTML = "<i class = 'fa fa-flask'></i> "+"Chloroplast("+chloroCost+" <i class='fa fa-bolt'></i>)";
    clearInterval(chloroStopper);
    chloroStopper = setInterval(function() { makeATP((chloros*erMultiplier)); }, 1000);

    mitos -=reqMitos;
    document.getElementById('mitocount').innerHTML = "Mitochondria = "+mitos;
    mitoCost = (Math.round(150*(Math.pow(1.15,mitos))));
    mitoCost = Math.round((mitoCost - ((2*ribos/100)*mitoCost)));
    if(mitoCost<150)
    {
      mitoCost = 150;
    }
    document.getElementById('mitobtn').innerHTML = "Mitochondria("+mitoCost+" <i class='fa fa-bolt'></i>)";
    clearInterval(mitoStopper);
    mitoStopper = setInterval(function() { makeATP((mitos*5*(1/2*erMultiplier))); }, 1000);

    lysos-= reqLysos;
    document.getElementById('lysocount').innerHTML = "Lysosomes = "+lysos;
    lysoCost = (Math.round(500*(Math.pow(1.15,lysos))));
    lysoCost = Math.round((lysoCost - ((2*ribos/100)*lysoCost)));
    if(lysoCost<500)
    {
      lysoCost = 500;
    }
    document.getElementById('lysobtn').innerHTML = "Lysosomes("+lysoCost+" <i class='fa fa-bolt'></i>)";

    cells-= reqCells;
    ATPIncrement -= reqCells;
    if(ATPIncrement <=0)
    {
      ATPIncrement = 1;
    }
    document.getElementById('cellscount').innerHTML = "Cells = " +cells;
    divideCost = Math.round((15*(Math.pow(1.15,cells))));
    divideCost = Math.round((divideCost - ((5*ribos/100)*divideCost)));
    if(divideCost<15)
    {
      divideCost = 15;
    }
    document.getElementById('dividebtn').innerHTML = "Divide("+divideCost+" <i class='fa fa-bolt'></i>)";

    progress+=progIncrement;

    if(progress<100)
    {
       var c=document.getElementById("canvas");
       var ctx=c.getContext("2d");
       ctx.fillRect(0,0,progress,30);
       document.getElementById('canvastext').innerHTML = Math.round(((progress/820)*100))+ "%";
       specialiseNeeds();
       document.getElementById('specialisebtn').innerHTML = "SPECIALISE<br>"+reqATP+"ATP "+reqCells+"  Cells " + reqChloros
       +"  Chloroplasts  "+reqMitos+"  Mitochondria  "+ reqLysos + "  Lysosomes  "+reqEndos + "  Endoplasmic Reticula " + reqRibos
       + "  Ribosomes ";
    }
    if(progress >= 100)
    {
      var c=document.getElementById("canvas");
      var ctx=c.getContext("2d");
      ctx.fillStyle="#228B22";
      ctx.fillRect(0,0,820,30);
      document.getElementById('canvastext').innerHTML = "100%";
      document.getElementById('finalbtn').style.display = "inline";
      document.getElementById('finalbtn').innerHTML = "ADVANCE TO THE NEXT AGE";
      document.getElementById('specialisebtn').style.display= "none";
      document.getElementById('centretext').innerHTML = "";
      display("<h1>Congratulations!</h1><br><h2>Your cells have survived for millenia, becoming increasingly complex with each step.</h2><br><h2>Now, they are ready to form the first complete organisms!</h2>");
    }
  }
  else
  {
    display('Not enough resources.');
  }
}
ajja
