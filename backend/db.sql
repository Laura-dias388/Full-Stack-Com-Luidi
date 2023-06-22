CREATE DATABASE IF NOT EXISTS Estudos;

USE Estudos;

CREATE TABLE Usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL
);

INSERT INTO Usuarios(name) VALUES
('Laura'),
('Luídi'),
('Ewerton'),
('Crysthian'),
('Juliana'),
('João');

SELECT * FROM Usuarios;