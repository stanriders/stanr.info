var openSection = '';
function expand(section) {
    openSection = section;
    $('.main').css({
       opacity: 0
    });
    $('.pages').css({
        display: 'block',
    });
    $('.'+section).css({
        display: 'block',
    });
    setTimeout( function(){
        $('.pages').css({
            opacity: 1,
        });
        $('.'+section).css({
            opacity: 1
        });
    }, 250);
    setTimeout( function(){
        $('.main').css({
            display: 'none'
        });
    }, 500);
}
function reset() {
    $('.main').css({
        display: ''
    });
    $('.pages').css({
        opacity: 0,
    });
    $('.'+openSection).css({
        opacity: 0
    });
    setTimeout( function(){
        $('.main').css({
            opacity: 1,
        });
    }, 250);
    setTimeout( function(){
        $('.pages').css({
            display: 'none',
        });
        $('.'+openSection).css({
            display: 'none',
        });
    }, 500);
}

/* projects */
function projectTypeToggle(section) {
    if ( $('.'+section).css('display') == 'block' )
    {
        $('.'+section).css({
            'margin-top': '-56px',
            'padding-bottom': 0,
            opacity: 0
        });
        setTimeout( function(){
            $('.'+section).css({
                display: 'none',
            });
        }, 500);
    }
    else
    {
        $('.'+section).css({
            display: 'block',
        });
        setTimeout( function(){
            $('.'+section).css({
                'margin-top': '0px',
                'padding-bottom': '15px',
                opacity: 1
            });
        }, 10);
    }
}

var openProject = 'github';
function projectToggle(project) 
{
    if ($('.'+project).css('display') != 'block')
    {
        $('.'+openProject).css({
            opacity: 0
        });
        setTimeout( function(){
            $('.'+openProject).css({
                display: 'none',
            });
            openProject = project
            $('.'+project).css({
            display: 'block'
            });
            $('.'+project).css({
                opacity: 1
            });
        }, 100);
    }

}