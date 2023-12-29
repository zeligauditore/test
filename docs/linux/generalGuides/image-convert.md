---
sidebar_position: 4
---

# Convertir Imágenes

:::info

Requiere **ImageMagick**

[Consultar la fuente](https://imagemagick.org/discourse-server/viewtopic.php?t=33432)

:::

## Convertir todas las imágenes en una carpeta a otro formato

En el ejemplo de abajo convertimos todas las imágenes en formato `.tif` a formato `.png`

```bash
convert '*.tif[0]' -set filename:fn '%[basename]' '%[filename:fn].png'
```


## Convertir y redimencionar
```bash
convert '*.tif[0]' -set filename:fn '%[basename]-small' -resize 1200x1200 '%[filename:fn].png'
```