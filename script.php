<?php
    $assunto = $_POST['mensagem'];
    $corpo = "
        Nome: " .$_POST['nome']."
        Email: " .$_POST['email']."
        Mensagem: " .$_POST['mensagem']."
    ";
    $alert = 'Sua mensagem foi enviada, obrigado pelo contato!';

    mail('ruan.hoinaski@gmail.com', $assunto, $corpo, 'From: ruan.hoinaski@gmail.com');
    echo $alert;
?>