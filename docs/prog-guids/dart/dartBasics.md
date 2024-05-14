---
sidebar_position: 1
description: Introducción a Dart
---

# Introducción a Dart


:::info

Editor para **Dart** online [Ir al editor](https://dartpad.dev/).

Ver [Documentación](https://dart.dev/guides).

:::


## Contenedor Main

Usualmente toda función, método o cualquier cosa que nosotros escribamos en **Dart** debe tener algún tipo de dato.

La función `main` devolverá `void`, esto significa que la función `main` no devuelve **nada**.

```dart showLineNumbers
void main() {

}
```


## Variables


```dart showLineNumbers
void main() {

    // variable Strings
    String myName = "Rick";

    // enteros
    final int hp = 100;

    // booleanos
    final bool isAlive = false;

    // variable Final (Similar a una variable constante)
    final myName = "Rick";
    // variable late final (Permite asignar la variable mas tarde)
    late final myName;

    // variable constante, no puede ser modificada, diferencia de late final
    const myName = "Rick";
}
```

## Interpolación
Para ejecutar algún proceso, método o función dentro de un string.
```dart showLineNumbers title=""
void main () {
    print('Hola ${ myName.toUpperCase() }');
}
```


## Maps
Colección de Datos.

Pares de valores con nombre y valor.

En general los tipos de valores son `Dinámicos` **(Ver línea 3)** pero es posible especificar el tipo de dato a utlizar, encerrando entre los simbolos mayor y menor que `< >` de esta manera `Map<String, dynamic>`, estos datos pueden ser enteros `int`, cadenas de texto `string`, etc. **(Ver línea 8)**
```dart showLineNumbers title="" {3,8}
void main() {
    // Tipos de datos dinámicos
    final pokemon = {
        // Código
    }

    // Tipos de datos específicos
    final Map<String, dynamic> pokemon = {
        // Código
    }
}
```

```dart showLineNumbers title="" 
void main() {
    final pokemon = {
        'name': 'Ditto',
        'hp': 100,
        'isAlive': true,
        'abilities': ['impostor'],
        'sprites': {
            1: 'ditto/front.png',
            2: 'ditto/back.png'
        }
    };

    print(pokemon);
}
```

### Acceder a datos de Mapas
Utilizando la interpolación accedemos con el nombre del `mapa` seguido de la `key` o `nombre` (string o int) del valor que queramos obtener, encerrado entre `[]`.
```dart showLineNumbers title=""
void main() {
    print('Nombre: ${ pokemon['name'] }');
    print('Habilidades: ${ pokemon['abilities'] }');
    print('Imágenes: ${ pokemon['sprites'] }');

    // Accediendo a datos anidados
    print('Imágen frontal: ${ pokemon['sprites'] [1] }');
    print('Imágen trasera: ${ pokemon['sprites'] [2] }');
}
```


## Iterables
Es una colección de elementos que se puede leer de manera secuencial.

Es un objeto que puede contar elementos que se encuentren dentro de él, como listas, sets, arreglos, etc.

```dart showLineNumbers title="" 
void main() {

}
```


## Funciones y Parámetros

### Valores de Retorno
```dart showLineNumbers title=""
void main() {
    // Imprime el valor retornado por
    // la función greetEveryone
    print( greetEveryone() );
}

// Función de flecha
// Devuelve un string con un hola mundo
String greetEveryone() => 'Hello World!'; 
```

Asignar valores de retorno a las funciones obliga a retornar dicho tipo de valor, por ejemplo **Strings**, **Enteros**, **Bools** etc.
```dart showLineNumbers title="" 
// Retorna un String
String greetEveryone() => 'Hello World!'; 

// Retorna un Entero
int addTwoNumbers( int a, int b ) => a + b;
```

### Tipado Estricto
Al determinar el tipo de dato al valor se previene utilizar valores que puedan generar algún error, por ejemplo al querer sumar dos números nos aseguramos de que ambos valores serán **Enteros** y no **strings**.
```dart showLineNumbers title=""
// Parámetros Obligatorios y Posicionales
int addTwoNumbers( int a, int b ) => a + b;
```

### Argumentos Opcionales
Se asigna un valor opcional (No obligatorio) en caso de que no se le asigne un valor.

```dart showLineNumbers title="" {4}
// Revisa si se ha asignado un valor.
// En caso de que no, se le asigna un valor predeterminado,
// ya sea un número, un string o un boold como null
int addTwoNumbersOptional( int a, [ int b = 0 ] ){

    // Código

    return a + b;
}


// Asignamos todos los argumentos como opcionales
// encerrandolos entre llaves{}
int greetPerson({ int a, int b }) => a + b;
```

### Parámetro con Nombre
Asignamos el tipo de dato del argumento antes del nombre del argumento, ya sea **String** etc.

Para "Obligar" a proporcionar el valor de un parámetro se utiliza el `required` antes del tipo de valor del parámetro.

Es posible asignar el valor por default por ejemplo en le `message`.
```dart showLineNumbers title=""
void main() {

    // Envía los argumentos a la función greetPerson
    // e imprime el resultado de los argumentos envíados
    print(greetPerson( name: 'Ezio', message: 'auditore' ));
}


// Recibe los datos de los argumentos name y message
// los retorna en un String
String greetPerson({ required String name, String message = 'Hola,' }) {
    return '$name $message';
}
```


### Clases
Una clase es un elemento que **actúa como una plantilla** y va a definir las características y comportamientos de una entidad.

```dart showLineNumbers title="" 
void main() {

    // Crea una nueva instancia de la clase
    // asigna los valores posicionales de los argumentos
    // y los envía al constructor de la clase.
    final Hero wolverine = new Hero('Logan', 'Regeneración');

    // No es necesario utilizar la palabra reservada "new"
    final Hero wolverine = Hero('Logan', 'Regeneración');
  
    print( wolverine );
    print( wolverine.name );
    print( wolverine.power );
  
}


class Hero {
  
    // Propiedades de la Clase
    // Tipo de Dato
    String name;
    String power;


    // Contructor (Función que será llamada al
    // inicializar la instancia)

    // El nombre del contructor es el mismo
    // que tiene la clase


    // Maneras de asignar argumentos:
    // Inicializa y asigna el valor de las propiedades.
    Hero( this.name, this.power );
  
    // Se realiza la asignación de los valores en el momento
    // en el que se crea la instancia.
    Hero( String pName, String pPower )
        : name = pName,
        power = pPower;
  
}
```

### Argumentos por nombre
En el ejemplo de arriba los argumentos se envían de manera posicional, es decir:
La información será recibida en el orden en el que se envía `final Hero wolverine = new Hero('Logan', 'Regeneración');`, **Logan** se asignará a `name` y **Regeneración** se asignará a `power` en ese orden.


Para asignar los nombres especificos a los que enviaremos los datos:
```dart showLineNumbers title="" 
void main() {
  
  // Establecemos el nombre del valor al que querramos envíar los datos
  final Hero wolverine = Hero( name: 'Logan', power: 'Regeneración' );
  
  print( wolverine );
  print( wolverine.name );
  print( wolverine.power );
  
}


class Hero {
  
  String name;
  String power;
  
  // Modificamos el contructor encerrando las propiedades entre llaves{}
  Hero({
    // Con required marcamos como dato obligatorio
    required this.name,
    // Para ser dato opcional eliminamos el required
    // y asignamos un valor por defecto
    this.power = 'Regeneración'
  });
}
```


### Name Contructors
Ofrecen la posibilidad de tener múltiples contructores, y crear instancias basadas en sus argumentos.

Es una manera de crear instancias con diferentes tipos de argumentos.

```dart showLineNumbers title="" 
void main() {

}

class hero
void main() {
  
  // Respuesta de petición http
  final Map<String, dynamic> rawJson = {
    'name': 'Tony Stark',
    'power': 'Money',
    'isAlive': true
  };
  
  
  // Crea una nueva instancia de Hero
  // y envía sus argumentos
  final ironman = Hero(
    isAlive: false,
    power: 'money',
    name: 'Tony Stark'
  );
  
  
  // Crea la instancia y enviía los datos del
  // Json al contructor
  final ironman = Hero.fromJson( rawJson );
  
  print( ironman );
  
}


class Hero {
  
  String name;
  String power;
  bool isAlive;
  
  Hero({
    
    required this.name,
    required this.power,
    required this.isAlive
    
  });
  
  
  // Constructor con nombre
  // el nombre puede depender de dónde se reciben argumentos
  // en este caso de un Json
  
  // con la comparación evaluamos la posibilidad de un NULL
  // y asignamos un valor por defecto en caso de que no se proporcione
  // algún argumento
  Hero.fromJson( Map<String, dynamic> json )
    : name = json['name'] ?? "No name found",
      power = json['power'] ?? "No power found",
      isAlive = json['isAlive'] ?? "No found";
  
  
  @override // Inidica que se está sobreescribiendo el comportamiento nativo
  String toString() {
    return '$name, $power, está vivo: ${ isAlive ? 'YES!' : 'Nope' }';
  }
  
}
```


## Getters & Setters
Los `Getters` y `setters` son métodos especiales que proporcionan acceso de lectura y escritura a las propiedades de un objeto.

Cada variable de instancia de su clase tiene un getter implícito y un setter si es necesario. 

```dart showLineNumbers title="" 
void main (){
  final mySquare = Square( side: 22.5 );
  
  mySquare.side = -5;
  
  // Accedemos a la propiedad creada con el setter
  print( 'Área: ${ mySquare.area }' );
  
}

class Square {
  double _side; // Propiedad privada, se establece con el guión bajo
  
  Square({ required double side })
    : _side = side;
  
  
  
  // Obtiene la propiedad "area" y la asigna
  // a la variable o propiedad privada _side
  double  get area {
    return _side * _side;
  }
  
  // Se establece el valor recibido del get
  // y se guarda en value, que a la vez asigna el valor
  // a la propiedad o variable privada
  set side( double value ) {
    print( 'setting new value $value' );
    if ( value <= 0 ) throw 'Valor debe ser mayor a cero';
    
    _side = value;
  }
  
  
  double calculateArea() {
    return _side * _side;
  }
}
```

## Aserciones
Se pueden colocar **Aserciones** (Afirmación) y reglas para que en desarrollo se cumplan las normas establecidas.

Es recomendable poner primero las `aserciones` y después las asignaciones, así, si no se cumple la `asercion` no se ejecutan las líneas siguientes.

```dart showLineNumbers title="" {4}
class Square {
  
  Square({ required double side })
    : assert(side >= 0), //Asercion | Side tiene que ser mayor a 0.
      _side = side;
```

### Segundo argumento
El segundo argumento posicional permite agregar un "Mensaje de error".
```dart showLineNumbers title="" {4}
class Square {

  Square({ required double side })
    : assert(side >= 0, 'side es menor a 0'), //Asercion | Side tiene que ser mayor a 0.
      _side = side;
```



## Clases Abstractas y Enumeraciones
### Clases Abstractas
Las clases abstractas, como su nombre lo indica, son algo abstracto, no representan algo específico y las podemos usar para crear otras clases. No pueden ser instanciadas, por lo que no podemos crear nuevos objetos con ellas.

Podemos imaginar una clase `EnergyPlant`, con métodos como `energía restante` y `tipo`, como una clase base que podemos heredar para construir otras clases como `Nuclear` o `Solar`. Ambas van a heredar de nuestra clase `EnergyPlant` con sus respectivos métodos y tendremos la posibilidad de crear nuestros objetos. De esta manera podemos reducir código duplicado y mejorar la calidad del código.


### Enumeraciones
Los `enums` o `enumeraciones` son un tipo de clase especial y sirven para representar un número fijo de valores constantes.


```dart showLineNumbers title="" 
void main(){
  
  //final windPlant = EnergyPlant();
  
}

enum PlantType { nuclear, wind, water } //Enumeraciones

abstract class EnergyPlant{
  
  double energyLeft;
  PlantType type;
  
  EnergyPlant({ 
    required this.energyLeft,
    required this.type
  });
  
  void consumeEnergy( double amount );
  
}
```


## Extends
Extender o heredar de otra clase, el objetivo de extender de una `clase abstracta` es heredar su "plantilla".

```dart showLineNumbers title="" 
class WindPlant extends EnergyPlant{
  
  WindPlant({ required double initialEnergy })
    : super( energyLeft: initialEnergy, type: PlantType.wind ); // Llamar al constructor del padre
  
  
  @override
  void consumeEnergy( double amount ){
    energyLeft -= amount;
  }
}
```


## Implements
```dart showLineNumbers title="" 
class NuclearPlant implements EnergyPlant{
  
  @override
  double energyLeft;
  
  @override
  final PlantType type = PlantType.nuclear;
  
  NuclearPlant({ required this.energyLeft });
  
  
  @override
  void consumeEnergy( double amount ){
    energyLeft -= (amount * 0.5);
  }
}
```


## Mixins
:::info

[Leer Documentacion y ejemplos de `mixins`](https://medium.com/comunidad-flutter/dart-qu%C3%A9-son-los-mixins-5f2ab880a4ce).

:::


Con los `Mixins` es posible heredar propiedades más `especializadas`, es decir que los `Mixins` permiten dar cierta funcionalidad especifica que necesitemos.



```dart showLineNumbers title="" 
abstract class Animal{
  
}

abstract class Mamifero extends Animal{}

abstract class Ave extends Animal{}

abstract class Pez extends Animal{}

mixin class Volador{
  void volar() => print('Estoy Volando!');
}

mixin class Caminante{
  void caminar() => print('Estoy caminando!');
}

mixin class Nadador{
  void nadar() => print('Estoy nadando!');
}


// With = Mixin
// Nuestra clase heredará métodos o funcionalidades
class Delfin extends Mamifero with Nadador{}
// Utilizando with extentemos agregando las funcionalidades especiíficas que necesitemos
// para cada animal
class Murcielago extends Mamifero with Volador, Caminante{}
class Gato extends Mamifero with Caminante{}


class Paloma extends Ave with Volador, Caminante{}
class Pato extends Ave with Volador, Nadador, Caminante{}

class Tiburon extends Pez with Nadador{}
class PezVolador extends Pez with Nadador, Volador{}


void main(){
  final flipper = Delfin();
  flipper.nadar();
  
  
  final batman = Murcielago();
  batman.caminar();
  batman.volar();
}
```