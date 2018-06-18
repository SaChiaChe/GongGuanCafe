function DisplayReplies(Title) {
    db.collection(Title).onSnapshot(function (querySnapshot) {
        $(".Msg-Board-Content").text("");
        querySnapshot.forEach(function (doc) {
            $(".Msg-Board-Content").append("\
                    <div class=\"Msg-Board-Content-Bubble-box\">\
                    <div class=\"Msg-Board-Content-Bubble\">\
                        <div class=\"Msg-Board-Content-Bubble-Name\">" +
                doc.data().Name + " 說：\
                        </div>\
                        <div class=\"Msg-Board-Content-Bubble-Msg\">" +
                doc.data().Msg +
                "</div>\
                <div class=\"Msg-Board-Content-Bubble-Time\">" +
                doc.data().Time +
                "</div >\
                    </div>\
                    </div>\
                    "
            );
        });
    });
}