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

    var loc = [{ lat: 25.017774, lng: 121.532638 }, { lat: 25.019195, lng: 121.532129 }];
    var title = ["葉子咖啡", "Apple Museum Café",];
    var Messages = ["<a href =\"/pages/leaf_cafe/leaf_cafe.html\" class=\"Marker-info\">\
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
                        </div >\
                    </a >"];
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