var Score = 0;
var Page = -1;
var TotalQuestions = 5;
var Questions = [
    ["1. 下列三種音樂類型你最喜歡哪一種?", "JAZZ", "鄉村音樂", "電子音樂"],
    ["2. 我是一個很念舊的人", "完全同意", "沒想法", "不同意"],
    ["3. 憑直覺選一張塔羅牌。", "<div class=\"TestQuestionImg\" id=\"Q3Img0\">" + "</div >", "<div class=\"TestQuestionImg\" id=\"Q3Img1\">" + "</div >", "<div class=\"TestQuestionImg\" id=\"Q3Img2\">" + "</div >"],
    ["4. 通常去咖啡店我都是要……", "聚會", "療癒自己", "辦公、讀書"],
    ["5. 你的手機品牌是?", "APPLE", "SONY", "其他"]
];
var AnswerScore = [
    [5, 10, 15],
    [5, 10, 15],
    [5, 10, 15],
    [5, 10, 15],
    [15, 10, 5]
];
var Results = [
    [37, "葉子咖啡", "/images/Cafe/Leaf_Cafe.jpg", "/pages/leaf_cafe/leaf_cafe.html"],
    [57, "羊毛とおはな", "/images/Cafe/Wool_Flower.jpg", "/pages/wool_flower/wool_flower.html"],
    [77, "Apple Museum Cafe", "/images/Cafe/Apple_Museum_Cafe.jpg", "/pages/apple_museum_cafe/apple_museum_cafe.html"]
];

function LoadNextPage(CurrentPage) {
    if (Page >= TotalQuestions) return;
    var NextPage = CurrentPage + 1;
    $(".Content-box").text("");
    $(".Content-box").append("<h1>你適合哪一家咖啡廳？</h1>"
    );
    $(".Content-box").append("\
            <div class=\"Question-title\">" +
        Questions[NextPage][0]
        + "</div >");
    $(".Content-box").append("\
            <div class=\"Button-box\">\
                <button onclick=\"AddScore0();LoadPage();\" class= \"Button\" id = \"A0_Button\" >" + Questions[NextPage][1] + "</button >\
            </div >");
    $(".Content-box").append("\
            <div class=\"Button-box\">\
                <button onclick=\"AddScore1();LoadPage();\" class= \"Button\" id = \"A1_Button\" >" + Questions[NextPage][2] + "</button >\
            </div >");
    $(".Content-box").append("\
            <div class=\"Button-box\">\
                <button onclick=\"AddScore2();LoadPage();\" class= \"Button\" id = \"A2_Button\" >" + Questions[NextPage][3] + "</button >\
            </div >");
    return NextPage;
}

function LoadPreResult() {
    $(".Content-box").text("");
    $(".Content-box").append("<h1>你適合哪一家咖啡廳？</h1>");
    $(".Content-box").append("\
        <div class=\"PreResultPage-box\">\
            <button onclick=\"LoadResult();\" class= \"Button\">\
                去看結果\
             </button >\
        </div>\
    ")
}

function LoadResult() {
    $(".Content-box").text("");
    $(".Content-box").append("<h1>你適合哪一家咖啡廳？</h1>");
    if (Score <= Results[0][0]) {
        $(".Content-box").append("\
            <div class=\"Question-title\">\
        <h1>" + Results[0][1] + "</h1>\
        </div >");
        $(".Content-box").append("\
        <div class=\"img-box\">\
        <img src = \"" + Results[0][2] + "\" alt = \"" + Results[0][1] + "\" >\
            </div >\
        ")
        $(".Content-box").append("\
        <div class=\"ResultUrl-box\">\
        <a href=\"" + Results[0][3] + "\" class=\"ResultUrl\">去看介紹</a>\
            </div >\
        ")
    }
    else if (Score <= Results[1][0]) {
        $(".Content-box").append("\
            <div class=\"Question-title\">\
        <h1>" + Results[1][1] + "</h1>\
        </div >");
        $(".Content-box").append("\
        <div class=\"img-box\">\
        <img src = \"" + Results[1][2] + "\" alt = \"" + Results[1][1] + "\" >\
            </div >\
        ")
        $(".Content-box").append("\
        <div class=\"ResultUrl-box\">\
        <a href=\"" + Results[1][3] + "\" class=\"ResultUrl\">去看介紹</a>\
            </div >\
        ")
    }
    else if (Score <= Results[2][0]) {
        $(".Content-box").append("\
            <div class=\"Question-title\">\
        <h1>" + Results[2][1] + "</h1>\
        </div >");
        $(".Content-box").append("\
        <div class=\"img-box\">\
        <img src = \"" + Results[2][2] + "\" alt = \"" + Results[2][1] + "\" >\
            </div >\
        ")
        $(".Content-box").append("\
        <div class=\"ResultUrl-box\">\
        <a href=\"" + Results[2][3] + "\" class=\"ResultUrl\">去看介紹</a>\
            </div >\
        ")
    }
}

function LoadPage() {
    if (Page < TotalQuestions - 1) {
        Page = LoadNextPage(Page);
        return;
    }
    //Last Question
    Page += 1;
    if (Page >= TotalQuestions) {
        LoadPreResult();
    }
}

function AddScore0() {
    Score += AnswerScore[Page][0];
}

function AddScore1() {
    Score += AnswerScore[Page][1];
}

function AddScore2() {
    Score += AnswerScore[Page][2];
}