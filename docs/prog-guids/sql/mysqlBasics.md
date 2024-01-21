---
sidebar_position: 2
description: Bases de MySQL - SQL
---

# Bases MySQL

## Mostrar Todas las Bases de Datos
```sql showLineNumbers 
show databases;
```

## Crear Base de Datos
```sql showLineNumbers 
CREATE DATABASE nombre_db;
```

## Seleccionar Base de Datos
Seleccionar una base de datos para trabajar con ella.
```sql showLineNumbers 
USE nombre_db;
```

## Crear Tabla
Se establecen los campos que necesitemos comenzando con el `ID` por ejemplo `user_id`, y los campos necesarios tales cómo `user_name`, `user_email` etc.

Debemos establecer instrucciones para crear los registros dentro de la tabla:
- `INT` tipo de dato a guardar (variar dependiendo del tipo de dato que deseemos almacenar).
- `NOT NULL` impedirá que el campo quede vacío.
- `AUTO_INCREMENT` incrementará el número de ID automáticamente con cada nuevo registro.
- `Límites` es posible establecer límites de carácteres por ejemplo un número de teléfono, escríbiendo entre paréntesis `()` el número límite **(ver línea 3)**.
- `UNIQUE` Establecer un valor cómo `Único`, evitará que este valor pueda ser usado en otro registro, por ejemplo un **email**.
- `TIMESTAMP` Agrega la Fecha y Hora en que se crea el registro.
- `PRIMARY KEY` El identificador **Único** e **Inmutable**, no puede ser editado ni puede ser nulo.

```sql showLineNumbers 
CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_handle VARCHAR(50) NOT NULL UNIQUE,
    email_adress VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phonenumber CHAR(10) UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id)
);
```

## SQL Constraints
Restricciones disponibles en la creación de tablas para la inserción de registros
- `NOT NULL` Se asegura de que la columna no esté vacía.
- `UNIQUE` Se asegura de que el valor en la columna sea único y no pueda ser reutilizado en otro registro (Cómo un número de teléfono).
- `CHECK` Se asegura de que el valor en una columna satisfaga una condición especifica.
- `DEFAULT` Establece el valor por defecto si el valor no es especificado.

## Algunos Tipos de Datos
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="firstTab" label="Datos numéricos" default>
    
    - `INT` Almacena números enteros con un rango de -2147483648 a 2147483647.
    - `BIGINT` Almacena enteros con un rango de -9223372036854775808 a 9223372036854775807.
    - `SMALLINT` Almacena enteros con un rango de -32768 a 32767.
    - `TINYINT` Almacena enteros con un rango de 0 a 255.
    - `DECIMAL y NUMERIC` Almacenan valores numéricos de precisión exacta.
    - `FLOAT y REAL` Estos almacena valores numéricos de precisión aproximada.
  </TabItem>

  <TabItem value="secondTab" label="Datos de cadena">
    Los datos de cadena en SQL aquellos que se guardan en una base de datos como caracteres alfanuméricos. Estas cadenas de caracteres pueden consistir en números, letras, caracteres especiales y espacios.
    - `CHAR` Cadenas de textos
    - `VARCHAR` Es similar al tipo de datos `CHAR`, pero es una cadena de caracteres de longitud variable que puede contener hasta 255 caracteres.
    - `TEXT` Es una cadena de caracteres de longitud variable que puede contener hasta 65.535 caracteres.
    - `ENUM` Tienen una longitud fija que contienen una lista de valores predefinidos.
    - `SET` Estos tienen una longitud variable con una lista de valores predefinidos.
  </TabItem>
  <TabItem value="thirdTab" label="Datos binarios">
    - `Binary` Se utiliza para almacenar valores binarios y se puede especificar una longitud máxima de 8,000 bytes.
    - `Varbinary` Comparte características con el tipo de datos anterior, pero la diferencia reside en que Binary almacena los datos exactamente como se especifica, mientras que Varbinary los almacena de forma comprimida, lo que reduce el espacio de almacenamiento necesario.
    - `Image` Se puede especificar una longitud máxima de 2 gigabytes. Es similar a Varbinary, pero con una mayor capacidad de almacenamiento.
    - `Timestamp` Se utiliza para almacenar una marca de tiempo y es un dato binario único. Esta marca de tiempo se actualiza automáticamente cada vez que se actualiza el registro.
  </TabItem>
</Tabs>


## Insertar Datos en una Tabla
- Escribímos entre parentesis los campos en los que se insertaran los datos `(Ver Línea 1)`.
- Entre paréntesis escribímos la información en orden para cada campo especifico, cada campo debe ir entre comillas `''` y separados por una coma `,`  `(Ver línea 3)`.

**Esto Creará un registro de un usuario con Nombre de usuario, Email, Nombre, Apellido y Número de Teléfono**
```sql showLineNumbers 
INSERT INTO users(user_handle, email_adress, first_name, last_name, phonenumber)
VALUES
('first', 'firstEmail.com', 'Pepe', 'Pérez', '1234567890');
```

### Insertar Múltiples registros
```sql showLineNumbers 
INSERT INTO users(user_handle, email_adress, first_name, last_name, phonenumber)
VALUES
('first', 'firstEmail.com', 'Pepe', 'Pérez', '1234567890'),
('second', 'secondEmail.com', 'Tania', 'Ramirez', '0987654321'),
('third', 'thirdEmail.com', 'Katherine', 'Rys', '9203849506'),
('fourth', 'fourthEmail.com', 'Toño', 'Ruíz', '4531298657');
```

## Eliminar Base de Datos
```sql showLineNumbers 
DROP DATABASE IF EXISTS nombre_db;
```

## Eliminar Tablas
```sql showLineNumbers 
DROP TABLE IF EXISTS users;
```