<?php                     
 sleep(1);
 file_put_contents("mypost.txt", file_get_contents("php://input")); 
 echo "[{\"id\":\"thisId\",\"value\":\"the value\"},{\"id\":\"thisId2\",\"value\":\"the value2\"}]"; 
?>