$(function(){
  $("#js-hamburger-menu,.navigation__link").on("click",function(){
      $(".navigation").slideToggle(1000);
  $(".hamburger-menu").toggleClass("hamburger-menu--open");

  });
 
});



/*menu-list1*/ 
document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.menu-list1');
  
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

window.addEventListener('DOMContentLoaded', ()=> {
    // コンテナを指定
    const container = document.querySelector('.leaves-container');
  
    // れんこんを生成する関数
    const createLeaf = (leafClass, minSizeVal, maxSizeVal) => {
      const leafEl = document.createElement('span');
      leafEl.className = `leaf ${leafClass}`;
      const minSize = minSizeVal;
      const maxSize = maxSizeVal;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      leafEl.style.width = `${size}px`;
      leafEl.style.height = `${size}px`;
      leafEl.style.left = Math.random() * 100 + '%';
      container.appendChild(leafEl);
  
      // 一定時間が経てばれんこんを消す
      setTimeout(() => {
        leafEl.remove();
      }, 100000);
    }
  
    // れんこんを生成する間隔をミリ秒で指定する
    // createLeafの引数には、'クラス名', '最小サイズ', '最大サイズ'を渡す
    setInterval(createLeaf.bind(this, 'leaf-1', 30, 50), 1000);
    setInterval(createLeaf.bind(this, 'leaf-2', 30, 50), 1000);
    setInterval(createLeaf.bind(this, 'leaf-3', 30, 50), 1000);
  });

//スライド
$(".slider").slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: false,//下部ドットナビゲーションの表示(非表示)
});



    // トップに戻るボタンをクリックした時の処理
document.querySelector('footer a[href="#top"]').addEventListener('click', function(event) {
  event.preventDefault(); // リンクのデフォルトの挙動を無効化

  // ページのトップにスムーズにスクロールする
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

