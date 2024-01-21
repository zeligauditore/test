---
sidebar_position: 1
description: Imágenes en columnas tipo Masonry
---

# Masonry Layout
![Barras de Navegación](./massonry-grid.png)



## Código PHP / TWIG
```php showLineNumbers
<div class="gallery-items">
    {% for i in 1..13 %}
        <img src="/assets/img/gallery/{{ i }}.jpg" alt="">
    {% endfor %}
</div>
```


## Código SCSS
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