/**
 * Created by gliu on 2/25/16.
 */


var timer, delay = 300;
$("#issueDescription").bind('keydown blur change', function(e) {
    var _this = $(this);
    clearTimeout(timer);
    timer = setTimeout(function() {
        console.log("ahaha");
        searchKB();
    }, delay );
});

function searchKB() {
    var query = $('#issueDescription').val();
    console.log("searching KB...." + query);
    $.ajax({
            type: "POST",
            url: "http://easydebug.eng.vmware.com:8888/search",
            data: 'query=' + query,
            cache: false, //......
            success: function (res) {
                if ( res['GSP'].hasOwnProperty('RES') ) {
                    $("#searchResultsContent").empty();
                    for(var i = 0; i < res['GSP']['RES']['R'].length; i ++) {
                        var kb = res['GSP']['RES']['R'][i];
                        $("#searchResultsContent").append('<li class="b-bd-t1-gray" style="padding-bottom: 15px;">' +
                            '<div class="a-row b-row pd-t10 pd-b20">' +
                            '<h3><a class="l-para-head no-bd-t" href=' + kb['U'] + 'target="_blank">' + kb['T'] + '</a></h3>' +
                            '<p class="c-body pd-t5" style="margin-bottom: 4px;">' + kb['S'] + '</p>' +
                            '<a class="c-body" href="' + kb['UE']  +
                            '" target="_blank">' +  kb['UE'] + '</a></div>' +
                            '</li>');

                    }
                }
            }
        })
}
