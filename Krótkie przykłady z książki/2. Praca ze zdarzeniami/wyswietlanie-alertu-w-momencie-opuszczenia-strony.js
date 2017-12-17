/*

* Niestety nie działa :c

$(window).bind('unload', function() {
    alert('Czy na pewno chcesz opuścić tą stronę?');
});


*ta funkcja działa tylko w starszych jQuery od 3.0
$(window).unload(function() {
    alert('Czy na pewno chcesz nas opuścić?');
});


*ta teoretycznie powinna działać w nowszych, ale niestety
$(window).on("unload", function()
{
	alert("Nie odchodź :c");
});
*/
