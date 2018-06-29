// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//jquery function begins here 

$(function(){
		let gridHeight;
		let gridWidth;
		let selectedColor;
		let form = $('#sizePicker');
		let  canvas = $('#pixelCanvas');
		
		
	// function to make the grid for the art maker
	
	/**
		CREATES THE TABLE WITH NESTED LOOP
	**/
	function makeGrid() {
		for(let  col = 0; col < gridHeight; col++){
			const  cellRow = $('<tr></tr>');  //CREATES TABLE ROWS
			canvas.append(cellRow);
			for (let  row = 0; row < gridWidth; row++){
				const  cell = $('<td></td>');
				cellRow.append(cell);
			};
		};
	};
	/** 
		GETS USER INPUTS ASSIGN IT TO A VARIABLE,
		CHECK IF THE INPUT IS VALID AND CALL makeGrid() or output a warning message
	**/
	form.submit(function(event){
		event.preventDefault();
		gridHeight = $('#inputHeight').val();
		gridWidth = $('#inputWidth').val();
		
		if(gridHeight >= 1 && gridWidth >= 1){
			canvas.empty();
			makeGrid();
			$('p.warning').remove(); //REMOVES THE WARNING ELEMENT WHEN A VALID NUMBER HAS BEEN ENTERED 
		}else{
			canvas.empty();
			var warning = $('<p>Please Enter a valid number</p>'); //DEFINES A WARNING PARAGRAPH 
			warning.addClass('warning').insertBefore(canvas); //ADD CLASS WARNING TO THE PARAGRAPH IF VALUE ENTERED IS LESS THAT 0
		};
	});
	/**
	EVENT THAT MONITOR THE COLORPICKER FOR COLOR CHANGE,
	AND ASSIGNS THE CHANGE IN COLOR TO THE VARIABLE selectedColor
	**/
			
		
		$('table#pixelCanvas').on('click', 'td', function(){
			//APPLIES BACKGROUND COLOR OF CURRENT VALUE OF COLOR PICKER TO THE TABLE CELLE WHEN CLICKED
		selectedColor = $('#colorPicker').val();	
			if($(this).attr('style')){
				$(this).removeAttr('style');
			}else{
				 $(this).css('background-color', selectedColor);
			}				
		});
		
		/**$('table#pixelCanvas').on('dblclick', 'td', function(){
				$( this ).css('background-color', 'transparent');				
		}); **/
	
	
	//CHANGES BACKGROUND COLOR OF THE TABLE CANVAS TO ANY SELECTED SOLOR
	$('#tablebg').change(function(){
			let tablebgColor = $( this ).val();

			//APPLIES BACKGROUND COLOR OF CURRENT VALUE OF COLOR PICKER TO THE TABLE CELLE WHEN CLICKED
				$('table#pixelCanvas').css('background-color', tablebgColor);	
		
		
		});

	
	
	
});

//jquery function ends here
