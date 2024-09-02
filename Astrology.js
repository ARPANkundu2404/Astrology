function CheckZodiacSign() {
    var sign1= document.getElementById('Sign1')
    var sign2= document.getElementById('Sign2');
    
    if(sign1.options[sign1.selectedIndex].text == sign2.options[sign2.selectedIndex].text)
    {
    alert("Please select different Zodiac signs.");
    return false;
    }
    else
    {
    return true;
    }
    
}
    
function Result() {
    
    //to store the compatibility scores
    var compatibilityScore = 0;
    
    //get the selected values
    var sign1 = document.getElementById("Sign1").value;
    var sign2 = document.getElementById("Sign2").value;
    
    // The twelve zodiac signs
    var signArray = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    
    // Zodiac sign compatibility matrix
    // A higher number indicates higher compatibility
    var compatibilityMatrix = [[2, 3, 4, 6, 5,6, 8, 7, 8, 7, 6, 8],
    [3, 2, 6, 5,6, 8, 7, 8, 7, 6, 8, 4],
    [4, 6, 3, 6,5, 8, 7, 8, 7, 6, 8, 3],
    [6, 5, 6, 2, 5,8, 7, 8, 7, 6, 8, 4],
    [5, 6, 5, 5, 3,8, 7, 8, 7, 6, 8, 4],
    [6, 8, 8, 8, 8,2, 3, 4, 6, 5, 6, 8],
    [8, 7, 7, 7, 7,3, 2, 6, 5, 6, 8, 4],
    [7, 8, 8, 8, 8,4, 6, 3, 6, 5, 6, 8],
    [8, 7, 7, 7, 7,6, 5, 6, 2, 5, 8, 4],
    [7, 6, 6, 6, 6,5, 6, 5, 5, 3, 8, 4],
    [6, 8, 8, 8, 8,6, 8, 8, 8, 8, 2, 3],
    [8, 4, 3, 4, 4,8, 4, 8, 4, 4, 3, 2]];
    
    //get the index of the both signs
    var sign1Index = signArray.indexOf(sign1);
    var sign2Index = signArray.indexOf(sign2);
    
    //check if signs entered are valid
    if(sign1Index >= 0 && sign2Index >= 0) {
    compatibilityScore = compatibilityMatrix[sign1Index][sign2Index];
    }
    
    //to set the result message
    switch(compatibilityScore) {
    case 0:
    var message = "Compatibility score is 0<br>Try inputing valid Zodiac signs";
    break;
    case 2:
    var message = "Compatibility score is 2<br>Ouch!! These signs are not compatible";
    break;
    case 3:
    var message = "Compatibility score is 3<br>These signs have some potential, but need more understanding";
    break;
    case 4:
    var message = "Compatibility score is 4<br>These signs get along quite well";
    break;
    case 5:
    var message = "Compatibility score is 5<br>These signs bond easily and relate to each other";
    break;
    case 6:
    var message = "Compatibility score is 6<br>These signs share a strong bond and are highly compatible";
    break;
    case 7:
    var message = "Compatibility score is 7<br>These signs work together in harmony and understand each other";
    break;
    case 8:
    var message = "Compatibility score is 8<br>These signs make a perfect pair and live in harmony";
    break;
    default:
    var message = "Unknown compatibility score";
    }
    
    //display the result message
    document.getElementById("result").innerHTML = message;
}
    