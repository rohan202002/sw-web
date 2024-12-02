$(document).ready(function() {
    forSelect();
    passwordValidate();
    countryMob();
    $(document).on('click', '.submitBt', function(e) {
        e.preventDefault();
        $(this).parents('.formValid').find('.required').trigger('blur');
        $(this).parents('.formValid').find('.selectpicker.required').trigger('change');
    });
});

/*Start Validation*/
var errors;
var onlyDigits = [];
for (i = 48; i < 58; i++)
    onlyDigits.push(i);

//global input field validation start

$('.feilds input').on('focus', function() {
    $(this).parent().find('.newtooltiptext').addClass('vshow');
    $(this).parent().find('.newtooltip').css('z-index', '11');
    $(this).parent().find('.topnewtooltiptext').addClass('vshow');
    $(this).css('z-index', '11');
});
//global input field validation end

// custumize validation
$('.inputbox input,.inputbox textarea').on('blur', function() {
    $(this).each(function() {
        var error_div = $(this).parents(".inputbox").find('.error_message');
        var field_container = $(this).parents(".inputbox");
        var default_error_div = $(this).parent().find('.default_message');

        if ($(this).hasClass("required")) {
            if (!$(this).hasClass('default') && !$.empty_field_validation($(this).val())) {
                error_div.html('This field is required.');
                error_div.css('display', 'block');
                field_container.addClass('error');
                field_container.removeClass('success');
                errors = true;
            } else if ($(this).hasClass('default') && !$.empty_field_validation($(this).val())) {
                error_div.css('display', 'none');
                default_error_div.css('display', 'block');
                field_container.addClass('error');
                field_container.removeClass('success');
                errors = true;
            } else {
                error_div.html('');
                error_div.css('display', 'none');
                default_error_div.css('display', 'none');
                field_container.removeClass('error');
                field_container.addClass('success');

                errors = false;
            }
        }

        if ($(this).val() == "") {
            if (!$(this).hasClass('required')) {
                error_div.html('');
                error_div.css('display', 'none');
                default_error_div.css('display', 'none');
                field_container.removeClass('error');
                field_container.addClass('success');
                errors = false;
            }
        }
        if ($(this).val() != "") {
            if ($(this).hasClass('pan')) {
                if (!$.pan_validation($(this).val())) {
                    error_div.html('Please enter valid PAN.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }

            if ($(this).hasClass('panNum')) {
                if (!$.panValidate($(this).val())) {
                    error_div.html('Please enter valid PAN number.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }

            if ($(this).hasClass('email')) {
                if (!$.email_validation($(this).val())) {
                    error_div.html('Please enter valid Email Id.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }

            if ($(this).hasClass('mobileNumber')) {
                if (!$.mobile_validation($(this).val())) {
                    error_div.html('Please enter valid Mobile Number.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }

            if ($(this).hasClass('fullname')) {
                if (!$.fullname_validation($(this).val())) {
                    error_div.html('Please enter valid Full Name.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }
            if ($(this).hasClass('pincode')) {
                if (!$.pincode_validation($(this).val())) {
                    error_div.html('Please enter valid pincode.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }
            if ($(this).hasClass('datepicker')) {
                if (!$.datepicker_validation($(this).val())) {
                    error_div.html('Please enter valid date.');
                    error_div.css('display', 'block');
                    field_container.addClass('error');
                    field_container.removeClass('success');
                    errors = true;
                } else {
                    error_div.html('');
                    error_div.css('display', 'none');
                    field_container.removeClass('error');
                    field_container.addClass('success');
                    errors = false;
                }
            }

        }
    });
    //console.log(errors)
 
});

   $(document).on('click', '.bootstrap-select.required .dropdown-toggle .filter-option', function() {
        if ($(this).parents('.inputbox').find('ul.dropdown-menu li').hasClass('selected')) {            
            $(this).parents('.inputbox').find('.error_message').css('display', 'none');
            $(this).parents('.inputbox').find('.dropdown-toggle .filter-option').addClass('highlight');

            
        } 
        else {
            $(this).parents('.inputbox').find('.error_message').css('display', 'block');
        }
    });

   
// $(document).on('click', '.submitBt', function(e) {
//     e.preventDefault();
//     $(this).parents('.formValid').find('.required').trigger('blur');
//     $(this).parents('.formValid').find('.selectpicker.required').trigger('change');
//     // setTimeout(function() {
//     //     if (errors == false) {
//     //         $(this).parents('.formValid').hide();
//     //         $(this).parents('.formValid').next('.success').show()
//     //     }
//     // }, 2);
// });


$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}

$.email_validation = function(email) {
    // var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    var regex = /^[0-9\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

$.mobile_validation = function(mobile) {
    var regex = /^[789]\d{9}$/;
    return regex.test(mobile);
}
$.pan_validation = function(pan) {
    var regex = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    return regex.test(pan);
}

$.fullname_validation = function(fullname) {
    var regex = /^([A-Za-z']{3,})+\s[A-Za-z ]+$/;
    return regex.test(fullname);
}
$.pincode_validation = function(fullname) {
    var regex = /\d{6}$/;
    return regex.test(fullname);
}
$.datepicker_validation = function(entdate) {
    //var regex = /^\d{2}/[a-zA-Z]{3}/\d{4}$/;
    var regex = /^(([0-9])|([0-2][0-9])|([3][0-1]))\/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\/\d{4}$/;
    return regex.test(entdate);
}


$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
/*End Validation*/


// for alphanumeric validation start
$('.numbersOnly').keyup(function(event) {
    $(this).val($(this).val().replace(/[^0-9]/g, ''));
});
$('.alphaNum').keyup(function(event) {
    $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
});
$('.alpha').keyup(function(event) {
    $(this).val($(this).val().replace(/[^a-zA-Z ]/g, ''));
});

$('.countrycode').keyup(function(event) {
    $(this).val($(this).val().replace(/[^\+\d{1,15}$]/g, ''));
});


// for alphanumeric validation end


// for select functionality start
function forSelect() {
    
    $('.selectpicker.required').on('change.bs.select', function(e) {

        var thispicker = $(this);
        setTimeout(function() {
            if (e.target.value == '') {
                thispicker.parents('.inputbox').addClass('error');
                thispicker.parents('.inputbox').removeClass('success');
                thispicker.parents('.inputbox').find('.error_message').css('display', 'block');

            } else {
                thispicker.parents('.inputbox').removeClass('error');
                thispicker.parents('.inputbox').addClass('success');
                thispicker.parents('.inputbox').find('.error_message').css('display', 'none');
            }
        }, 10)

    });

}
// for select functionality end


//password validation and show/hide start
function passwordValidate() {
    $(document).on('blur', '.passwrd', function() {
        var error_div = $(this).parents('.feilds').find('.default');
        var field_container = $(this).parent();
        var PasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/
        if (!PasswordRegex.test($(this).val())) {
            error_div.html('Please enter valid Password');
            error_div.css('display', 'block');
            $(this).parents('.feilds').removeClass('valid').addClass('invalidPassword');
            field_container.addClass('error');
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            $(this).parents('.feilds').removeClass('invalidPassword');
            field_container.removeClass('error');
        }
    })

    $(document).on('change', '.passwrdContainer input', function(event) {
        if ($(this).is(':checked')) {
            $(this).parents('.passwordBlock').find('.passwrd').attr('type', 'text');
            if ($(this).parents('.passwordBlock').hasClass('invalidPassword')) {
                $(this).parents('.passwordBlock').find('.default').css('display', 'block')
            }
        } else {
            $(this).parents('.passwordBlock').find('.passwrd').attr('type', 'password');
            if (!$(this).parents('.passwordBlock').hasClass('invalidPassword')) {
                $(this).parents('.passwordBlock').find('.default').css('display', 'none')
            }
        }
    });
}
//password validation and show/hide end


//country code and mobile error mesg starts

function countryMob() {
    $('.areaCodeBlock input, .contactField input').on('blur', function() {
        var field_container = $(this).parents('.feilds').find(".input");
        var countcode = $('.areaCodeBlock input').val();
        var mobCount = $('.contactField input').val();
        var defaultError_div = $(this).parents('.feilds').find('.default');
        var error_div = $(this).parents('.feilds').find('.forValidation');
        if (countcode == "" || mobCount == "") {
            defaultError_div.css('display', 'block');
            // error_div.css('display', 'none');
            field_container.removeClass('valid').addClass('error');
        } else {
            defaultError_div.css('display', 'none');
            field_container.removeClass('valid').removeClass('error');
        }

    });
}
//country code and mobile error mesg ends


//pan Validation
//function panValidate(){
$.panValidate = function(panVal) {
    $('.panNum').bind('keypress', function (e) {
        var regex;
        if ((this.selectionStart >=0 && this.selectionStart <= 4)) {
            regex = new RegExp("^[a-zA-Z]+$");
        }

        if ((this.selectionStart > 4 && this.selectionStart <= 8)) {
            regex = new RegExp("^[0-9]+$");
        }
        if ((this.selectionStart == 9)) {
            regex = new RegExp("^[a-zA-Z]+$");
        }
        var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        //var key = $(this).val();
        if (this.selectionStart < 10) {
            if (!regex.test(key)) {
                e.preventDefault();
                return false;
            }
        } 
    });

    $(document).on('blur','.panNum', function(){
    // $('.panNum').focusout(function () {
        var res = $(this).val();
        $this = $(this);
        panNumCheck(res, $this);
    });
}

 function panNumCheck(res, $this) {
    var reggst = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (reggst.test(res) && res != '' && res.length == 10) {
        return;
    }
    else {

        if (res.length > 0 && res.length < 10) {
            setTimeout(function(){
                 $this.parent().siblings('.error_message').html('Enter complete PAN number').show();
            },1);           
        }
    }
}
//pan Validation