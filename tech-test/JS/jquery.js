$(document).ready(function() {
  var bank = new Bank();

$('#Balance').click(function(){
  $('#currentbal').text(bank.balance + " GBP");
});

$('#Deposit').click(function(){
  var amount = $('#value').val();
  var integer = parseInt(amount, 10); // converts string to integer (base 10)
  bank.deposit(integer);
  $('#currentbal').text(bank.balance + " GBP");
});



});
