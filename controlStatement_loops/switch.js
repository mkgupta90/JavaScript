

var area ="ractangle";
var PI = 3.14, r=3, l=5, b=4; 
switch(area) {
    case "circle" : 
       console.log("The Area of the circle is : " +  (PI**2) );
    break;

    case "triangle" :
        console.log("The area of triangle is  :" + (l*b) / 2);
    break;    
    
    case "ractangle" :
        console.log("The area of Ractangle is :" + (l*b));
    break;    
    
        default :
        console.log("Input Valid Data");
}