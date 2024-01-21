---
sidebar_position: 1
description: Docker compose para PHP My Admin y MySQL Server
---

# Docker Container

## Docker Compose
```yaml showLineNumbers
version: '3'
 
services:
  db:
    image: mysql:5.7
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: admin
      MYSQL_DATABASE: ps
      MYSQL_USER: admin
      MYSQL_PASSWORD: user
      MYSQL_ROOT_HOST: '%'
    ports:
      - "6033:3306"
    ulimits:
      nofile:
       soft: "65536"
       hard: "65536"
    volumes:
      - dbdata:/var/lib/mysql
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: phpmyadmin
    links:
      - db
    environment:
      PMA_HOST: db
      PMA_PORT: 3306
      PMA_ARBITRARY: 1
    restart: always
    ports:
      - 8081:80
volumes:
  dbdata:
```


## Acceder al Contenedor
```bash showLineNumbers title="Terminal" 
docker exec -i -t (id del contenedor) /bin/bash #o
```

## Acceso a MySQL
### Obtener IP para acceder a base de datos
```bash showLineNumbers title="Terminal" 
docker inspect (id del contenedor) |grep -i ipaddress
```
**Puerto** `3306`

### Acceder como 'root'
```bash showLineNumbers title="Terminal" 
mysql --user=root --password=admin
```

- Usuario Admin: root
- Usuario: admin
- Password: user


## Descargar Archivos
:::info
[Download](./mysql-docker.zip)

:::