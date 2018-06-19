function UploadReply(Title) {
    $("#add-Reply").click(function () {
        if ($("#ReplyName").val().replace(/\s/g, '') == "") {
            $("#ReplyName").val("");
            $("#ReplyName").attr("placeholder", "你是沒名字喔 (╬☉д⊙)");
        }
        if ($("#ReplyMsg").val().replace(/\s/g, '') == "") {
            $("#ReplyMsg").val("");
            $("#ReplyMsg").attr("placeholder", "至少寫點甚麼吧 (╬ﾟдﾟ)╭∩╮");
        }
        if ($("#ReplyMsg").val().replace(/\s/g, '') == "" || $("#ReplyName").val().replace(/\s/g, '') == "") {
            return;
        }
        var D = new Date();
        var Time = String(D.getTime());
        db.collection(Title).doc(Time).set({
            Name: $("#ReplyName").val(),
            Msg: $("#ReplyMsg").val(),
            Time: D.toUTCString(),
            FileName: Time
        });
        $("#ReplyName").val("");
        $("#ReplyName").attr("placeholder", "王小名");
        $("#ReplyMsg").val("");
        $("#ReplyMsg").attr("placeholder", "最多200字喔~~");
    });
}