// headerの表示の設定
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const mainVisual = document.getElementById('mainvisual');

    // mainvisualの高さを取得
    const mainVisualHeight = mainVisual.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY < mainVisualHeight) {
            header.classList.add('hidden'); // ヘッダーを隠す
        } else {
            header.classList.remove('hidden'); // ヘッダーを表示
        }
    });

    const headerHeight = header.offsetHeight; // ヘッダーの高さを取得

    // 各リンクにクリックイベントを追加
    document.querySelectorAll('a[href="#about"], a[href="#works"], a[href="#skills"], a[href="#information"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // デフォルトのリンク動作を無効化

            const targetId = this.getAttribute('href'); // クリックされたリンクのhrefを取得
            const targetElement = document.querySelector(targetId); // 対応するセクションを取得

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight; // ヘッダーの高さを考慮したスクロール位置

                // スムーズスクロールを実行
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
var stroke;
    stroke = new Vivus('mask', {//アニメーションをするIDの指定
        start: 'manual',//自動再生をせずスタートをマニュアルに
        type: 'scenario-sync',// アニメーションのタイプを設定
        duration:12,//アニメーションの時間設定。数字が小さくなるほど速い
        forceRender: false,//パスが更新された場合に再レンダリングさせない
        animTimingFunction:Vivus.EASE,//動きの加速減速設定
    }
    );
$(window).on('load', function () {
    var scrollY=$(window).scrollTop()
    var mvHeight=$('#mainvisual').height() -100
    console.log(mvHeight)
    if(scrollY>mvHeight){
        $('.splbg1').hide()
        $('.splbg2').hide()
    }
    $("#spl-logo").delay(1800).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#spl").delay(2000).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        stroke.play();
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splbg1').on('animationend', function () {
        //この中に動かしたいJSを記載
        
   
    stroke.play();//SVGアニメーションの実行
    setTimeout(function(){
        stroke.play();
    },30000)
});
});


$(function () {
    // ローディング画面の設定
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.style.display = "block";

        // ダミーデータを使う
        const data = [
            { id: 1, title: "Sample Post 1", body: "This is a sample post" },
            { id: 2, title: "Sample Post 2", body: "Another sample post" }
        ];

        console.log(data);
        loadingElement.style.display = "none";
    }

    // Slider設定
    $('.website_slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: "linear",
        slidesToShow: 3,
        swipe: false,
        arrows: false,
        variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 750,
            settings: { slidesToShow: 2 }
        }]
    });

    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: "linear",
        slidesToShow: 3,
        swipe: false,
        arrows: false,
        variableWidth: true,
        rtl: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 750,
            settings: { slidesToShow: 2 }
        }]
    });
    window.addEventListener('scroll', function () {
        const scrollPos = $(this).scrollTop();
        const aboutOffset = $('#about').offset().top;
        const skillsOffset = $('#skills').offset().top;
        const worksOffset = $('#works').offset().top;

        if (scrollPos >= aboutOffset && scrollPos < skillsOffset) {
            $('.scroolwrap').fadeIn();
            $('.pagetopwrap').fadeOut();
        } else if (scrollPos >= skillsOffset) {
            $('.scroolwrap').fadeOut();
            $('.pagetopwrap').fadeIn();
        } else {
            $('.scroolwrap').fadeOut();
            $('.pagetopwrap').fadeOut();
        }
    });

    // スクロールボタンのクリックで700px下に移動
    $('.scroolwrap').click(function () {
        $('html, body').animate({ scrollTop: $(window).scrollTop() + 700 }, 'smooth');
        return false;
    });
    //SVGアニメーションの描画
    

//     $(window).on('load', function () {
// console.log("stroke")
      
//     });
    // ページトップボタンのクリックでページの最上部に移動
    $('.pagetopwrap').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });
    // サブタイトルの動作の設定
    $(window).scroll(function () {
        $('.text').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
    $(window).scroll(function () {
        $('.text-right').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
    // aboutセクションのアニメーション
    const lines = document.querySelectorAll('.line');
    if (lines.length) {
        const aboutText = document.querySelector('.about-text');
        if (aboutText) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        lines.forEach((line, index) => {
                            setTimeout(() => {
                                line.classList.add('is-animated');
                            }, index * 500);
                        });
                        observer.disconnect();
                    }
                });
            });
            observer.observe(aboutText);
        }
    }

    // skillセクションのアニメーション
    const skills = document.querySelectorAll('.skill');
    if (skills.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-animated');
                    const skillIcons = entry.target.querySelectorAll('.icon-img');
                    skillIcons.forEach((icon, index) => {
                        setTimeout(() => {
                            icon.classList.add('is-animated');
                        }, index * 500);
                    });
                }
            });
        }, { threshold: 0.1 });
        skills.forEach(skill => observer.observe(skill));
    }

});