<?php
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


        $sql = "INSERT INTO efrei_craft_db (projet_name, projet_description, projet_corps)
                VALUES ('$name', '$description', '$corps')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }


        
        echo "C'est bon \n \n";
        echo "";

        echo $team;





        $conn->close();
?>