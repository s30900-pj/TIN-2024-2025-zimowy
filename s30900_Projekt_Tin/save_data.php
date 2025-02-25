<!-- Upewnij się, że uruchomiłeś XAMPP
Włącz XAMPP Control Panel.
Uruchom moduły Apache i MySQL
Przenieś projekt, czyli pliki cały folder do folderu htdocs
Uruchom przeglądarkę (Chrome, Firefox, itd.).
W pasku adresu wpisz
http://localhost/s30900_Projekt_Tin/index.html -->

<!--
 kod do stworzenia bazy danych

CREATE DATABASE IF NOT EXISTS Baza_Klienci;
USE Baza_Klienci;

CREATE TABLE IF NOT EXISTS klienci (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  message TEXT,
  zgoda TINYINT(1) NOT NULL
);

);
 -->

<?php

$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "baza_klienci";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = $conn->real_escape_string($_POST['name']);
    $email   = $conn->real_escape_string($_POST['email']);
    $phone   = $conn->real_escape_string($_POST['phone']);
    $message = $conn->real_escape_string($_POST['message']);
    $zgoda   = isset($_POST['zgoda']) ? 1 : 0;

    $sql = "INSERT INTO klienci (name, email, phone, message, zgoda)
            VALUES ('$name', '$email', '$phone', '$message', $zgoda)";

    if ($conn->query($sql) === TRUE) {
        echo '
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <title>Kontakt - Potwierdzenie</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="formularz_sukces">
                <p>Dziękujemy, Twoje dane zostały zapisane!</p>
            </div>
            <a href="index.html" class="przycisk">Wróć do strony głównej</a>
        </body>
        </html>
        ';
    } else {
        echo "Błąd podczas zapisu: " . $conn->error;
    }
}

$conn->close();
?>

