// Initialize app
var myApp = new Framework7();

var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {

    dynamicNavbar: true
});

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    document.getElementById("azuriraj").disabled = true;
});



$$("#novi_kod").on('click', function (e) {


   generator =  Math.floor(Math.random()*90000) + 10000;
   document.getElementById("bar").style.display = '';
   setTimeout(prikazi, 2000);

   function prikazi() {

        document.getElementById("gotov").innerHTML = generator;
        document.getElementById("bar").style.display = 'none';
        document.getElementById("azuriraj").disabled = false;
       
   }
    
})

$$("#azuriraj").on('click', function (e) {


    document.getElementById("barAzuriraj").style.display = '';
    setTimeout(odradiAzuriranje, 2000);

    function odradiAzuriranje() {

         document.getElementById("barAzuriraj").style.display = 'none';
         document.getElementById("azuriraj").disabled = true;
        
         
         $$.ajax({
            url:'https://developer-hr.com/newkey2.php', // you can use this URL for testing purpose
            data:{code : generator},
            type:'POST',
            beforeSend: function(){
            myApp.showPreloader('Molim pričekaj...');
            },
            success: function(data) {
                myApp.hidePreloader();
                console.log(data);
                if(data != 'error') {
                    
                    myApp.alert('You can login now!', 'Success!');
                }
                else
                {
                    myApp.alert('Please try again!', 'Oops!');
                }
        
            },
            error: function(data) {
                myApp.alert('URL does not exist.', 'ERROR');
            },

            }); 

    }
 })



