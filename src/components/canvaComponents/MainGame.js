import React from 'react';
import Wall from "./Wall";
import WallExit from "./WallExit";
import Pacman from "./Pacman";
import Monster from "./Monster";

class MainGame extends React.Component {
    
    constructor(props){
        super(props);
        this.ctx = null;
        this.frameNo = 0;
        this.interval = null;
        this.obstacles = [];
    }
    
    componentDidMount() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.initCanvas();
        var ctx= this.ctx;
        this.agentPacman= new Pacman({ctx, x: 0, y:0, width:0, height:0, obstacles:[]});
        this.agentMonster= new Monster({ctx, x: 0, y:0, width:0, height:0, obstacles:[]});
        this.clear();
        this.update();
        //this.updateMonster();
    }
    
    initCanvas() {
        var ctx = this.ctx;
        var width = 660;
        var height = 450;
        var colorStartGame = '#162e37'; //'#2c5364'
        var colorWall = '#0F2027'; //'#0F2027'
        var colorWallExit = '#162e37'; //'#2c5364'
        ctx.clearRect(0,0, width, height);
        
        // walls
        for(var i=0; i<width;i=i+30){
            for(var j=0; j<height;j=j+30){
                /************ haut ************/
                if(j>=0 && j<=0 && i >= 0 && i <= width){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorStartGame, width: 30, height: 30}));
                }
                if(j>=30 && j<=30 && i >= 0 && i <= 180){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=30 && j<=30 && i >= 250 && i <= width){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /************ gauche ************/
                if(j>=60 && j<=360 && i >= 0 && i <= 30){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /************ droite ************/
                if(j>=60 && j<=360 && i >= 600 && i <= width){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /************ bas ************/
                if(j>=390 && j<=420 && i >= 0 && i <= 510){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=390 && j<=420 && i >= 600 && i <= width){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=420 && j<=height && i >= 0 && i <= width){
                    this.obstacles.push(new WallExit({ctx, x: i, y: j, color: colorWallExit, width: 30, height: 30}));
                }
            }
        }

        //interior
        for(var i=30; i<=width-60;i=i+30){
            for(var j=30; j<=height-90;j=j+30){
                if(j>=60 && j<=60 && i >= 340 && i <= 370){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /********************/
                if(j>=90 && j<=90 && i >= 90 && i <= 310){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=90 && j<=90 && i >= 360 && i <= 490){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=90 && j<=90 && i >= 520 && i <= 570){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /********************/
                if(j>=120 && j<=210 && i >= 90 && i <= 90){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=150 && j<=240 && i >= 150 && i <= 150){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=110 && j<=300 && i >= 210 && i <= 210){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=150 && j<=150 && i >= 250 && i <= 550){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=180 && j<=270 && i >= 270 && i <= 270){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=210 && j<=300 && i >= 330 && i <= 330){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /********************/
                if(j>=270 && j<=270 && i >= 60 && i <= 150){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=210 && j<=210 && i >= 360 && i <= 570){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /********************/
                if(j>=270 && j<=270 && i >= 390 && i <= 540){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=300 && j<=300 && i >= 540 && i <= 540){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                /********************/
                if(j>=330 && j<=330 && i >= 90 && i <= 280){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
                if(j>=330 && j<=330 && i >= 330 && i <= 540){
                    this.obstacles.push(new Wall({ctx, x: i, y: j, color: colorWall, width: 30, height: 30}));
                }
            }
        }
    }
    
    update(){
        this.clear();
        this.frameNo += 1;
        for (var i = 0; i < this.obstacles.length; i += 1) {
            this.obstacles[i].update();
        }
        if(this.everyinterval(1)){
            var actionMonster = this.agentMonster.choosBestAction();
            var actionPacman = this.agentPacman.choosBestAction();
            console.log("Pacman action : " + actionPacman);
            console.log("Monster action : " + actionMonster);
            var resultMonster = eval("this.agentMonster."+actionMonster+"()");
            var resultPacman = eval("this.agentPacman."+actionPacman+"()");
            this.agentMonster.updateMemory(actionMonster, resultMonster);
            this.agentPacman.updateMemory(actionPacman, resultPacman);
	} 
        this.agentMonster.update();
        this.agentPacman.update();
    }
    
    start(){
        var ctx = this.ctx;
        var obstacles = this.obstacles;
        this.agentMonster= new Monster({ctx, x: 242, y:32, width:26, height:26, obstacles});
        this.agentPacman = new Pacman({ctx, x: 500, y:123, width:24, height:24, obstacles});
        this.frameNo = 0;
    clearInterval(this.interval);
        this.interval = setInterval(this.update.bind(this), 20);
    }
    
    stop(){
        clearInterval(this.interval);
    }
    
    clear() {
        this.ctx.clearRect(0, 0, 660, 450);
    }
    
    everyinterval(n) {
        if ((this.frameNo / n) % 2 === 0) {return true;}
        return false;
    }
    
    render(){
        return (
            <div>
                <canvas ref="canvas" width={660} height={450}/>
                <br/>
                <button class="btn btn-success btn-sm m-1" onClick={this.start.bind(this)}>Start</button>
                <button class="btn btn-warning btn-sm m-1" onClick={this.stop.bind(this)}>Stop</button>
            </div>
        );
    }
};

export default MainGame;
