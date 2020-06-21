//chapter21-25......................................
//task1
// var fname;
// var lname;
// var fname;
// fname = window.prompt('your fname');
// lname = window.prompt('your lname');
// fname = fname + "" + lname;
// alert(fname);




//task2

// var inputt;
// inputt = window.prompt('your mobilemodel');
// var num;
// num = inputt.length; 
// alert(num);


//task3

// var name = "pakistani";
// var res =name.search("n");
// alert(res);

//task4
// var name = "Hello World";
//  var res =name.lastIndexOf('l')
// alert(res);

 
//task5
// var name = "Pakistani";
//  var res =name.IndexOf('l')
// alert(res);

//task6

// var name = "hyderabad is a beautiful city";

// var res = name.replace("hyder", "islam");
// alert(res);



//task7
// var message = " Ali & Sami are best friends. They play cricket & play together"
// var res = message.replace("&", "and");
// alert(res);



//task8

// var num = "472";
// var check = typeof(num);
// alert(check);
// // var convet;
// Number(num);
// alert(num);
// var chek = typeof(num);
// alert(chek);


//task9

// var msg;
//  msg = window.prompt('your msg');
//  var MSGG;
//  MSGG = msg.toUpperCase();
// alert(MSGG);



//task10
// var str ="javascript"
// str = str.toLowerCase();
// str = str.split(' ');
// for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     return str.join(' ');}



//task12
// const num = 35.36;
// const without = num.toString().replace(".", ""); 
// alert(without)


//task13

// var name;
// var greeting;
// name =window.prompt("your name");
// if (name == "@" && name== " ! " && name == "," && name == ".") {
//     greeting = "enter correct name";
//   }

//task14
 
// var name =window.prompt("your name");
// var arr = [  'applepie','cookie', 'chips', 'patties']
// var msg =arr.includes(name);
// var msgtwo = arr.indexOf(name);
//     if (msg ="true");
//     {
//         alert( msg + "is avilabe at index" + msgtwo);
//     }


//task15


// var password = window.prompt("your password");

// if(password =   /^[A-Za-z]\w{7,14}$/);
// {
//     return true;



// }



//task17

// var str = "PAKISTAN";
// var character = str.charAt(7);
// alert(character);



//task18



// var r = "the quick brown fox jumps over the lazy dog ";
// var ch = "the";
// var count = r.split(ch).length-1;
// alert(count);



// ......................................................................chapter26-30............................................

//task1

// num = window.prompt('your num');
// alert(num)
// alert(Math.round(num));
// alert(Math.floor(num));
// alert(Math.ceil(num));




//task2
// num = window.prompt('your negative num');
// alert(num)
// alert(Math.round(num));
// alert(Math.floor(num));
// alert(Math.ceil(num));




//task3
// num = window.prompt('your negative num');
// alert(Math.abs(num))

//task4
// Math.floor(Math.random() * 6);
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);




//task5
// Math.floor(Math.random() * 2);
// var diceRoll = Math.floor( Math.random() * 2 ) +1;
// alert('You rolled a ' + diceRoll);


//task6

// Math.floor(Math.random() * 100);
// var diceRoll = Math.floor( Math.random() *100 ) +1;
// alert('You rolled a ' + diceRoll);



//task8
//  Math.floor(Math.random() * 10);
//  var diceRoll = Math.floor( Math.random() *10 ) +1;
// alert('You rolled a ' + diceRoll);

// var inputt;
// inputt = window.prompt('your mobilemodel');
// if(inputt== diceRoll){
//     alert("same number");
// }
// else{
//     alert("not same")
// }




// ....................................................chapter31-34.......................................


// task1
// var d = new Date();
// alert(d);

// task2

// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";
//   var d = new Date();
//   var n = month[d.getMonth()];
//   alert(n)


//task3



// var month = new Array();
//   month[0] = "Sun";
//   month[1] = "Mon";
//   month[2] = "Tue";
//   month[3] = "Wed";
//   month[4] = "Thu";
//   month[5] = "Fri";
//   month[6] = "Sat";
 
//   var d = new Date();
//   var n = month[d.getDay()];
//   alert(n);


//task4
// var d = new Date();

// var n = d.getDay();




//   if( n == 0 )
// {
//     alert(" It’s Fun day")

// }
// if (n == 6)
// {
//     alert(" It’s Fun day")
 
// }


//task5
// from_date ='16-06-2020'
// var g1 = new Date();
// if (from_date < g1 ) 
//         {
//             alert("First fifteen days of the month if the date is less than 16th of the month else shows")

            
//         }
//         else{
//             alert("its last days")
//         }




//task6

var d = new Date();
alert(d);
var startTime, endTime;

function start() {
  startTime = performance.now();
};

function end() {
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms 
  // strip the ms 
  timeDiff /= 1000; 
  
  // get seconds 
  var seconds = Math.round(timeDiff);
  alert(seconds + " seconds");
}