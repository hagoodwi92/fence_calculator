import $ from 'jquery'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency';

$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let exchange = $('#currency').val();
    let currency = $('#country').val();
    $(".showResult").text("");
    $(".showExchange").text("");
    let promise = CurrencyExchange.getExchange(currency, exchange);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if(currency == "Peso"){
        $('.showExchange').text(`The current exchange rate of the ${currency} is ${body.conversion_rates.ARS}.`);
        let result = `${exchange}`*`${body.conversion_rates.ARS}`;
        $('.showResult').text(`The conversion of $${exchange} USD to ${currency}'s is ${result}.`);
      }
      else if (currency == "Dollar"){
        $('.showExchange').text(`The current exchange rate of the ${currency} is ${body.conversion_rates.AUD}.`);
        let result = `${exchange}`*`${body.conversion_rates.AUD}`;
        $('.showResult').text(`The conversion of $${exchange} USD to ${currency}'s is ${result}.`);
      }
      else if (currency == "Lev"){
        $('.showExchange').text(`The current exchange rate of the ${currency} is ${body.conversion_rates.BGN}.`);
        let result = `${exchange}`*`${body.conversion_rates.BGN}`;
        $('.showResult').text(`The conversion of $${exchange} USD to ${currency}'s is ${result}.`);
      }
      else if (currency == "Real"){
        $('.showExchange').text(`The current exchange rate of the ${currency} is ${body.conversion_rates.BRL}.`);
        let result = `${exchange}`*`${body.conversion_rates.BRL}`;
        $('.showResult').text(`The conversion of $${exchange} USD to ${currency}'s is ${result}.`);
      }
      else if (currency == "Piso"){
        $('.showExchange').text(`The current exchange rate of the ${currency} is ${body.conversion_rates.PHP}.`);
        let result = `${exchange}`*`${body.conversion_rates.PHP}`;
        $('.showResult').text(`The conversion of $${exchange} USD to ${currency}'s is ${result}.`);
      }
      else{
        $('.showErrors').text(`Typo, or ${currency} is not supported. Case sensitive.`);
      }
      
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });

  });
  $('#anyCurrency').click(function(){
    let currency1 = $('#anyCurrency1').val();
    let currency2 = $('#anyCurrency2').val();
    let amount = $('#amount2').val();
    $(".showResult").text("");
    $(".showExchange").text("");
    let promise = CurrencyExchange.getExchange(currency1, currency2, amount);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if(currency1 == "Peso"){
        currency1 = `${body.conversion_rates.ARS}`;
      }
      if (currency2 == "Peso"){
        currency2 = `${body.conversion_rates.ARS}`;
      }
      if (currency1 == "Dollar"){
        currency1 = `${body.conversion_rates.AUD}`;
      }
      if (currency2 == "Dollar"){
        currency2 = `${body.conversion_rates.AUD}`;
      }
      if (currency1 == "Lev"){
        currency1 = `${body.conversion_rates.BGN}`;
      }
      if (currency2 == "Lev"){
        currency2 = `${body.conversion_rates.BGN}`;
      }
      if (currency1 == "Real"){
        currency1 = `${body.conversion_rates.BRL}`;
      }
      if (currency2 == "Real"){
        currency2 = `${body.conversion_rates.BRL}`;
      }
      if (currency1 == "Piso"){
        currency1 = `${body.conversion_rates.PHP}`;
      }
      if (currency2 == "Piso"){
        currency2 = `${body.conversion_rates.PHP}`;
      }
      let exchangeRate = currency1/currency2;
      let result = amount * exchangeRate;
      $('#showExchange2').text(`Your amount is ${result}`);
    });
  });
});