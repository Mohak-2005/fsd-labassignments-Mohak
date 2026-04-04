<?php
include 'db.php';

$id = $_GET['id'];

// Fetch existing data
$data = $conn->query("SELECT * FROM student WHERE id=$id")->fetch_assoc();

// UPDATE
if(isset($_POST['update'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    $sql = "UPDATE student SET 
            name='$name',
            email='$email',
            mobile='$mobile',
            department='$dept'
            WHERE id=$id";

    if($conn->query($sql)){
        header("Location: index.php");
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
</head>
<body>

<h2>Edit Student</h2>

<form method="POST">
    Name: <input type="text" name="name" value="<?= $data['name'] ?>" required><br><br>
    Email: <input type="email" name="email" value="<?= $data['email'] ?>" required><br><br>
    Mobile: <input type="text" name="mobile" value="<?= $data['mobile'] ?>" required><br><br>
    Department: <input type="text" name="department" value="<?= $data['department'] ?>" required><br><br>

    <input type="submit" name="update" value="Update Student">
</form>

</body>
</html>