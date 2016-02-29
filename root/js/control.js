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
    query = query.toLowerCase();
    console.log("searching KB...." + query);
    $.ajax({
            type: "POST",
            url: "http://easydebug.eng.vmware.com:8888/search",
            data: 'query=' + query,
            cache: false, //......
            success: function (res) {
                if ( res['GSP'].hasOwnProperty('RES') ) {
                    $("#searchResultsContent").empty();
		    if(query.indexOf("scsi") > -1 || query.indexOf("sense") > -1|| query.indexOf("decode") > -1) {
			console.log("scsi find");
	  		var addr="http://easydebug.eng.vmware.com/scsidecoder/"
	    		$("#searchResultsContent").append('<li class="b-bd-t1-gray" style="padding-bottom: 15px;">' +
                            '<div class="a-row b-row pd-t10 pd-b20">' +
                            '<h3><a class="l-para-head no-bd-t" href="' + addr + '">SCSI Sense Code Decoder - VMware Support Tools</a></h2>' +
                            '<p class="c-body pd-t5" style="margin-bottom: 4px;">' + '<b>SCSI</b> Sense Code Decoder is a VMware Support Tools for SCSI Debugging <b>...</b></p>' +
                            '<a class="c-body" href="' + addr  +
                            '" target="_blank">' +  addr + '</a></div>' +
                            '</li>');

		}
		   if(query.indexOf("hung") > -1 || query.indexOf("hang") > -1|| query.indexOf("vm") > -1) {
			console.log("guest hung find");
	  		var addr="http://easydebug.eng.vmware.com/guestoshung/"
	    		$("#searchResultsContent").append('<li class="b-bd-t1-gray" style="padding-bottom: 15px;">' +
                            '<div class="a-row b-row pd-t10 pd-b20">' +
                            '<h3><a class="l-para-head no-bd-t" href="' + addr + '">Guest OS hung debugging - VMware Support Tools</a></h2>' +
                            '<p class="c-body pd-t5" style="margin-bottom: 4px;">' + 'Guest OS <b>hung</b> debugging is a VMware Support Tools for Guest OS no reponse problem troubleshooting <b>...</b></p>' +
                            '<a class="c-body" href="' + addr  +
                            '" target="_blank">' +  addr + '</a></div>' +
                            '</li>');

		}


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
