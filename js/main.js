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
stroke = new Vivus('mask', { // アニメーションをするIDの指定
    start: 'manual', // 自動再生をせずスタートをマニュルに
    type: 'scenario-sync', // アニメーションのタイプを設定
    duration: 12, // アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false, // パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE, // 動きの加速減速設定
});

// ページが読み込まれた時の処理
$(window).on('load', function () {
    const currentURL = window.location.href;

    // URLに"#"が含まれていない場合にのみ処理を実行
    if (!currentURL.includes('#')) {
        var scrollY = $(window).scrollTop();
        var mvHeight = $('#mainvisual').height() - 100;
        console.log(mvHeight);

        if (scrollY > mvHeight) {
            $('.splbg1').hide();
            $('.splbg2').hide();
        }
        $("#spl-logo").delay(1800).fadeOut('slow'); // ロゴを1.2秒でフェードアウトする記述

        // ローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
        $("#spl").delay(2000).fadeOut('slow', function () {
            $('body').addClass('appear'); // フェードアウト後bodyにappearクラス付与
            stroke.play();

            // <div id="container">を表示
            $('#container').fadeIn('slow'); // フェードインで表示する処理
            if($(window).width()<768){
                $('.openbtn').fadeIn();
            }
        });

    } else {
        // URLに"#"が含まれている場合は、#splを非表示にし、#containerのアニメーションを実行
        $('#spl').hide(); // スプラッシュエリアを非表示にする
        $('body').addClass('appear'); // bodyにappearクラス付与
        stroke.play(); // アニメーションを実行
        $('#container').fadeIn('slow'); // <div id="container">をフェードインで表示
    }

    // 背景が伸びた後に動かしたいJSをまとめたい場合
    $('.splbg1').on('animationend', function () {
        // この中に動かしたいJSを記載
        stroke.play(); // SVGアニメーションの実行
        setTimeout(function () {
            stroke.play();
        }, 30000);
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
            breakpoint: 768,
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
            breakpoint: 768,
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


//     });
    // ページトップボタンのクリックでページの最上部に移動
    $('.pagetopwrap').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });
    $(window).resize(function(){
        if($(window).width()>=768){
            $('.openbtn').fadeOut()
        }else{$('.openbtn').fadeIn()
        }
    });
    }
)
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
        $(document).ready(function() {
            $(".openbtn").click(function () {
                $(this).toggleClass('active');
                $(".sp-nav").toggleClass('active', $(this).hasClass('active')); // openbtnがactiveの時にsp-navを表示
            });

            // sp-nav内のリンクがクリックされた時にsp-navを非表示にする
            $(".sp-nav a").click(function () {
                $(".openbtn").removeClass('active'); // openbtnのactiveを解除
                $(".sp-nav").removeClass('active');  // sp-navのactiveを解除
            });
        });

    $(window).scroll(function (){
    $(".line-color").each(function(){
      var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
      var scroll = $(window).scrollTop(); //スクロールの位置を取得
      var windowHeight = $(window).height(); //ウインドウの高さを取得
      if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
        $(this).addClass('is-active'); //クラス「active」を与える
      }
    });
});