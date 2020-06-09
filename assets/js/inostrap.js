// スムーススクロール
$(function(){
  $('a[href^="#mv"]').click(function(){
    //スクロールのスピード
    var speed = 700;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});
});


// ナビゲーションバー クローズ
var navbarNav = document.getElementById('navbarNav');
var closeNav = function(item) {
    navbarNav.classList.remove('show');
}

// 次の要素をとぐる
function qaToggle(item) {
    var child = item.nextElementSibling;
    child.classList.remove('d-none');
}


/* instagram */
$(function () {
    try {
        instaurl = "https://www.instagram.com/";
        this.name = "via_jpn";
        $.ajax(instaurl + this.name + '/', {
            timeout: 2000,
            datatype: 'html'
        }).then(function (data) {
            json_string = data.split("window._sharedData = ")[1];
            json_string = json_string.split("};</script>")[0] + "}";
            this.Arrya_data = JSON.parse(json_string);
            let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
            for (i in datas) {
                // 画像URL取得
                var url = datas[i].node.display_url;
                // テキスト取得
                var text = datas[i].node.edge_media_to_caption.edges[0].node.text;
                // リンク取得
                var link = instaurl + "/p/" + datas[i].node.shortcode;

                this.html = `
                <div class="col-4 col-md-3 cardImgWrp p-1 wow fadeInDown">
                <a href="${link}" target="_blank">
                <img src="${url}">
                </a>
                </div>
                `;
                $(".insta-card").append(this.html);
            }
        });
    } catch (error) {
        alert(error);
    }
})