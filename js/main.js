
const distance = prompt("Salve passeggero! Quanto è lunga la sua tratta in chilometri?");

let fullPrice = distance * .21;

let costoTreno = document.getElementById("costoTreno");

if (isNaN(distance)){
    alert("Non credo i chilometri si misurino in lettere, ricarichi la pagina per riprovare");
} else{
    alert(`Il suo viaggio non scontato le verrà a costare ${fullPrice}`);
    costoTreno.innerHTML = `Il prezzo del biglietto è ${fullPrice}`;
}


const age = prompt("Quanti annni ha?");
let sconto;

if (isNaN(age)){
    alert("Non può averee un'età alphanumerica!! Ricarichi la pagina per riprovare");
}else if (age < 18){
    alert("i viaggiatori minorenni hanno diritto al 20% di sconto!");
    fullPrice = fullPrice * 0.8;

    alert(`Il suo viaggio scontato le verrà a costare ${fullPrice}`);
    costoTreno.innerHTML = `Il prezzo del biglietto è ${fullPrice}`;

}else  if (age > 65){
    alert("i viaggiatori sopra i 65 anni hanno diritto al 40% di sconto!");
    fullPrice = fullPrice * 0.6;

    alert(`Il suo viaggio scontato le verrà a costare ${fullPrice}`);
    costoTreno.innerHTML = `Il prezzo del biglietto è ${fullPrice}`;
}else{
    alert(`non è disponibile sconto per la sua fascia di età`)
}






console.log(fullPrice);