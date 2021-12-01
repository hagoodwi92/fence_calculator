import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#submit").click(function () {
    let totalFeet = $("#inputTotalFeet").val();
    totalFeet = parseInt(totalFeet);
    let cornerPost = $("#inputCornerPosts").val();
    cornerPost = parseInt(cornerPost);
    let endPost = $("#inputEndPosts").val();
    endPost = parseInt(endPost);
    let gatePost = $("#inputGatePosts").val();
    gatePost = parseInt(gatePost);

    let wFF,
      wTW,
      wFP,
      wACG = 0;

    if (totalFeet >= 49 && totalFeet <= 72) {
      wFF = 3;
      wTW = 1;
      wFP = 3;
      wACG = 1;
    } else if (totalFeet >= 73 && totalFeet <= 96) {
      wFF = 4;
      wTW = 1;
      wFP = 4;
      wACG = 1;
    } else if (totalFeet >= 97 && totalFeet <= 120) {
      wFF = 5;
      wTW = 1;
      wFP = 5;
      wACG = 1;
    } else if (totalFeet >= 121 && totalFeet <= 144) {
      wFF = 6;
      wTW = 1;
      wFP = 6;
      wACG = 1;
    } else if (totalFeet >= 145 && totalFeet <= 168) {
      wFF = 7;
      wTW = 1;
      wFP = 7;
      wACG = 1;
    } else if (totalFeet >= 169 && totalFeet <= 192) {
      wFF = 8;
      wTW = 1;
      wFP = 8;
      wACG = 1;
    } else if (totalFeet >= 193 && totalFeet <= 216) {
      wFF = 9;
      wTW = 1;
      wFP = 9;
      wACG = 1;
    }

    let wPOK = Number(2 * cornerPost) + Number(endPost) + Number(gatePost);

    console.log(wFF, wPOK, wTW, wFP, wACG);

    document.getElementById("wFF").innerHTML = wFF;
    document.getElementById("wPOK").innerHTML = wPOK;
    document.getElementById("wTW").innerHTML = wTW;
    document.getElementById("wFP").innerHTML = wFP;
    document.getElementById("wACG").innerHTML = wACG;
  });

  $("#reset").click(function () {
    document.getElementById("wFF").innerHTML = 0;
    document.getElementById("wPOK").innerHTML = 0;
    document.getElementById("wTW").innerHTML = 0;
    document.getElementById("wFP").innerHTML = 0;
    document.getElementById("wACG").innerHTML = 0;
  });
});
