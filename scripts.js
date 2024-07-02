var swaps = document.getElementById("swaps")
var swapsVal = 1;
var iframeContainer = document.getElementById("iframeContainer")

swaps.onclick=function(){
    if (swapsVal == 0){
      iframeContainer.innerHTML=` <iframe src="https://www.jhbtruckhire.co.za/Toll-Gates-Calculator.html"height="300px;" width="100%" id="iframegm"></iframe>`
        
        swapsVal++;
        
        swaps.innerHTML="Swap to Google Maps";

    }else{
        iframeContainer.innerHTML=` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7335354.643665007!2d27.383592!3d-26.140797!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sus!4v1719871501416!5m2!1sen!2sus" height="300px;" width="100%" id="iframegm"></iframe>`
        swapsVal--;
        
        
        swaps.innerHTML="Swap to Calculator";

    }
}




document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const distance = document.getElementById('distance').value;
    const weight = document.getElementById('weight').value;
    const volume = document.getElementById('volume').value;
    const NumberWorkers = document.getElementById('NumWorkers').value;
    const trailer = document.getElementById("Trailer").value; // ad if statment 

    // Sample logic for quote calculation
    
    var baseRate = 15;
    var trailerRate = 0 //change for distance.
    // end of var
    //start of if
    if(trailer == 1){
        if(distance >=401){
            trailerRate = (1 * 3000);
        }else{
            trailerRate = (1* 1000);
        }
    }
   
    if (distance >= 401){
        baseRate = 15;
console.log("Base Rate/km: "+baseRate)
    }else{
        baseRate = 23.5;
console.log("Base Rate/km: "+baseRate)
    }
    ; // Base rate per km some are 14 some are 15 under 400 km doesnt work well
    const weightRate = 0.1; // Rate per kg
    const volumeRate = 0.2; // Rate per m³
    const WorkerRate = 250; 
    const fuelPrice = document.getElementById("Diesel").value; // add box to change
    const FuelConsump = (distance / 100) * 20 * fuelPrice; //eg 3000 / 100 * 20 * 28
    const profitPDmin = 3000;
    const profitPDmax = 5000;
    const toll = document.getElementById("toll").value;
    var quickquote = distance * baseRate;
    var DaysWorking = document.getElementById("DaysWorking").value;
    
    console.log(trailerRate)
    const MaintPD = 1000;
    
    
    
    
    const quoteMin = (FuelConsump) + (NumberWorkers * WorkerRate) + (profitPDmin * DaysWorking) + (MaintPD *DaysWorking) + (toll*1) + (trailerRate *1) ;   
    const quoteMax = (FuelConsump ) + (NumberWorkers * WorkerRate) + (profitPDmax * DaysWorking) + (MaintPD *DaysWorking) + (toll*1) + (trailerRate *1); 
    
    
    
    //fuel consumption, mainanence, workers - driver, rate per day, toll. 
    //maintanece changes per distance
    //labor rate 250 per day/person - workers - set rate - night out? 50 travel over night
    // fuel 28 rand per liter - flexable 
    
    // number of stops 500 - competitive rates
    var quoteresultbox = document.getElementById("quoteResult");
    quoteresultbox.innerHTML="Estimated Min Quote: " + quoteMin +" ZAR <br>"+  " Estimated Max Quote: " + quoteMax + " ZAR<br>"  +"ZAR/KM Quote: "+ quickquote + " ZAR";
    //document.getElementById('quoteResult').innerHTML = `Estimated Min Quote: ${quoteMin.toFixed(2)} ZAR ${\n} Estimated Max Quote: ${quoteMax.toFixed(2)} ZAR`;
});
