---
sidebar_position: 2
---

# SSH Key

## Generar una nueva clave SSH


```bash title="Ejecutar en terminal"
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Cuando se te indique `Ingresar un archivo donde guardar la clave`, presiona Intro. Al hacerlo aceptas la ubicación predeterminada del archivo.

```bash title="Ejecutar en terminal"
eval "$(ssh-agent -s)"
```

```bash title="Ejecutar en terminal"
ssh-add ~/.ssh/id_rsa
```

Copiar el contenido del archivo `id_rsa.pub` dentro de la carpeta `home/USER/.ssh/` e ingresarlo en [BitBucket](https://bitbucket.org/)

