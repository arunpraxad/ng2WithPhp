<?php
// Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    //echo "You have CORS!";
	
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sample";
//$data = json_decode(file_get_contents('php://input'));
//echo $username;
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

if(mysqli_connect_errno()) {
    //printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
} else {
	//printf("Connect success");
}

$queryString = "SELECT * FROM DETAIL";
$data = array();
if ($result = mysqli_query($conn, $queryString)) {
	while ($row = mysqli_fetch_array($result)) {
        //printf ("%s \n", $row[0]);
		//$data.push($row);
		array_push($data,$row["username"]);
    }
	//$data = mysqli_fetch_array($result);
	//print_r($data);
	//$row2 = mysqli_fetch_all($result)
	echo json_encode($data);
	return json_encode($data);
}

mysqli_close($link);
?>