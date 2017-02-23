$('#setUnitImp').click(function() {
  $('.metric').prop('disabled', true);
  $('.imp').prop('disabled', false);
  console.log("set to imperial");
});

$('#setUnitMetric').click(function() {
  $('.imp').prop('disabled', true);
  $('.metric').prop('disabled', false);
  console.log("set to metric");
});

document.getElementById("InputTargetWidth").defaultValue = 18;
document.getElementById("InputTargetHeight").defaultValue = 24;


$('.unit').click(function() {
  var addon = $('.input-group-addon');
  var unit = '';
   unit += $(this).text();
   thisAdd.text(unit);
 });
