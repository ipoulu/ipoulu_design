
    $(function () {
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

    window.addEventListener('scroll', function () {
        const scrollPos = $(window).scrollTop();

        // 上から1000px未満のときに「スクロールボタン」を表示し、他の位置では「ページトップボタン」を表示0
        if (scrollPos < 500) {
            $('.scroolwrap').fadeIn(); // スクロールボタンを表示
            $('.pagetopwrap').fadeOut(); // ページトップボタンは非表示
        } else {
            $('.scroolwrap').fadeOut(); // スクロールボタンを非表示
            $('.pagetopwrap').fadeIn(); // ページトップボタンを表示
        }
    });

    // スクロールボタンのクリックで700px下に移動
    $('.scroolwrap').click(function () {
        $('html, body').animate({ scrollTop: $(window).scrollTop() + 700 }, 'smooth');
        return false;
    });

   // ページトップボタンのクリックで#WORKSに移動
$('.pagetopwrap').click(function () {
$('html, body').animate({ scrollTop: $('/banner-list.html').offset().top }, 'smooth');
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

    function slideAnime() {
        //==== 右に動くアニメーション ===
        $('.rightAnime').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("slideAnimeRightLeft");
                $(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");
            } else {
                $(this).removeClass("slideAnimeRightLeft");
                $(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
            }
        });

        //==== 左に動くアニメーション ===
        $('.leftAnime').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("slideAnimeLeftRight");
                $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
            } else {
                $(this).removeClass("slideAnimeLeftRight");
                $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
            }
        });

        //==== website-group-rightのアニメーション ===
        $('.website-group-right,.detail-img').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("slideAnimeRightLeft");
            } else {
                $(this).removeClass("slideAnimeRightLeft");
            }
        });

        //==== website-group-leftのアニメーション ===
        $('.website-group-left,.banner-detail-img').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("slideAnimeLeftRight");
            } else {
                $(this).removeClass("slideAnimeLeftRight");
            }
        });
    }

    // 画面をスクロールしたらアニメーションを実行
    $(window).scroll(function () {
        slideAnime();
    });
    const websiteGroups = document.querySelectorAll('.website-group-left, .website-group-right');

    if (websiteGroups.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-animated');
                    const images = entry.target.querySelectorAll('img');
                    images.forEach((img, index) => {
                        setTimeout(() => {
                            img.classList.add('is-animated');
                        }, index * 500);
                    });
                }
            });
        },
         { threshold: 0.1 });
        websiteGroups.forEach(group => observer.observe(group));
    }
});

    
document.addEventListener("DOMContentLoaded", function() {
const details = document.querySelectorAll('.detail,.detail-taitle ');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show-border'); // クラスを追加
        observer.unobserve(entry.target); // 一度表示されたら監視を停止
    }
});
}, { threshold: 0.1 }); // 10%表示されたら発火

details.forEach(detail => {
observer.observe(detail);
});

lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
    $('.lb-close').on('click', function () {
        $('.lb-close').toggleClass('open');
        $('.lb-close').fadeToggle();
    })
});
$(window).resize(function () {
    if ($(window).width() >= 768) {
        $('.openbtn').fadeOut();
    } else {
        $('.openbtn').fadeIn();
    }
});

// メニューボタンのクリックでメニューを開閉
$('.openbtn').click(function () {
    $('.sp-nav').toggleClass('active'); // メニューの開閉クラスを切り替え
    $('.openbtn').toggleClass('active'); // メニューの開閉クラスを切り替え
});
