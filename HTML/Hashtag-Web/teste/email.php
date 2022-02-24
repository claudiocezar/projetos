<?php
  $nome = $_GET['nome'];
  $email = $_GET['email'];
  $telefone = $_GET['telefone'];
  $mensagem = $_GET['mensagem'];
  $newsletter = $_GET['newsletter'];

  ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $email;
    $to = "claudiocezar@uol.com.br";
    $subject = "Contato via SITE de HASHTAG WEB";
    $message = "Nome do Cliente: {$nome}\nEmail do Cliente: {$email}\nTelefone: {$telefone}\nMenssagem: {$mensagem}\nDeseja Receber Newsletter: {$newsletter}";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);   
  
    echo "Mensagem Enviada!";     
?>