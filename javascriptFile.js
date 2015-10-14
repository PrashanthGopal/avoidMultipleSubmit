var submitcount = 0;
 function checksubmitcount()
 {
 	submitcount++;
 	if (1 == submitcount )
	{
 		document.Order.submit();
 	}
	else
	{
	if ( 2 == submitcount)
 		alert("You have already submitted  this form");
 	else
 		alert("You have submitted this form"
 		+ submitcount.toString()
  		+ " times already");
 	}
 }
