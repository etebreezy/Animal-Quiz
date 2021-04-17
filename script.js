// JavaScript Code
let oneVal = 0;
let twoVal = 0;
let threeVal = 0;
let fourVal = 0;
let fiveVal = 0;
let sixVal = 0;
let sevenVal = 0;
let eightVal = 0;
let nineVal = 0;
let tenVal = 0;

// Jquery Code
$(document).ready(() => {

    // Gallery slide show
    let galleryImage = $('.gallery').find('img').first();
    let images = [
        'karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg',
        'andre-ouellet-b1bgPw5sLus-unsplash.jpg',
        'daiga-ellaby-39DYsZsFl84-unsplash.jpg',
        'dulcey-lima-YPqOllCcFJA-unsplash-1.jpg', 
        'geran-de-klerk-f0oe9P9Yixs-unsplash.jpg',   
        'jamie-turner-otiAmPHP26A-unsplash.jpg',   
        'jay-ruzesky-9zTafGVsv-c-unsplash.jpg',   
        'karsten-wurth-A6TYqwlgsWM-unsplash.jpg',     
        'norja-v-G0sBqpn5NPs-unsplash.jpg'     
    ];

    let i = 0;

    setInterval(function() {
        i = (i + 1) % images.length;
        galleryImage.fadeTo(1000, 1, function() {
            $(this).attr('src', images[i])
            $(this).fadeTo(1000, 1);
        })
    }, 4000)

    // Hide Questions when page loads
    $('.question-border-div').hide();
    $('.score-div').hide();

    // Show questions after get started is clicked
    $('#start-form').on('submit', function(eventOne) {
        eventOne.preventDefault();

        const firstName = $('#first-name').val().trim();
        const lastName = $('#last-name').val().trim();
       
        if (firstName !== '' && lastName !== '') {
            $('.candidate-name').append(`${firstName} ${lastName}`);
            $('#first-name').val('');
            $('#last-name').val('');
        }
        
        $('.border-div').slideUp(1000);
        $('.question-border-div').show();
    });

    // Show scores once we click the submit button
    $('#submit-form').on('submit', function(eventTwo) {
        eventTwo.preventDefault();
        
        // Get Values from the questions radio button
        const questionOneVal = document.querySelector('input[name="answer-one"]:checked').value;
        const questionTwoVal = document.querySelector('input[name="answer-two"]:checked').value;
        const questionThreeVal = document.querySelector('input[name="answer-three"]:checked').value;
        const questionFourVal = document.querySelector('input[name="answer-four"]:checked').value;
        const questionFiveVal = document.querySelector('input[name="answer-five"]:checked').value;
        const questionSixVal = document.querySelector('input[name="answer-six"]:checked').value;
        const questionSevenVal = document.querySelector('input[name="answer-seven"]:checked').value;
        const questionEightVal = document.querySelector('input[name="answer-eight"]:checked').value;
        const questionNineVal = document.querySelector('input[name="answer-nine"]:checked').value;
        const questionTenVal = document.querySelector('input[name="answer-ten"]:checked').value;

        
        // Score calculation
        
        if (questionOneVal =='tiger') {
            oneVal = 1;
        } 

        if (questionTwoVal == '22 months') {
            twoVal = 1;
        } 

        if (questionThreeVal == 'bison') {
            threeVal = 1;
        } 

        if (questionFourVal == 'snake') {
            fourVal = 1;
        } 

        if (questionFiveVal == 'goat') {
            fiveVal = 1;
        } 

        if (questionSixVal == 'sloth') {
            sixVal = 1;
        } 

        if (questionSevenVal == 'polar bear') {
            sevenVal = 1;
        } 

        if (questionEightVal == 'lion') {
            eightVal = 1;
        } 

        if (questionNineVal == 'gorilla') {
            nineVal = 1;
        } 

        if (questionTenVal ==='bat') {
            tenVal = 1;
        } 

        const getScore = (oneVal + twoVal + threeVal + fourVal + fiveVal + sixVal + sevenVal + eightVal + nineVal + tenVal);

        $('.candidate-score').append(`You scored: ${getScore} / 10`);

        if (getScore > 5) {
            $('.score-div h1').append(`You Passed!!!`); 
        } else {
            $('.score-div h1').append(`You Failed!!!`); 
            $('.try-again').append(`Click to Try Again`);
        }

        $('.question-slideup').hide();
        
        $('.score-div').show();
 
    });

});