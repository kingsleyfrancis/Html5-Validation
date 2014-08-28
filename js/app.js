/**
 * Created by CIZA on 8/27/14.
 */

(function(){

    //Check if input natively supports the required attribute
    if( true/*!Modernizr.input.required*/){

        //if not
        //Get the form element and hook up on submit
        // event handler to it
            var form = $('form');

        //on submit event handler
        form.on('submit', function(){
            var input = $('[required], [pattern]'),
                submitBtn = $('input[type="submit"]'),
                result = true;

            submitBtn.attr('disabled', 'disabled');

            input.each(function(){
                var self = $(this);

                if(self.val() === ""){
                    self.toggleClass("required");
                    result = false;
                }
                else{
                    var pattern = self.prop('pattern');

                    if(pattern !== null && pattern !== 'undefined'){
                        var value = self.val(),
                            regExp = new RegExp(pattern);
                        if(!regExp.test(value)){
                            result = false;
                            self.toggleClass('required');
                        }
                    }

                }
            });

            if(result === true){
                submitBtn.removeAttr('disabled');
            }

            return result;
        });
    }



})();
