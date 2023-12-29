---
sidebar_position: 1
---

# Versiones de NodeJS

Si lo que deseas es actualizar o retroceder a una versión en específico de Node.js debes ejecutar comandos similares a los anteriores. Por ejemplo para instalar la versión 12.16.2 ejecutaríamos los siguientes comandos:

## Paso 1
```bash title="Ejecutar en terminal"
sudo npm cache clean -f
```

## Paso 2
```bash title="Ejecutar en terminal"
sudo npm install -g n
```


## Paso 3
```bash title="Ejecutar en terminal"
sudo n 12.16.2
```