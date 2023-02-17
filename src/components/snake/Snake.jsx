import React, { useState, useContext } from "react";
import { MainContext } from "../Context";
import axios from 'axios';
import RecordList from "./Records";

const Snake = () => {
    const store = useContext(MainContext);
    const [score, setScore] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [name, setName] = useState('');

    let ctx;
    let canv;
    let px = 10;
    let py = 10;
    let yv = 0;
    let xv = 0;
    let gs = 20;
    let tc = 20;
    let ay = 15;
    let ax = 15;
    let trail = [];
    let tail = 5;

    window.onload = function () {
        canv = document.getElementById('gc');
        ctx = canv.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canv.width, canv.height);
    }

    const start = () => {
        document.addEventListener('keydown', keyPush);
        setInterval(game, 1000 / 15);
        canv = document.getElementById('gc');
        ctx = canv.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canv.width, canv.height);

    };

    const scoreHandler = async (currentScore) => {
        let body = {
            name: name ? name : `ACE-${currentScore}`,
            score: currentScore,
        };
        await axios.post(`https://thisistheserverformywebsite.online/add`, body);
    };

    const gameOver = (currentScore) => {
        scoreHandler(currentScore);
        setScore(0);
        store.setApiToggle(!store.apiToggle);
        px = 10;
        py = 10;
        yv = 0;
        xv = 0;
        gs = 20;
        tc = 20;
        ay = 15;
        ax = 15;
        trail = [];
        tail = 5;
    };

    
    function game() {
        px += xv;
        py += yv;
        if (px < 0) {
            px = tc - 1;
        }

        if (px > tc - 1) {
            px = 0;
        }

        if (py < 0) {
            py = tc - 1;
        }

        if (py > tc - 1) {
            py = 0;
        }



        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canv.width, canv.height);

        ctx.fillStyle = 'lime';

        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
            if (tail > 5 && trail[i].x === px && trail[i].y === py) {
                gameOver(tail - 5);
            }
        }

        ctx.fillStyle = 'red';
        ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

        trail.push({ x: px, y: py });
        while (trail.length > tail) {
            trail.shift()
        }

        if (ax === px && ay === py) {
            setScore((tail - 5) + 1);
            tail++;
            ax = Math.floor(Math.random() * tc);
            ay = Math.floor(Math.random() * tc);
        }



    }

    function keyPush(evt) {
        evt.preventDefault()
        switch (evt.keyCode) {
            case 37:
                xv = -1; yv = 0;
                break;
            case 38:
                xv = 0; yv = -1;
                break;
            case 39:
                xv = 1; yv = 0;
                break;
            case 40:
                xv = 0; yv = 1;
                break;
            default:
                break;
        }
    };

    return (
        <div className="w3-container w3-content w3-center w3-padding-64 w3-hide-small" id="snake-game">
            <h2 className="w3-wide">Snake Game</h2>
            <h3 className="w3-wide">Score: {score}</h3>
            <canvas className="w3-card-4" id='gc' width='400' height='400'></canvas>
            
                <div className="w3-section snake-start-btn">
                    <label className="w3-left">Name</label>
                    <input className='w3-input w3-border w3-hover-border-black  w3-card-4' placeholder="Enter name and press start" name='user-name' value={name} onChange={(evt) => setName(evt.target.value)} />
                </div>
            <div className='w3-button w3-padding-large w3-large w3-margin-top snake-start-btn w3-green w3-hover-light-green w3-card-4' onClick={() => {
                if (!hasStarted) {
                    start()
                    setHasStarted(true)
                }
            }}>start</div>
            <br />
            <h4>To play the Snake game click the start button and use the arrow keys to direct the snake.</h4>
            <RecordList />
        </div>
    );
}

export default Snake;