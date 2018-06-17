function myMap() {
    //Map option doc: https://developers.google.com/maps/documentation/javascript/reference?csw=1#MapOptions
    var mapOptions = {
        center: new google.maps.LatLng(25.017318, 121.540295),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //disableDefaultUI: true, //隱藏預設UI
        //draggable: false  //不能移動or放大縮小(可用預設UI放大縮小)
    }
    var map = new google.maps.Map(document.getElementById("Map"), mapOptions);

    var loc = [
        { lat: 25.017774, lng: 121.532638 },
        { lat: 25.019195, lng: 121.532129 },
        { lat: 25.020137, lng: 121.533584 },
        { lat: 25.030696, lng: 121.529969 }
    ];
    var title = [
        "葉子咖啡",
        "Apple Museum Café",
        "羊毛與花．溫州店",
        "羊毛與花"
    ];
    var Messages = [
        "<a href =\"/pages/leaf_cafe/leaf_cafe.html\" class=\"Marker-info\">\
                        <div class=\"Marker-info-box\">\
                            <div class=\"Marker-info-img-box\">\
                                <img src =\"/images/Leaf_Cafe.jpg\" alt=\"葉子咖啡\" class=\"Marker-info-img\">\
                            </div>\
                            <div class=\"Marker-info-text-box\">\
                                <div class=\"Marker-info-title\">\
                                    葉子咖啡\
                                </div >\
                                <div class=\"Marker-info-address\">\
                                    106台北市大安區羅斯福路三段283巷14弄16-1號\
                                </div >\
                            </div >\
                            <a href =\"https://www.google.com/maps/place/%E8%91%89%E5%AD%90%E5%92%96%E5%95%A1/@25.017808,121.532826,20z/data=!4m12!1m6!3m5!1s0x0:0x794cabd82044c9fb!2scoco+Brownies!8m2!3d25.0178553!4d121.5326582!3m4!1s0x0:0x34d338a182055d27!8m2!3d25.017774!4d121.532638?hl=zh-TW\" class=\"Marker-info-href\" target=\"_blank\">在Google地圖上查看</a>\
                        </div >\
                    </a >",
        "<a href =\"/pages/apple_museum_cafe/apple_museum_cafe.html\" class=\"Marker-info\">\
                        <div class=\"Marker-info-box\">\
                            <div class=\"Marker-info-img-box\">\
                                <img src =\"/images/Apple_Museum_Cafe.jpg\" alt=\"Apple Museum Cafe\" class=\"Marker-info-img\">\
                            </div>\
                            <div class=\"Marker-info-text-box\">\
                                <div class=\"Marker-info-title\">\
                                    Apple Museum Cafe\
                                </div >\
                                <div class=\"Marker-info-address\">\
                                    106台北市大安區溫州街74巷3弄5號\
                                </div >\
                            </div >\
                            <a href =\"https://www.google.com.tw/maps/place/Apple+Museum+Cafe/@25.0191952,121.5321285,15z/data=!4m2!3m1!1s0x0:0xb315decf6977c921?sa=X&ved=0ahUKEwjAga3_hdrbAhXIWLwKHR-6AjcQ_BIIwwEwCg\" class=\"Marker-info-href\" target=\"_blank\">在Google地圖上查看</a>\
                        </div >\
                    </a >",
        "<a href =\"/pages/wool&flower/wool&flower.html\" class=\"Marker-info\">\
                        <div class=\"Marker-info-box\">\
                            <div class=\"Marker-info-img-box\">\
                                <img src =\"/images/Wool_Flower.jpg\" alt=\"羊毛とおはな\" class=\"Marker-info-img\">\
                            </div>\
                            <div class=\"Marker-info-text-box\">\
                                <div class=\"Marker-info-title\">\
                                    羊毛とおはな\
                                </div >\
                                <div class=\"Marker-info-address\">\
                                    106台北市大安區新生南路三段60巷1號\
                                </div >\
                            </div >\
                            <a href =\"https://www.google.com.tw/search?q=%E7%BE%8A%E6%AF%9B%E8%88%87%E8%8A%B1%E6%BA%AB%E5%B7%9E%E5%BA%97&rlz=1C1CHZL_zh-TWTW724TW724&oq=%E7%BE%8A%E6%AF%9B%E8%88%87%E8%8A%B1%E6%BA%AB%E5%B7%9E%E5%BA%97&aqs=chrome..69i57j69i60.384j0j4&sourceid=chrome&ie=UTF-8&npsic=0&rflfq=1&rlha=0&rllag=25025416,121531776,614&tbm=lcl&rldimm=12173180098807658998&ved=0ahUKEwjO6I2-i9rbAhUBe7wKHZxNBb4QvS4IRTAA&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9#rlfi=hd:;si:12173180098807658998;mv:!1m3!1d5065.426276116888!2d121.5372912511109!3d25.018066738764748!3m2!1i1116!2i538!4f13.1\" class=\"Marker-info-href\" target=\"_blank\">在Google地圖上查看</a>\
                        </div >\
                    </a >",
        "<a href =\"/pages/wool&flower/wool&flower.html\" class=\"Marker-info\">\
                        <div class=\"Marker-info-box\">\
                            <div class=\"Marker-info-img-box\">\
                                <img src =\"/images/Wool_Flower.jpg\" alt=\"羊毛とおはな\" class=\"Marker-info-img\">\
                            </div>\
                            <div class=\"Marker-info-text-box\">\
                                <div class=\"Marker-info-title\">\
                                    羊毛とおはな\
                                </div >\
                                <div class=\"Marker-info-address\">\
                                    No. 12 Lane 37 Yongkang St\
                                </div >\
                            </div >\
                            <a href =\"https://www.google.com.tw/search?rlz=1C1CHZL_zh-TWTW724TW724&tbm=lcl&ei=RQImW-6bEov68QW0prq4Aw&q=%E7%BE%8A%E6%AF%9B%E8%88%87%E8%8A%B1&oq=%E7%BE%8A%E6%AF%9B%E8%88%87%E8%8A%B1&gs_l=psy-ab.3..35i39k1l2j0l8.178989.178989.0.179177.1.1.0.0.0.0.57.57.1.1.0....0...1c.1.64.psy-ab..0.1.56....0.lHoqoZFLaXg#rlfi=hd:;si:6866341347560548839;mv:!1m3!1d331.26643523106446!2d121.52996900000001!3d25.030696000000002!2m3!1f0!2f0!3f0!3m2!1i1116!2i563!4f13.1\" class=\"Marker-info-href\" target=\"_blank\">在Google地圖上查看</a>\
                        </div >\
                    </a >"
    ];
    add_marker(loc, title, Messages, map);
}

//增加標記
function add_marker(loc, title, Messages, map) {
    for (let i = 0; i < loc.length; i++) {
        var marker = new google.maps.Marker({
            position: loc[i],
            map: map,
            title: title[i]
        });
        attachSecretMessage(marker, Messages[i]);
    }
}

function attachSecretMessage(marker, secretMessage) {
    var infowindow = new google.maps.InfoWindow({
        content: secretMessage,
    });

    marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
    });
}