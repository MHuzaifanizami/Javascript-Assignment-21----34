
// chapter 21 to 34  /////////////////////////////////////////////////////////

// Q no 01  ///////////////////////////////////////////////////////////////

// var firstName = prompt('Enter your first Name');
// var lastName = prompt('Enter your last Name');

// fullName = firstName + " " + lastName ;

// alert('welcome ' + fullName ) ;



// Q no 02  ////////////////////////////////////

// var usermobile = prompt('Enter your mobile model') ;
// var userLength = usermobile.length

// document.write(`My Favourite Mobile is : ${usermobile} <br> & Its Length is : ${userLength} ` );



// Q no 03 ///////////////////////////////////////

// var str = 'Pakistan';
// var strIndex = str.indexOf('n');

// document.write(`String : ${str} <br> Index of ' n' is : ${strIndex} `);


// Q no 04    /////////////////////////////////////////////////

// var str = 'Hello World';
// var strIndex = str.lastIndexOf('l');

// document.write(`String : ${str} <br> Last Index of ' l ' is : ${strIndex} `);


// Q no 05   ////////////////////////////////////////////////////

// var str = 'Pakistan';
// var index3 = str[3];

// document.write(`String : ${str} <br> Third Index of string is : ${index3} `);



// Q no 06     ////////////////////////////////////////////////

// var firstName = prompt('Enter your first Name');
// var lastName = prompt('Enter your last Name');

// firstName = firstName.concat(" " + lastName) ; 
// document.write(firstName); 



// Q no 07       ////////////////////////////////////////////////

// var city = 'Hyderabad' ; 
// var repl = city.replace('Hyder' , 'Islam');
// document.write(`City : ${city} <br> After Replace : ${repl}`);


// Q no 08  //////////////////////////////////
 
// var message = "Ali and Sami are best friends. They play cricket and football together" ; 
// var repl = message.replaceAll('and' , '&');
//  document.write(`Message : ${message} <br> After Replace : ${repl}`);

// Q no 09             //////////////////////////////////

// var str = '520';

// document.write(`Value : ${str} <br>`);

// var type = typeof(str);
// document.write(`Type : ${type} <br>`)

// var repl = Number(str);

// document.write(`Value : ${repl} <br>`);

// var type2 = typeof(repl);
// document.write(`Type : ${type2} <br>`)


// Q no 10  

// var userinp = prompt('Enter Your City');
// document.write("Userinput : "+ userinp + '<br>') ;

// var uppercase = userinp.toUpperCase() ; 
// document.write( "Upper Case : "+ uppercase) ;


// Q no 11 


// var userinp = prompt('Enter Your City');
// document.write("Userinput : "+ userinp + '<br>') ;

// var uppercase = userinp.charAt(0).toUpperCase() + userinp.slice(1);; 
// document.write( "Title Case : "+ uppercase) ;

// Q no 12  

// var num = 35.36 ;  

// var changeStr = num.toString().replace('.' , '') ;
// document.write(`Number : ${num} <br> Result : ${changeStr}`);


// Q no 13

// var str  = prompt('Enter Your Name');
// var isCheck = /[!@$%^&&*()_+{}]/ ;  

// if(isCheck.test(str)){
//     alert('invalid Name');
// }else{
//     alert('Username Accepted')
// }



// Q no 14 

// var str = ['cake', 'roll', 'pestry', 'chips', 'petties'];
// var userinp = prompt('Welcome to ABC Bakery. What you want to Order Sir / Mam');
// var flag = false ;

// for (i = 0; i < str.length; i++) {
//     if (userinp == str[i]) {

//         document.write(`${userinp}  is Avaliable at section : ${i} in our bakery`);
//         flag = true ;
//         break
//     } 
// }
//     if(flag == false){

//         document.write(`Sorry ${userinp} is not  Avaliable  in our bakery`)

//     }


// Q no 15 


// Q no 16  

// var university = 'University of Karachi' ;
// var changeStr = university.split('') ; 

// for(i=0 ; i <changeStr.length ; i++){
// document.write(changeStr[i] + '<br>')

// }

// Q no 17 

// var userinp = prompt('Enter a word') ; 

// laststr = userinp.slice(-1);
// document.write( 'User input : '+ userinp +'<br>');
// document.write('Last Character : ' + laststr);

// Q no 18  

// var str = 'the quick brown fox jumps over the lazy dog' ;

// var strCount = str.split('the').length -1 ;

// console.log(strCount)


// Chapter 26 ,,,,,,,,,,,,,,,,,,,,,, 30 /////////////////////////////

// Q no 01  

// var num = prompt('Enter a positive number');
// document.write('Number : ' + num + '<br>');

// var round = Math.round(num) ; 
// document.write('Number Round : ' + round + '<br>');

// var floor = Math.floor(num) ; 
// document.write('Number floor : ' + floor + '<br>');

// var ceil = Math.ceil(num) ; 
// document.write('Number ceil : ' + ceil + '<br>');



// Q no 02 

// var num = prompt('Enter a negative number');
// document.write('Number : ' + num + '<br>');


// var round = Math.round(num) ; 
// document.write('Number Round : ' + round + '<br>');

// var floor = Math.floor(num) ; 
// document.write('Number floor : ' + floor + '<br>');

// var ceil = Math.ceil(num) ; 
// document.write('Number ceil : ' + ceil + '<br>');


// Q no 03  


// QW no 04 

// var round1 = Math.floor(Math.random() * 6 + 1);
// var round2 = Math.floor(Math.random() * 6 + 1);

// document.write(`Random Dice Value : ${round1} <br> Random Dice Value :${round2}`)



// Q NO 05 

// var round1 = Math.floor(Math.random() * 2 + 1);


// if(round1 === 1){
    
    //     document.write(round1  + '<br>' +'Tails' )
    // }else{
        
        //     document.write(round1  + '<br>'+'Heads')
        // }
        
        


        
// Q no 06  
        
        // var round1 = Math.floor(Math.random() * 101 + 1);

        // document.write(`Random Number between 1 to 100 : ${round1}` )
        
        
    // Q no 07

//     var weight = prompt('Enter your weight');
   
// document.write('Your weight is ' + weight)


// Q no 08  

// var input = prompt('Enter a secret number');
// var num = Math.floor(Math.random(num) * 10) ; 

// if(input == num){

//     alert('Congratulations')
//     document.write('You are the winner' + '<br>');

// }else{

//     alert('Try Again')
// }

// document.write('The Secret Number Is : ' +num)


// Chapter 31 ,,,,,, 34 ////////////

// Q no 01  

// var date = new Date()
// document.write(date)

// Q no 02 

// var date = new Date();
// var months = ['january' , 'february' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september' , 'october' , 'november' , 'december'];

// document.write(months[date.getMonth()]);


// Q no 03 ////////////////////////////////

// var date = new Date();
// date = date.toString().slice(0,3);
// console.log(date);

// Q no 04  //////////////////////////////////

// var date = new Date().getDay()
//  ;
// if(date == 0 || 6){

// alert('Its Funday')
// }

// Q no 05 ////////////////////////////////////////

// var date = new Date().getDate();

// if(date <= 15 ){
//     alert('First Fifteen Days of month')
// }else{
//     alert('Last Days Of month')
// }


// Q no 06 ////////////////////////////

// var currentDate = new Date();

// var date = currentDate.getTime();

// var minute = Math.floor(date / (1000  * 60) );

// document.write(`Minutes since 1970 is : ${minute} <br> Mili-seconds since 1970 is : ${date} `)   

// Q no 07 

// Q no 08 