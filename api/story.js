export default async function handler(req, res) {
  try {
    console.log("=== HORMONITO API ===");
    console.log("Method:", req.method);
    console.log("Has API key:", Boolean(process.env.OPENROUTER_API_KEY));

    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Método no permitido"
      });
    }

    const body = req.body || {};

    console.log("Body recibido:", body);

    const scenario = String(body.scenario || "").trim();
    const hormone = String(body.hormone || "").trim();

    if (!scenario || !hormone) {
      return res.status(400).json({
        error: "Faltan la situación o la hormona."
      });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error("OPENROUTER_API_KEY no está configurada.");

      return res.status(500).json({
        error: "La API key de OpenRouter no está configurada en Vercel."
      });
    }

    if (scenario.length > 300 || hormone.length > 100) {
      return res.status(400).json({
        error: "La solicitud es demasiado larga."
      });
    }

    const systemPrompt = `
Eres el creador de historietas educativas del Dr. Hormonito.

1. Elevator Pitch
Envía un mensaje de menos de 300 caracteres y no tan técnico
ni específico.

2. Mensaje conciso y preciso
Usa términos conocidos y explica únicamente lo necesario.
No divulges información de otros sistemas como exocrinos,
curiosidades, etc. Sólo trabaja con tu prompt.

3. Usa siempre un tono divertido y educativo
Nadie quiere escuchar una infografía aburrida de un tema biológico.
Tú estás a cargo de eso.
Usa palabras comunes, emojis y haz énfasis en la pregunta
de creación de historieta.
Crea el mayor entusiasmo posible en la persona.

IMPORTANTE:
Estas reglas sirven para obtener un mensaje y NO un monólogo
sobre el sistema endocrino.

La historia debe relacionar directamente la situación elegida
con la hormona elegida.

No inventes una relación solamente para poder mencionar
la hormona.

Si no existe una relación razonable, dilo brevemente.

SITUACIÓN:
${scenario}

HORMONA:
${hormone}
`;

    console.log("Enviando solicitud a OpenRouter...");

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
       headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://theoneguythatcodes.github.io/El-Doctor-Hormonito-project-/",
          "X-Title": "El Doctor Hormonito"
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

    console.log("OpenRouter status:", response.status);

    const responseText = await response.text();

    if (!response.ok) {
      console.error("OpenRouter respondió:", responseText);

      return res.status(502).json({
        error: "OpenRouter rechazó la solicitud.",
        status: response.status
      });
    }

    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      console.error("OpenRouter no devolvió JSON válido.");

      return res.status(502).json({
        error: "OpenRouter devolvió una respuesta inválida."
      });
    }

    const story = data?.choices?.[0]?.message?.content?.trim();

    if (!story) {
      console.error("Respuesta sin contenido:", data);

      return res.status(502).json({
        error: "La IA devolvió una respuesta vacía."
      });
    }

    console.log("Historieta generada correctamente.");

    return res.status(200).json({
      story
    });

  } catch (error) {
    console.error("=== HORMONITO FATAL ERROR ===");
    console.error(error);

    return res.status(500).json({
      error: "Error interno del servidor.",
      detail: error instanceof Error ? error.message : String(error)
    });
  }
}
