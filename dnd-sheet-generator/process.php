<?php
	$email = $_GET["email"];
	$message = $_GET["text"];

	$bugreports = fopen("bugreports.txt", "w");

	fwrite("bugreports.txt", $email+"\n");
	fwrite("bugreports.txt", $message+"\n\n");
	fclose("bugreports.txt");
?>