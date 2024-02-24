"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6176],{8989:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var a=r(5893),s=r(1151);const o={sidebar_position:1,description:"Introducci\xf3n a Dart"},i="Introducci\xf3n a Dart",t={id:"prog-guids/dart/dartBasics",title:"Introducci\xf3n a Dart",description:"Introducci\xf3n a Dart",source:"@site/docs/prog-guids/dart/dartBasics.md",sourceDirName:"prog-guids/dart",slug:"/prog-guids/dart/dartBasics",permalink:"/test/docs/prog-guids/dart/dartBasics",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prog-guids/dart/dartBasics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Introducci\xf3n a Dart"},sidebar:"programSidebar",previous:{title:"Dart | Flutter",permalink:"/test/docs/category/dart--flutter"}},l={},d=[{value:"Contenedor Main",id:"contenedor-main",level:2},{value:"Variables",id:"variables",level:2},{value:"Interpolaci\xf3n",id:"interpolaci\xf3n",level:2},{value:"Maps",id:"maps",level:2},{value:"Acceder a datos de Mapas",id:"acceder-a-datos-de-mapas",level:3},{value:"Iterables",id:"iterables",level:2},{value:"Funciones y Par\xe1metros",id:"funciones-y-par\xe1metros",level:2},{value:"Valores de Retorno",id:"valores-de-retorno",level:3},{value:"Tipado Estricto",id:"tipado-estricto",level:3},{value:"Argumentos Opcionales",id:"argumentos-opcionales",level:3},{value:"Par\xe1metro con Nombre",id:"par\xe1metro-con-nombre",level:3},{value:"Clases",id:"clases",level:3},{value:"Argumentos por nombre",id:"argumentos-por-nombre",level:3},{value:"Name Contructors",id:"name-contructors",level:3},{value:"Getters &amp; Setters",id:"getters--setters",level:2},{value:"Aserciones",id:"aserciones",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"introducci\xf3n-a-dart",children:"Introducci\xf3n a Dart"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Editor para ",(0,a.jsx)(n.strong,{children:"Dart"})," online ",(0,a.jsx)(n.a,{href:"https://dartpad.dev/",children:"Ir al editor"}),"."]}),(0,a.jsxs)(n.p,{children:["Ver ",(0,a.jsx)(n.a,{href:"https://dart.dev/guides",children:"Documentaci\xf3n"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"contenedor-main",children:"Contenedor Main"}),"\n",(0,a.jsxs)(n.p,{children:["Usualmente toda funci\xf3n, m\xe9todo o cualquier cosa que nosotros escribamos en ",(0,a.jsx)(n.strong,{children:"Dart"})," debe tener alg\xfan tipo de dato."]}),"\n",(0,a.jsxs)(n.p,{children:["La funci\xf3n ",(0,a.jsx)(n.code,{children:"main"})," devolver\xe1 ",(0,a.jsx)(n.code,{children:"void"}),", esto significa que la funci\xf3n ",(0,a.jsx)(n.code,{children:"main"})," no devuelve ",(0,a.jsx)(n.strong,{children:"nada"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:"showLineNumbers",children:"void main() {\n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:"showLineNumbers",children:'void main() {\n\n    // variable Strings\n    String myName = "Rick";\n\n    // enteros\n    final int hp = 100;\n\n    // booleanos\n    final bool isAlive = false;\n\n    // variable Final (Similar a una variable constante)\n    final myName = "Rick";\n    // variable late final (Permite asignar la variable mas tarde)\n    late final myName;\n\n    // variable constante, no puede ser modificada, diferencia de late final\n    const myName = "Rick";\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"interpolaci\xf3n",children:"Interpolaci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Para ejecutar alg\xfan proceso, m\xe9todo o funci\xf3n dentro de un string."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title=""',children:"void main () {\n    print('Hola ${ myName.toUpperCase() }');\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"maps",children:"Maps"}),"\n",(0,a.jsx)(n.p,{children:"Colecci\xf3n de Datos."}),"\n",(0,a.jsx)(n.p,{children:"Pares de valores con nombre y valor."}),"\n",(0,a.jsxs)(n.p,{children:["En general los tipos de valores son ",(0,a.jsx)(n.code,{children:"Din\xe1micos"})," ",(0,a.jsx)(n.strong,{children:"(Ver l\xednea 3)"})," pero es posible especificar el tipo de dato a utlizar, encerrando entre los simbolos mayor y menor que ",(0,a.jsx)(n.code,{children:"< >"})," de esta manera ",(0,a.jsx)(n.code,{children:"Map<String, dynamic>"}),", estos datos pueden ser enteros ",(0,a.jsx)(n.code,{children:"int"}),", cadenas de texto ",(0,a.jsx)(n.code,{children:"string"}),", etc. ",(0,a.jsx)(n.strong,{children:"(Ver l\xednea 8)"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" {3,8}',children:"void main() {\n    // Tipos de datos din\xe1micos\n    final pokemon = {\n        // C\xf3digo\n    }\n\n    // Tipos de datos espec\xedficos\n    final Map<String, dynamic> pokemon = {\n        // C\xf3digo\n    }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"void main() {\n    final pokemon = {\n        'name': 'Ditto',\n        'hp': 100,\n        'isAlive': true,\n        'abilities': ['impostor'],\n        'sprites': {\n            1: 'ditto/front.png',\n            2: 'ditto/back.png'\n        }\n    };\n\n    print(pokemon);\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"acceder-a-datos-de-mapas",children:"Acceder a datos de Mapas"}),"\n",(0,a.jsxs)(n.p,{children:["Utilizando la interpolaci\xf3n accedemos con el nombre del ",(0,a.jsx)(n.code,{children:"mapa"})," seguido de la ",(0,a.jsx)(n.code,{children:"key"})," o ",(0,a.jsx)(n.code,{children:"nombre"})," (string o int) del valor que queramos obtener, encerrado entre ",(0,a.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title=""',children:"void main() {\n    print('Nombre: ${ pokemon['name'] }');\n    print('Habilidades: ${ pokemon['abilities'] }');\n    print('Im\xe1genes: ${ pokemon['sprites'] }');\n\n    // Accediendo a datos anidados\n    print('Im\xe1gen frontal: ${ pokemon['sprites'] [1] }');\n    print('Im\xe1gen trasera: ${ pokemon['sprites'] [2] }');\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"iterables",children:"Iterables"}),"\n",(0,a.jsx)(n.p,{children:"Es una colecci\xf3n de elementos que se puede leer de manera secuencial."}),"\n",(0,a.jsx)(n.p,{children:"Es un objeto que puede contar elementos que se encuentren dentro de \xe9l, como listas, sets, arreglos, etc."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"void main() {\n\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"funciones-y-par\xe1metros",children:"Funciones y Par\xe1metros"}),"\n",(0,a.jsx)(n.h3,{id:"valores-de-retorno",children:"Valores de Retorno"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title=""',children:"void main() {\n    // Imprime el valor retornado por\n    // la funci\xf3n greetEveryone\n    print( greetEveryone() );\n}\n\n// Funci\xf3n de flecha\n// Devuelve un string con un hola mundo\nString greetEveryone() => 'Hello World!'; \n"})}),"\n",(0,a.jsxs)(n.p,{children:["Asignar valores de retorno a las funciones obliga a retornar dicho tipo de valor, por ejemplo ",(0,a.jsx)(n.strong,{children:"Strings"}),", ",(0,a.jsx)(n.strong,{children:"Enteros"}),", ",(0,a.jsx)(n.strong,{children:"Bools"})," etc."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"// Retorna un String\nString greetEveryone() => 'Hello World!'; \n\n// Retorna un Entero\nint addTwoNumbers( int a, int b ) => a + b;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"tipado-estricto",children:"Tipado Estricto"}),"\n",(0,a.jsxs)(n.p,{children:["Al determinar el tipo de dato al valor se previene utilizar valores que puedan generar alg\xfan error, por ejemplo al querer sumar dos n\xfameros nos aseguramos de que ambos valores ser\xe1n ",(0,a.jsx)(n.strong,{children:"Enteros"})," y no ",(0,a.jsx)(n.strong,{children:"strings"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title=""',children:"// Par\xe1metros Obligatorios y Posicionales\nint addTwoNumbers( int a, int b ) => a + b;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"argumentos-opcionales",children:"Argumentos Opcionales"}),"\n",(0,a.jsx)(n.p,{children:"Se asigna un valor opcional (No obligatorio) en caso de que no se le asigne un valor."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" {4}',children:"// Revisa si se ha asignado un valor.\n// En caso de que no, se le asigna un valor predeterminado,\n// ya sea un n\xfamero, un string o un boold como null\nint addTwoNumbersOptional( int a, [ int b = 0 ] ){\n\n    // C\xf3digo\n\n    return a + b;\n}\n\n\n// Asignamos todos los argumentos como opcionales\n// encerrandolos entre llaves{}\nint greetPerson({ int a, int b }) => a + b;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"par\xe1metro-con-nombre",children:"Par\xe1metro con Nombre"}),"\n",(0,a.jsxs)(n.p,{children:["Asignamos el tipo de dato del argumento antes del nombre del argumento, ya sea ",(0,a.jsx)(n.strong,{children:"String"})," etc."]}),"\n",(0,a.jsxs)(n.p,{children:['Para "Obligar" a proporcionar el valor de un par\xe1metro se utiliza el ',(0,a.jsx)(n.code,{children:"required"})," antes del tipo de valor del par\xe1metro."]}),"\n",(0,a.jsxs)(n.p,{children:["Es posible asignar el valor por default por ejemplo en le ",(0,a.jsx)(n.code,{children:"message"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title=""',children:"void main() {\n\n    // Env\xeda los argumentos a la funci\xf3n greetPerson\n    // e imprime el resultado de los argumentos env\xedados\n    print(greetPerson( name: 'Ezio', message: 'auditore' ));\n}\n\n\n// Recibe los datos de los argumentos name y message\n// los retorna en un String\nString greetPerson({ required String name, String message = 'Hola,' }) {\n    return '$name $message';\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"clases",children:"Clases"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"void main() {\n\n    // Crea una nueva instancia de la clase\n    // asigna los valores posicionales de los argumentos\n    // y los env\xeda al constructor de la clase.\n    final Hero wolverine = new Hero('Logan', 'Regeneraci\xf3n');\n\n    // No es necesario utilizar la palabra reservada \"new\"\n    final Hero wolverine = Hero('Logan', 'Regeneraci\xf3n');\n  \n    print( wolverine );\n    print( wolverine.name );\n    print( wolverine.power );\n  \n}\n\n\nclass Hero {\n  \n    // Propiedades de la Clase\n    // Tipo de Dato\n    String name;\n    String power;\n\n\n    // Contructor (Funci\xf3n que ser\xe1 llamada al\n    // inicializar la instancia)\n\n    // El nombre del contructor es el mismo\n    // que tiene la clase\n\n\n    // Maneras de asignar argumentos:\n    // Inicializa y asigna el valor de las propiedades.\n    Hero( this.name, this.power );\n  \n    // Se realiza la asignaci\xf3n de los valores en el momento\n    // en el que se crea la instancia.\n    Hero( String pName, String pPower )\n        : name = pName,\n        power = pPower;\n  \n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"argumentos-por-nombre",children:"Argumentos por nombre"}),"\n",(0,a.jsxs)(n.p,{children:["En el ejemplo de arriba los argumentos se env\xedan de manera posicional, es decir:\nLa informaci\xf3n ser\xe1 recibida en el orden en el que se env\xeda ",(0,a.jsx)(n.code,{children:"final Hero wolverine = new Hero('Logan', 'Regeneraci\xf3n');"}),", ",(0,a.jsx)(n.strong,{children:"Logan"})," se asignar\xe1 a ",(0,a.jsx)(n.code,{children:"name"})," y ",(0,a.jsx)(n.strong,{children:"Regeneraci\xf3n"})," se asignar\xe1 a ",(0,a.jsx)(n.code,{children:"power"})," en ese orden."]}),"\n",(0,a.jsx)(n.p,{children:"Para asignar los nombres especificos a los que enviaremos los datos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"void main() {\n  \n  // Establecemos el nombre del valor al que querramos env\xedar los datos\n  final Hero wolverine = Hero( name: 'Logan', power: 'Regeneraci\xf3n' );\n  \n  print( wolverine );\n  print( wolverine.name );\n  print( wolverine.power );\n  \n}\n\n\nclass Hero {\n  \n  String name;\n  String power;\n  \n  // Modificamos el contructor encerrando las propiedades entre llaves{}\n  Hero({\n    // Con required marcamos como dato obligatorio\n    required this.name,\n    // Para ser dato opcional eliminamos el required\n    // y asignamos un valor por defecto\n    this.power = 'Regeneraci\xf3n'\n  });\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"name-contructors",children:"Name Contructors"}),"\n",(0,a.jsx)(n.p,{children:"Ofrecen la posibilidad de tener m\xfaltiples contructores, y crear instancias basadas en sus argumentos."}),"\n",(0,a.jsx)(n.p,{children:"Es una manera de crear instancias con diferentes tipos de argumentos."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"void main() {\n\n}\n\nclass hero\nvoid main() {\n  \n  // Respuesta de petici\xf3n http\n  final Map<String, dynamic> rawJson = {\n    'name': 'Tony Stark',\n    'power': 'Money',\n    'isAlive': true\n  };\n  \n  \n  // Crea una nueva instancia de Hero\n  // y env\xeda sus argumentos\n  final ironman = Hero(\n    isAlive: false,\n    power: 'money',\n    name: 'Tony Stark'\n  );\n  \n  \n  // Crea la instancia y envi\xeda los datos del\n  // Json al contructor\n  final ironman = Hero.fromJson( rawJson );\n  \n  print( ironman );\n  \n}\n\n\nclass Hero {\n  \n  String name;\n  String power;\n  bool isAlive;\n  \n  Hero({\n    \n    required this.name,\n    required this.power,\n    required this.isAlive\n    \n  });\n  \n  \n  // Constructor con nombre\n  // el nombre puede depender de d\xf3nde se reciben argumentos\n  // en este caso de un Json\n  \n  // con la comparaci\xf3n evaluamos la posibilidad de un NULL\n  // y asignamos un valor por defecto en caso de que no se proporcione\n  // alg\xfan argumento\n  Hero.fromJson( Map<String, dynamic> json )\n    : name = json['name'] ?? \"No name found\",\n      power = json['power'] ?? \"No power found\",\n      isAlive = json['isAlive'] ?? \"No found\";\n  \n  \n  @override\n  String toString() {\n    return '$name, $power, est\xe1 vivo: ${ isAlive ? 'YES!' : 'Nope' }';\n  }\n  \n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"getters--setters",children:"Getters & Setters"}),"\n",(0,a.jsxs)(n.p,{children:["Los ",(0,a.jsx)(n.code,{children:"Getters"})," y ",(0,a.jsx)(n.code,{children:"setters"})," son m\xe9todos especiales que proporcionan acceso de lectura y escritura a las propiedades de un objeto."]}),"\n",(0,a.jsx)(n.p,{children:"Cada variable de instancia de su clase tiene un getter impl\xedcito y un setter si es necesario."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" ',children:"void main (){\n  final mySquare = Square( side: 22.5 );\n  \n  mySquare.side = -5;\n  \n  // Accedemos a la propiedad creada con el setter\n  print( '\xc1rea: ${ mySquare.area }' );\n  \n}\n\nclass Square {\n  double _side; // Propiedad privada, se establece con el gui\xf3n bajo\n  \n  Square({ required double side })\n    : _side = side;\n  \n  \n  \n  // Obtiene la propiedad \"area\" y la asigna\n  // a la variable o propiedad privada _side\n  double  get area {\n    return _side * _side;\n  }\n  \n  // Se establece el valor recibido del get\n  // y se guarda en value, que a la vez asigna el valor\n  // a la propiedad o variable privada\n  set side( double value ) {\n    print( 'setting new value $value' );\n    if ( value <= 0 ) throw 'Valor debe ser mayor a cero';\n    \n    _side = value;\n  }\n  \n  \n  double calculateArea() {\n    return _side * _side;\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"aserciones",children:"Aserciones"}),"\n",(0,a.jsxs)(n.p,{children:["Se pueden colocar ",(0,a.jsx)(n.strong,{children:"Aserciones"})," (Afirmaci\xf3n) y reglas para que en desarrollo de cumplan las normas establecidas."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",metastring:'showLineNumbers title="" '})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>i});var a=r(7294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);