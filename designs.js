// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var colorPicker  = $('#colorPicker');
var inputHeight  = $('#inputHeight');
var inputWidht  = $('#inputWidht');
var submitButton = $('#submitButton');
var canvas = $("#pixelCanvas");

submitButton.click(function makeGrid(){
	document.getElementById("pixelCanvas").innerHTML = " ";
	var row = inputHeight.val();
	var col = inputWidht.val();
	for (var i = 1; i <= row ; i++) {
		$('#pixelCanvas').append("<tr> </tr>");
		for (var j = 1; j <= col ; j++) {

			$('#pixelCanvas ').children().last().append("<td> </td>  ");	
		}
		
		
	}
	
	
	

		});

canvas.on('click', function(event){
	var brush = colorPicker.val();
	 event.target.style.backgroundColor = brush;

	
});





// for (var i = 0; i <= 5 ; i++) {
// 		$('#pixelCanvas').append("<tr> <td> </td> </tr>");
// 			}





