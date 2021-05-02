// 1.) 12AM => 00
// 2.) 1AM to 12 PM -> do nothing
// 3.) 1PM to 11 PM -> take hour , add 12 

 function timeConversion(s){
     let amPm = s.charAt(8);
     let militaryHour ="";
     if (amPm === "A"){
         if(s.substring(0,2)=="12"){
            militaryHour ="00";
         }
         else{
            militaryHour = s.substring(0,2);
         }
     }
     else {
        //  "PM"
        if(s.substring(0,2) ==="12") {
            militaryHour = s.substring(0,2);
        }
        else{
            militaryHour =parseInt(s.substring(0,2),10 ) + 12;
        }
     }
     return militaryHour +s.substring(2,8);
 }