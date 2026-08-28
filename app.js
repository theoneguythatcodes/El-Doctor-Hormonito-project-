```javascript
/* =========================================================
   DR. HORMONITO — APP.JS
   ========================================================= */


/* =========================================================
   4-STEP CYCLE SCENARIOS
   ========================================================= */

const cycleScenarios = {
  susto: {
    step1: "📌 Ejemplo (Susto): El cerebro ve a un peligro o perro corriendo hacia ti y activa la alarma de emergencia 🚨.",
    step2: "📌 Ejemplo (Susto): Las glándulas suprarrenales reciben la orden directa del Hipotálamo en milisegundos ⚡.",
    step3: "📌 Ejemplo (Susto): La Adrenalina viaja como un rayo en la sangre directo a tus músculos y corazón 🏎️💨.",
    step4: "📌 Ejemplo (Susto): Corres súper rápido a un lugar seguro, la amenaza pasa y tu corazón vuelve a palpitar tranquilo 🧘."
  },

  pastel: {
    step1: "📌 Ejemplo (Pastel): Comes un postre delicioso 🍰 y tus sensores cerebrales detectan que subió la glucosa en la sangre.",
    step2: "📌 Ejemplo (Pastel): El Páncreas (Chef del azúcar) recibe la señal de que es momento de entrar en acción.",
    step3: "📌 Ejemplo (Pastel): La Insulina viaja por la sangre llevando la 'llave mágica' hacia todas tus células 🔑.",
    step4: "📌 Ejemplo (Pastel): Las células absorben la glucosa para tener energía, el nivel de azúcar vuelve a normalizarse y todo queda en calma ⚖️."
  },

  sueno: {
    step1: "📌 Ejemplo (Sueño): Tus ojos ven que la habitación está a oscuras 🌙 y el cerebro sabe que es hora de dormir.",
    step2: "📌 Ejemplo (Sueño): La Glándula Pineal recibe la notificación nocturna del centro de control.",
    step3: "📌 Ejemplo (Sueño): La Melatonina viaja plácidamente por el torrente sanguíneo avisándole a cada órgano que es momento de descansar 💤.",
    step4: "📌 Ejemplo (Sueño): Te da un gran bostezo, te quedas dormido plácidamente y tu cuerpo recarga todas sus baterías 😴."
  }
};


function selectCycleScenario(key) {
  const data = cycleScenarios[key];

  if (!data) return;

  const step1 = document.getElementById("cycle-step1-example");
  const step2 = document.getElementById("cycle-step2-example");
  const step3 = document.getElementById("cycle-step3-example");
  const step4 = document.getElementById("cycle-step4-example");

  if (step1) step1.innerHTML = data.step1;
  if (step2) step2.innerHTML = data.step2;
  if (step3) step3.innerHTML = data.step3;
  if (step4) step4.innerHTML = data.step4;

  document.querySelectorAll(".scenario-btn").forEach(btn => {
    btn.classList.remove(
      "bg-brandOrange",
      "bg-brandYellow",
      "bg-brandPurple",
      "text-white"
    );

    btn.classList.add(
      "bg-white",
      "text-slate-800"
    );
  });

  const activeBtn = document.getElementById(`btn-scenario-${key}`);

  if (activeBtn) {
    activeBtn.classList.remove(
      "bg-white",
      "text-slate-800"
    );

    activeBtn.classList.add(
      "bg-brandOrange",
      "text-white"
    );
  }
}


/* =========================================================
   GLANDS DATA
   ========================================================= */

const glandsData = {

  hipotalamo: {
    title: "El Hipotálamo",
    emoji: "🛰️🧠",
    cartoonRole: "La Torre de Control y Puente de Mando",
    colorBg: "bg-teal-100",
    colorText: "text-teal-800",

    description:
      "Ubicado en el centro del cerebro, es el enlace principal entre tu Sistema Nervioso y el Sistema Endocrino. ¡Monitorea la temperatura corporal, el hambre, la sed y el pulso del cuerpo!",

    superpower:
      "Produce neurohormonas (como la Oxitocina y la Vasopresina/ADH) y factores liberadores que le indican exactamente a la Hipófisis qué órdenes enviar.",

    message:
      "💬 Mensaje a la Hipófisis: '¡Atención Capitanía! Ajusta la temperatura y regula los niveles de agua del cuerpo inmediatamente.'"
  },

  hipofisis: {
    title: "La Hipófisis (Glándula Maestra)",
    emoji: "🧠👑",
    cartoonRole: "El Gran Director de la Orquesta",
    colorBg: "bg-purple-100",
    colorText: "text-purple-800",

    description:
      "Es una pequeña glándula del tamaño de un guisante ubicada en la base del cerebro, justo debajo del Hipotálamo. ¡Recibe sus instrucciones y comanda a las demás glándulas!",

    superpower:
      "Produce la Hormona del Crecimiento (Somatotropina) que te hace crecer más alto cada año mientras duermes.",

    message:
      "💬 Mensaje a las demás glándulas: '¡Atención equipo, orden recibida del Hipotálamo! Hora de coordinar la energía y crecer.'"
  },

  pineal: {
    title: "La Glándula Pineal",
    emoji: "🌙💤",
    cartoonRole: "El Reloj Dulce Sueño",
    colorBg: "bg-indigo-100",
    colorText: "text-indigo-800",

    description:
      "Una pequeña piña mágica en el centro de tu cabeza que detecta cuando la luz del sol se apaga en la noche.",

    superpower:
      "Fabrica MELATONINA. Es una hormona suave que te produce esa sensación de bostezar y te prepara para soñar bonito.",

    message:
      "💬 Mensaje a tus ojos y cerebro: 'Llegó la noche... apaguen las luces y a descansar.'"
  },

  tiroides: {
    title: "La Tiroides",
    emoji: "🦋🚀",
    cartoonRole: "El Velocímetro del Coche",
    colorBg: "bg-blue-100",
    colorText: "text-blue-800",

    description:
      "Tiene forma de una simpática mariposa en el cuello. Controla el ritmo del metabolismo: la rapidez con la que quemas la comida como si fuera combustible.",

    superpower:
      "Fabrica Tiroxina. Si necesitas correr o jugar, la tiroides acelera el motor; si estás descansando, lo calma suavemente.",

    message:
      "💬 Mensaje al cuerpo: '¡Ajustando la velocidad del motor para tener la energía justa!'"
  },

  timo: {
    title: "El Timo",
    emoji: "🛡️🫀",
    cartoonRole: "La Academia de Entrenamiento Escudo Defensor",
    colorBg: "bg-emerald-100",
    colorText: "text-emerald-800",

    description:
      "Se encuentra en la parte alta del pecho, justo detrás del esternón. Durante la infancia es súper activo y entrena a tus defensas para luchar contra microbios.",

    superpower:
      "Produce TIMOSINA, la hormona que adiestra a los linfocitos T (los superglóbulos blancos) para transformarlos en soldados expertos contra virus y bacterias.",

    message:
      "💬 Mensaje a las defensas: '¡A entrenar equipo! Aprendan a reconocer y neutralizar a los gérmenes invasores.'"
  },

  suprarrenales: {
    title: "Glándulas Suprarrenales",
    emoji: "⚡🦸‍♂️",
    cartoonRole: "El Equipo de Alerta de Emergencias",
    colorBg: "bg-orange-100",
    colorText: "text-orange-800",

    description:
      "Son dos sombreritos colocados justo encima de tus riñones. Se activan cuando sientes un gran susto, emoción o cuando haces deportes intensos.",

    superpower:
      "Liberan ADRENALINA. ¡Hace que tu corazón lata rápido, tus ojos se abran y tus músculos tengan súper fuerza por unos minutos!",

    message:
      "💬 Mensaje a tus músculos: '¡ALERTA MÁXIMA! ¡Energía extra para correr o reaccionar rápido!'"
  },

  pancreas: {
    title: "El Páncreas",
    emoji: "🍰🔑",
    cartoonRole: "El Chef Guardián del Azúcar",
    colorBg: "bg-yellow-100",
    colorText: "text-yellow-800",

    description:
      "Ubicado detrás del estómago. Cuando comes deliciosos alimentos o frutas, el azúcar entra a la sangre y el páncreas entra en acción.",

    superpower:
      "Crea la INSULINA, que actúa como una 'llave mágica' que abre las puertas de las células para guardar la energía del azúcar.",

    message:
      "💬 Mensaje a las células: '¡Aquí va la llave de la insulina para que aprovechen este delicioso pastel!'"
  },

  gonadas: {
    title: "Las Gónadas",
    emoji: "🌱💪",
    cartoonRole: "Los Constructores del Crecimiento Adulto",
    colorBg: "bg-pink-100",
    colorText: "text-pink-800",

    description:
      "Son los ovarios (en las niñas) y los testículos (en los niños). Guardan los planes para cuando comienzas a dejar de ser niño.",

    superpower:
      "Producen Estrógenos y Testosterona. Ayudan a que tu voz cambie, tus huesos se hagan más fuertes y crezcas a gran velocidad.",

    message:
      "💬 Mensaje a todo tu esqueleto: '¡Hora de transformar este cuerpo en una versión más fuerte y grande!'"
  }

};


/* =========================================================
   GLAND DISPLAY
   ========================================================= */

function selectGland(glandKey) {
  const data = glandsData[glandKey];

  if (!data) return;

  const container = document.getElementById("glandCardContent");

  if (!container) return;

  container.innerHTML = `
    <div>

      <div class="flex items-center justify-between mb-4 flex-wrap gap-2">

        <span
          class="${data.colorBg} ${data.colorText} font-fredoka px-4 py-1.5 rounded-2xl text-sm font-bold border-2 border-slate-800"
        >
          ${data.cartoonRole}
        </span>

        <span class="text-4xl animate-bounce">
          ${data.emoji}
        </span>

      </div>

      <h3
        class="font-fredoka text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3"
      >
        ${data.title}
      </h3>

      <p class="text-slate-700 text-base leading-relaxed mb-4">
        ${data.description}
      </p>

      <div
        class="bg-amber-50 border-2 border-slate-800 rounded-2xl p-4 mb-4"
      >

        <h4
          class="font-fredoka font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5"
        >
          <i class="fa-solid fa-wand-magic-sparkles text-amber-500"></i>
          Súper Poder Hormonal:
        </h4>

        <p class="text-xs sm:text-sm text-slate-700 font-medium">
          ${data.superpower}
        </p>

      </div>

      <div
        class="speech-bubble p-3 text-xs sm:text-sm font-bold text-purple-900 bg-purple-50"
      >
        ${data.message}
      </div>

    </div>

    <div class="mt-6 text-right">

      <button
        onclick="scrollToSection('game')"
        class="comic-btn bg-brandOrange text-white font-fredoka font-bold px-4 py-2 rounded-xl text-xs sm:text-sm"
      >
        ¡Probar en el Juego! 🎮
      </button>

    </div>
  `;
}


/* =========================================================
   SCROLL HELPER
   ========================================================= */

function scrollToSection(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================================================
   AUDIO / SPEECH SYNTHESIS
   ========================================================= */

function playIntroAudio() {
  const btnIcon = document.getElementById("audioIcon");

  if ("speechSynthesis" in window) {

    window.speechSynthesis.cancel();

    const text =
      "¡Hola peque explorador! Soy el Doctor Hormonito. " +
      "Tu cuerpo activa las hormonas en un ciclo de cuatro pasos: " +
      "el cerebro detecta lo que necesitas, las glándulas reciben la señal, " +
      "las hormonas viajan por la sangre y tu cuerpo recupera su equilibrio. " +
      "¡Explóralo con nosotros!";

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = "es-ES";
    utterance.rate = 0.95;

    utterance.onstart = () => {
      if (btnIcon) {
        btnIcon.className =
          "fa-solid fa-spinner animate-spin";
      }
    };

    utterance.onend = () => {
      if (btnIcon) {
        btnIcon.className =
          "fa-solid fa-volume-high";
      }
    };

    utterance.onerror = () => {
      if (btnIcon) {
        btnIcon.className =
          "fa-solid fa-volume-high";
      }
    };

    window.speechSynthesis.speak(utterance);

  } else {

    alert(
      "Tu navegador no soporta síntesis de voz, ¡pero puedes leer los bocadillos de texto!"
    );

  }
}


/* =========================================================
   HORMONE CATCH GAME
   ========================================================= */

let gameScore = 0;
let gameTime = 30;
let gameTimerInterval = null;
let gameSpawnInterval = null;
let currentTargetType = "insulina";


const targetTypes = [
  {
    name: "Insulina",
    emoji: "🍰",
    key: "insulina",
    label: "Insulina (🍰)"
  },

  {
    name: "Adrenalina",
    emoji: "⚡",
    key: "adrenalina",
    label: "Adrenalina (⚡)"
  },

  {
    name: "Melatonina",
    emoji: "🌙",
    key: "melatonina",
    label: "Melatonina (🌙)"
  },

  {
    name: "Timosina",
    emoji: "🛡️",
    key: "timosina",
    label: "Timosina (🛡️)"
  }
];


function startGame() {
  const playArea =
    document.getElementById("gamePlayArea");

  if (!playArea) return;

  playArea.innerHTML = "";

  gameScore = 0;
  gameTime = 30;

  const scoreElement =
    document.getElementById("gameScore");

  const timeElement =
    document.getElementById("gameTime");

  if (scoreElement) {
    scoreElement.innerText = gameScore;
  }

  if (timeElement) {
    timeElement.innerText = gameTime;
  }


  const targetObj =
    targetTypes[
      Math.floor(
        Math.random() * targetTypes.length
      )
    ];

  currentTargetType =
    targetObj.key;


  const mission =
    document.getElementById(
      "gameTargetMission"
    );

  if (mission) {
    mission.innerHTML =
      `Misión: Atrapa <span class="text-purple-800 font-bold">${targetObj.label}</span>`;
  }


  clearInterval(gameTimerInterval);

  gameTimerInterval =
    setInterval(() => {

      gameTime--;

      if (timeElement) {
        timeElement.innerText =
          gameTime;
      }

      if (gameTime <= 0) {
        endGame();
      }

    }, 1000);


  clearInterval(gameSpawnInterval);

  gameSpawnInterval =
    setInterval(
      spawnHormoneTarget,
      700
    );
}


function spawnHormoneTarget() {
  const playArea =
    document.getElementById(
      "gamePlayArea"
    );

  if (!playArea) return;

  const randomType =
    targetTypes[
      Math.floor(
        Math.random() * targetTypes.length
      )
    ];


  const targetEl =
    document.createElement("button");


  const posX =
    Math.random() * 80 + 5;

  const posY =
    Math.random() * 70 + 10;


  targetEl.className =
    "absolute text-3xl p-2 rounded-full comic-btn bg-white transition hover:scale-125 z-10 animate-float";


  targetEl.style.left =
    `${posX}%`;

  targetEl.style.top =
    `${posY}%`;


  targetEl.innerHTML =
    randomType.emoji;


  targetEl.setAttribute(
    "aria-label",
    randomType.name
  );


  let clicked = false;


  targetEl.onclick = () => {

    if (clicked) return;

    clicked = true;

    if (
      randomType.key ===
      currentTargetType
    ) {

      gameScore += 10;

      const scoreElement =
        document.getElementById(
          "gameScore"
        );

      if (scoreElement) {
        scoreElement.innerText =
          gameScore;
      }

      targetEl.innerText = "✨";

    } else {

      gameScore =
        Math.max(
          0,
          gameScore - 5
        );

      const scoreElement =
        document.getElementById(
          "gameScore"
        );

      if (scoreElement) {
        scoreElement.innerText =
          gameScore;
      }

      targetEl.innerText = "❌";
    }


    setTimeout(() => {
      targetEl.remove();
    }, 200);
  };


  playArea.appendChild(
    targetEl
  );


  setTimeout(() => {

    if (
      targetEl.parentNode
    ) {
      targetEl.remove();
    }

  }, 1800);
}


function endGame() {
  clearInterval(
    gameTimerInterval
  );

  clearInterval(
    gameSpawnInterval
  );


  const playArea =
    document.getElementById(
      "gamePlayArea"
    );

  if (!playArea) return;


  playArea.innerHTML = `
    <div class="text-center z-10 p-4">

      <span class="text-5xl mb-2 block">
        🎉
      </span>

      <h3
        class="font-fredoka text-2xl font-bold text-slate-800 mb-1"
      >
        ¡Tiempo Agotado!
      </h3>

      <p
        class="text-base text-slate-700 font-bold mb-4"
      >
        Puntaje Final:
        <span class="text-brandOrange text-xl">
          ${gameScore} pts
        </span>
      </p>

      <button
        onclick="startGame()"
        class="comic-btn bg-brandGreen text-slate-900 font-fredoka font-bold text-lg px-6 py-2 rounded-2xl"
      >
        ¡Jugar de Nuevo! 🔄
      </button>

    </div>
  `;


  if (
    window.confetti &&
    gameScore > 30
  ) {

    confetti({
      particleCount: 80,
      spread: 60,
      origin: {
        y: 0.7
      }
    });

  }
}


/* =========================================================
   AI STORY GENERATOR
   =========================================================

   GitHub Pages-safe.

   No API key is stored in the browser.

   If you have a backend, define:

   window.HORMONITO_AI_ENDPOINT =
     "https://tu-endpoint.vercel.app/api/story";

   ========================================================= */


async function generateAIStory() {

  const scenario =
    document
      .getElementById(
        "aiScenarioSelect"
      )
      ?.value || "";


  const hormone =
    document
      .getElementById(
        "aiHormoneSelect"
      )
      ?.value || "";


  const outputBox =
    document.getElementById(
      "aiStoryOutput"
    );


  const spinner =
    document.getElementById(
      "aiLoadingSpinner"
    );


  const button =
    document.getElementById(
      "aiGenerateBtn"
    );


  if (!outputBox) return;


  if (!scenario || !hormone) {

    outputBox.innerHTML = `
      <div class="text-center text-slate-500 py-4">
        <p class="font-bold">
          Selecciona un escenario y una hormona.
        </p>
      </div>
    `;

    return;
  }


  if (spinner) {
    spinner.classList.remove(
      "hidden"
    );
  }


  if (button) {
    button.disabled = true;
  }


  outputBox.setAttribute(
    "aria-busy",
    "true"
  );


  try {

    const endpoint =
      window.HORMONITO_AI_ENDPOINT;


    /* -----------------------------------------------------
       REAL AI BACKEND
       ----------------------------------------------------- */

    if (endpoint) {

      const response =
        await fetch(
          endpoint,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              scenario,
              hormone
            })
          }
        );


      if (!response.ok) {

        throw new Error(
          `AI endpoint returned ${response.status}`
        );

      }


      const data =
        await response.json();


      const story =
        String(
          data.story ||
          data.text ||
          ""
        ).trim();


      if (!story) {
        throw new Error(
          "Respuesta vacía"
        );
      }


      renderStory(
        hormone,
        story
      );

      return;
    }


    /* -----------------------------------------------------
       LOCAL FALLBACK
       ----------------------------------------------------- */

    const stories = {

      Insulina: [
        "🍰 En la fiesta apareció un pastel gigante y la glucosa empezó a subir.",

        "🔑 ¡Entonces llegó la Insulina con su llave mágica! Ayudó a las células a aprovechar la glucosa como energía.",

        "⚖️ Cuando todo volvió a equilibrarse, el Dr. Hormonito gritó: «¡Misión cumplida, equipo!»"
      ],


      Adrenalina: [
        "🎢 La montaña rusa arrancó y el cerebro detectó una situación emocionante.",

        "⚡ ¡Adrenalina al rescate! Las glándulas suprarrenales liberaron esta hormona para preparar al cuerpo para reaccionar rápidamente.",

        "🧘 Cuando terminó el paseo, la alarma bajó y el cuerpo volvió poco a poco a la calma."
      ],


      Melatonina: [
        "🌙 Se hizo de noche y el reloj biológico avisó que era hora de descansar.",

        "💤 La Melatonina apareció como una pequeña señal nocturna que ayuda a preparar el cuerpo para el sueño.",

        "✨ Las luces bajaron, el laboratorio quedó tranquilo y el Dr. Hormonito dijo: «¡A recargar baterías!»"
      ],


      "Hormona del Crecimiento": [
        "👟 Pasó un año y el cuerpo necesitaba seguir creciendo.",

        "📏 La hormona del crecimiento, producida por la hipófisis, ayudó a coordinar procesos relacionados con el crecimiento.",

        "🚀 ¡Nueva talla desbloqueada! El Dr. Hormonito anotó otra misión completada."
      ]

    };


    const selected =
      stories[hormone] ||
      [
        `🧪 En el laboratorio ocurrió algo inesperado: ${scenario}.`,

        `📨 ${hormone} recibió su momento de entrar en acción y envió sus señales por el cuerpo.`,

        "🎉 El equipo del Dr. Hormonito comprobó que cada hormona tiene una misión especial."
      ];


    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          350
        )
    );


    renderStory(
      hormone,
      selected.join("\n\n")
    );


  } catch (error) {

    console.error(
      "Story generator:",
      error
    );


    outputBox.innerHTML = `
      <div class="text-center text-red-500 py-4 font-bold">

        <p>
          ¡Oh no! Hubo una pequeña falla
          en las comunicaciones hormonales.
        </p>

        <p class="text-xs text-slate-500 mt-1">
          Puedes intentarlo de nuevo.
        </p>

      </div>
    `;

  } finally {

    if (spinner) {
      spinner.classList.add(
        "hidden"
      );
    }

    if (button) {
      button.disabled = false;
    }

    outputBox.setAttribute(
      "aria-busy",
      "false"
    );
  }
}


/* =========================================================
   RENDER STORY
   ========================================================= */

function renderStory(
  hormone,
  storyText
) {

  const outputBox =
    document.getElementById(
      "aiStoryOutput"
    );


  if (!outputBox) return;


  const title =
    document.createElement(
      "h4"
    );


  title.className =
    "font-fredoka text-xl font-bold text-brandPink mb-3 flex items-center gap-2";


  title.innerHTML =
    '<i class="fa-solid fa-book-open" aria-hidden="true"></i>';


  title.append(
    document.createTextNode(
      ` Aventura: ${hormone}`
    )
  );


  const body =
    document.createElement(
      "div"
    );


  body.className =
    "whitespace-pre-line text-sm sm:text-base text-slate-700 bg-pink-50/50 p-4 rounded-xl border border-pink-200";


  body.textContent =
    storyText;


  outputBox.replaceChildren(
    title,
    body
  );
}


/* =========================================================
   QUIZ
   ========================================================= */

const TOTAL_QUESTIONS = 16;


const ANSWER_KEY = {
  1: "A",
  2: "A",
  3: "B",
  4: "A",
  5: "B",
  6: "A",
  7: "A",
  8: "B",
  9: "A",
  10: "A",
  11: "B",
  12: "A",
  13: "A",
  14: "A",
  15: "A",
  16: "A"
};


const userAnswers =
  Object.create(null);


/* ---------------------------------------------------------
   SELECT ANSWER
   --------------------------------------------------------- */

function checkQuiz(
  qNum,
  option,
  btn
) {

  if (
    !Number.isInteger(qNum) ||
    qNum < 1 ||
    qNum > TOTAL_QUESTIONS
  ) {
    return;
  }


  userAnswers[qNum] =
    option;


  const answeredCount =
    Object.keys(
      userAnswers
    ).length;


  const progress =
    document.getElementById(
      "quizProgressText"
    );


  if (progress) {

    progress.textContent =
      `${answeredCount} / ${TOTAL_QUESTIONS}`;

  }


  document
    .querySelectorAll(
      `.quiz-btn-${qNum}`
    )
    .forEach(button => {

      button.classList.remove(
        "bg-brandYellow",
        "text-slate-900",
        "bg-green-200",
        "bg-red-200",
        "text-red-900",
        "text-green-900"
      );

      button.classList.add(
        "bg-white",
        "text-slate-700"
      );

      button.setAttribute(
        "aria-pressed",
        "false"
      );

    });


  if (btn) {

    btn.classList.remove(
      "bg-white",
      "text-slate-700"
    );

    btn.classList.add(
      "bg-brandYellow",
      "text-slate-900"
    );

    btn.setAttribute(
      "aria-pressed",
      "true"
    );

  }
}


/* ---------------------------------------------------------
   FINISH QUIZ
   --------------------------------------------------------- */

function finishQuiz() {

  const answeredCount =
    Object.keys(
      userAnswers
    ).length;


  if (
    answeredCount <
    TOTAL_QUESTIONS
  ) {

    alert(
      `¡Aún faltan ${TOTAL_QUESTIONS - answeredCount} pregunta(s)! Responde las 16 para obtener tu resultado.`
    );

    return;
  }


  const score =
    Object.entries(
      ANSWER_KEY
    ).reduce(
      (
        total,
        [question, correct]
      ) =>
        total +
        (
          userAnswers[question] ===
          correct
            ? 1
            : 0
        ),
      0
    );


  const scoreText =
    document.getElementById(
      "quizScoreText"
    );


  const resultBadge =
    document.getElementById(
      "quizResultBadge"
    );


  const quizContainer =
    document.getElementById(
      "quizContainer"
    );


  if (quizContainer) {
    quizContainer.classList.add(
      "hidden"
    );
  }


  if (resultBadge) {
    resultBadge.classList.remove(
      "hidden"
    );
  }


  if (scoreText) {

    const percentage =
      Math.round(
        (score / TOTAL_QUESTIONS) *
        100
      );


    let message =
      "¡Buen trabajo! Sigue explorando el laboratorio.";


    if (
      score ===
      TOTAL_QUESTIONS
    ) {

      message =
        "¡PERFECTO! ¡Dominas el laboratorio hormonal!";

    } else if (
      score >= 12
    ) {

      message =
        "¡Excelente trabajo! Casi tienes todas las respuestas.";

    } else if (
      score >= 8
    ) {

      message =
        "¡Muy bien! Un poquito más de práctica y lo tendrás.";

    }


    scoreText.textContent =
      `Resultado: ${score}/${TOTAL_QUESTIONS} (${percentage}%). ${message}`;
  }


  for (
    let q = 1;
    q <= TOTAL_QUESTIONS;
    q++
  ) {

    document
      .querySelectorAll(
        `.quiz-btn-${q}`
      )
      .forEach(button => {

        const match =
          button
            .getAttribute(
              "onclick"
            )
            ?.match(
              /checkQuiz\(\d+,\s*['"]([ABC])['"]/
            );


        const option =
          match?.[1];


        button.disabled =
          true;


        if (
          option ===
          ANSWER_KEY[q]
        ) {

          button.classList.remove(
            "bg-white",
            "text-slate-700",
            "bg-brandYellow"
          );

          button.classList.add(
            "bg-green-200",
            "text-green-900"
          );


        } else if (
          option ===
          userAnswers[q]
        ) {

          button.classList.remove(
            "bg-white",
            "text-slate-700",
            "bg-brandYellow"
          );

          button.classList.add(
            "bg-red-200",
            "text-red-900"
          );

        }

      });
  }


  /* Confetti ONLY for perfect score */

  if (
    window.confetti &&
    score === TOTAL_QUESTIONS
  ) {

    confetti({
      particleCount: 180,
      spread: 95,
      origin: {
        y: 0.6
      }
    });

  }
}


/* ---------------------------------------------------------
   RESET QUIZ
   --------------------------------------------------------- */

function resetQuiz() {

  Object.keys(
    userAnswers
  ).forEach(
    key =>
      delete userAnswers[key]
  );


  const progress =
    document.getElementById(
      "quizProgressText"
    );


  const quizContainer =
    document.getElementById(
      "quizContainer"
    );


  const resultBadge =
    document.getElementById(
      "quizResultBadge"
    );


  if (progress) {

    progress.textContent =
      `0 / ${TOTAL_QUESTIONS}`;

  }


  if (quizContainer) {

    quizContainer.classList.remove(
      "hidden"
    );

  }


  if (resultBadge) {

    resultBadge.classList.add(
      "hidden"
    );

  }


  for (
    let q = 1;
    q <= TOTAL_QUESTIONS;
    q++
  ) {

    document
      .querySelectorAll(
        `.quiz-btn-${q}`
      )
      .forEach(button => {

        button.disabled =
          false;


        button.classList.remove(
          "bg-brandYellow",
          "text-slate-900",
          "bg-green-200",
          "bg-red-200",
          "text-red-900",
          "text-green-900"
        );


        button.classList.add(
          "bg-white",
          "text-slate-700"
        );


        button.setAttribute(
          "aria-pressed",
          "false"
        );

      });
  }
}


/* =========================================================
   SHARE LINK
   ========================================================= */

function openShareModal() {

  const modal =
    document.getElementById(
      "shareModal"
    );


  const shareInput =
    document.getElementById(
      "shareUrlInput"
    );


  const toast =
    document.getElementById(
      "copyToast"
    );


  if (
    !modal ||
    !shareInput
  ) {
    return;
  }


  if (toast) {

    toast.classList.add(
      "hidden"
    );

  }


  const shareUrl =
    window.location.href
      .split("#")[0] +
    "#quiz-section";


  shareInput.value =
    shareUrl;


  modal.classList.remove(
    "hidden"
  );
}


/* ---------------------------------------------------------
   CLOSE SHARE MODAL
   --------------------------------------------------------- */

function closeShareModal() {

  const modal =
    document.getElementById(
      "shareModal"
    );


  if (modal) {

    modal.classList.add(
      "hidden"
    );

  }
}


/* ---------------------------------------------------------
   COPY SHARE LINK
   --------------------------------------------------------- */

function copyGeneratedLink() {

  const shareInput =
    document.getElementById(
      "shareUrlInput"
    );


  if (!shareInput) return;


  shareInput.select();

  shareInput.setSelectionRange(
    0,
    99999
  );


  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {

    navigator.clipboard
      .writeText(
        shareInput.value
      )
      .then(
        showCopySuccess
      )
      .catch(() => {

        document.execCommand(
          "copy"
        );

        showCopySuccess();

      });


  } else {

    document.execCommand(
      "copy"
    );

    showCopySuccess();

  }
}


/* ---------------------------------------------------------
   COPY SUCCESS
   --------------------------------------------------------- */

function showCopySuccess() {

  const toast =
    document.getElementById(
      "copyToast"
    );


  if (toast) {

    toast.classList.remove(
      "hidden"
    );

  }


  if (window.confetti) {

    confetti({
      particleCount: 40,
      spread: 50,
      origin: {
        y: 0.5
      }
    });

  }
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* Default gland */

    selectGland(
      "hipotalamo"
    );


    /* Default cycle */

    selectCycleScenario(
      "susto"
    );


    /* Open directly at quiz */

    if (
      window.location.hash ===
      "#quiz-section"
    ) {

      requestAnimationFrame(
        () => {
          scrollToSection(
            "quiz-section"
          );
        }
      );

    }

  }
);
```
