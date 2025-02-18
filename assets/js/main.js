
// const images = document.querySelectorAll(".mainVisual_image");
// let index = 0;

// function showNextImage() {
//     images[index].style.opacity = 0; // 現在の画像を非表示
//     index = (index + 1) % images.length; // 次の画像のインデックスを取得
//     images[index].style.opacity = 1; // 次の画像を表示
//     console.log(document.querySelectorAll(".mainVisual_image"));

// }


// setInterval(showNextImage, 5000); // 5秒ごとに画像を切り替え

// 

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".mainVisual_image");
    let index = 0;
    let intervalId = null; // setInterval の ID を保持

    function showNextImage() {
        images[index].style.opacity = 0; // 現在の画像を非表示
        index = (index + 1) % images.length; // 次の画像のインデックスを取得
        images[index].style.opacity = 1; // 次の画像を表示
    }

    function startSlideshow() {
        if (window.innerWidth > 835) { // PCのみスライドショーを実行
            if (!intervalId) { // 既に実行されていなければ開始
                intervalId = setInterval(showNextImage, 5000);
            }
        } else { // スマホならスライドショーを停止
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null; // IDをリセット
            }
        }
    }

    // 初回チェック
    startSlideshow();

    // 画面サイズ変更時にもチェック
    window.addEventListener("resize", startSlideshow);
});




// header_topを上部に固定
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header_top");
    let headerOffset = header.dataset.initialOffset || header.offsetTop; // 初期位置を保持
    let scrollPosition = window.scrollY; // 現在のスクロール位置
    let screenWidth = window.innerWidth; // 画面幅を取得

    // 835px以上のときだけ fixed を適用
    if (screenWidth > 835 && scrollPosition >= headerOffset) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

// 初期のオフセット値を保存（最初に一度だけ実行）
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".header_top");
    header.dataset.initialOffset = header.offsetTop; // データ属性に保存
});





// header_titleを一体化する
document.addEventListener("DOMContentLoaded", function () {
    let headerTitle = document.querySelector(".header_title");
    let headerTop = document.querySelector(".header_top");

    function handleScroll() {
        let scrollY = window.scrollY;
        let headerOffset = headerTop.offsetTop;
        let screenWidth = window.innerWidth; // 画面幅を取得

        // PC（835px以上）のときだけ overlap を適用
        if (screenWidth > 835 && scrollY >= headerOffset - 50) { 
            headerTitle.classList.add("overlap");
        } else {
            headerTitle.classList.remove("overlap");
        }
    }

    // スクロールイベントを監視
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // 画面サイズ変更時も対応
});

