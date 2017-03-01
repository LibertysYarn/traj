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

let eQ = {
  MilWidth: [],
  MilHeight: [],
  TargetWidth: [],
  TargetHeight: [],
  range: [],
  dial: []
};


$('.unit').click(function() {
  var unit = '';
  unit += $(this).text();
  var addonText = $(event.target).closest('.input-group').find('.input-group-addon').data('name');
  var addon = $(event.target).closest('.input-group').find('.input-group-addon');
  var typeOfThing = $(event.target).closest('.input-group').find('.form-control').data('name');
  var value = $(event.target).closest('.input-group').find('.form-control').val();
  addon.text(unit + ' ' + addonText);

  var valueOfInput = JSON.parse(JSON.stringify(math.unit(value, unit)));
  eQ[typeOfThing] = ([valueOfInput.value, valueOfInput.unit]);
  console.log(eQ);

});

// (InputTargetHeight (to inches) * 27.778 ) / mil --> range in yards

function convertToInches() {
  for (var prop in eQ) {

  }
}

  $('#submit').click(function() {


  });
