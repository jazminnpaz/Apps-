const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Asegúrate de que el cuerpo de las solicitudes se pueda analizar como JSON

// Crear una conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '230206',
  port: '3306', 
  database: 'biggfit'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para verificar la conexión
app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.send(`La solución es: ${results[0].solution}`);
  });
});

// Ruta para obtener todos los ítems (GET /items)
//http://localhost:3000/items
app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al obtener los usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/usuarios', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query ='INSERT INTO Usuarios (nombre, correo_electronico, contrasena, edad, peso, altura, sexo, nivel_condicion_fisica) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoUsuario.nombre,
    nuevoUsuario.correo_electronico,
    nuevoUsuario.contrasena,
    nuevoUsuario.edad,
    nuevoUsuario.peso,
    nuevoUsuario.altura,
    nuevoUsuario.sexo,
    nuevoUsuario.nivel_condicion_fisica], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});


app.get('/ejercicios', (req, res) => {
  connection.query('SELECT * FROM ejercicios', (err, results) => {
    if (err) {
      console.error('Error al obtener los ejercicios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/ejercicios', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query = 'INSERT INTO ejercicios (nombre, descripcion, tipo, musculos_trabajados, duracion_sugerida,  nivel_dificultad, equipo_necesario, url_video_demostracion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoEjercicios.nombre,
    nuevoEjercicios.descripcion,
    nuevoEjercicios.tipo,
    nuevoEjercicios.musculos_trabajados,
    nuevoEjercicios.duracion_sugerida,
    nuevoEjercicios.nivel_dificultad,
    nuevoEjercicios.equipo_necesario,
    nuevoEjercicios.url_video_demostracion], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});

app.get('/Entrenamientos', (req, res) => {
  connection.query('SELECT * FROM  Entrenamientos', (err, results) => {
    if (err) {
      console.error('Error al obtener los  Entrenamientos: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/Entrenamientos', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query = 'INSERT INTO Entrenamientos (nombre, descripcion, tipo, duracion_total, nivel_dificultad) VALUES (?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoEntrenamientos.nombre,
    nuevoEntrenamientos.descripcion,
    nuevoEntrenamientos.tipo,
    nuevoEntrenamientos.duracion_total,
    nuevoEntrenamientos.nivel_dificultad], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});

app.get('/Ejercicios_por_Entrenamiento', (req, res) => {
  connection.query('SELECT * FROM Ejercicios_por_Entrenamiento', (err, results) => {
    if (err) {
      console.error('Error al obtener los Ejercicios_por_Entrenamiento: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/Ejercicios_por_Entrenamiento', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query = 'INSERT INTO Ejercicios_por_Entrenamiento ( entrenamiento_id, ejercicio_id, orden, repeticiones, tiempo,   descanso_sugerido) VALUES (?, ?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoEjercicios_por_Entrenamiento.entrenamiento_id,
    nuevoEjercicios_por_Entrenamiento.ejercicio_id,
    nuevoEjercicios_por_Entrenamiento.orden,
    nuevoEjercicios_por_Entrenamiento.repeticiones,
    nuevoEjercicios_por_Entrenamiento.tiempo,
    nuevoEjercicios_por_Entrenamiento.descanso_sugerido], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});

app.get('/Progreso_del_Usuario', (req, res) => {
  connection.query('SELECT * FROM Progreso_del_Usuario', (err, results) => {
    if (err) {
      console.error('Error al obtener los Progreso_del_Usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/Progreso_del_Usuario', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query = 'INSERT INTO Progreso_del_Usuario (progreso_id, usuario_id, fecha, peso, altura, nivel_rendimiento, objetivos_alcanzados) VALUES (?, ?, ?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoProgreso_del_Usuario.progreso_id,
    nuevoProgreso_del_Usuario.usuario_id,
    nuevoProgreso_del_Usuario.fecha,
    nuevoProgreso_del_Usuario.peso,
    nuevoProgreso_del_Usuario.altura,
    nuevoProgreso_del_Usuario.nivel_rendimiento,
    nuevoProgreso_del_Usuario.objetivos_alcanzados], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});

app.get('/Metas_del_Usuario', (req, res) => {
  connection.query('SELECT * FROM Metas_del_Usuario', (err, results) => {
    if (err) {
      console.error('Error al obtener los Metas_del_Usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/Metas_del_Usuario', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query = 'INSERT INTO Metas_del_Usuario (  meta_id, usuario_id, tipo_meta,  valor_objetivo, fecha_inicio,  fecha_finalizacion,  estado) VALUES (?, ?, ?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoMetas_del_Usuario.meta_id,
    nuevoMetas_del_Usuario.usuario_id,
    nuevoMetas_del_Usuario.tipo_meta,
    nuevoMetas_del_Usuario.valor_objetivo,
    nuevoMetas_del_Usuario.fecha_inicio,
    nuevoMetas_del_Usuario.fecha_finalizacion,
    nuevoMetas_del_Usuario.estado], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});


app.get('/Configuraciones_del_Usuario', (req, res) => {
  connection.query('SELECT * FROM Configuraciones_del_Usuario', (err, results) => {
    if (err) {
      console.error('Error al obtener los Configuraciones_del_Usuario: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Enviar los resultados como respuesta en formato JSON
  });
});

// Ruta para agregar un ítem (POST /items)
app.post('/Configuraciones_del_Usuario', (req, res) => {
  const newItem = req.body; // Obtener el nuevo ítem desde el cuerpo de la solicitud
  const query = 'INSERT INTO Configuraciones_del_Usuario ( configuracion_id, usuario_id,  notificaciones_activadas, idioma, unidades_medida,  preferencias_entrenamiento) VALUES (?, ?, ?, ?, ?, ?)'; // Asegúrate de ajustar el SQL según tu estructura de tabla
  connection.query(query, [nuevoConfiguraciones_del_Usuario.configuracion_id,
    nuevoConfiguraciones_del_Usuario.usuario_id,
    nuevoConfiguraciones_del_Usuario.notificaciones_activadas,
    nuevoConfiguraciones_del_Usuario.idioma,
    nuevoConfiguraciones_del_Usuario.unidades_medida,
    nuevoConfiguraciones_del_Usuario.preferencias_entrenamiento], (err, result) => {
    if (err) {
      console.error('Error al agregar un usuarios: ', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.status(201).json({ id: result.insertId, ...newItem }); // Responder con el nuevo ítem agregado
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
