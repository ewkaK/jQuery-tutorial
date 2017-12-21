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


$(document).ready(function() {
    $('.box').on('click', function() {
        $(this).clone().appendTo('.conteinerwithbox');
    })
})

$(document).ready(function(){
    $('.container').first().on('click', function(){
        $(this).clone().addClass('square').appendTo('.container:first');
    })
})
