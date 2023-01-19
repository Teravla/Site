<?php

        
        $user = 'root';
        $password = 'root';
        $db = 'inventory';
        $host = 'localhost';
        $port = 3306;

        $link = mysqli_init();
        $success = mysqli_real_connect(
                $link, 
                $host, 
                $user, 
                $password, 
                $db,
                $port
        );


        if (isset($_POST['projet_name']))
        {
            $name =  $_POST['projet_name'];
        }
        if (isset($_POST['projet_description']))
        {
            $description =  $_POST['projet_description'];
        }
        if (isset($_POST['projet_corps']))
        {
            $corps =  $_POST['projet_corps'];
        }

        $team =  $_POST['team'];
        

        $content = "Nom du projet : " . $name . "\n" . "Description du projet : " . $description . "\n" . "Pour plus de detail : " . $corps . "\n\n" . "Equipe concerné : " . $team;

        file_put_contents('Stockage_Donnees.txt', $content);

        echo "C'est bon \n \n";
        echo "";

        echo $team;




?>