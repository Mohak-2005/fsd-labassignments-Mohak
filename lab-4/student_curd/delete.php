<?php
include 'db.php';

$id = $_GET['id'];

// DELETE
$sql = "DELETE FROM student WHERE id=$id";

if($conn->query($sql)){
    header("Location: index.php");
} else {
    echo "Error: " . $conn->error;
}
?>