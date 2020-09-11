import $ from 'jquery'; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency';

$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let exchange = $('#currency').val();
    let country = $('#country').val();
    $(".showResult").text("");
    $(".showExchange").text("");
    let promise = CurrencyExchange.getExchange(country, exchange);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if(country == "Argentina"){
        $('.showExchange').text(`The exchange rate of ${country} is ${body.conversion_rates.ARS}.`);
        let result = `${exchange}`*`${body.conversion_rates.ARS}`;
        $('.showResult').text(`The conversion of ${exchange} USD to ${country}'s currency is ${result}.`);
      }
      else if (country == "Australia"){
        $('.showExchange').text(`The exchange rate of ${country} is ${body.conversion_rates.AUD}.`);
        let result = `${exchange}`*`${body.conversion_rates.AUD}`;
        $('.showResult').text(`The conversion of ${exchange} USD to ${country}'s currency is ${result}.`);
      }
      else if (country == "Bulgaria"){
        $('.showExchange').text(`The exchange rate of ${country} is ${body.conversion_rates.BGN}.`);
        let result = `${exchange}`*`${body.conversion_rates.BGN}`;
        $('.showResult').text(`The conversion of ${exchange} USD to ${country}'s currency is ${result}.`);
      }
      else if (country == "Brazil"){
        $('.showExchange').text(`The exchange rate of ${country} is ${body.conversion_rates.BRL}.`);
        let result = `${exchange}`*`${body.conversion_rates.BRL}`;
        $('.showResult').text(`The conversion of ${exchange} USD to ${country}'s currency is ${result}.`);
      }
      else if (country == "The Philippines"){
        $('.showExchange').text(`The exchange rate of ${country} is ${body.conversion_rates.PHP}.`);
        let result = `${exchange}`*`${body.conversion_rates.PHP}`;
        $('.showResult').text(`The conversion of ${exchange} USD to ${country}'s currency is ${result}.`);
      }
      else{
        $('.showErrors').text(`Typo, or ${country} is not supported.`);
      }
      
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });

  });
});