//Ten kod uruchamia sie od razu po załadowaniu DOM'u, zdarzenie "click" nie działa odpowiednio
// $(document).ready(function() {
//     $('.mylink').on("click", alertMe());
//
//     function alertMe() {
//         alert("To nie jest wcale ciekawe")
//     }
// })

//to się uruchamia prawidłowo - po kliknięciu w wskazany element
//użyta funkcja anonimowa
$(document).ready(function(){
    $('.mylink').on('click', function() {
        alert("Jeszcze więcej nudy");
    });
});

//W tym przykładzie miałą zostać użyta metoda .bind(), została usunięta w nowszym jQ, zastąpiona .on()
//Metoda bind współpracuje tylko z elementami, które znajdują się w drzewie DOM w chwili dowiązania tego zdarzenia
$(document).ready(function() {
    $('.box').on('click', function() {
        $(this).clone().appendTo('.conteinerwithbox');
    });
});

//W tym przykładzie miała zostac użyta metoda .live(), została usunięta w nowszym jQ, zastąpiona .on()
//Metoda live współpracuje z bierzącymi i przyszłymi elementami drzewa DOM
//wadą tej metody jest brak możliwości łączenia innych metod w łańcuch, czyli poniższy kod z tą metodą by nie zadziałał.
$(document).ready(function(){
    $('.container').first().on('click', function(){
        $(this).clone().addClass('square').appendTo('.container:first');
    });
});
