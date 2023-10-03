var n = 1;
var ran = 0;
var sc = 0;

const button = document.getElementById("myButton");
const B1 = document.getElementById("B1")
const B2 = document.getElementById("B2")
const box = document.getElementById("demo")
const Ans1 = document.getElementById("demo1")
const Ans2 = document.getElementById("demo2")
const n1 = document.getElementById("n")
const BA1 = document.getElementById("A1")
const BA2 = document.getElementById("A2")
const F = document.getElementById("F1")
const T = document.getElementById("T1")
const st = document.getElementById("start")
const imgf = document.getElementById("imgf1")
const imgs = document.getElementById("imgs1")
const imgse = document.getElementById("imgse")

B1.style.display = "none";

function random(x,a1,a2){ 
    st.innerHTML = "Next"
    console.log(sc)
    button.style.display = "none";
    ran = Math.floor(Math.random() * 2) + 1;
    console.log("Ans" + ran)
    n1.innerHTML = n;
    box.innerHTML = x;
    box.style.fontSize = "450%";
    box.style.top = "-40px";
    if (ran == 1) {
        Ans1.innerHTML = a2; 
        Ans2.innerHTML = a1;
    } else if (ran == 2) {
        Ans2.innerHTML = a2;
        Ans1.innerHTML = a1;
    }
}

function hall() {
    if (button.style.display == "none") {
        imgs.style.display = "none";
        imgse.style.display = "none";
        imgf.style.display = "none";
        B1.style.display = "none"
        B2.style.display = "none"
        BA1.style.display = "none"
        BA2.style.display = "none"
        F.style.display = "inline"
        button.style.display = "inline"
        imgf.style.display = "none";
    }
}

function Tehall() {
    if (button.style.display == "none") {
        imgs.style.display = "none";
        imgse.style.display = "none";
        imgf.style.display = "none";
        B1.style.display = "none"
        B2.style.display = "none"
        BA1.style.display = "none"
        BA2.style.display = "none"
        T.style.display = "inline"
        button.style.display = "inline"
    }
}

function q() {
    if (n == 1) {
        random("จงหาคำตอบ [(1+1+1)(2+3)(1+1)(2X10¹)+30+(10-3)]","Leg","Look")
        box.style.fontSize = "280%";
        box.style.top = "-10px";
    } else if (n == 2) {
        random("จงหาคำตอบ 5!+173+4!","Lie","Line")
    } else if (n == 3) {
        random("A={616,617,618} B={618,619,620} หาสมาชิกของ A∩B","Big","Sad")
        box.style.fontSize = "250%";
        box.style.top = "-10px";
    } else if (n == 4) {
        random("กำหนดให้ประพจน์ p เป็นเท็จ q เป็นจริง และ r เป็นจริง<br> ก. (q∧p)↔[(rv~p)→q] มีค่าความจริงเป็นจริง ถ้าประพจน์นี้ถูก = 14 ถ้าผิด = 20 <br>ข. [pv(~q→p)]∧r มีค่าความจริงเป็นเท็จ ถ้าประพจน์นี้ถูก = 20 ถ้าผิด = 14 <br>หาคำตอบ ก+ข","He","Lie")
        box.style.fontSize = "185%";
        B1.style.height = "180px";
        box.style.top = "-10px";
    } else if (n == 5) {
        random("339 < x < 337 หาค่า x","Bee","Fun")
    } else if (n == 6) {
        random("จงหาค่าของ 1000-337","Egg","Bee")
    } else if (n == 7) {
        random("","oil","out")
        imgf.style.display = "inline";
        B1.style.height = "400px"
        B1.style.backgroundColor = "white"
        B1.style.border = "2px solid white"
    } else if (n == 8) {
        random("","she","son")
        imgs.style.display = "inline";
        B1.style.height = "400px"
        B1.style.backgroundColor = "white"
        B1.style.border = "2px solid white"
    } else if (n == 9) {
        random("","see","sir")
        imgse.style.display = "inline";
        B1.style.height = "400px"
        B1.style.backgroundColor = "white"
        B1.style.border = "2px solid white"
    } else if (n == 10) {
        random("ลูกบอล 1 ลูก มีเส้นผ่านศูนย์กลางยาว 28 ซม. จงหารัศมีของลูกบอล","Hi","Ok")
        box.style.fontSize = "300%";
        B1.style.height = "120px"
    } else if (n == 11) {
        st.innerHTML = "Start";
        n = 1;
        imgs.style.display = "none";
        imgse.style.display = "none";
        imgf.style.display = "none";
        B1.style.display = "none"
        B2.style.display = "none"
        BA1.style.display = "none"
        BA2.style.display = "none"
    }
}

function rehall() { 
    B1.style.height = "140px"
    B1.style.backgroundColor = "rgb(255, 217, 0)"
    B1.style.border = "2px solid #000000"
    F.style.display = "none"
    T.style.display = "none"
    B1.style.removeProperty("display")
    B2.style.display = "inline"
    BA1.style.display = "inline"
    BA2.style.display = "inline"
    Ans1.innerHTML = ""; 
    Ans2.innerHTML = "";
    n1.innerHTML = "";
    box.innerHTML = "";
    if (B1.style.height !== "100px") {
        B1.style.height = "100px";
    }
    q()
}

button.addEventListener("click", function() {
    if (st.innerHTML == "Next" || st.innerHTML == "Start") {
        rehall()
    }
});

Ans1.addEventListener("click",function() {
    if (ran == 1){
        n += 1
        hall()
    } else {
        sc += 1
        n += 1
        Tehall()
    }
})

Ans2.addEventListener("click",function() {
    if (ran == 2){
        n += 1
        hall()
    } else {
        sc += 1
        n += 1
        Tehall()
    }
})