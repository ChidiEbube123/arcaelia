<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Check if username exists
    $checkUserQuery = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $checkUserQuery);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        // Verify password
        if (password_verify($password, $user['password'])) {
            echo "Login successful!";
            // Set up session or redirect to a dashboard page
            session_start();
            $_SESSION['username'] = $user['username'];
            header("Location: dashboard.php");  // Redirect to dashboard or home page
            exit;
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "Username does not exist!";
    }
}
?>