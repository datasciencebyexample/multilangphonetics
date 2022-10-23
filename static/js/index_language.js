$(document).ready(function () {
    // 页面刚开始隐藏搜索结果的部分
    //$("#resultSection").hide();

    // id为searchPaper的按钮按下触发searchPaper()方法
    $("#searchPaper").click(function () {
        //keyword = $("#keyword_lang").val();
	//filter = $("#filter").val();
	
	//console.log($("#keyword_lang").val());
	//searchExample($(keyword_lang));
	searchExample($("#keyword_lang").val());
	//if(filter == 'word'){
        //    searchPaper2(keyword);
	//
	//}
	//else{
	//    searchExample(keyword);
	//}
	
    });


});


// 在按下enter键的时候就搜索
$(document).keyup(function (event) {
    if (event.keyCode == 13) {
	//filter = $("#filter").val();
	
	//keyword = $("#keyword").val();
	//console.log($("#keyword_lang").val());
	
	//searchExample($(keyword));
	searchExample($("#keyword_lang").val());
	//if(filter == 'word'){
        //    searchPaper2($("#keyword").val());
	//}
	//else{
	//    searchExample($("#keyword").val());
	//}
    }
});



function searchPaper2(key) {
    // 首先清空result中的内容以便内容填入
    $("#result").empty();
    $.getJSON({
        url: "/search",
	data: {'query':key},
	type: 'POST',
        success: function (result) {
	    //console.log("hello");
	    //console.log($("#keyword").val());
	    //console.log($("#filter").val());
            // 获取返回的数据中我们需要的部分
            //res = result.response.docs;
	    res = result.results;
	    
            // 利用for插入每一个结果
            if (res.length) {
                for (i = 0; i < res.length; i++) {
                    // 将返回的结果包装成HTML
                    resultItem =
                        `
                        <div class='col-md-12 mb-4'>
                            <div class='card mb-12 shadow-sm'>
                                <div class='card-body'>
                                    <h5>` +
                        res[i].word  +
                       `</small></h5>
                                    <p class='text-muted' style='margin-bottom: 0.5em'>` + "Phonetic: " +
                        res[i].phonetic +
                        `</p>
                                    <p class='card-text'>` +"Chinese translation: "+
                        res[i].translation +
                        `</p>
                                </div>
                            </div>
                        </div>
                    `;
                    // 插入HTML到result中
                    $("#result").append(resultItem);
                }

                // 搜索完以后让搜索框移上去，带有动画效果
                $("section.jumbotron").animate({
                    margin: "0"
                });
                // 显示搜索结果的部分
                $("#resultSection").show();
                // 清空输入联想
                $("#suggestList").empty();
            }
        }
    });
}





function searchExample(key) {
    // 首先清空result中的内容以便内容填入
    $("#result").empty();
    $.getJSON({
        url: "/search_sentcorp",
	data: {'query':key,'code':'de'},
	//data: {'query':key},
	
	type: 'POST',
        success: function (result) {
	    //console.log("hello");
	    console.log($("#keyword_lang").val());
	    //console.log($("#filter").val());
            // 获取返回的数据中我们需要的部分
            //res = result.response.docs;
	    res = result.results;
	    
            // 利用for插入每一个结果
            if (res.length) {
                for (i = 0; i < res.length; i++) {
                    // 将返回的结果包装成HTML
                    resultItem =
                        `
                        <div class='col-md-12 mb-4'>
                            <div class='card mb-12 shadow-sm'>
                                <div class='card-body'>
                                    <h5>` +
                        //"Sentence example"  +
		
                       `</small></h5>`+
                       //             <p class='text-muted' style='margin-bottom: 0.5em'>` + "Highlight: " +
                       // res[i].highlight +
			// `</p>

		    `<p class='card-text'>` +
			//"<p style='background-color:#fff8dc;'> Highlight: </p>"+
                        res[i].highlight+
                        `</p>`+
			//`<p class='card-text'>` + "<p style='background-color:#fff8dc;'> More: </p>"+
                        //res[i].content+
                        //`</p>`+
                               `</div>
                            </div>
                        </div>
                    `;
                    // 插入HTML到result中
                    $("#result").append(resultItem);
                }

                // 搜索完以后让搜索框移上去，带有动画效果
                $("section.jumbotron").animate({
                    margin: "0"
                });
                // 显示搜索结果的部分
                $("#resultSection").show();
                // 清空输入联想
                $("#suggestList").empty();
            }
        }
    });
}


