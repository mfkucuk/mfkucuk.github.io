<?php
	$email = $_GET["email"];
	$message = $_GET["text"];

	$bugreports = fopen("bugreports.txt", "a");

	fwrite($bugreports, $email);
	fwrite($bugreports, "\n");
	fwrite($bugreports, $message);
	fwrite($bugreports, "\n");
	fclose($bugreports);
?>