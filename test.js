const gridBorder = 2;
const gridWidth = 10;
const gridHeight = 10;
const pixelSize = 20;
let currentShip;
const Direction = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
};

const generateBattleshipArray = ({ coord: { x, y }, size }) => ({
  horizonal: () => {
    const ship = [];
    for (let i = 0; i < size; i++) {
      ship.push([x + i, y]);
    }
    return ship;
  },
  vertical: () => {
    const ship = [];
    for (let i = 0; i < size; i++) {
      ship.push([x, y + i]);
    }
    return ship;
  },
});

const createBattleship = ({
  title, size, direction,
}) => {
  const coord = {
    x: clamp(Math.floor(Math.random() * gridWidth), 0, gridWidth - size),
    y: clamp(Math.floor(Math.random() * gridHeight), 0, gridHeight - size),
  };


  const shipArray = generateBattleshipArray({ coord, size });
  const shipCoord = direction === Direction.HORIZONTAL
    ? shipArray.horizonal()
    : shipArray.vertical();

  return Object.assign({
    title: 'battleship',
    size: 2,
    coord,
    display: true,
    selected: false,
  },
  {
    title,
    size,
    coord,
    shipCoord,
  });
};

const battleshipPlacings = [
  createBattleship({
    title: 'medium1', size: 3, direction: Direction.VERTICAL,
  }),
  createBattleship({
    title: 'small1', size: 2, direction: Direction.HORIZONTAL,
  }),
  createBattleship({
    title: 'large1', size: 4, direction: Direction.VERTICAL,
  }),
];

const battleShips = [];

const setBattleship = index => battleShips.push(battleshipPlacings[index]);

function setup() {
  frameRate(1);
  createCanvas(
    gridWidth * pixelSize,
    gridHeight * pixelSize,
  );
}

function reset() {
}

const battleShipExists = (x, y) => {
  let exists = false;
  if (battleShips.length === 0) {
    return false;
  }
  battleShips
    .forEach((ship) => {
      for (let j = 0; j < ship.shipCoord.length; j++) {
        if (ship.shipCoord[j][0] === x && ship.shipCoord[j][1] === y) {
          exists = true;
        }
      }
    });
  return exists;
};


function drawShipsOnGrid(x, y) {
  const rectangle = 20;
  const rectangleWithBorder = rectangle + gridBorder;
  for (var x = 0, i = 0; i < rectangle; x += rectangleWithBorder, i++) {
    for (var y = 0, j = 0; j < rectangle; y += rectangleWithBorder, j++) {
      if (battleShipExists(i, j)) {
        fill('red');
        rect(x, y, rectangle, rectangle);
      } else {
        fill(210);
        rect(x, y, rectangle, rectangle);
      }
    }
  }
}


function draw() {
  drawShipsOnGrid(0, 0);
}

function mouseClicked() {
  if (battleshipPlacings.length <= battleShips.length) {
    alert('done');
    return;
  }
  setBattleship(battleShips.length);
}
