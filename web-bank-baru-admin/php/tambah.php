<?php
    require ('config.php');
    $username          = $_POST['username'];
    $pw                = $_POST['pw'];
    $firstname         = $_POST['firstname'];
    $lastname          = $_POST['lastname'];
    $nomorkartu        = $_POST['nomorkartu'];
    $nomorrekening     = $_POST['nomorrekening'];
    $jeniskartu        = $_POST['jeniskartu'];
    
    //cek username sudah digunakan atau blm
    
    //enkripsi password
    $pw = password_hash($pw, PASSWORD_DEFAULT);

    //tambah ke database
    $sql = "INSERT INTO users VALUES ( '$username', '$pw', '$firstname', '$lastname', '$nomorkartu', '$nomorrekening', '$jeniskartu')";
    if(!mysqli_query($conn, $sql))
    {
      echo 'not inserted';
    }
    else {
      echo'inserted';
    }
?>