var tic = [   [document.getElementById("one"),
               document.getElementById("two"),
               document.getElementById("three")],
             [ document.getElementById("four"),
               document.getElementById("five"),
               document.getElementById("six")],
             [ document.getElementById("seven"),
               document.getElementById("eight"),
               document.getElementById("nine")]];
var turn = document.querySelector("span");
var message = document.getElementById("winmes");
var player1 = true;
var board = [[0,0,0],[0,0,0],[0,0,0]];
var win ;
var playerSet ;
var reset = document.getElementById("reset");


tic[0][0].addEventListener("click",function(){if (player1) {tic[0][0].classList.add("player1");} else {tic[0][0].classList.add("player2");}tic[0][0].disabled = true;if(player1){board[0][0]=1;}else{board[0][0]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[0][1].addEventListener("click",function(){if (player1) {tic[0][1].classList.add("player1");} else {tic[0][1].classList.add("player2");}tic[0][1].disabled = true;if(player1){board[0][1]=1;}else{board[0][1]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[0][2].addEventListener("click",function(){if (player1) {tic[0][2].classList.add("player1");} else {tic[0][2].classList.add("player2");}tic[0][2].disabled = true;if(player1){board[0][2]=1;}else{board[0][2]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[1][0].addEventListener("click",function(){if (player1) {tic[1][0].classList.add("player1");} else {tic[1][0].classList.add("player2");}tic[1][0].disabled = true;if(player1){board[1][0]=1;}else{board[1][0]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[1][1].addEventListener("click",function(){if (player1) {tic[1][1].classList.add("player1");} else {tic[1][1].classList.add("player2");}tic[1][1].disabled = true;if(player1){board[1][1]=1;}else{board[1][1]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[1][2].addEventListener("click",function(){if (player1) {tic[1][2].classList.add("player1");} else {tic[1][2].classList.add("player2");}tic[1][2].disabled = true;if(player1){board[1][2]=1;}else{board[1][2]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[2][0].addEventListener("click",function(){if (player1) {tic[2][0].classList.add("player1");} else {tic[2][0].classList.add("player2");}tic[2][0].disabled = true;if(player1){board[2][0]=1;}else{board[2][0]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[2][1].addEventListener("click",function(){if (player1) {tic[2][1].classList.add("player1");} else {tic[2][1].classList.add("player2");}tic[2][1].disabled = true;if(player1){board[2][1]=1;}else{board[2][1]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});
tic[2][2].addEventListener("click",function(){if (player1) {tic[2][2].classList.add("player1");} else {tic[2][2].classList.add("player2");}tic[2][2].disabled = true;if(player1){board[2][2]=1;}else{board[2][2]=2;};if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();}if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===playerSet){message.textContent="Player "+playerSet+" wins";disablef();};player1 = !player1;if (player1) {turn.textContent = "Player 1";}else{turn.textContent = " Player 2"};});

reset.addEventListener("click",function(){location.reload();} );


 function horitest(a)
{
    var flag = 0;
    for(var i = 0 ; i<3 ; i++)
    {
        if(flag === a)
        {
            return a;
        }
        else 
        {    
            for(var j = 0; j<3 ; j++)
            {
                if(board[i][j] === a)
                flag = a;
                else
                flag = 0;
                if(flag === 0)
                break;
            }    
        }
    }        return flag;
};

function vertitest(x)
{
    var flag = 0;
    for(var i=0;i<3;i++)
    {
        if(flag === x)
        {
             return x;
        }
        else 
        {    
            for(var j=0;j<3;j++)
            {
                if(board[j][i] === x)
                flag=x;
                else
                flag=0;
                if(flag === 0)
                break;   
           }
        }
    }    return flag;    
};

function diagonaltest(x)
{
        if((board[0][0]===x)&&(board[1][1]===x)&&(board[2][2]===x))
        {
            return x;
        }
        if((board[0][2]===x)&&(board[1][1]===x)&&(board[2][0]===x))
        {
            return x;
        }      
};

function disablef(){
	tic[0][0].disabled = true;
	tic[0][1].disabled = true;
	tic[0][2].disabled = true;
	tic[1][0].disabled = true;
	tic[1][1].disabled = true;
	tic[1][2].disabled = true;
	tic[2][0].disabled = true;
	tic[2][1].disabled = true;
	tic[2][2].disabled = true;

}

function checkall()
{
	for (var i = 0; i <3; i++) {
		for (var j = 0; j < 3; i++) {
			if(board[i][j]===0)
        return true;
		}
	}
	rematch();
}

function rematch()
{
	setTimer(function(){
		location.reload()
	},3000);
};

// if(player1===true){playerSet=1}else playerSet=2;win=horitest(playerSet);if(win===player1){message.textContent=playerSet+"wins";}
// if(player1===true){playerSet=1}else playerSet=2;win=vertitest(playerSet);if(win===player1){message.textContent=playerSet+"wins";}
// if(player1===true){playerSet=1}else playerSet=2;win=diagonaltest(playerSet);if(win===player1){message.textContent=playerSet+"wins";}


  //  tic[0][0] = document.getElementById("one");
  //  tic[0][1] = document.getElementById("two");
  //  tic[0][2] = document.getElementById("three");
  //  tic[1][0] = document.getElementById("four");
  //  tic[1][1] = document.getElementById("five");
  //  tic[1][2] = document.getElementById("six");
  //  tic[2][0] = document.getElementById("seven");
  //  tic[2][1] = document.getElementById("eight");
  //  tic[2][2] = document.getElementById("nine");
  // 