<?php
			$host = "localhost";
			$user = "root";
			$pass = "";
			$name = "web-bank";
			$conn = mysqli_connect($host, $user, $pass, $name);
			
			$username          = $_POST['username'];
			$pw                = $_POST['pw'];
			$firstname         = $_POST['firstname'];
			$lastname          = $_POST['lastname'];
			$nomorkartu        = $_POST['nomorkartu'];
			$nomorrekening     = $_POST['nomorrekening'];
			$saldo     	 	   = $_POST['saldo'];
			
			//cek username sudah digunakan atau blm
			
			//enkripsi password
			$pw = password_hash($pw, PASSWORD_DEFAULT);
		
			//tambah ke database
			$sql = "INSERT INTO users VALUES ( '', '$username', '$pw', '$firstname', '$lastname', '$nomorkartu', '$nomorrekening', '$saldo')";
			if(!mysqli_query($conn, $sql))
			{
			  echo 'not inserted';
			}
			else {
			  echo'inserted';
			}

	
?>