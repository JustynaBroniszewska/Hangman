var entry = "Hejka siemaneczko";
entry = entry.toUpperCase();
var entryAtFirst = "";
var howMuchFails = 0;
for(i=0; i<entry.length; i++)
{
    if(entry.charAt(i)==" ") entryAtFirst = entryAtFirst + " ";
    else entryAtFirst = entryAtFirst + "-";
}
function writeEntry()
{
    document.getElementById("strip").innerHTML = entryAtFirst;
}
window.onload = start;
var letters = new Array(35);
function start()
{
    var contentDiv = "";

    for(i=0; i<35; i++)
    {
        var element = "lett" + i;
        contentDiv = contentDiv + '<div class="litera" onclick="check(' + i +')" id="' + element + '">' + letters[i] + '</div>'; 
        if((i+1)%7==0) contentDiv = contentDiv + '<div style="clear:both;"></div>';
    }
    document.getElementById("alphabet").innerHTML = contentDiv;
    writeEntry();
}
String.prototype.changeChar = function(position, letter)
{
    if(position > this.length-1)
    {
        return this.toString();
    }
    else
    {
        return this.substr(0, position) + letter + this.substr(position+1);
    }
}
function check(number)
{
    var flag = false;
    for(i=0; i < entry.length; i++)
    {
        if(entry.charAt(i)==letters[number])
        {
            entryAtFirst = entryAtFirst.changeChar(i, letters[number]);
            flag = true;
        }
    }
    if(flag == true)
    {
        var element = "lett" + number;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        writeEntry();

    }
    else
    {
        var element = "lett" + number;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        howMuchFails++;
        document.getElementById("gallows").innerHTML = '<img src="img/s'+howMuchFails+'.jpg" alt="" />';
    }
    if(entry == entryAtFirst)
    {
        document.getElementById("alphabet").innerHTML = "Wygrana, zioooomuś! Odgadłeś hasło: " + entry + '<br/><br/> <span class="reset" onclick="location.reload()">JESZCZE RAZ GOŚCIU?</span>';
    }
    if(howMuchFails>=9)
    {
        document.getElementById("alphabet").innerHTML = "Przegrałeś!" + '<br/><br><span class="reset" onclick="location.reload()">JESZCZE RAZ GOŚCIU?</span>';
    }
}
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";
