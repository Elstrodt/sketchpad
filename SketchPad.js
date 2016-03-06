$(document).ready(function(){
	createGrid(16);
	changeColor();
});

changeColor = function(){
	$('.grid').mouseenter(function(){
		$(this).css("background-color", "red"); 
	});
}

createGrid = function(line_length){
	grid_size = line_length * line_length;
	for(i = 0; i < grid_size; i++){
		$('.container').append("<div class='grid'></div>")
	}
	grid_width = 960/line_length + 'px';
	$('.grid').width(grid_width);
	$('.grid').height(grid_width);
}

newGrid = function(){
	$('.grid').remove();
	square_line = prompt("How many square per line?");
	createGrid(square_line);
	changeColor();
}