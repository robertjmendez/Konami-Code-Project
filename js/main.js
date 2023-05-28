"use strict";

$(function(){
    // Konami code sequence
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

    // User's input
    let userEntry = [];

    // Flag to track if the code has been entered
    let codeEntered = false;

    $(document).on("keyup", function(event){
        if (codeEntered) {
            return;
        }

        // Add the user's key to the input array
        userEntry.push(event.key);

        // Keep the input array length same as konamiCode length
        if (userEntry.length > konamiCode.length) {
            userEntry.shift();
        }

        // Check if user's input matches the konamiCode
        if (userEntry.join() === konamiCode.join()) {
            codeEntered = true;

            // Update the texts and add animation
            $('h1').text('Immortality Unlocked!');
            $('.screen-text').text('You have added 30 lives!');
            $('body').addClass('gradient-animate');

            // Bind click event to resetGame function
            $('.off-button').click(resetGame);
        }
    });

    // Function to reset the game
    function resetGame() {
        // Reset the user's input and codeEntered flag
        userEntry = [];
        codeEntered = false;

        // Restore initial texts and remove animation
        $('h1').text('Unlock Immortality!');
        $('.screen-text').text('Game Over');
        $('body').removeClass('gradient-animate');

        // Remove 'lit' class from buttons and unbind click event
        $('.button').removeClass('lit');
        $('.off-button').off('click');
    }

    $(document).keydown(function(event) {
        switch(event.key) {
            case 'ArrowUp':
                // Light up the Up button
                $('#up-button').addClass('lit');
                break;
            case 'ArrowDown':
                // Light up the Down button
                $('#down-button').addClass('lit');
                break;
            case 'ArrowLeft':
                // Light up the Left button
                $('#left-button').addClass('lit');
                break;
            case 'ArrowRight':
                // Light up the Right button
                $('#right-button').addClass('lit');
                break;
            case 'b':
                // Light up the B button
                $('#b-button').addClass('lit');
                break;
            case 'a':
                // Light up the A button
                $('#a-button').addClass('lit');
                break;
            case 'Enter':
                // Light up the Enter button
                $('#enter-button').addClass('lit');
                break;
        }
    });

    $(document).keyup(function(event) {
        switch(event.key) {
            case 'ArrowUp':
                // Turn off the Up button
                $('#up-button').removeClass('lit');
                break;
            case 'ArrowDown':
                // Turn off the Down button
                $('#down-button').removeClass('lit');
                break;
            case 'ArrowLeft':
                // Turn off the Left button
                $('#left-button').removeClass('lit');
                break;
            case 'ArrowRight':
                // Turn off the Right button
                $('#right-button').removeClass('lit');
                break;
            case 'b':
                // Turn off the B button
                $('#b-button').removeClass('lit');
                break;
            case 'a':
                // Turn off the A button
                $('#a-button').removeClass('lit');
                break;
            case 'Enter':
                // Turn off the Enter button
                $('#enter-button').removeClass('lit');
                break;
        }
    });

});
