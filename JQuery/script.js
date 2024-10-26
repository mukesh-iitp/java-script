// var para1 = document.getElementById("para1");
// para1.innerHTML = "Welcome!";


// $('#para1').hide();

// $('p').html('welcome');

// $('#para1').width(100);

// $('#para1').html('Welcome!');

/*
    function $(query){
        return document.querySelector(query);
    }
 */

//Changing css

// $('#para1').css('color','red');

// $('p').css('color','red');
// $('p').css('fontSize','30px');

$( 'p' ).css({
    color: "red",
    fontSize: "30px"
});

$('div').css({
    width: '100px',
    height: '100px',
    backgroundColor: 'cyan'
});

// $('div').click(function(){
//     alert('Div Clicked!');
// });

$('div').on('click',function(){
    var element = $(this);
    element.width(element.width()+30+'px');
    alert('Div Clicked!');
});


$('a').on('click', function(){
    alert('Anchor tag clicked!');
});

$('a').on('click', function(event){
    event.preventDefault();
    alert('Anchor tag clicked!');
});