<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>

<h2>Add Student</h2>

<form method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Mobile: <input type="text" name="mobile" required><br><br>
    Department: <input type="text" name="department" required><br><br>
    <input type="submit" name="submit" value="Add Student">
</form>

<?php
// INSERT
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dept = $_POST['department'];

    $sql = "INSERT INTO student (name, email, mobile, department)
            VALUES ('$name', '$email', '$mobile', '$dept')";

    if($conn->query($sql)){
        echo "<p style='color:green;'>Student added successfully!</p>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<h2>Student Records</h2>

<table border="1" cellpadding="10">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Department</th>
    <th>Action</th>
</tr>

<?php
// READ
$result = $conn->query("SELECT * FROM student");

while($row = $result->fetch_assoc()){
?>
<tr>
    <td><?= $row['id'] ?></td>
    <td><?= $row['name'] ?></td>
    <td><?= $row['email'] ?></td>
    <td><?= $row['mobile'] ?></td>
    <td><?= $row['department'] ?></td>
    <td>
        <a href="edit.php?id=<?= $row['id'] ?>">Edit</a> |
        <a href="delete.php?id=<?= $row['id'] ?>" onclick="return confirm('Delete this record?')">Delete</a>
    </td>
</tr>
<?php } ?>

</table>

</body>
</html>