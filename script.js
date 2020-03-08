// Basic Syntax for jquery.

(function($){

    // Start functionality on document Ready
    $(document).ready(function(){

        // Code will go here 
        $('.tab-keys li').each(function(){
            if($(this).hasClass('active')){
                var targetContent = $(this).data('id');
                $('#'+targetContent).css('display','block');
            }
        });

        // Now We will set the functionality on click event 
        $('.tab-keys li').on('click',function(){

            // Remove Active class from all tab 
            // If you want to remove class attr then
            $('.tab-keys li').removeAttr('class');

            // Add Active class where you have clicked 
            $(this).addClass('active');

            // Set Display None to all Tab content 
            $('.tab-content').removeAttr('style');

            // Set To display Block Which tab you want to show
            var targetContent = $(this).data('id');

            $('#'+targetContent).css('display','block');


        });

    });

}(jQuery));