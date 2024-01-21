---
sidebar_position: 1
description: Galería LightBox tipo Masonry
---

# LightBox Masonry

:::tip

## Documentación Oficial
[`Ver Fuente`](https://lokeshdhakar.com/projects/lightbox2/)

:::

![Barras de Navegación](./lightboxMasonry.webp)


## Descargar Archivos
:::note[lightbox `v2.11.4`]
[download files](./lb_src.zip)

:::



## Código PHP / TWIG
Para realizar la galería se crea una subcarpeta dentro la carpeta de imágenes, en esta carpeta se guardaran las imágenes para la galería, todas las imágenes deberan tener el mismo formato `jpg`, `png` etc.

Despues con un ciclo for se recorre una lista de números del `1` al número de imágenes que haya en la carpeta de galería.

```php showLineNumbers
<div class="gallery-items">
    {% for i in 1..13 %}
        <a href="/assets/img/gallery/{{ i }}.jpg" data-lightbox="gall">
            <img src="/assets/img/gallery/{{ i }}.jpg" alt="">
        </a>
    {% endfor %}
</div>
```


## Código SCSS

### Importar a la hoja de estilos globales
```scss showLineNumbers title="/_dev/css/style.scss"
// Light Box
@import "components/lightbox.min.css";
```

### Estilos de la galería
```scss showLineNumbers
.gallery-items{
  columns: 5 320px;
  column-gap: 0.5rem;

  img{
    max-width: 100%;
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 2559px){
    columns: 4 320px;
  }

  @media only screen and (max-width: 426px){
    columns: 2 140px;
  }
}
```


## Código JS
### Importar lightbox a SCRIPT global
```js showLineNumbers title="/_dev/js/theme.js"
require('./components/lightbox/lightbox');
```


## LightBox Settings
:::info

[Consultar las opciones de configuración](https://lokeshdhakar.com/projects/lightbox2/#options).

:::


Para cambiar la configuración de `LightBox` es **NECESARIO** editar el archivo `JS` de lightbox.

```js showLineNumbers title="/_dev/js/components/lightbox/lightbox.js"
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 200,
    fitImagesInViewport: true,
    imageFadeDuration: 200,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: true,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };
```


```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```