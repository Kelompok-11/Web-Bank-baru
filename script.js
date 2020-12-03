var id, password, infoname, balance, typemoney, joindate, country  = new Array();
var account = new Array();
var rank = new Array("Fribidium","Ruby","Sapphire","Platinum","Diamond");
id= [1, 2, 3, 4, 5];
password= [11,22,33,44,55];
infoname = ["Ferdy","Radika","Haris","Andre","Evan"];
balance = [0,0,0,0,0];
typemoney =["IDR","IDR","IDR","IDR","IDR"];
joindate = ["12/03/2019","10/02/2018","22/03/2019","10/02/2018","11/11/2018"];
country = ["Indonesia", "Indonesia", "Indonesia","Indonesia","Indonesia"]
for (i = 0; i < id.length; i++){
	account[i] = parseInt(balance[i]);
}
var i = 0;
var success = -1;

function Login(){
	for (i = 0; i< id.length; i++){
		if ((document.getElementById("idname").value == id[i]) && (document.getElementById("pass").value == password[i])) {
            document.getElementById("loginaccount").style.display = 'none';
            document.getElementById("manageaccount").style.display = 'block';
            document.getElementById("content").style.display = 'block';
            document.getElementById("content2").style.display = 'block';
            document.getElementById("content3").style.display = 'block';
                alert("Logged in, Welcome " + infoname[i]);
        		success=i;
        		prjoindate=joindate[i];
        		prname=infoname[i];
				prbalance=account[i];
				prtypemoney= typemoney[i];
				prcountry = country[i];
				prrank = rank[i];
			//window.location.pathname = "page.html"; <--- placeholder
			document.getElementById("joindate").innerHTML ="Member since "+prjoindate;
			document.getElementById("infoname").innerHTML = prname;
			document.getElementById("infoname2").innerHTML = prname;
			document.getElementById("balance").innerHTML = prbalance;
			document.getElementById("typemoney").innerHTML = prtypemoney;
			document.getElementById("country").innerHTML =prcountry;
			document.getElementById("rank").innerHTML ="Package " +prrank;
        }
	}
	if (success == -1) {
        alert("The account or password is incorrect, please try again");
    }
}


function Deposit() {
	document.getElementById("errortick").style.display = 'none';
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
    var input = document.getElementById("Depositinput").value;
    if (input<0) {
    	document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';
    }else{
    input = parseInt(input);
    account[success] += input;
    prbalance=account[success];
    document.getElementById("balance").innerHTML =prbalance;  
    document.getElementById("notification") .innerHTML= "You have add Rp."+input+" on your balance";
    }
}

function Withdrawl() {
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
	var input = document.getElementById("Withdrawlinput").value;
	if (input<0) {
		document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';	
    } else if (input != parseInt(input)) {
    	 document.getElementById("notick").style.display = 'none';
    	 document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "You entered the wrong format. Please enter a number ";
    } else if (account[success] - parseInt(input) >= 1) {
    	document.getElementById("errortick").style.display = 'none';
        account[success] -= parseInt(input);
        document.getElementById("notification").innerHTML = "Rp. " + input + " has Withdrawed";
        prbalance=account[success];
        document.getElementById("balance").innerHTML =prbalance;
    } else if (account[success] - parseInt(input) < 0) {
    	document.getElementById("notick").style.display = 'none';
    	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Error. The balance is not sufficient to request Withdrawl";
    } else {
    	document.getElementById("notick").style.display = 'none';
    	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Error. Your balance is " + account[success] + " IDR. You need more 1 IDR to request";
    }
}

function Logout() {
    document.getElementById("loginaccount").style.display = 'block';
    document.getElementById("formlogin").reset();
    document.getElementById("manageaccount").style.display = 'none';
            document.getElementById("content").style.display = 'none';
            document.getElementById("content2").style.display = 'none';
            document.getElementById("content3").style.display = 'none';
}
function Transfers(){
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
	var inputmoney = document.getElementById("moneynumber").value;
	inputmoney = parseInt(inputmoney);
	var input = document.getElementById("accountnumber").value;
	var k=0;
	for (i = 0; i < id.length; i++){		
		if ((input == id[i] && inputmoney > 0 && account[success]-inputmoney > 0)){
			k=1;
			account[success] -= inputmoney;
			prbalance = account[success];
			account[i] += inputmoney;
			document.getElementById("errortick").style.display = 'none';
			document.getElementById("balance").innerHTML = prbalance;
			document.getElementById("notick").style.display = 'block';
			document.getElementById("notification") .innerHTML= "You have send Rp. "+inputmoney+" to "+infoname[i];
			break;
		}
		else {
			document.getElementById("errortick").style.display = 'block';
			document.getElementById("notick").style.display = 'none';
			document.getElementById("notification") .innerHTML= "Invalid Number";
		}
	}
}

function Change() {
	document.getElementById("changepass").style.display = 'block';
	document.getElementById("changeimg").style.display = 'block';
	document.getElementById("no").style.display = 'none';
	document.getElementById("notick").style.display = 'none';
    document.getElementById("errortick").style.display = 'none';
}
function Changepassword(){
	if (document.getElementById("passcurrent").value == password[success] && document.getElementById("passnew").value == document.getElementById("passnewrepeat").value) {
        password[success] = document.getElementById("passnew").value;
        document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';
	document.getElementById("notification") .innerHTML= "Your password has been changed";
    } else {
    	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';
	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'none';
	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification") .innerHTML= "Invalid Password";
    }
}

function Detail(){
	
}








