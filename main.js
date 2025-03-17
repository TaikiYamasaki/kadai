$(function () {
    $(".autoplay").slick({
        arrows: false,
        dots: false,
        slidesToShow: 3.9,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // ブレークポイントを設定
                settings: {
                    slidesToShow: 2, // 1024px未満の場合の表示スライド数
                },
            },
            {
                breakpoint: 768, // ブレークポイントを設定
                settings: {
                    slidesToShow: 1, // 768px未満の場合の表示スライド数
                },
            },
        ],
    });
});

//ハンバーガーメニュー
$(".drawer_toggle-lines").click(function () {
    $(this).toggleClass("active");
    $("#global__nav").toggleClass("panelactive");
});

//ハンバーガーメニュー　同ページのアンカーに飛んでも表示消す
$("#global__nav ul li a").click(function () {
    $(".drawer_toggle-lines").removeClass("active");
    $("#global__nav").removeClass("panelactive");
});

//ハンバーガーメニューサブ
$(".drawer_toggle-lines").click(function () {
    $(this).toggleClass("active");
    $("#global__nav--sub").toggleClass("panelactive");
});

//ハンバーガーメニュー　同ページのアンカーに飛んでも表示消す
$("#global__nav--sub ul li a").click(function () {
    $(".drawer_toggle-lines").removeClass("active");
    $("#global__nav--sub").removeClass("panelactive");
});



//お知らせ記事
$(document).ready(function () {
    // スライダーが初期化されているか確認し、初期化されていない場合のみ初期化する
    if (!$('.slider').hasClass('slick-initialized')) {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 2500,
            speed: 1500, // 切り替え速度
            cssEase: 'ease',
            slidesToShow: 1,
            swipe: false,
            arrows: false,
            pauseOnFocus: false,
            pauseOnHover: false
        });
    }
});

//インタビュー一覧の写真スライダー
$('.slick-img').slick({
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    centerMode: false,
    dots: false,
    arrows: false,
})


//写真をフェードイン
$(function () {
    $(window).on('load scroll', function () {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * 0.8);

        $(".fade-out").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });
    });
});


//staff-list h2の文字をフェードアップ
$(function () {
    $(window).on('load scroll', function () {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * 0.8);

        $(".show").each(function () {
            if ($(this).offset().top < scrollPos) {
                $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
            }
        });
    });
});


// TOPへ戻る
$(function () {
    $(".top-button").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});

