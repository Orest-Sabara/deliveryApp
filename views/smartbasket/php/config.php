<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');


		 require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 const HOST = 'smtp.gmail.com';
		 const LOGIN = '26orestsabara@gmail.com';
		 const PASS = '********';
		 const PORT = '465';

   
    const SENDER = 'sender@gmail.com';
    const CATCHER = 'catcher@gmail.com';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    