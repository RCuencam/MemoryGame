const button=document.querySelector("#button")
const red=document.querySelector("#red")
const yellow=document.querySelector("#yellow")
const green =document.querySelector("#green")
const blue=document.querySelector("#blue")

function startGame()
{
    button.style.display="none"
    let juego=new Game()
}
class Game
{
    constructor()
    {
        this.initialize();
        this.siguienteNivel()
    }
    initialize()
    {
        this.nivel=1
        this.last_level=10
        this.activeListener()
    }
    siguienteNivel()
    {
        this.sublevel=0
        this.secuency=this.generateSecuency()
        setTimeout(()=>this.animateSecuency(this.secuency),1300)
        console.log(this.secuency)
    }
    generateSecuency()
    {
        let number= new Array(this.nivel).fill(0).map(()=>Math.floor(Math.random()*4))
        return number;
    }
    animateSecuency()
    {
        for(let i=0;i<this.nivel;i++)
        {   
            setTimeout(()=>this.animateColor(this.secuency[i]),1000*i)
        }
    }
    animateColor(numColor)
    {
        switch(numColor)
        {
            case 0:
                red.classList.add("light");
                setTimeout(()=>red.classList.remove("light"),500)
                break;
            case 1:
                yellow.classList.add("light");
                setTimeout(()=>yellow.classList.remove("light"),500)
                break;
            case 2:
                blue.classList.add("light");
                setTimeout(()=>blue.classList.remove("light"),500)
                break;
            case 3:
                green.classList.add("light");
                setTimeout(()=>green.classList.remove("light"),500)
                break;
        }
    }

    activeListener()
    {
        red.addEventListener("click",(ev)=>{
            red.classList.add("light")
            setTimeout(()=>red.classList.remove("light"),200)
            this.verifyColor(ev)
        })
        yellow.addEventListener("click",(ev)=>{
            yellow.classList.add("light")
            setTimeout(()=>yellow.classList.remove("light"),200)
            this.verifyColor(ev)
        })
        green.addEventListener("click",(ev)=>{
            green.classList.add("light")
            setTimeout(()=>green.classList.remove("light"),200)
            this.verifyColor(ev)
        })
        blue.addEventListener("click",(ev)=>{
            blue.classList.add("light")
            setTimeout(()=>blue.classList.remove("light"),200)
            this.verifyColor(ev)
        })
    }
    descativeListener()
    {
        red.removeEventListener("click",(ev)=>{
            this.verifyColor(ev)
        })
        yellow.removeEventListener("click",(ev)=>{
            this.verifyColor(ev)
        })
        green.removeEventListener("click",(ev)=>{
            this.verifyColor(ev)
        })
        blue.removeEventListener("click",(ev)=>{
            this.verifyColor(ev)
        })
    }
    verifyColor(ev)
    {
        const number=parseInt(ev.target.dataset.number)
        console.log(number)
        if(this.secuency[this.sublevel]===number)
        {
            this.sublevel++;
            console.log("yeah")
            if(this.nivel===this.sublevel)
            {
                this.nivel++
                this.sublevel=0
                this.siguienteNivel()
                this.descativeListener()
            }
        }
        else
        {
            swal("You Lose!", "You clicked the button!", "error");
            button.style.display="block"
        }
        if(this.nivel===this.last_level+1)
        {
            swal("Good job!", "You complete all levels!", "success");
            button.style.display="block"
        }
    }
}