CREATE TABLE hospital (
    idHospital INT PRIMARY KEY AUTO_INCREMENT,
    historiaClinica TEXT,
    idDoctores INT,
    idMedicamentos INT
) ENGINE=InnoDB;
 
CREATE TABLE inventario (
    idInventario INT PRIMARY KEY AUTO_INCREMENT,
    idMedicamentos INT,
    administracion INT,
    area VARCHAR(20),
    insumosMedicos VARCHAR(70),
    idHospital INT,
    FOREIGN KEY (idHospital) REFERENCES hospital(idHospital)
) ENGINE=InnoDB;

CREATE TABLE medicamentos (
    idMedicamento INT PRIMARY KEY AUTO_INCREMENT,
    fechaExpedicion DATETIME,
    composicion VARCHAR(30),
    idInventario INT,
    FOREIGN KEY (idInventario) REFERENCES inventario(idInventario)
) ENGINE=InnoDB;

CREATE TABLE clientes (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(25),
    apellido VARCHAR(25),
    correo VARCHAR(50),
    idHospital INT,
    FOREIGN KEY (idHospital) REFERENCES hospital(idHospital)
) ENGINE=InnoDB;

CREATE TABLE especialisis (
    idEspecialisis INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATETIME,
    historiaClinica VARCHAR(50),
    analisis INT,
    tratamiento VARCHAR(30),
    idHospital INT,
    idCliente INT,
    FOREIGN KEY (idHospital) REFERENCES hospital(idHospital),
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
) ENGINE=InnoDB;