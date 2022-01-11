function checkMyFields()
{
var MyTXT1
var MyTXT2
var MyTXT3
var MyTXT4
MyTXT1 = document.Fin.txt1.value;
MyTXT2 = document.Fin.txt2.value;
MyTXT3 = document.Fin.txt3.value;
MyTXT4 = document.Fin.txt4.value;
if (MyTXT1 == "")
	{
	alert("Please indicate who the caller was.");	
	return false;
	}
if (MyTXT2 == "")
	{
	alert("Please indicate why the call was made");	
	return false;
	}
if (MyTXT3 == "")
	{
	alert("Please indicate what actions were taken.");	
	return false;
	}
if (MyTXT4 == "")
	{
	MyTXT4 = "None"; // no actions ebcause this is not a required field
	}

} //This scipt does not allow to submit form if the require fields are not complete