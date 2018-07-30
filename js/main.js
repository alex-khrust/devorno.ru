var ajaxNotLoad = false;
var validStep = 0;
var currentStep = "";
$(document).ready(function () {
    svg4everybody({});
    //bindData(GetJson());

    $('.slider').slick({

        infinite: false,
        arrows: true,
        slidesToShow: 1,
        dots: true,
        fade: true,
        speed: 100,
        draggable: false,
        prevArrow: '.slider__prew-arrow',
        nextArrow: '.slider__nex-arrow',
        customPaging: function (slider, i) {

            if (i === 0) {
                return '<img class="step" src="/img/general/1.png" alt="123" /><img class="step-active" src="/img/general/1a.png" alt="123" />';
            }
            if (i === 1) {
                return '<img class="step" src="/img/general/2.png" alt="123" /><img class="step-active" src="/img/general/2a.png" alt="123" />';
            }
            if (i === 2) {
                return '<img class="step laststep" src="/img/general/3.png" alt="123" /><img class="step-active laststep" src="/img/general/3a.png" alt="123" />';
            }
            if (i === 3) {
                return '<img class="step" onlick="return false;" src="/img/general/4.png" alt="123" /><img  class="step-active " src="/img/general/4a.png" alt="123" />';
            }
        },
    });
    $('.slider').on('beforeChange', function (event, slick, direction) {
        if ($('.slider').slick('slickCurrentSlide') === 1) {
            event.stopImmediatePropagation();
        }

    });

    $('a[href^="#top"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 0
        }, 800);
        return false;
    });

    $('.main-form__left__user-controls__info__lang--item').click(function () {

        $('.main-form__left__user-controls__info__lang--item.active-lang').removeClass("active-lang");

        var nph = $(this).data('phone');
        $('#ahrefTelMainPage').text(nph);
        $('#ahrefTelMainPage').attr("href", "tel:" + nph);
        $(this).addClass("active-lang");

    });
    $('.main-aside__orange-leng--item').click(function () {

        $('.main-aside__orange-leng--item.active-len').removeClass("active-len");

        var nph = $(this).data('phone');
        $('#ahrefTelLeftMenu').text(nph);
        $('#ahrefTelLeftMenu').attr("href", "tel:" + nph);
        $(this).addClass("active-len");

    });


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true,
        'alwaysShowNavOnTouchDevices': true,
        'fitImagesInViewport': true,
        'positionFromTop': 20
    })

    $('.main-aside__blue--open').click(function () {
        $('.main-aside__blue--open').addClass('hide');
        $('.main-aside__blue--close').addClass('show');
        $('.main-aside__orange').addClass('show');
    });

    $('.main-aside__blue--close').click(function () {
        $('.main-aside__blue--open').removeClass('hide');
        $('.main-aside__blue--close').removeClass('show');
        $('.main-aside__orange').removeClass('show');
    });

    $('main-aside__orange__menu--item a').click(function () {
        $('.main-aside__blue--open').removeClass('hide');
        $('.main-aside__blue--close').removeClass('show');
        $('.main-aside__orange').removeClass('show');
    });


    $('.main-aside__orange__menu--item').click(function () {
        $('.main-aside__blue--open').removeClass('hide');
        $('.main-aside__blue--close').removeClass('show');
        $('.main-aside__orange').removeClass('show');
    });

    $('.aside-dots--item a').click(function () {
        $('.aside-dots--item a').removeClass('active-li');
        $(this).addClass('active-li');
    });

    //type of site in calc selected
    $('.types__item').click(function () {
        $('.types__item').removeClass('chec-item');
        $(this).toggleClass('chec-item');
        $('.slider').slick('slickNext');
        validStep = 1;

        if ($(this).data('sitetype') !== currentStep) {

            currentStep = $(this).data('sitetype');

            FillGeneralModules(currentStep);
        }
    });

    $('.last').click(function () {
        $('.portfolio-container__item').removeClass('no-display');
    });


    if ($('.slick-dots .slick-active').filter(':first')) {
        //$('.slider__prew-arrow').css('display', 'none');
        //$('.slider__nex-arrow').css('display', 'none');
    }



});
/*-----document ready finished*/



$(".slick-dots").click(function (e) {
    e.preventDefault();
});

$('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

    if (($('.slick-slider').slick('slickCurrentSlide')) === 0) {
        //$('.slider__prew-arrow').fadeOut(50);
    } else if (($('.slick-slider').slick('slickCurrentSlide')) === 1) {
        $('.slider__nex-arrow').fadeIn(50);
        $('.slider__prew-arrow').fadeIn(50);
    }
    else if (($('.slick-slider').slick('slickCurrentSlide')) === 3) {

        $('.slider__prew-arrow').fadeOut(50);

    } else {
        $('.slider__prew-arrow').fadeIn(50);

    }

    if (($('.slick-slider').slick('slickCurrentSlide')) === 2) {
        //$('.slider__prew-arrow').fadeOut(50);
        //$('.slider__nex-arrow').fadeOut(50);
    }

});


var slider = $(".slider");
slider.on('init', function (event, slick) {
});

$(window).on("scroll", function () {
    yes = $("#why-we").offset().top;
    yes0 = $(".main-form").offset().top;
    yes2 = $("#portfolio").offset().top;
    yes3 = $("#skills").offset().top;
    yes4 = $("#calc").offset().top;
    if (screen.width <= 1200) rezforskroll = yes0; else rezforskroll = yes;
    if ($(window).scrollTop() > rezforskroll) {
        $('.main-aside').addClass('fixed');
    } else {
        $('.main-aside').removeClass('fixed');
    }
    if ($(window).scrollTop() > yes - 20) {
        $('.aside-dots--item a').removeClass('active-li');
        $('.why-we-a').addClass('active-li');
    }
    if ($(window).scrollTop() > yes2 - 20) {
        $('.aside-dots--item a').removeClass('active-li');
        $('.portfolio-a').addClass('active-li');
    }
    if ($(window).scrollTop() > yes3 - 20) {
        $('.aside-dots--item a').removeClass('active-li');
        $('.skills-a').addClass('active-li');
    }
    if ($(window).scrollTop() > yes4 - 20) {
        $('.aside-dots--item a').removeClass('active-li');
        $('.calc-a').addClass('active-li');
    }
});

$('a.ignoreJumping').click(function (e) {
    e.preventDefault();
});


var ip;

function GetIp() {
    var sr = $.ajax({
        async: false,
        type: 'GET',
        url: 'https://ipinfo.io/json',
        success: function (data) {

        },
        error(val) {

            return "-";
        }

    }).responseText;
    return sr;
}
/*-----------------form  */


$(document).ajaxStart(function () {
    if (!ajaxNotLoad) {
        $.LoadingOverlay("show");
    }
});
$(document).ajaxStop(function () {
    $.LoadingOverlay("hide");
});

$("#frmContactUs").submit(function () {
return;
    try {

		if($("#email_add").val().length>0)
		{
			return;
		}
			$("#mnlocaldatetime").val(new Date().toISOString());
        var abcx = GetIp();

        $("#mip").val(JSON.parse(abcx)["ip"]);


    }
    catch (ex) {

    }

    var jqxhr = $.post('https://www.devorno.ru/api/mainpage/contactus', $('#frmContactUs').serialize())
        .success(function () {

            $(".main-form-success").removeClass("hide");
            $("#btnFirstFrm").addClass("hide");
            $("#frmContactUs :input[text]").each(function () {
                $(this).val('');
            });

        })
        .error(function () {

        });

    return false;
});


$("#frmL1and").submit(function () {

    try {

        $("#lndlocaldatetime").val(new Date().toISOString());
        var abcx = GetIp();
        $("#lndBut").addClass("hide");
        $("#lndip").val(JSON.parse(abcx)["ip"]);
        $("#landingResult").html("<h1 class='text'> Спасибо за заявку! Уже набираем Вас! </h1>");
    }
    catch (ex) {

    }

    var jqxhr = $.post('https://www.devorno.ru/api/mainpage/landReq', $('#frmLand').serialize())
        .success(function () {

         
            $("#frmLand :input[text]").each(function () {
                $(this).val('');
            });

        })
        .error(function () {

        });

    return false;
});



function GetJson() {
    ajaxNotLoad = true;
    var res = [];
    $.ajax({
        url: 'https://www.devorno.ru/api/mainpage/firstload',
        dataType: 'json',
        async: false,
        type: 'GET',
        success: function (data) {
            var i = 0;
            for (i = 0; i < data.length; i++) {
                res[i] = [data[i].Id, String(data[i].DateItemName), String(data[i].DateItemValue), String(data[i].Class)];
            }
        }
    });
    return res;

}


$("#frmWants").submit(function () {

    try {

        $("#wnlocaldatetime").val(new Date().toISOString());
        var abcx = GetIp();

        $("#wip").val(JSON.parse(abcx)["ip"]);
    }
    catch (ex) {

    }
    var jqxhr = $.post('https://www.devorno.ru/api/mainpage/contactrequest', $('#frmWants').serialize())
        .success(function () {


            $("#frmWants").find("input[type=text],input[type=email], textarea").each(function () {
                $(this).val('');
                $(".want-form-success").removeClass("hide");
            });
        })
        .error(function () {
            $('#message').html("Error posting the update.");

        });
    return false;
});



$('.closebtn').click(function () {
    $(this).parent().parent().addClass("hide");
});


/*  Wizard */
function FillGeneralModules(siteType) {


    var selectValues = { "Онлайн оплата": "Онлайн оплата", "Подписка и рассылка": "Подписка и рассылка", "Раздел статей": "Раздел статей", "Отзывы": "Отзывы", "Вопросы и ответы": "Вопросы и ответы" };

    if (siteType == "obout" || siteType == "vizitka") {
        selectValues = {
            "Онлайн оплата": "Онлайн оплата", "Подписка и рассылка": "Подписка и рассылка", "Раздел статей": "Раздел статей", "Отзывы": "Отзывы", "Вопросы и ответы": "Вопросы и ответы",
            "Ограниченные разделы (для партнеров, диллеров)": "Ограниченные разделы (для партнеров, диллеров)", "Прайс лист": "Прайс лист", "Вакансии": "Вакансии",
            "Представительства (адреса контакты)": "Представительства (адреса контакты)", "Опросы": "Опросы", "Регистрация/авторизация для  пользователей": "Регистрация/авторизация для  пользователей"
        };
    }

    if (siteType == "shop") {

        selectValues = {
            "Онлайн оплата": "Онлайн оплата", "Подписка и рассылка": "Подписка и рассылка", "Новости/статьи": "Новости/статьи", "Отзывы": "Отзывы", "Вопросы и ответы": "Вопросы и ответы",
            "Регистрация/авторизация для  пользователей": "Регистрация/авторизация для  пользователей"
        };
    }
    if (siteType == "etc") {
        selectValues = {
            "Онлайн оплата": "Онлайн оплата", "Подписка и рассылка": "Подписка и рассылка", "Раздел статей": "Раздел статей", "Отзывы": "Отзывы", "Вопросы и ответы": "Вопросы и ответы",
            "Ограниченные разделы (для партнеров, диллеров)": "Ограниченные разделы (для партнеров, диллеров)", "Прайс лист": "Прайс лист", "Вакансии": "Вакансии",
            "Представительства (адреса контакты)": "Представительства (адреса контакты)", "Опросы": "Опросы", "Регистрация/авторизация для  пользователей": "Регистрация/авторизация для  пользователей"
        };
    }
    if ($('#ddlAdditionalModules').sumo != null) {
        $('#ddlAdditionalModules').sumo.unload();
    }

    $.each(selectValues, function (key, value) {

        $('#ddlAdditionalModules').append($("<option></option>").attr("value", key).text(value));
    });

    $('#ddlAdditionalModules').SumoSelect({
        okCancelInMulti: true,
        nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
        isClickAwayOk: true
    });


}

function SendCalc() {
    var val = validation();
    if (val === false) {

        return;
    }
    var val = true;
    if (val === true) {
        var modules = "";
        var ipres = GetIp();
        modules = $("select[name=moduls] option:selected").map(function () { return $(this).text(); }).get().join(',');
        var dataString = "sitetype=" + currentStep + "&designe=" + $('input[name=r1]:checked').val() + "&content=" + $('input[name=r2]:checked').val() +
            "&logo=" + $('input[name=r3]:checked').val() + "&modules=" + modules + "&desc=" + $("#descr").val() + "&sites=" + $("#sites").val() +
            "&comments=" + $("#ourmessage").val() + "&name=" + $("#calcName").val() + "&email=" + $("#calcEmail").val() +
            "&Ip=" + JSON.parse(ipres)["ip"] + "&userdatetime=" + new Date().toISOString();
        ;
        $.ajax({
            type: 'POST',
            url: 'https://www.devorno.ru/api/mainpage/calculate',
            data: dataString,
            success: function (data) {
                $('.slider').slick('slickGoTo', 4);
                $("#descr").val('');
                $("#sites").val('');
                currentStep = "";
            },
            error: function (err) {

            }
        });/*
        var jqxhr = $.post('http://api.devorno.ru/api/mainpage/calculate', $('#frmlaststep').serialize())
            .success(function () {
                 $('.slider').slick('slickGoTo', 4);
                $("#frmlaststep").find("input[type=text],input[type=email], textarea").each(function () {
                    $(this).val('');
                     //$('.slider').slick('slickGoTo', 4);
                });
            })
            .error(function () {
                $('#message').html("Error posting the update.");
            });*/
    }
};


function validation() {



    var isValid = true;
    if ($("#descr").val().length <= 5) {
        $("#errorstep2").removeClass("hide");
        $("#descr").addClass('empty-wrong-input');
        $('.slider').slick('slickPrev');
        $("#descr").focus();

        isValid = false;
        return false;
    }
    else {
        $("#descr").removeClass('empty-wrong-input');
        $("errorstep2").addClass("hide");
    }
    var isSpanUpdated = false;


    $("#calcName").addClass('empty-wrong-input');
    $('#errorstep3 span').text('Укажите Ваше имя');
    if ($("#calcName").val().length <= 2) {
        $("#calcName").addClass('empty-wrong-input');
        isValid = false;
        $('#errorstep3 span').text('Укажите Ваше имя');
        $('#errorstep3').removeClass('hide');
        isSpanUpdated = true;
    }
    else {
        $("#calcName").removeClass('empty-wrong-input');
    }
    if ($("#calcEmail").val().length <= 4) {
        $("#calcEmail").addClass('empty-wrong-input');
        if (!isSpanUpdated) {
            $('#errorstep3').removeClass('hide');
            $('#errorstep3 span').text('Укажите корректный e-mail для связи');
        }
        isValid = false;
    }
    else {
        $("#calcEmail").removeClass('empty-wrong-input');
    }
    return isValid;
}
