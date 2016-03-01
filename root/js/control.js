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
    query = query.replace(/\r?\n|\r/g, " ");
    console.log("searching KB...." + query);
    $.ajax({
            type: "POST",
            url: "http://easydebug.eng.vmware.com:8888/search",
            data: 'query=' + query,
            cache: false, //......
            success: function (res) {


                    $("#searchResultsContent").empty();

   	var scsid = /(scsi|sense|decoder)/g
   	var match = scsid.exec(query);
    	if(match != null) {
			console.log("scsi find");
	  		var addr="http://easydebug.eng.vmware.com/scsidecoder/"
	    		$("#searchResultsContent").append('<li class="b-bd-t1-gray" style="padding-bottom: 15px;">' +
                            '<div class="a-row b-row pd-t10 pd-b20">' +
                            '<h3><a style="color:rgba(243, 198, 63, 0.85);" class="l-para-head no-bd-t" href="' + addr + '">SCSI Sense Code Decoder - VMware Support Tools</a></h2>' +
                            '<p class="c-body pd-t5" style="margin-bottom: 4px;">' + '<b>SCSI</b> Sense Code Decoder is a VMware Support Tools for SCSI Debugging <b>...</b></p>' +
                            '<a class="c-body" href="' + addr  +
                            '" target="_blank">' +  addr + '</a></div>' +
                            '</li>');


    }
 

   var guest = /(hung|hang)/g
   var match = guest.exec(query);
    if(match != null) {
			console.log("guest hung find");
	  		var addr="http://easydebug.eng.vmware.com/guestoshung/"
	    		$("#searchResultsContent").append('<li class="b-bd-t1-gray" style="padding-bottom: 15px;">' +
                            '<div class="a-row b-row pd-t10 pd-b20">' +
                            '<h3><a style="color:rgba(243, 198, 63, 0.85);" class="l-para-head no-bd-t" href="' + addr + '">Guest OS hung debugging - VMware Support Tools</a></h2>' +
                            '<p class="c-body pd-t5" style="margin-bottom: 4px;">' + 'Guest OS <b>hung</b> debugging is a VMware Support Tools for Guest OS no reponse problem troubleshooting <b>...</b></p>' +
                            '<a class="c-body" href="' + addr  +
                            '" target="_blank">' +  addr + '</a></div>' +
                            '</li>');

		}

   var net = /netdev_watchdog/g
   var match = net.exec(query);
    if(match != null) {
			console.log("netwatchdo");
	    		$("#searchResultsContent").append('<li class="b-bd-t1-gray" style="height: 95px;"><div class="a-row b-row pd-t10 pd-b20"><h3><a class="l-para-head no-bd-t" href="http://kb.vmware.com/kb/2124669" target="_blank" name="&amp;lpos=content : 12">VMware KB: NETDEV WATCHDOG timeout error and ESXi <b>...</b></a></h3><p class="c-body pd-t5" style="height: 20px;">NETDEV WATCHDOG timeout error and ESXi 6.0 loses network<br> connectivity (<b>2124669</b>). Symptoms. After upgrading to or <b>...</b>  </p><a class="c-body" href="http://kb.vmware.com/kb/2124669" target="_blank">http://kb.vmware.com/kb/2124669</a></div></li>');

		}


                if ( res['GSP'].hasOwnProperty('RES') ) {
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
