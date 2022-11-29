var l = document.getElementById("l"); 
var l2 = document.getElementById("l2"); 
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4"); 
var l5 = document.getElementById("l5"); 
var cd = l.getContext("2d");
var cd2 = l2.getContext("2d");
var cd3 = l3.getContext("2d");
var cd4 = l4.getContext("2d");
var cd5 = l5.getContext("2d");
var x = 1070;
var y = 550;
var Ex = 1060;
var Ey = 540;

function Mostrar_Lineas(){
    var x = 20;
    var y = 20;
    var Ex = 1060;
    var Ey = 540;
    while(x <= Ex || y <= Ey){
        cd.strokeStyle = 'Pink';
        cd.moveTo(x, 0);
        cd.lineTo(x, Ey);
        cd.moveTo(0, y);
        cd.lineTo(Ex, y);
        cd.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    var pex = Ex / 2;
    cd2.lineWidth = 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(pex, 0);
    cd2.lineTo(pex, pex+10);
    cd2.stroke();
    var pey = Ey / 2;
    cd2.strokeStyle = 'Black';
    cd2.moveTo(0, pey-10);
    cd2.lineTo(Ex, pey-10);
    cd2.stroke();
    x = 20;
    y = 20;
    while(x <= Ex || y <= Ey){
        cd2.moveTo(x, pey-10);
        cd2.lineTo(x, pey);
        cd2.moveTo(pex+10,y);
        cd2.lineTo(pex, y);
        cd2.stroke();
        y = y + 30;    
        x = x + 30;    
    }
    x = 20;
    y = 20;
    var Number = 0;
    Eje_Plano_Y();    
}
function Eje_Plano_Y(){
    var pex = Ex / 2;
    var pey = Ey / 2;
    x = 20;
    y = 20;
    var Number = 1;
    while(y <= Ey){
        cd2.fillText("-"+Number, pex+14, pey+2+y, 200); //y+
        cd2.fillText(Number, pex+14, pey-17-y, 200); //y-
        Number = Number+1;
        y = y + 30;      
    }
    Number = 1;
    while(x <= Ex+150){
        cd2.fillText(Number, pex+6+x, pey+10, 200); //x+
        cd2.fillText("-"+Number, pex-16-x, pey+10, 200); //x-
        Number = Number+1;
        x = x + 30;   
    }
    cd2.fillText("0", pex+5, pey-15, 200); //0
    cd2.fillText("0", pex-15, pey+5, 200); //0
}
function GetData(){
    var A, B, C, D, E, F, X1, X2, X3, X4;
    var nuevoArray = new Array();
    A = document.getElementById('A').value;
    B = document.getElementById('B').value;
    C = document.getElementById('C').value;
    D = document.getElementById('D').value;
    E = document.getElementById('E').value;
    F = document.getElementById('F').value;
    X1 = document.getElementById('X1').value;
    X2 = document.getElementById('X2').value;
    X3 = document.getElementById('X3').value;
    X4 = document.getElementById('X4').value;
    Encontrar(A, B, C, D, E, F, X1, X2, X3, X4, nuevoArray)
}
function L_Uno(x3, x4, arr){
    cd5.strokeStyle = 'Green';
    cd5.lineWidth = 2;
    px1 = x/2 + (30 * x3 ) - 5
    py1 = y/2 - (30 * (arr[4]*1) ) - 15
    px2 = x/2 + (30 * x4 ) - 5
    py2 = y/2 - (30 * (arr[5]*1) ) - 15
    cd5.moveTo(px2, py2);
    cd5.lineTo(px1, py1);
    cd5.stroke();
}
function L_Dos(x1, x2, arr){
    cd4.strokeStyle = 'Blue';
    cd4.lineWidth = 2;
    px1 = x/2 + (30 * x1 ) - 5
    py1 = y/2 - (30 * arr[2]) - 15
    px2 = x/2 + (30 * x2 ) - 5
    py2 = y/2 - (30 * arr[3] ) - 15
    cd4 .moveTo(px2, py2);
    cd4.lineTo(px1, py1);
    cd4.stroke();
}
function Punto(arr){
    p1 = x/2 + (30 * arr[1]) - 5
    p2 = y/2 - (30 * arr[0]) - 15
    var r = 10;
    cd3.strokeStyle = "#006400";
    cd3.fillStyle = "Red";
    cd3.lineWidth = 5;
    cd3.arc(p1, p2, r,0,2*Math.PI);
    cd3.fill();
}
function Encontrar(a, b, c, d, e, f, x1, x2, x3, x4, arr){

        arr[0] = (a*f-d*c) / (a*e-d*b); //valor de Y
        arr[1] = (c - b*arr[0]) / a; //valor de X
        arr[2] = (c - a*x1) / b; //valor de y1
        arr[3] = (c - a*x2) / b; //valor de y2
        arr[4] = (f - d*x3) / e; //valor de y3
        arr[5] = (f - d*x4) / e; //valor de y4

        L_Uno(x3, x4, arr);
        L_Dos(x1, x2, arr);
        Punto(arr);
        
        document.getElementById('REC1').innerHTML = a+"x + "+b+"y = "+c;
        document.getElementById('REC2').innerHTML = d+"x + "+e+"y = "+f;
        console.log("P3(x3, y3) = " + "(" + x3 + "," + arr[4] + ")");
        console.log("P4(x4, y4) = " + "(" + x4 + "," + arr[5] + ")");
        document.getElementById('RX').innerHTML = "X: "+arr[1];
        document.getElementById('RY').innerHTML = "Y: "+arr[0];


        if((arr[0]) != 0)
        {
                document.getElementById('contenido').innerHTML = "punto de interseccion = " + "(" + arr[1] + "," + arr[0] + ")";
                p1 = x/2 + (30 * arr[1]) - 5
                p2 = y/2 - (30 * arr[0]) - 15
                cd2.fillText("(" + arr[1] + "," + arr[0] + ")", p1+15, p2, 200);

                px2 = x/2 + (30 * x2 ) - 5//linea 2
                py2 = y/2 - (30 * arr[3] ) - 15
                cd2.fillText(a + "x + " + b + "y = " + c, px2+10, py2, 200); 

                px2 = x/2 + (30 * x4 ) - 5//linea 1
                py2 = y/2 - (30 * (arr[5]*1) ) - 15
                cd2.fillText(d + "x + " + e + "y = " + f, px2+10, py2, 200);
        }
}
window.onload = Mostrar_Lineas();