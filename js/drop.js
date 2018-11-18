$(document).ready(function () {
	
  $("#selectdrop").click(function () {
  	$("#finaldrop").show();
    //event.preventDefault();
    if(document.getElementById('checkf1').checked){
    	$("#dropf1").show();
    }

    if(document.getElementById('checkf2').checked){
    	$("#dropf2").show();
    }

    if(document.getElementById('checkf3').checked){
    	$("#dropf3").show();
    }

    if(document.getElementById('checkw1').checked){
    	$("#dropw1").show();
    }

    if(document.getElementById('checkw2').checked){
    	$("#dropw2").show();
    }

    if(document.getElementById('checkw3').checked){
    	$("#dropw3").show();
    }

    if(document.getElementById('checks1').checked){
    	$("#drops1").show();
    }
  });

  $("#finaldrop").click(function () {
  	if(document.getElementById('checkf1').checked){
    	$("#fcourse1").hide();
    	$("#dropf1").hide();
    }

    if(document.getElementById('checkf2').checked){
    	$("#fcourse2").hide();
    	$("#dropf2").hide();
    }

    if(document.getElementById('checkf3').checked){
    	$("#fcourse3").hide();
    	$("#dropf3").hide();
    }

    if(document.getElementById('checkw1').checked){
    	$("#wcourse1").hide();
    	$("#dropw1").hide();
    }

    if(document.getElementById('checkw2').checked){
    	$("#wcourse2").hide();
    	$("#dropw2").hide();
    }

    if(document.getElementById('checkw3').checked){
    	$("#wcourse3").hide();
    	$("#dropw3").hide();
    }

    if(document.getElementById('checks1').checked){
    	$("#scourse1").hide();
    	$("#drops1").hide();
    }
  });
});