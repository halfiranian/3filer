$(function () {  // ignore this line, you need it wherever you use jQuery, it closes on the last line
$("#multi .btn").click(function(){
	var email = $("input#email").val();
	var dataString = 'email=' + email;
	console.log(dataString);
	$.ajax({
      type: "POST",
      url: "/page/signup/multistep",
      data: dataString,
      success: function() {
        $('#result').text("whoopwhoop")
      }
     });
    return false;
});
	
	
	


}); //closing jQuery opener here










