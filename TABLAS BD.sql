TABLAS BD

CREATE TABLE Usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    edad INT,
    peso DECIMAL(5, 2),
    altura DECIMAL(4, 2),
    sexo ENUM('M', 'F'),
    nivel_condicion_fisica ENUM('Principiante', 'Intermedio', 'Avanzado'),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Ejercicios (
    ejercicio_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    tipo ENUM('Cardio', 'Fuerza') NOT NULL,
    musculos_trabajados VARCHAR(255),
    duracion_sugerida INT, --esto queda en hs
    nivel_dificultad ENUM('Facil', 'Medio', 'Dificil'),
    equipo_necesario VARCHAR(100),
    url_video_demostracion VARCHAR(255)
);

CREATE TABLE Entrenamientos (
    entrenamiento_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    tipo ENUM('Gimnasio', 'Aire Libre', 'En Casa') NOT NULL,
    duracion_total INT, --nose si quieren ponerlo en hs o minutos, a mi me parece q estaria copado si cambia depende el nivel de dificultad pero nose como hacerlo
    nivel_dificultad ENUM('Principiante', 'Intermedio', 'Avanzado')
);

CREATE TABLE Ejercicios_por_Entrenamiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrenamiento_id INT NOT NULL,
    ejercicio_id INT NOT NULL,
    orden INT NOT NULL,
    repeticiones INT,
    tiempo INT, --esto estaría bueno q aparezca solo en ejercicios q sean x tiempo y no reps
    descanso_sugerido INT, --tmb pero este segundos o minutos VAMOS A TENER Q PREGUNTAR
    FOREIGN KEY (entrenamiento_id) REFERENCES Entrenamientos(entrenamiento_id),
    FOREIGN KEY (ejercicio_id) REFERENCES Ejercicios(ejercicio_id)
);

CREATE TABLE Progreso_del_Usuario (
    progreso_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha DATE NOT NULL,
    peso DECIMAL(5, 2),
    altura DECIMAL(4, 2),
    nivel_rendimiento VARCHAR(50), --aca ponemos tipo si avanza de dificultad x ejemplo (?
    objetivos_alcanzados VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

CREATE TABLE Metas_del_Usuario (
    meta_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo_meta ENUM('Cardio', 'Fuerza', 'Peso') NOT NULL,
    valor_objetivo DECIMAL(5, 2), --puede ser peso de la persona o tiempo de cardio o repeticiones/peso en algun ejercicio
    fecha_inicio DATE NOT NULL,
    fecha_finalizacion DATE,
    estado ENUM('En Progreso', 'Alcanzado', 'No Alcanzado') DEFAULT 'En Progreso',
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

CREATE TABLE Configuraciones_del_Usuario (
    configuracion_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    notificaciones_activadas BOOLEAN DEFAULT TRUE,
    idioma VARCHAR(50) DEFAULT 'Español',
    unidades_medida ENUM('Métrico'),
    preferencias_entrenamiento VARCHAR(255), --tipo pones q dias queres entrenar, para q te mande notificacion el dia de entrenamiento y el dia anterior. en el video q estoy viendo explican algo de las notificaciones pero no entendi nada la verdad asiq preguntemos en clase. mas q esto nose q poner ni si esta bien xq el q le tocaba hacer el diagrama no se si lo hizo pero no lo paso, mandenle a los profess!! de ultima tengo un amigo q nos puede explicar un toque pero ya lo jodi con dudas de esto! cualquier cosa pongan x el grupo!
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);
