/* 

Game object should be able to hold the state of the game. 

It should be able to display form when game state is 0(WAIT) 
or the game when the game state is 1(PLAY) 
or leaderboard when the game state is 2(END).

For now, we will only consider the case when game state is 0

*/

class Game {
    constructor() {

    }

    /*
       function definition to get/read/retrieve existing value of gameState from database
   */
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }


    /*
        -> databaseReference.update() will update the database reference.
        Here "/" refers to the main database inside which gameState is created.
    
       function definition to change existing value of gameState to a 
       new one based on the value of paramter passed in the database
    */
       updateState(state){
        database.ref('/').update({
          gameState: state
        });
      }

    async start() {
        if (gameState == 0) {
            player = new Player();//creating a new player object
           // player.getCount();//get the existing value of the field:**playerCount**from the database and assign it to variable = playerCount

            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount(); //get the number of players registered
            }

            form = new Form();//creatng a new form object
            form.display();
        }

        car1 = createSprite(100, 200);
        car1.addImage("car1Img", car1Img);
        scale(0.5);
        car2 = createSprite(300, 200);
        car2.addImage("car2Img", car2Img);
        scale(0.5);

        cars = [car1, car2];

    }
    play() {
        form.hide();


        // textSize(30);
        // text("Game Start", 120, 100);

        /*
            static function call to retrieve existing player records: name and distance 
            value for all registered players according to the index in the database  
        */
        Player.getPlayerInfo();

        /*
            function call to retrieve existing value of CarsAtEnd from database
        */
        player.getCarsAtEnd();

        if (allPlayers !== undefined) {
            //var display_position = 130;

            //game.updateState(1);

            background(rgb(198, 135, 103));
            image(roadImg, 0, - displayHeight * 8, displayWidth, displayHeight * 10);

            //index of the array
            var index = 0;

            //x and y position of the cars
            var x = 175;
            var y;

            //for every player object inside allPlayers
            for (var plr in allPlayers) {

                //add 1 to the index for every loop
                index = index + 1;

                //position the cars a little away from each other in x direction
                x = x + 270;

                //use data from the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;

                cars[index - 1].x = x;
                cars[index - 1].y = y;


                if (index === player.index) {
                    stroke(10);
                    fill("yellow");
                    ellipse(x, y, 70, 70);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                } else {
                    cars[index - 1].shapeColor = "black";
                }

                //display_position += 20;
                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position);
            }
        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 25;

            /*
                function call to change existing value in the data base of distance and name to a 
                new one based on the value of captured 
            */
            player.updatePlayerRecord();
        }
        if (player.distance == 9400) {
            //gameState = 2;
            debugger;
            player.rank += 1;

            /*
              function call to change existing value of CarsAtEnd to a 
              new one based on the value of parameter passed in the database
    
              Paramenter: RANK of the car which has reached the end line
            */
            Player.updateCarsAtEnd(player.rank);

            /*
              function call to change existing value in the data base of distance and name to a 
              new one based on the value of captured 
            */
            player.updatePlayerRecord();

            if (carsAtFinishLine == 2) {
                /*
                    function definition to change existing value of gameState to a 
                    new one based on the value of paramter passed in the database
                */
                game.updateState(2);
            }
        }
        drawSprites();
    }

    /*
      function definition to activate the game to END: 2 mode and 
      aligned all players to finish positions at the end line
    */
    end() {
        console.log("Game Ended");
        console.log(player.rank);
    }
}