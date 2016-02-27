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
    //    2011-04-04T21:07:30.257Z cpu2:2050)ScsiDeviceIO: 2315: Cmd(0x4124003edb00) 0x12, CmdSN 0x51 to dev “naa.[…]” iled H:0x0 D:0x2 P:0x0 Valid sense data: 0x5 0x24 0x0.
   // failed H:0x([a-f0-9]) D:0x([a-f0-9]) P:0x([a-f0-9]) Valid sense data: 0x([a-f0-9]+) 0x([a-f0-9]+) 0x([a-f0-9])
   //var reg = / H:0x([a-f0-9]+) D:0x([a-f0-9]+) P:0x([a-f0-9]+) *sense data: 0x([a-f0-9]+) 0x([a-f0-9]+) 0x([a-f0-9]+)/
   var reg = /H:0x([a-f0-9]+) D:0x([a-f0-9]+) P:0x([a-f0-9]+) [a-zA-Z]+ sense data: 0x([a-f0-9]+) 0x([a-f0-9]+) 0x([a-f0-9]+)/
   var match = reg.exec(query);
    console.log("searching KB...." + query);
    if(match === null || match.length < 7) {
	console.log("failed to parse...");
	return;
    }
    $("#host").val(match[1]);
    $("#device").val(match[2]);
    $("#plugin").val(match[3]);
    $("#sensekey").val(match[4]);
    $("#asc").val(match[5]);
    $("#ascq").val(match[6]);


//host   

var h0n="VMK_SCSI_HOST_OK"
var h0d="This status is returned when there is no error on the host side. This is when you see if there is a status for a device or plugin. This status is also when you see valid sense data instead of possible sense data."
 
var h1n="VMK_SCSI_HOST_NO_CONNECT"
var h1d="This status is returned if the connection is lost to the LUN. This can occur if the LUN is no longer visible to the host from the array side or if the physical connection to the array has been removed."
 
var h2n="VMK_SCSI_HOST_BUS_BUSY"
var h2d="This status is returned when the HBA driver is unable to issue a command to the device. This status occurs due to dropped FCP frames in the environment."

var h3n="VMK_SCSI_HOST_TIMEOUT"
var h3d="This status is returned when the command in-flight to the array times out."

var h4n="VMK_SCSI_HOST_BAD_TARGET"
var h4d="This status is returned after the driver abort commands to a bad target. Typically this status occurs when the target experiences a hardware error, butit can also occurif a command is sent to a bad target ID."

var h5n="VMK_SCSI_HOST_ABORT"
var h5d="This status is returned if the driver aborts commands in-flight to the target. This occurs due to a command timeout or parity error in the frame."

var h6n="VMK_SCSI_HOST_PARITY"
var h6d="This status is returned for generic errors. For example, this status occurs for events not covered by the other errors (such as data overrun or underrun)."

var h7n="VMK_SCSI_HOST_ERROR"
var h7d="This status is returned when a device is reset due to a Storage Initiator Error. This typically occurs due to an outdated HBA firmware or possibly (though rarely) as the result of a bad HBA. For more information on the bad HBA scenario, see One host shows a Storage Initiator Error while all other hosts show SCSI Reservation Conflicts (1021187)."

var h8n="VMK_SCSI_HOST_RESET"
var h8d="his status is returned when the HBA driver aborts I/O. It also occurs if the HBA resets the target."

var h9n="VMK_SCSI_HOST_BAD_INTR"
var h9d="This is a legacy error and never be returned."

var han="VMK_SCSI_HOST_PASSTHROUGH"
var had="This is a legacy error and never be returned. It was meant for a way for drivers to return an I/O that failed due to temporary conditions in the driver and that I/O be retried."

var hbn="VMK_SCSI_HOST_SOFT_ERROR"
var hbd="This status is returned if the HBA driver returns a DID_REQUEUE command. Upon receiving this status, the I/O command is reissued immediately."

var hcn="VMK_SCSI_HOST_RETRY"
var hcd="This status is returned due to a transient error. When this status is returned, the I/O command is requeued and issued again."

var hdn="VMK_SCSI_HOST_REQUEUE"
var hdd="This status is returned when the HBA driver tries to abort a command which then sets the IOSTAT_LOCAL_REJECT status on all commands in the iocb ring. This causes the original command to requeue."

    if (match[1] === '0') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h0n);
	 $("#hostd").html(h0d);
    } 
 
    if (match[1] === '1') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h1n);
	 $("#hostd").html(h1d);
    } 

    if (match[1] === '2') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h2n);
	 $("#hostd").html(h2d);
    } 

    if (match[1] === '3') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h3n);
	 $("#hostd").html(h3d);
    } 

    if (match[1] === '4') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h4n);
	 $("#hostd").html(h4d);
    } 

    if (match[1] === '5') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h5n);
	 $("#hostd").html(h5d);
    } 

    if (match[1] === '6') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h6n);
	 $("#hostd").html(h6d);
    } 

    if (match[1] === '7') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h7n);
	 $("#hostd").html(h7d);
      	 console.log("match1=" + match[1]);
    } 

    if (match[1] === '8') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h8n);
	 $("#hostd").html(h8d);
      	 console.log("match1=" + match[1]);
    } 

    if (match[1] === '9') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(h9n);
	 $("#hostd").html(h9d);
      	 console.log("match1=" + match[1]);
    } 

    if (match[1] === 'a' || match[1] === '0a') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(han);
	 $("#hostd").html(had);
      	 console.log("match1=" + match[1]);
    } 

    if (match[1] === 'b' || match[1] === '0b') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(hbn);
	 $("#hostd").html(hbd);
    } 

    if (match[1] === 'c' || match[1] === '0c') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(hcn);
	 $("#hostd").html(hcd);
    } 

    if (match[1] === 'd' || match[1] === '0d') {
	 $("#hostv").html("0x" + match[1]);
	 $("#hostn").html(hdn);
	 $("#hostd").html(hdd);
    } 


//device


var d0n="VMK_SCSI_DEVICE_GOOD"
var d0d="This status is returned when there is no error from the device or target side. This is when you will see if there is a status for Host or Plugin.For more information on host side NMP errors, see Understanding SCSI host-side NMP errors/conditions in VMware ESX 4.x (1029039)."

var d2n="VMK_SCSI_DEVICE_CHECK_CONDITION"
var d2d="This status is returned when a command fails for a specific reason. When a CHECK CONDITION is received, the ESX storage stack will send out a SCSI command 0x3 (REQUEST SENSE) in order to get the SCSI sense data (Sense Key, Additional Sense Code, ASC Qualifier, and other bits). The sense data is listed after Valid sense data in the order of Sense Key, Additional Sense Code, and ASC Qualifier. When decoding Additional Sense Code/ASC Qualifier bits, they must be read together."


var d4n="VMK_SCSI_DEVICE_CONDITION_MET"
var d4d="This status is returned for successful completion of conditional commands, such as PREFETCH."

var d8n="VMK_SCSI_DEVICE_BUSY"

var d8d="This status is returned when a LUN cannot accept SCSI commands at the moment. As this should be a temporary condition, the command is tried again."

var d10n="VMK_SCSI_DEVICE_INTERMEDIATE"
var d10d="Never seen in ESX. This status is the same as 0x0 (GOOD) and is returned for a command that was part of a series of linked commands."

var d14n="VMK_SCSI_DEVICE_INTERMEDIATE_CONDITION_MET"
var d14d="Never seen in ESX.This status is the combination of device statuses CONDITION MET (0x4) and INTERMEDIATE (0x10)."

var d18n="VMK_SCSI_DEVICE_RESERVATION_CONFLICT"
var d18d="This status is returned when a LUN is in a Reserved status and commands from initiators that did not place that SCSI reservation attempt to issue commands to it. Rarely will you ever see a device status of 0x18 in the format shown above."



var d22n="VMK_SCSI_DEVICE_COMMAND_TERMINATED"
var d22d="Never seen in ESX. Obsolete status code. Was originally returned as a result of a TERMINATE I/O message. That message is also obsolete."

var d28n="VMK_SCSI_DEVICE_QUEUE_FULL (TASK SET FULL)"
var d28d="This status is returned when the LUN prevents accepting SCSI commands from initiators due to lack of resources, namely the queue depth on the array."

var d30n="VMK_SCSI_DEVICE_ACA_ACTIVE"
var d30d="This status is returned when an Auto Contingent Allegiance (ACA) has been aborted by another SCSI initiator. This status has been observed on arrays running older/unsupported firmware with ESX 4.1, specifically because the firmware does not support VAAI commands."

var d40n="VMK_SCSI_DEVICE_TASK_ABORTED"
var d40d="This status is returned when a command has been aborted by another SCSI initiator and the TASK ABORT STATUS bit is set to '1'. So far this status has only been returned by iSCSI arrays."

    if (match[2] === '0') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d0n);
	 $("#deviced").html(d0d);
    } 
    if (match[2] === '2') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d2n);
	 $("#deviced").html(d2d);
    } 

   if (match[2] === '4') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d4n);
	 $("#deviced").html(d4d);
    } 

   if (match[2] === '8') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d8n);
	 $("#deviced").html(d8d);
    } 

   if (match[2] === '10') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d10n);
	 $("#deviced").html(d10d);
    } 

   if (match[2] === '14') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d14n);
	 $("#deviced").html(d14d);
    } 

      if (match[2] === '18') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d18n);
	 $("#deviced").html(d18d);
    } 

   if (match[2] === '22') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d22n);
	 $("#deviced").html(d22d);
    } 

   if (match[2] === '28') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d28n);
	 $("#deviced").html(d28d);
    } 

   if (match[2] === '30') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d30n);
	 $("#deviced").html(d30d);
    } 

   if (match[2] === '40') {
	 $("#devicev").html("0x" + match[2]);
	 $("#devicen").html(d40n);
	 $("#deviced").html(d40d);
    } 


   //plugin...

	var p0d= "No error."
	var p0n ="VMK_SCSI_PLUGIN_GOOD"

	var p1d="An unspecified error occurred. Note: The I/O cmd should be tried."
	var p1n="VMK_SCSI_PLUGIN_TRANSIENT"

	var p2n="The device is a deactivated snapshot.Note: The I/O cmd failed because the device is a deactivated snapshot and so the LUN is read-only."
	var p2d="VMK_SCSI_PLUGIN_SNAPSHOT"

	var p3d="SCSI-2 reservation was lost."
	var p3n="VMK_SCSI_PLUGIN_RESERVATION_LOST"

	var p4d="The plug-in wants to requeue the I/O back.Note: The I/O will be retried."
	var p4n="VMK_SCSI_PLUGIN_REQUEUE"

	var p5d="The test and set data in the ATS request returned false for equality."	
	var p5n="VMK_SCSI_PLUGIN_ATS_MISCOMPARE"

	var p6d="Allocating more thin provision space. Device server is in the process of allocating more space in the backing pool for a thin provisioned LUN."
	var p6n="VMK_SCSI_PLUGIN_THINPROV_BUSY_GROWING"

	var p7d="Thin provisioning soft-limit exceeded."
	var p7n="VMK_SCSI_PLUGIN_THINPROV_ATQUOTA"

	var p8d="Backing pool for thin provisioned LUN is out of space."
	var p8n="VMK_SCSI_PLUGIN_THINPROV_NOSPACE"

   if (match[3] === '0') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p0n);
	 $("#plugind").html(p0d);
    } 
   if (match[3] === '1') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p1n);
	 $("#plugind").html(p1d);
    } 

  if (match[3] === '2') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p2n);
	 $("#plugind").html(p2d);
    } 

  if (match[3] === '3') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p3n);
	 $("#plugind").html(p3d);
    } 

  if (match[3] === '4') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p4n);
	 $("#plugind").html(p4d);
    } 

  if (match[3] === '5') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p5n);
	 $("#plugind").html(p5d);
    } 

  if (match[3] === '6') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p6n);
	 $("#plugind").html(p6d);
    } 

  if (match[3] === '7') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p7n);
	 $("#plugind").html(p7d);
    } 

  if (match[3] === '8') {
	 $("#pluginv").html("0x" + match[3]);
	 $("#pluginn").html(p8n);
	 $("#plugind").html(p8d);
    } 




var s0h="NO SENSE"
var s1h="RECOVERED ERROR"
var s2h="NOT READY"
var s3h="MEDIUM ERROR"
var s4h="HARDWARE ERROR"
var s5h="ILLEGAL REQUEST"
var s6h="UNIT ATTENTION"
var s7h="DATA PROTECT"
var s8h="BLANK CHECK"
var s9h="VENDOR SPECIFIC"
var sah="COPY ABORTED"
var sbh="ABORTED COMMAND"
var sdh="VOLUME OVERFLOW"
var seh="MISCOMPARE"
  
   if (match[4] === '0') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s0h);
    } 
    if (match[4] === '1') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s1h);
    } 

if (match[4] === '2') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s2h);
    } 

if (match[4] === '3') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s3h);
    } 

if (match[4] === '4') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s4h);
    } 

if (match[4] === '5') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s5h);
    } 

if (match[4] === '6') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s6h);
    } 

if (match[4] === '7') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s7h);
    } 

if (match[4] === '8') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s8h);
    } 

if (match[4] === '9') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(s9h);
    } 

if (match[4] === 'a') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(sah);
    } 

if (match[4] === 'b') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(sbh);
    } 

if (match[4] === 'd') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(sdh);
    } 

if (match[4] === 'e') {
	 $("#sensekeyv").html("0x" + match[4]);
	 $("#sensekeyn").html(seh);
    } 


///for asc
	 $("#ascv").html("0x" + match[5]);
	 $("#ascn").html("Additional Sense Data unknown.");






}
