# Romina Garino — web de planes de entrenamiento

Sitio estático: HTML + CSS + JS, sin build ni dependencias.

## Archivos

```
index.html      estructura de la página
styles.css      todos los estilos
app.js          textos ES/EN, datos de los 3 planes y config
assets/         imágenes
```

## Para editar

**Precios, nombres y features de los planes** → `app.js`, dentro de `I18N.es.planes`
(y `I18N.en.planes` para la versión en inglés).

**Links de pago de Mercado Pago y WhatsApp** → arriba de `app.js`:

```js
const CONFIG = {
  whatsapp: '5491100000000',
  pagos: { basico: 'https://mpago.la/...', battle: '...', pro: '...' }
};
```

**Textos** → objetos `I18N.es` / `I18N.en` en `app.js`.

**Colores y tipografía** → `styles.css` (paleta blanco #ffffff / negro #111111;
fuentes Oswald + Archivo desde Google Fonts).

**Fotos del slider del header** → poné los archivos en `assets/` y listalos en
`CONFIG.fotos` (app.js). Podés poner las que quieras; los puntos indicadores
se generan solos. `CONFIG.slideSegundos` controla la velocidad.

**Otras imágenes** → reemplazá los archivos en `assets/` manteniendo el nombre.

## Logo del zorro

Está comentado en `index.html`, dentro del `<a class="brand">`:

```html
<img src="assets/logo-fox.png" alt="" class="brand-logo">
```

Poné el PNG en `assets/logo-fox.png` y descomentá esa línea.

## Ver el sitio

Abrí `index.html` en el navegador, o en VS Code con la extensión
**Live Server** (clic derecho → *Open with Live Server*).

## Publicar

Cualquier hosting estático sirve: Netlify (arrastrá la carpeta),
Vercel, GitHub Pages o Hostinger vía FTP.
