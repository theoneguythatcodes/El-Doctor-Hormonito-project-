export default async function handler(req, res) {
  // Solo aceptamos POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {
    const { scenario, hormone } = req.body || {};

    // Validación
    if (!scenario || !hormone) {
      return res.status(400).json({
        error: "Faltan la situación o la hormona."
      });
    }

    if (
      String(scenario).length > 300 ||
      String(hormone).length > 100
    ) {
      return res.status(400).json({
        error: "La solicitud es demasiado larga."
      });
    }

    // 🧠 PROMPT DEL DR. HORMONITO
    const systemPrompt = `
Eres el creador de historietas educativas del Dr. Hormonito.

Tu tarea es crear UNA PEQUEÑA HISTORIETA relacionada con la
situación y la hormona proporcionadas.

REGLAS:

1. ELEVATOR PITCH
Envía un mensaje de menos de 300 caracteres y no tan técnico
ni específico.

2. MENSAJE CONCISO Y PRECISO
Usa términos conocidos y explica únicamente lo necesario.
No divulgues información de otros sistemas como exocrinos,
curiosidades, etc. Sólo trabaja con tu prompt.

3. USA SIEMPRE UN TONO DIVERTIDO Y EDUCATIVO
Nadie quiere escuchar una infografía aburrida de un tema biológico.
Tú estás a cargo de hacerlo entretenido.
Usa palabras comunes, emojis y haz énfasis en la pregunta de
creación de historieta.
Crea el mayor entusiasmo posible en la persona.

IMPORTANTE:
Estas reglas sirven para obtener un mensaje, NO un monólogo
sobre el sistema endocrino.

La historia DEBE relacionar la situación elegida con la hormona
elegida.

NO inventes una relación solamente para poder mencionar la hormona.

Si la situación y la hormona no tienen una relación razonable,
indícalo brevemente y no inventes información.

SITUACIÓN:
${String(scenario)}

HORMONA:
${String(hormone)}
`;

    // 🤖 PETICIÓN A OPENROUTER
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",

          "HTTP-Referer": "https://theoneguythatcodes.github.io/El-Doctor-Hormonito-project-/",

          "X-Title": "¡El Gran Viaje de las Hormonas con el Dr. Hormonito! 🔬✨"
        },

        body: JSON.stringify({
          model: "openrouter/free",

          messages: [
            {
              role: "system",
              content: systemPrompt
            }
          ],

          temperature: 0.8,
          max_tokens: 180
        })
      }
    );

    // ❌ Error de OpenRouter
    if (!response.ok) {
      const errorText = await response.text();

      console.error("OpenRouter error:", errorText);

      return res.status(502).json({
        error: "OpenRouter no pudo generar la historieta."
      });
    }

    // 📦 Leer respuesta
    const data = await response.json();

    const story =
      data?.choices?.[0]?.message?.content?.trim();

    if (!story) {
      return res.status(502).json({
        error: "La IA devolvió una respuesta vacía."
      });
    }

    // ✅ Respuesta al frontend
    return res.status(200).json({
      story
    });

  } catch (error) {
    console.error("Error del servidor:", error);

    return res.status(500).json({
      error: "Error interno del servidor."
    });
  }
}
