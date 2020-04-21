function train(predkosc1,predkosc2,odleglosc) {
    var predkosc1 = parseInt(document.getElementById("pierwszy").value);
    var predkosc2 = parseInt(document.getElementById("drugi").value);
    var odleglosc = parseInt(document.getElementById("dystans").value);

    var dystans1;

    dystans1 = (odleglosc*predkosc1)/(predkosc2+predkosc1)

    alert("Odległość od puntku A wynosi: "+dystans1+ " km")

    var dystans2;

    dystans2 = odleglosc - dystans1;

    alert("Odległość od puntku B wynosi: "+dystans2+ " km")

    var czas;

    czas = dystans1/predkosc1;

    alert("Spotkanie nastąpiło po "+czas+ " godzinach");

}

