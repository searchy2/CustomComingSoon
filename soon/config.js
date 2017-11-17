'use strict';



var background ={

       //  CHOOSE ON OF THIS OPTION      
       // OPTION : 'gradient' , 'image' , 'slideShow' 

       type   : 'image',



       //OPTION :'bg-color-one','bg-color-two','bg-color-three','bg-color-four'
      
       gradient  : 'bg-color-one',

       image : {
           
           // choose image for background
          image_url : "assets/img/background.jpg"

        },
       
       //Option : ture ,false "activate or deactivate particle"
       particle : true

      } ;




/**************************
 **		countDwon      **   
 **************************/

var counter = {
        

        // "counter-one", "counter-two","counter-three","counter-four"

		style : 'counter-three',

    launchDate : {


          // OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
          
          Month: 'December',


          //  DAY : INTEGER[ 1 - 31 ]

          Day: 1,


           // YEAR : INTEGER

          Year: 2017
    }
		
	};

/**************************
 **		Ajax Chimp       **   
 **************************/

$("#subscribe_form").ajaxChimp({


	// Replace your mailchimp post url inside double quote "".
    
    url: "//novisdev.us15.list-manage.com/subscribe/post?u=202b79afea96f1d57561896f5&amp;id=02ba748be1"    
 
  });


















