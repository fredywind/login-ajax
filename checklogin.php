<?php

	$user=$_POST['username']; 
	$pass=$_POST['password'];
	
	
	if (($user == 'admin') and ($pass == 'admin'))
	{
		echo "true";
		
	} else
	{
		echo "false";
	}


?>