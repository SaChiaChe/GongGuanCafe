function RndInt(max) {
    return Math.floor(Math.random() * max) % max;
}

db.collection("ForRandomRecommend").onSnapshot(function (querySnapshot) {
    var TitleList = [];
    querySnapshot.forEach(function (doc) {
        TitleList.push(doc.data().Name);
    });
    var RndId = RndInt(TitleList.length);
    var RndTitle = TitleList[RndId];
    var RndHref = "/pages/" + RndTitle + "/" + RndTitle + ".html";
    // Retry when Random Recommend to the same page
    while (RndHref == window.location.href.toString().split(window.location.host)[1]) {
        RndId = RndInt(TitleList.length);
        RndTitle = TitleList[RndId];
        RndHref = "/pages/" + RndTitle + "/" + RndTitle + ".html";
    }
    $("#RndRec").attr("href", RndHref);
});