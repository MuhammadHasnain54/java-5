let number = prompt("Enter a Table Number");

document.write(" <h2><center>Table Of  " , number , "  is <br> <center> </h2>" );
for (let i = 1 ; i <=10 ; i++) {
    document.write("<br><center>", number , " x " , i , " = " ,  number * i  ,"</center> <br>");

}

