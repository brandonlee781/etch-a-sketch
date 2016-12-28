const board = document.querySelector('#board');
const clear = document.querySelector('button');

function newBoard() {
  let squares = Number(prompt('How many squares for the new board?', '16'));
  if (isNaN(squares)) {
    newBoard();
  } else {
    createBoard(squares);
  }
}

function darken() {
  const perc = 25;
  let rgb = $(this).css('background-color');
  rgb = rgb.replace('rgb(', '').replace(')', '').split(',');
  let red = parseInt(rgb[0]);
  let green = parseInt(rgb[1]);
  let blue = parseInt(rgb[2]);

  if (red > 0) red -= perc;
  if (green > 0) green -= perc;
  if (blue > 0) blue -= perc;

  let newColor = `rgb(${red},${green},${blue})`;

  $(this).css('background-color', newColor);
}

function createBoard(tiles) {
  const width = $('#board').width();
  console.log(width, 100/tiles);
  let square = `<div class="tile" style="width: ${Math.floor(100/tiles)}%; height: 100%"></div>`;
  let html = '';
  for (var i = 0; i < tiles; i++) {
    html += `<div class="row" style="height: ${Math.floor(100/tiles)}%">`;
    for(var j = 0; j < tiles; j++) {
      html += square;
    }
    html+= '</div>';
  }
  $('#board').html(html);
}

document.onload = createBoard(16);
$('#board').on('mouseenter', '.row .tile',darken);

clear.addEventListener('click', newBoard);
