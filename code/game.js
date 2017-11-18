// Map each class of actor to a character
var actorChars = {
  "@": Player,
  "o": Coin, // A coin will wobble up and down
//  "-": Floater2, "+": Floater2,
  "*": Speck,
  "+": Speck2,
  "=": Lava, "|": Lava, "v": Lava,
  "#": Water, "$": Water, "^": Water,
  "-": Door,
  "k": Key
};


function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
    snd.play();
}
function Level(plan) {
  // Use the length of a single row to set the width of the level
  this.width = plan[0].length;
  // Use the number of rows to set the height

  this.height = plan.length;

  // Store the individual tiles in our own, separate array
  this.grid = [];

  // Store a list of actors to process each frame
  this.actors = [];

  // Loop through each row in the plan, creating an array in our grid
  for (var y = 0; y < this.height; y++) {
    var line = plan[y], gridLine = [];

    // Loop through each array element in the inner array for the type of the tile
    for (var x = 0; x < this.width; x++) {
      // Get the type from that character in the string. It can be 'x', '!' or ' '
      // If the character is ' ', assign null.

      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];
      // Use if and else to handle the three cases
      if (Actor)

        // Create a new actor at that grid position.
        this.actors.push(new Actor(new Vector(x, y), ch));
      else if (ch == "x")
        fieldType = "wall";
      // Because there is a third case (space ' '), use an "else if" instead of "else"
      else if (ch == "!")
        fieldType = "lava";
      else if (ch == "y")
        fieldType = "floater1";
      else if (ch == "f")
        fieldType = "floater2";
      else if (ch == "w")
        fieldType = "water";
      else if (ch == "d")
        fieldType = "door";

      // "Push" the fieldType, which is a string, onto the gridLine array (at the end).
      gridLine.push(fieldType);
    }
    // Push the entire row onto the array of rows.
    this.grid.push(gridLine);
  }

  // Find and assign the player character and assign to Level.player
  this.player = this.actors.filter(function(actor) {
    return actor.type == "player";
  })[0];
}

// Check if level is finished
Level.prototype.isFinished = function() {
  return this.status != null && this.finishDelay < 0;
};

function Vector(x, y) {
  this.x = x; this.y = y;
}

// Vector arithmetic: v_1 + v_2 = <a,b>+<c,d> = <a+c,b+d>
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

// Vector arithmetic: v_1 * factor = <a,b>*factor = <a*factor,b*factor>
Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
};


// A Player has a size, speed and position.
function Player(pos) {
  this.pos = pos.plus(new Vector(0, -0.5));
  this.size = new Vector(0.8, 1.5);
  this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";

// Add a new actor type as a class
function Coin(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  // Make it go back and forth in a sine wave.
  this.wobble = Math.random() * Math.PI * 2;
}
Coin.prototype.type = "coin";

function Key(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  // Make it go back and forth in a sine wave.
  this.wobble = Math.random() * Math.PI * 2;
}
//Key.prototype.type = "key";

function Door(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0, -0.5));
  this.size = new Vector(0.8, 1.5);
}
Door.prototype.type = "door";

function Speck(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  // Make it go back and forth in a sine wave.
  this.wobbles = Math.random() * Math.PI * 2;
}
Speck.prototype.type = "speck";

function Speck2(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.2, 0.1));
  this.size = new Vector(0.6, 0.6);
  // Make it go back and forth in a sine wave.
  this.wobbles = Math.random() * Math.PI * 2;
}
Speck2.prototype.type = "speck2";

// Lava is initialized based on the character, but otherwise has a
// size and position
function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch == "=") {
    // Horizontal lava
    this.speed = new Vector(2, 0);
  } else if (ch == "|") {
    // Vertical lava
    this.speed = new Vector(0, 2);
  } else if (ch == "v") {
    // Drip lava. Repeat back to this pos.
    this.speed = new Vector(0, 2);
    this.size = new Vector(0.6, 0.6)
    this.repeatPos = pos;
  }
}
Lava.prototype.type = "lava";

function Water(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch == "#") {
    // Horizontal Water
    this.speed = new Vector(2, 0);
  } else if (ch == "$") {
    // Vertical Water
    this.speed = new Vector(0, 2);
  } else if (ch == "^") {
    // Drip Water. Repeat back to this pos.
    this.speed = new Vector(0, 2);
    this.size = new Vector(0.6, 0.6)
    this.repeatPos = pos;
  }
}
Water.prototype.type = "water";

// Helper function to easily create an element of a type provided
function elt(name, className) {
  var elt = document.createElement(name);
  if (className) elt.className = className;
  return elt;
}

// Main display class. We keep track of the scroll window using it.
function DOMDisplay(parent, level) {

// this.wrap corresponds to a div created with class of "game"
  this.wrap = parent.appendChild(elt("div", "game"));
  this.level = level;

  // In this version, we only have a static background.
  this.wrap.appendChild(this.drawBackground());

  // Keep track of actors
  this.actorLayer = null;

  // Update the world based on player position
  this.drawFrame();
}

var scale = 20;

DOMDisplay.prototype.drawBackground = function() {
  var table = elt("table", "background");
  table.style.width = this.level.width * scale + "px";

  // Assign a class to new row element directly from the string from
  // each tile in grid
  this.level.grid.forEach(function(row) {
    var rowElt = table.appendChild(elt("tr"));
    rowElt.style.height = scale + "px";
    row.forEach(function(type) {
      rowElt.appendChild(elt("td", type));
    });
  });
  return table;
};

// All actors are above (in front of) background elements.
DOMDisplay.prototype.drawActors = function() {
  // Create a new container div for actor dom elements
  var wrap = elt("div");

  // Create a new element for each actor each frame
  this.level.actors.forEach(function(actor) {
    var rect = wrap.appendChild(elt("div",
                                    "actor " + actor.type));
    rect.style.width = actor.size.x * scale + "px";
    rect.style.height = actor.size.y * scale + "px";
    rect.style.left = actor.pos.x * scale + "px";
    rect.style.top = actor.pos.y * scale + "px";
  });
  return wrap;
};

DOMDisplay.prototype.drawFrame = function() {
  if (this.actorLayer)
    this.wrap.removeChild(this.actorLayer);
  this.actorLayer = this.wrap.appendChild(this.drawActors());
  // Update the status each time with this.level.status"
  this.wrap.className = "game " + (this.level.status || "");
  this.scrollPlayerIntoView();
};

DOMDisplay.prototype.scrollPlayerIntoView = function() {
  var width = this.wrap.clientWidth;
  var height = this.wrap.clientHeight;

  // We want to keep player at least 1/3 away from side of screen
  var margin = width / 3;

  // The viewport
  var left = this.wrap.scrollLeft, right = left + width;
  var top = this.wrap.scrollTop, bottom = top + height;

  var player = this.level.player;
  // Change coordinates from the source to our scaled.
  var center = player.pos.plus(player.size.times(0.5))
                 .times(scale);

  if (center.x < left + margin)
    this.wrap.scrollLeft = center.x - margin;
  else if (center.x > right - margin)
    this.wrap.scrollLeft = center.x + margin - width;
  if (center.y < top + margin)
    this.wrap.scrollTop = center.y - margin;
  else if (center.y > bottom - margin)
    this.wrap.scrollTop = center.y + margin - height;
};

// Remove the wrap element when clearing the display
// This will be garbage collected
DOMDisplay.prototype.clear = function() {
  this.wrap.parentNode.removeChild(this.wrap);
};

// Return the first obstacle found given a size and position.
Level.prototype.obstacleAt = function(pos, size) {
  // Find the "coordinate" of the tile representing left bound
  var xStart = Math.floor(pos.x);
  // right bound
  var xEnd = Math.ceil(pos.x + size.x);
  // top bound
  var yStart = Math.floor(pos.y);
  // Bottom bound
  var yEnd = Math.ceil(pos.y + size.y);

  // Consider the sides and top and bottom of the level as walls
  if (xStart < 0 || xEnd > this.width || yStart < 0)
    return "wall";
  if (yEnd > this.height)
    return "lava";

  // Check each grid position starting at yStart, xStart
  // for a possible obstacle (non null value)
  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
      var fieldType = this.grid[y][x];
      if (fieldType) return fieldType;
    }
  }
};

// Collision detection for actors is handled separately from
// tiles.
Level.prototype.actorAt = function(actor) {
  // Loop over each actor in our actors list and compare the
  // boundary boxes for overlaps.
  for (var i = 0; i < this.actors.length; i++) {
    var other = this.actors[i];
    // if the other actor isn't the acting actor
    if (other != actor &&
        actor.pos.x + actor.size.x > other.pos.x &&
        actor.pos.x < other.pos.x + other.size.x &&
        actor.pos.y + actor.size.y > other.pos.y &&
        actor.pos.y < other.pos.y + other.size.y)
      // check if the boundaries overlap by comparing all sides for
      // overlap and return the other actor if found
      return other;
  }
};

// Update simulation each step based on keys & step size
Level.prototype.animate = function(step, keys) {
  // Have game continue past point of win or loss
  if (this.status != null)
    this.finishDelay -= step;

  // Ensure each is maximum 100 milliseconds
  while (step > 0) {
    var thisStep = Math.min(step, maxStep);
    this.actors.forEach(function(actor) {
      // Allow each actor to act on their surroundings
      actor.act(thisStep, this, keys);
    }, this);
   // Do this by looping across the step size, subtracing either the
   // step itself or 100 milliseconds
    step -= thisStep;
  }
};

Lava.prototype.act = function(step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else
    this.speed = this.speed.times(-1);
};

Water.prototype.act = function(step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else
    this.speed = this.speed.times(-1);
};


var maxStep = 0.05;

var wobbleSpeed = 8, wobbleDist = 0.07;
var wobblesSpeed = 3, wobblesDist = 2;


Coin.prototype.act = function(step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

Key.prototype.act = function(step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

Speck.prototype.act = function(step) {
  this.wobbles += step * wobblesSpeed;
  var wobblesPos = Math.sin(this.wobbles) * wobblesDist;
  this.pos = this.basePos.plus(new Vector(0, wobblesPos));
};

Speck2.prototype.act = function(step) {
  this.wobbles += step * wobblesSpeed;
  var wobblesPos = Math.sin(this.wobbles) * wobblesDist;
  this.pos = this.basePos.plus(new Vector(0, wobblesPos));
};

var maxStep = 0.05;

var playerXSpeed = 7;

Player.prototype.moveX = function(step, level, keys) {
  this.speed.x = 0;
  if (keys.left) this.speed.x -= playerXSpeed;
  if (keys.right) this.speed.x += playerXSpeed;

  var motion = new Vector(this.speed.x * step, 0);
  // Find out where the player character will be in this frame
  var newPos = this.pos.plus(motion);
  // Find if there's an obstacle there
  var obstacle = level.obstacleAt(newPos, this.size);
  // Handle lava by calling playerTouched
  if (obstacle)
    level.playerTouched(obstacle);
  else
    // Move if there's not an obstacle there.
    this.pos = newPos;
};

var gravity = 30;
var jumpSpeed = 17;

Player.prototype.moveY = function(step, level, keys) {
  // Accelerate player downward (always)
  this.speed.y += step * gravity;;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  // The floor is also an obstacle -- only allow players to
  // jump if they are touching some obstacle.
  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.up && this.speed.y > 0)
      this.speed.y = -jumpSpeed;
    else
      this.speed.y = 0;
  } else {
    this.pos = newPos;
  }
};

Player.prototype.act = function(step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);

  var otherActor = level.actorAt(this);
  if (otherActor)
    level.playerTouched(otherActor.type, otherActor);

  // Losing animation
  if (level.status == "lost") {
    this.pos.y += step;
    this.size.y -= step;
  }
  if (level.status == "lost2") {
    this.pos.y += step;
    this.size.y -= step;
  }
};

Level.prototype.playerTouched = function(type, actor) {

  if (type == "coin" || type == "key") {
    this.actors = this.actors.filter(function(other) {
      beep();
      return other != actor;
    });
  }
  // if the player touches lava and the player hasn't won
  // Player loses
  if (type == "lava" && this.status == null) {
    this.status = "lost";
    this.finishDelay = 1;
  } else if (type == "water" && this.status == null) {
    this.status = "lost2";
    this.finishDelay = 1;
  } else if (type == "speck" && this.status == null) {
      this.status = "lost";
      this.finishDelay = 1;
  } else if (type == "speck2" && this.status == null) {
        this.status = "lost2";
        this.finishDelay = 1;
  }


  if (!this.actors.some(function(actor) {
             return actor.type == "coin";
           })) {
             Key.prototype.type = "key";
              if (type == "door") {
  //if player has the key they can open the chest and progress to the next level
                if (!this.actors.some(function(actor) {
                    return actor.type == "key";
                }))
                  this.status = "won";
                  this.finishDelay = 1;
              }



  /*else if (type == "door") {
    //if player has the key they can open the chest and progress to the next level
      if (!this.actors.some(function(actor) {
           return actor.type == "key";
         }))
           this.status = "won";
           this.finishDelay = 1;
  } else if (type == "coin") {
    this.actors = this.actors.filter(function(other) {
      return other != actor;
    });*/




  }
};

// Arrow key codes for readibility
var arrowCodes = {37: "left", 38: "up", 39: "right"};

// Translate the codes pressed from a key event
function trackKeys(codes) {
  var pressed = Object.create(null);

  // alters the current "pressed" array which is returned from this function.
  // The "pressed" variable persists even after this function terminates
  // That is why we needed to assign it using "Object.create()" as
  // otherwise it would be garbage collected

  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      // If the event is keydown, set down to true. Else set to false.
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      // We don't want the key press to scroll the browser window,
      // This stops the event from continuing to be processed
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}

// frameFunc is a function called each frame with the parameter "step"
// step is the amount of time since the last call used for animation
function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      // Set a maximum frame step of 100 milliseconds to prevent
      // having big jumps
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// This assigns the array that will be updated anytime the player
// presses an arrow key. We can access it from anywhere.
var arrows = trackKeys(arrowCodes);

// Organize a single level and begin animation
function runLevel(level, Display, andThen) {
  var display = new Display(document.body, level);

  runAnimation(function(step) {
    // Allow the viewer to scroll the level
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      if (andThen)
        andThen(level.status);
      return false;
    }
  });
}

function runGame(plans, Display) {
  function startLevel(n) {
    // Create a new level using the nth element of array plans
    // Pass in a reference to Display function, DOMDisplay (in index.html).
    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost")
        startLevel(n);
      else if (status == "lost2")
        startLevel(n);
      else if (n < plans.length - 1)
        startLevel(n + 1);

    });
  }
  startLevel(0);
}
