var i = 5;
var j = 1;
var id = j + "_" + i;
var id2 = "p3";
var a = 1;
var b = 1;
var c = 1;
var d = 8;
var e = 2;
var f = 4;
var e1 = 3;
var f1 = 4;
var id3 = a + "_" + b;
var id4 = c + "_" + d;
var id5 = e + "_" + f;
var id6 = e1 + "_" + f1;
var s = 0;
var p = 0;
var score = 0;
var point = "point";
var left = 330;
var x = 178;
var left1 = 1020;
var x1 = 180;
var left2 = 627;
var x2 = 265;
var r = 0;
var r1 = 0;
var r2 = 0;
var time = 1500;
var dir = "1200px-Pacman.svg.png";
var show = 1;
var when = 6;
var cherry1 = 1;
var cherry2 = 1;
var x3 = 335;
var left3 = 615;
var cherry3 = 0;
var music = 1;
var timemusic = 2500;

function move() {

    if (p < 59) {
        if (s === 0) {
            start();
        } else {
            if (Event.keyCode === 39) {
                dir = "1200px-Pacman.svg.png";
                if (document.getElementById(id).style.borderRight != "3px solid blue") {
                    if (i < 10) {
                        document.getElementById(id).textContent = null;
                        if ((id3 === id) || (id4 === id) || (id5 === id)) {
                            $("img").remove();
                            show = 3;
                            when = 3;
                            music = 2;
                            s = 0;
                            document.getElementById("p1").textContent = "YOU LOSE !";
                            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
                        }

                        id = j + "_" + (++i);
                        var img = document.createElement("img");
                        img.src = "1200px-Pacman.svg.png";
                        img.width = "33";
                        if (document.getElementById(id).textContent) {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                            ++p;

                            if (id === "2_2" || id === "2_9" || id === "5_2" || id === "5_9") { score = score + 5; } else {++score; }

                            document.getElementById(id2).textContent = "SCORE : " + score;
                        } else {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                        }
                        if (id === id6) {
                            score = score + 10;

                            cherry1 = 1;
                            cherry3 = 1;
                            RemoveCherry();
                        }
                    }
                }

            }
            if (Event.keyCode === 37) {
                dir = "image.png";
                if (document.getElementById(id).style.borderLeft != "3px solid blue") {
                    if (i > 1) {
                        document.getElementById(id).textContent = null;
                        if ((id3 === id) || (id4 === id) || (id5 === id)) {
                            $("img").remove();
                            show = 3;
                            when = 3;
                            s = 0;
                            document.getElementById("p1").textContent = "YOU LOSE !";
                            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
                        }

                        id = j + "_" + (--i);
                        var img = document.createElement("img");
                        img.src = "image.png";
                        img.width = "33";
                        if (document.getElementById(id).textContent) {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                            ++p;
                            if (id === "2_2" || id === "2_9" || id === "5_2" || id === "5_9") { score = score + 5; } else {++score; }
                            document.getElementById(id2).textContent = "SCORE : " + score;
                        } else {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                        }
                        if (id === id6) {
                            score = score + 10;

                            cherry1 = 1;
                            cherry3 = 1;
                            RemoveCherry();
                        }
                    }
                }

            }
            if (Event.keyCode === 40) {
                dir = "image1.png";
                if (document.getElementById(id).style.borderBottom != "3px solid blue") {
                    if (j < 6) {
                        document.getElementById(id).textContent = null;
                        if ((id3 === id) || (id4 === id) || (id5 === id)) {
                            $("img").remove();
                            show = 3;
                            when = 3;
                            s = 0;
                            document.getElementById("p1").textContent = "YOU LOSE !";
                            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
                        }

                        id = (++j) + "_" + (i);
                        var img = document.createElement("img");
                        img.src = "image1.png";
                        img.width = "33";
                        if (document.getElementById(id).textContent) {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                            ++p;
                            if (id === "2_2" || id === "2_9" || id === "5_2" || id === "5_9") { score = score + 5; } else {++score; }
                            document.getElementById(id2).textContent = "SCORE : " + score;
                        } else {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                        }
                        if (id === id6) {
                            score = score + 10;

                            cherry1 = 1;
                            cherry3 = 1;
                            RemoveCherry();
                        }
                    }
                }

            }
            if (Event.keyCode === 38) {
                dir = "image2.png";
                if (document.getElementById(id).style.borderTop != "3px solid blue") {
                    if (j > 1) {
                        document.getElementById(id).textContent = null;
                        if ((id3 === id) || (id4 === id) || (id5 === id)) {
                            $("img").remove();
                            show = 3;
                            when = 3;
                            s = 0;
                            document.getElementById("p1").textContent = "YOU LOSE !";
                            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
                        }

                        id = (--j) + "_" + (i);
                        var img = document.createElement("img");
                        img.src = "image2.png";
                        img.width = "33";
                        if (document.getElementById(id).textContent) {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                            p++;
                            if (id === "2_2" || id === "2_9" || id === "5_2" || id === "5_9") { score = score + 5; } else {++score; }
                            document.getElementById(id2).textContent = "SCORE : " + score;
                        } else {
                            document.getElementById(id).textContent = null;
                            document.getElementById(id).appendChild(img);
                        }
                        if (id === id6) {
                            score = score + 10;

                            cherry1 = 1;
                            cherry3 = 1;
                            RemoveCherry();
                        }
                    }
                }
            }
            if (event.keyCode === 32) {
                document.getElementById("p1").textContent = "PAUSE";
                //cherry1 = 1;
                music = 2;
                s = 0;
                show = 3;
                when = 3;
            }
        }
    }
    if (p === 59) {
        document.getElementById("p1").textContent = "YOU WIN !";
        document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        s = 0;
        cherry1 = 1;
        show = 3;
        when = 3;
    }
    if (Event.keyCode === 82) {
        location.reload();
    }
}

function start() {
    if (Event.keyCode === 78) {
        music = 1;
        setTimeout(function() {
            $("img").remove();
            var img = document.createElement("img");
            img.src = dir;
            img.width = "33";
            document.getElementById(id).appendChild(img);
            document.getElementById("p1").textContent = "STARTING IN 3 s";
        }, 0);
        setTimeout(function() {
            $("img").remove();
            var img = document.createElement("img");
            img.src = dir;
            img.width = "33";
            document.getElementById(id).appendChild(img);
            document.getElementById("p1").textContent = "STARTING IN 2 s";
        }, 1000);
        setTimeout(function() {
            $("img").remove();
            var img = document.createElement("img");
            img.src = dir;
            img.width = "33";
            document.getElementById(id).appendChild(img);
            document.getElementById("p1").textContent = "STARTING IN 1 s";
        }, 2000);
        setTimeout(function() {
            $("img").remove();
            var img = document.createElement("img");
            img.src = dir;
            img.width = "33";
            document.getElementById(id).appendChild(img);
            document.getElementById("p1").textContent = "LET GO";
        }, 2500);
        setTimeout(function() {
            play();
        }, timemusic);
        setTimeout(function() {
            play();
        }, timemusic + 4050);
        setTimeout(function() {
            play();
        }, timemusic + 8010);
        setTimeout(function() {
            play();
        }, timemusic + 12010);
        setTimeout(function() {
            play();
        }, timemusic + 16010);
        setTimeout(function() {
            play();
        }, timemusic + 20010);
        setTimeout(function() {
            play();
        }, timemusic + 24010);
        setTimeout(function() {
            play();
        }, timemusic + 28010);
        setTimeout(function() {
            play();
        }, timemusic + 32010);
        setTimeout(function() {
            play();
        }, timemusic + 36010);
        setTimeout(function() {
            document.getElementById("p1").textContent = null;
            s = 1;
            show = 1;
            when = 6;
        }, 3000);
        setTimeout(function() {
            ShowCherry();
        }, 8000);
        setTimeout(function() {
            RemoveCherry();
        }, 15000);
        setTimeout(function() {
            ShowCherry();
        }, 20000);
        setTimeout(function() {
            RemoveCherry();
        }, 25000);
        setTimeout(function() {
            ShowCherry();
        }, 35000);
        setTimeout(function() {
            RemoveCherry();
        }, 45000);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            ShowCherry();
        }, 60000);
        setTimeout(function() {
            RemoveCherry();
        }, 70000);
        setTimeout(function() {
            ShowCherry();
        }, 80000);
        setTimeout(function() {
            RemoveCherry();
        }, 90000);
        setTimeout(function() {
            ShowCherry();
        }, 100000);
        setTimeout(function() {
            RemoveCherry();
        }, 110000);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
        setTimeout(function() {
            Ghost();
        }, time);
    }
}

function Ghost() {
    if (show === 1) {
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
        setTimeout(function() { ShowGhost(); }, time);
        time = time + 600;
        setTimeout(function() { RemoveGhost(); }, time);
        time = time + 5;
    }
}

function ShowGhost() {
    if (when === 6) {
        Road1();
        Road2();
        Road3();
    }
    if (show === 1) {
        var add = document.createElement("img");
        add.src = "unnamed.png";
        add.width = "36";
        add.style.top = x + "px";
        add.style.left = left + "px";
        add.style.position = "fixed";
        document.getElementById(id3).appendChild(add);
        var add1 = document.createElement("img");
        add1.src = "580b57fcd9996e24bc43c31b.png";
        add1.width = "36";
        add1.style.top = x1 + "px";
        add1.style.left = left1 + "px";
        add1.style.position = "fixed";
        document.getElementById(id4).appendChild(add1);
        var add2 = document.createElement("img");
        add2.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
        add2.width = "36";
        add2.style.top = x2 + "px";
        add2.style.left = left2 + "px";
        add2.style.position = "fixed";
        document.getElementById(id5).appendChild(add2);
    }
}

function RemoveGhost() {
    $("img").remove();
    if (s === 1) {
        var img = document.createElement("img");
        img.src = dir;
        img.width = "33";
        document.getElementById(id).appendChild(img);
        if (cherry1 === 0) {
            var add6 = document.createElement("img");
            add6.src = "pacman_cherries.png";
            add6.width = "50";
            add6.style.top = x3 + "px";
            add6.style.left = left3 + "px";
            add6.style.position = "fixed";
            document.getElementById(id6).appendChild(add6);
        }
    }
}

function Road1() {
    if (r < 2) {
        if (id3 === id) {
            $("img").remove();
            var add3 = document.createElement("img");
            add3.src = "unnamed.png";
            add3.width = "36";
            add3.style.top = x + "px";
            add3.style.left = left + "px";
            add3.style.position = "fixed";
            document.getElementById(id3).appendChild(add3);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id3 = a + "_" + (++b);
        left = left + 95;
        ++r;
    } else if (r < 7) {
        if (id3 === id) {
            $("img").remove();
            var add3 = document.createElement("img");
            add3.src = "unnamed.png";
            add3.width = "36";
            add3.style.top = x + "px";
            add3.style.left = left + "px";
            add3.style.position = "fixed";
            document.getElementById(id3).appendChild(add3);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id3 = (++a) + "_" + b;
        x = x + 80;
        ++r;
    } else if (r < 9) {
        if (id3 === id) {
            $("img").remove();
            var add3 = document.createElement("img");
            add3.src = "unnamed.png";
            add3.width = "36";
            add3.style.top = x + "px";
            add3.style.left = left + "px";
            add3.style.position = "fixed";
            document.getElementById(id3).appendChild(add3);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id3 = a + "_" + (--b);
        left = left - 95;
        ++r;
    } else if (r < 14) {
        if (id3 === id) {
            $("img").remove();
            var add3 = document.createElement("img");
            add3.src = "unnamed.png";
            add3.width = "36";
            add3.style.top = x + "px";
            add3.style.left = left + "px";
            add3.style.position = "fixed";
            document.getElementById(id3).appendChild(add3);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id3 = (--a) + "_" + b;
        x = x - 80;
        ++r;
        if (r === 14) {
            r = 0;
        }
    }
}

function Road2() {
    if (r1 < 2) {
        if (id4 === id) {
            $("img").remove();
            var add4 = document.createElement("img");
            add4.src = "580b57fcd9996e24bc43c31b.png";
            add4.width = "36";
            add4.style.top = x1 + "px";
            add4.style.left = left1 + "px";
            add4.style.position = "fixed";
            document.getElementById(id4).appendChild(add4);;
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id4 = c + "_" + (++d);
        left1 = left1 + 95;
        ++r1;
    } else if (r1 < 7) {
        if (id4 === id) {
            $("img").remove();
            var add4 = document.createElement("img");
            add4.src = "580b57fcd9996e24bc43c31b.png";
            add4.width = "36";
            add4.style.top = x1 + "px";
            add4.style.left = left1 + "px";
            add4.style.position = "fixed";
            document.getElementById(id4).appendChild(add4);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id4 = (++c) + "_" + d;
        x1 = x1 + 80;
        ++r1;
    } else if (r1 < 9) {
        if (id4 === id) {
            $("img").remove();
            var add4 = document.createElement("img");
            add4.src = "580b57fcd9996e24bc43c31b.png";
            add4.width = "36";
            add4.style.top = x1 + "px";
            add4.style.left = left1 + "px";
            add4.style.position = "fixed";
            document.getElementById(id4).appendChild(add4);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id4 = c + "_" + (--d);
        left1 = left1 - 95;
        ++r1;
    } else if (r1 < 14) {
        if (id4 === id) {
            $("img").remove();
            var add4 = document.createElement("img");
            add4.src = "580b57fcd9996e24bc43c31b.png";
            add4.width = "36";
            add4.style.top = x1 + "px";
            add4.style.left = left1 + "px";
            add4.style.position = "fixed";
            document.getElementById(id4).appendChild(add4);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id4 = (--c) + "_" + d;
        x1 = x1 - 80;
        ++r1;
        if (r1 === 14) {
            r1 = 0;
        }
    }
}

function Road3() {
    if (r2 < 4) {
        if (id5 === id) {
            $("img").remove();
            var add5 = document.createElement("img");
            add5.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
            add5.width = "36";
            add5.style.top = x2 + "px";
            add5.style.left = left2 + "px";
            add5.style.position = "fixed";
            document.getElementById(id5).appendChild(add5);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id5 = e + "_" + (++f);
        left2 = left2 + 95;
        ++r2;
    } else if (r2 < 7) {
        if (id5 === id) {
            $("img").remove();
            var add5 = document.createElement("img");
            add5.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
            add5.width = "36";
            add5.style.top = x2 + "px";
            add5.style.left = left2 + "px";
            add5.style.position = "fixed";
            document.getElementById(id5).appendChild(add5);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id5 = (++e) + "_" + f;
        x2 = x2 + 80;
        ++r2;
    } else if (r2 < 12) {
        if (id5 === id) {
            $("img").remove();
            var add5 = document.createElement("img");
            add5.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
            add5.width = "36";
            add5.style.top = x2 + "px";
            add5.style.left = left2 + "px";
            add5.style.position = "fixed";
            document.getElementById(id5).appendChild(add5);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id5 = e + "_" + (--f);
        left2 = left2 - 95;
        ++r2;
    } else if (r2 < 15) {
        if (id5 === id) {
            $("img").remove();
            var add5 = document.createElement("img");
            add5.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
            add5.width = "36";
            add5.style.top = x2 + "px";
            add5.style.left = left2 + "px";
            add5.style.position = "fixed";
            document.getElementById(id5).appendChild(add5);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id5 = (--e) + "_" + f;
        x2 = x2 - 80;
        ++r2;
    } else if (r2 < 16) {
        if (id5 === id) {
            $("img").remove();
            var add5 = document.createElement("img");
            add5.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
            add5.width = "36";
            add5.style.top = x2 + "px";
            add5.style.left = left2 + "px";
            add5.style.position = "fixed";
            document.getElementById(id5).appendChild(add5);
            show = 3;
            when = 3;
            s = 0;
            document.getElementById("p1").textContent = "YOU LOSE !";
            document.getElementById("p2").textContent = "PRESS R TO REPLAY ";
        }
        id5 = e + "_" + (++f);
        left2 = left2 + 95;
        ++r2;
        if (r2 === 16) {
            r2 = 0;
        }
    }
}

function ShowCherry() {
    var add6 = document.createElement("img");
    add6.src = "pacman_cherries.png";
    add6.width = "50";
    add6.style.top = x3 + "px";
    add6.style.left = left3 + "px";
    add6.style.position = "fixed";
    document.getElementById(id6).appendChild(add6);
    cherry1 = 0;
    ++cherry2;
}

function RemoveCherry() {
    $("img").remove();
    cherry1 = 1;
    if (cherry2 === 2) {
        id6 = 4 + "_" + 7;
        x3 = 415;
        left3 = 900;
    }
    if (cherry2 === 3) {
        id6 = 6 + "_" + 7;
        x3 = 580;
        left3 = 900;
    }
    if (cherry2 === 4) {
        id6 = 3 + "_" + 4;
        x3 = 335;
        left3 = 615;
        cherry2 = 1;
    }
    if (s === 1) {
        if (cherry3 === 0) {
            var img = document.createElement("img");
            img.src = dir;
            img.width = "33";
            document.getElementById(id).appendChild(img);
        }
        var add5 = document.createElement("img");
        add5.src = "1a23ca73f33f1a06262bdced6d5d66cb.png";
        add5.width = "36";
        add5.style.top = x2 + "px";
        add5.style.left = left2 + "px";
        add5.style.position = "fixed";
        document.getElementById(id5).appendChild(add5);
        var add4 = document.createElement("img");
        add4.src = "580b57fcd9996e24bc43c31b.png";
        add4.width = "36";
        add4.style.top = x1 + "px";
        add4.style.left = left1 + "px";
        add4.style.position = "fixed";
        document.getElementById(id4).appendChild(add4);
        var add3 = document.createElement("img");
        add3.src = "unnamed.png";
        add3.width = "36";
        add3.style.top = x + "px";
        add3.style.left = left + "px";
        add3.style.position = "fixed";
        document.getElementById(id3).appendChild(add3);
    }

}

function play() {
    var audio = new Audio('../pac man/opening_song.mp3.mp3');
    if (music === 1) { audio.play(); }
    if (music === 2) {
        timemusic = timemusic + 4000;
    }
}