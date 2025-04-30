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



// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".header_btn");
    const hamburger = document.querySelector(".hamburger");

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("active");
        hamburger.classList.toggle("active");

        // メニューが開いたらスクロールを無効にする
        if (hamburger.classList.contains("active")) {
            document.body.style.overflow = "hidden"; // スクロールを無効にする
        } else {
            document.body.style.overflow = "auto"; // スクロールを有効に戻す
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".mainVisual_inner");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add("show-border");
        }
      });
    }, { threshold: 0.5 }); // 50% 見えたら発火

    observer.observe(target);
  });


//   const headerTop = document.querySelector('.header_top');

// window.onload = () => {
//   headerTop.classList.add('active');
// };

const headerTop = document.querySelector('.header_top');
const menu = document.querySelector('.menu');
const news = document.querySelector('.news');

// /下記をまとめたもの　いらないかも 
// window.onload = () => {
//   headerTop.classList.add('active');
//   menu.classList.add('active');
//   news.classList.add('active');


// };
// window.onload = () => {
//     const userInners = document.querySelectorAll('.user_inner');
//     userInners.forEach((inner, index) => {
//       if (index === 0 || index === 1) { // 1個目と2個目だけ
//         inner.classList.add('active');
//       }
//     });
//   };
  



//   window.onload = () => {
//     // header_top、menu、news に active を付ける
//     document.querySelector('.header_top')?.classList.add('active');
//     document.querySelector('.menu')?.classList.add('active');
//     document.querySelector('.news')?.classList.add('active');
  
//     // user_inner の1個目と2個目に active
//     const userInners = document.querySelectorAll('.user_inner');
//     userInners.forEach((inner, index) => {
//       if (index === 0 || index === 1) {
//         inner.classList.add('active');
//       }
//     });
  
//     // menuSection の1個目～3個目に active
//     const menuSections = document.querySelectorAll('.menuSection');
//     menuSections.forEach((section, index) => {
//       if (index === 0 || index === 1 || index === 2) {
//         section.classList.add('active');
//       }
//     });
//   };
  
  window.onload = () => {
    // これまでの header_top、menu、news、user_inner、menuSection のactive設定
    document.querySelector('.header_top')?.classList.add('active');
    document.querySelector('.menu')?.classList.add('active');
    document.querySelector('.news')?.classList.add('active');
  
    const userInners = document.querySelectorAll('.user_inner');
    userInners.forEach((inner, index) => {
      if (index === 0 || index === 1) {
        inner.classList.add('active');
      }
    });
  
    const menuSections = document.querySelectorAll('.menuSection');
    menuSections.forEach((section, index) => {
      if (index === 0 || index === 1 || index === 2) {
        section.classList.add('active');
      }
    });
  
    // ★ここから今回追加するやつ★
    const mainSectionVisuals = document.querySelectorAll('.mainSection_visual');
    if (mainSectionVisuals[0]) {
      mainSectionVisuals[0].classList.add('active');
    }
  
    const mainInners = document.querySelectorAll('.main_inner');
    if (mainInners[1]) {
      mainInners[1].classList.add('active');
    }
  };
  

  

window.onload = () => {
    const elements = [
      document.querySelectorAll('.mainSection_visual')[1], // 2番目のmainSection_visual
      document.querySelectorAll('.main_inner')[2]           // 3番目のmain_inner
    ];
  
    elements.forEach(el => {
      if (el) {
        el.classList.add('active');
      }
    });
  };
  
