class Form{
    constructor(){
        this.input = createInput("Name")

        this.button = createButton("Play")

        this.greeting = createElement('h3')

        this.title = createElement('h2')
    }

    display(){
        
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2+350,100)

        this.input.position(displayWidth/2+350,250)

        this.button.position(displayWidth/2+350,350)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()

            playerCount+=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello" + player.name)
            this.greeting.position(700,250)
        })
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}