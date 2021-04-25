<?php
//On se connecte à la base de donnée
$con = mysqli_connect("localhost","root","","sotu");

//Requete
$result = mysqli_query($con,"SELECT * from images WHERE id = 1");

//Retour de la réponse en JSON
echo json_encode($data);