<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";


if (empty($_POST["name"])) {
  $nameErr = "Name is required";
} else {
  $name = test_input($_POST["name"]);
}

if (empty($_POST["mail"])) {
  $emailErr = "Email is required";
} else {
  $email = test_input($_POST["email"]);
}

/*if (empty($_POST["comment"])) {
  $comment = "Comment is required";
}*/

?>