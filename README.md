# PRO-C-43 + 44 + 45
project for class 43 + 44 + 45 self design game stage-3#

# Game Design and Analysis

Q-1 what is the title and the inspration behind the game 
A1- road rash and inspiration is that when you are alone in the house or you are bored in your house you can invite ur friends and play this game online

Q-2 what is the inspiration for the game
A2- games which are played online with other players or with ur friends brings a challenge as solo playing can be won with other players u  can experience a whole new challange

Q-3 what is the story of the game
A3- four players coming togeather to play a car game to win a cup

Q-4 how many characters are present in the game. list them
A4- 1. canvas
    2. image (road)
    3. player1
    4. player2
    5. player3
    6. player4
    7. person crossing a road
    8. waterpuddels
    9. cup
   10. score
   11. welcome screen
   12. playing screen 
   13. leaderboard screen
   14. music
   15. sounds
   16. feedback messages
    
Q-5 which are the playing character and non-playing character
A5-playing characters are
    1. player1
    2. player2
    3. player3
    4. player4
    non-playing characters are rest of the characters
                        
Q-6 describe the behaviour of each character throughout the duration of the game in detail
A6- 1. CANVAS -- rectangle ,screen width -50 , screen height- 50
    2. player1 -- first lane(vetically ,at corner leftside) ,collider is a small cube of (20,20) ,the car is red in colour
    4. player2 -- second lane(vetically ,middle left) ,collider is a small cube of (20,20) ,the car is blue in colour
    5. player3 -- third lane(vetically ,middle right) ,collider is a small cube of (20,20) ,the car is green in colour
    6. player4 -- fourth lane(vetically ,at corner rightside) ,collider is a small cube of (20,20) ,the car is white in colour
    7. person -- a person every 3-4m will be seen crossing the road in the player hits the person he gets an penalty, if avoided the player will be safe ,if not avoided the            player gets a penalty and his score is subtracted by one
    8. waterpuddle -- if the car runs on the water puddle the car slips and the score subtracts ,if not then the player is safe and can move forward
    9. image -- the background of the game when playing
   10. cup -- the winner meaning the one who has the highest score wns the game and the cup is presnted as a reward
   11. score -- determines who is the winner of the game, -1 when the player hits a person,+3 +2 +1 for the first second and third place and for fourth is 0
   12. welcome screen -- welcomes the player ,asks for his name , goes to loading screen waiting for other players
   13. playing screen -- shows the image of the road where players can start racing
   14. leaderboard screen -- shows the scores of players and who came first ,second ,third ,etc
   15. music -- plays throughout the game 
   16. sound -- whenever the player hits an object , slips hitting a puddle ,driving a car
   17. feedback messages -- starting a game , ending  a game ,when the car hits or slips on water sound is made or messages are shown
Q-7 what are the elements of skill
A7-  skillfully controling the car so that u can par the obsticles easily and get the most score to win the game

Q-8 what are the elements of chance
A8 - chance is that when you are driving u might hit a puddle or the person and get a minus in ur score

Q-9 how does the game maintain or create balance between elements of skill and elements of chance
A9 - with skills u can dodge every obstacle and by coming in first place u can get the most score and win the whole game

Q-10 how does the game provide feedback to the user
A10- when starting a game a message is shown, while in the game a music is playe ,when crashed a sound is played similarly for others to, and at the end the leaderbaord and a thank u message is seen 

Q-11 what is the tecnology used to create the game
A11- java programing language
Q-12 what are the softwares used
A12- website ,p5.js ,html ,matter.js ,etc
Q-13 which javascript libraries are used to develop or create the game
A13- website ,p5.js ,html ,matter.js ,etc

Q-14 how to play the game
A14- right and left arrow to move left and right and up and down arrow to go forward and backward


  
making form for stating
game.js as gameState 2
and player.js for the players going to be added

almost completeing the game 
making multiplayer cars controlled by an individual
adding the road image 
