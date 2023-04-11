function scuberGreetingForFeet(someValue){
  let result 
  if (someValue <= 400 ) {
    result = "This one is on me!"}

  else if (someValue >400 === someValue< 2000) { 
    result = "That will be twenty bucks."}

  else if (someValue > 2000 === someValue<2500) {
    result = "I will gladly take your thirty bucks."}

  else if (someValue > 2500) {
    result= "No can do."
  }
 
  return result
  
}
scuberGreetingForFeet(199)



function ternaryCheckCity(cityChecks){
 return cityChecks=== "NYC" ? "Ok, sounds good." : "No go."
}

cityChecks(NYC)

function switchOnCharmFromTip(tip) {

switch (tip) {
  case 'not as generous' : return 'Thank you.';
    break;
  
  case 'generous': return 'Thank you so much.';
    break;


  default: return 'Bye.';
    break;

}
}

switchOnCharmFromTip()