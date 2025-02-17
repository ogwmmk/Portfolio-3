
const images = document.querySelectorAll(".mainVisual_image");
let index = 0;

function showNextImage() {
    images[index].style.opacity = 0; // 現在の画像を非表示
    index = (index + 1) % images.length; // 次の画像のインデックスを取得
    images[index].style.opacity = 1; // 次の画像を表示
    console.log(document.querySelectorAll(".mainVisual_image"));

}


setInterval(showNextImage, 5000); // 5秒ごとに画像を切り替え





// header_topを上部に固定
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header_top");
    let headerOffset = header.dataset.initialOffset || header.offsetTop; // 初期位置を保持
    let scrollPosition = window.scrollY; // 現在のスクロール位置

    if (scrollPosition >= headerOffset) {
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

        if (scrollY >= headerOffset - 50) { 
            // ヘッダーと重なり始める位置
            headerTitle.classList.add("overlap");
        } else {
            headerTitle.classList.remove("overlap");
        }
    }

    // スクロールイベントを監視
    window.addEventListener("scroll", handleScroll);
});
