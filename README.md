# El-Doctor-Hormonito-project-

Experiencia educativa interactiva sobre el sistema endocrino.

## Publicar

1. Sube `index.html` y `app.js` al repositorio.
2. Abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**.
4. Elige `main` y `/ (root)`.
5. Guarda y espera la publicación.

No necesita Node, npm ni un servidor.

## Creador de historietas

La versión es compatible con GitHub Pages y no expone ninguna API key.
Sin backend, el creador usa historias locales. Para conectar una IA real,
puedes definir `window.HORMONITO_AI_ENDPOINT` con un backend HTTPS propio.

## Quiz

El quiz ahora calcula las 16 respuestas, muestra la puntuación y marca las
respuestas correctas/incorrectas al finalizar. **El confeti solo aparece
cuando se obtiene 16/16**, corrigiendo el error documentado.
