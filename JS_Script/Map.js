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
    // Google反向地理編碼，目前還懶得做，只用來查詢經緯度而已，有時間再用成可以輸入地址自己找到位置的方式
    // https://developers.google.com/maps/documentation/geocoding/intro?hl=zh-tw
    var loc = [
        { lat: 25.017774, lng: 121.532638 },
        { lat: 25.019195, lng: 121.532129 },
        { lat: 25.020137, lng: 121.533584 },
        { lat: 25.030696, lng: 121.529969 }
    ];
    var title = [
        "葉子咖啡",
        "Apple Museum Café",
        "羊毛とおはな·溫州",
        "羊毛とおはな"
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
                                <a href=\"https://www.google.com.tw/maps/place/%E8%91%89%E5%AD%90%E5%92%96%E5%95%A1/@25.0177741,121.5304493,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a9895dc40e13:0x34d338a182055d27!8m2!3d25.0177741!4d121.532638\" target=\"_blank\" class=\"Marker-info-href\">\
                                    在Google地圖上查看\
                                </a>\
                            </div >\
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
                                <a href=\"https://www.google.com.tw/maps/place/Apple+Museum+Cafe/@25.0191952,121.5299398,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a989464d28a1:0xb315decf6977c921!8m2!3d25.0191952!4d121.5321285\" target=\"_blank\" class=\"Marker-info-href\">\
                                    在Google地圖上查看\
                                </a>\
                            </div >\
                        </div >\
                    </a >",
        "<a href =\"/pages/wool_flower/wool_flower.html\" class=\"Marker-info\">\
                        <div class=\"Marker-info-box\">\
                            <div class=\"Marker-info-img-box\">\
                                <img src =\"/images/Wool_Flower.jpg\" alt=\"羊毛とおはな\" class=\"Marker-info-img\">\
                            </div>\
                            <div class=\"Marker-info-text-box\">\
                                <div class=\"Marker-info-title\">\
                                    羊毛とおはな·溫州\
                                </div >\
                                <div class=\"Marker-info-address\">\
                                    106台北市大安區新生南路三段60巷1號\
                                </div >\
                                <a href=\"https://www.google.com.tw/maps/place/%E7%BE%8A%E6%AF%9B%E8%88%87%E8%8A%B1+%E2%80%A7+%E6%BA%AB%E5%B7%9E+youmoutoohana+Coffee+Wenzhou/@25.020137,121.5313953,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a989030f4479:0xa8efd2cdb848f9f6!8m2!3d25.020137!4d121.533584\" target=\"_blank\" class=\"Marker-info-href\">\
                                    在Google地圖上查看\
                                </a>\
                            </div >\
                        </div >\
                    </a >",
        "<a href =\"/pages/wool_flower/wool_flower.html\" class=\"Marker-info\">\
                        <div class=\"Marker-info-box\">\
                            <div class=\"Marker-info-img-box\">\
                                <img src =\"/images/Wool_Flower.jpg\" alt=\"羊毛とおはな\" class=\"Marker-info-img\">\
                            </div>\
                            <div class=\"Marker-info-text-box\">\
                                <div class=\"Marker-info-title\">\
                                    羊毛とおはな\
                                </div >\
                                <div class=\"Marker-info-address\">\
                                    No. 12 Lane 37 Yongkang St, 大安區台北市106\
                                </div >\
                                <a href=\"https://www.google.com.tw/maps/place/%E7%BE%8A%E6%AF%9B%E8%88%87%E8%8A%B1/@25.030696,121.5277803,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a983c0edb8ff:0x5f4a25137fec69e7!8m2!3d25.030696!4d121.529969\" target=\"_blank\" class=\"Marker-info-href\">\
                                    在Google地圖上查看\
                                </a>\
                            </div >\
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