class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      //  board = createSprite(displayWidth - 50, displayHeight - 50);
          white = createSprite(displayWidth/2 , displayHeight - 300, 20 , 20);
          black = createSprite(displayWidth/2 , displayHeight - 300 , 20 ,20);
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
       image(boardImg , 0 , 0 , displayWidth/2 , displayHeight/2)
        for(var plr in allPlayers){
          
          if (index === player.index){
          }
        }
        drawSprites();  
      }
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  