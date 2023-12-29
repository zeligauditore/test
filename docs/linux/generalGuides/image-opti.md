---
sidebar_position: 5
---

# Optimizar Imágenes

:::info

Requiere **ImageMagick**

[Consultar la fuente](https://imagemagick.org/discourse-server/viewtopic.php?t=33432)

:::

## JPG
Buscar y comprimir todas las imágenes `jpg` en la carpeta actual

* Ajustar el porcentaje de compresión en la línea **6**

```bash {6} showLineNumbers
## Check if JPG images exist and compress them
for imgjpg in *.jpg; do
    if test -f "$imgjpg"
     then
        echo "Compressing $imgjpg "
        convert -quality 50 "$imgjpg" "opt-$imgjpg"
    else
    echo "NO JPG Images Found"
     fi
done
```

## JPEG
Buscar y comprimir todas las imágenes `jpeg` en la carpeta actual
* Ajustar el porcentaje de compresión en la línea **6**

```bash {6} showLineNumbers
## Check if JPEG images exist and compress them
for imgjpeg in *.jpeg; do
    if test -f "$imgjpeg"
     then
        echo "Compressing $imgjpeg "
        convert -quality 50 "$imgjpeg" "opt-$imgjpeg"
    else
    echo "NO JPEG Images Found"
     fi
done
```


## PNG
Buscar y comprimir todas las imágenes `png` en la carpeta actual

### Optimizar reduciendo el número de colores (Profundidad)
:::caution

Reducir la **Profundidad de Color** disminuye considerablemente el peso pero reduce el color de las imágenes

:::
* Ajustar la profundidad de colores en la línea **6**
```bash {6} showLineNumbers
## Check if PNG images exist and compress them
for imgpng in *.png; do
    if test -f "$imgpng"
     then
        echo "Compressing $imgpng "
        convert -quality 60% -colors 255 "$imgpng" "opt-$imgpng"
    else
    echo "NO PNG Images Found"
     fi
done
```


### Optimizar reduciendo la Resolución
:::caution

Reducir la **Resolución** disminuye considerablemente el peso pero reduce el tamaño de la imágen

:::
* Ajustar el porcentaje de resolución en la línea **6**
```bash {6} showLineNumbers
## Check if PNG images exist and compress them
for imgpng in *.png; do
    if test -f "$imgpng"
     then
        echo "Compressing $imgpng "
        convert -quality 60% -adaptive-resize 60% "$imgpng" "opt-$imgpng"
    else
    echo "NO PNG Images Found"
     fi
done
```


## GIF
* Ajustar parámetros de compresión en la línea **6**
```bash {6} showLineNumbers
## Check if GIF images exist and compress them
for imggif in *.gif; do
    if test -f "$imggif"
     then
        echo "Compressing $imggif "
        mogrify -layers 'optimize' -fuzz 7% "$imggif"
    else
    echo "NO GIF Images Found"
     fi
done
```


##