// Parte 0: Limpiar preferencias guardadas en localStorage
localStorage.removeItem("preferredLanguage"); // Eliminar preferencia de idioma

// Parte 1 de 7: Variables globales y configuración inicial

// Variable global para activar/desactivar el killswitch
const isFormDisabled = false; // Cambia a true para activar el killswitch
const sendToGoogleForm = true;

// Array para almacenar las respuestas del usuario
let responses = [];
// Parte 2 de 7: Traducciones en catalán

const translations = {
  ca: {
    diagnosisTitle: "Diagnòstic",
    formIntroText:
          "La FEFAC impartirà una sessió a Infarma amb consells pràctics per complir amb aquestes obligacions empresarials i evitar possibles sancions als titulars de farmàcia. Omple el formulari per inscriure't i assegurar-te una plaça.",
    gdprClause:
      "D’acord amb el Reglament General de Protecció de Dades (GDPR), les seves dades personals seran tractades per la FEFAC (Federació d’Associacions de Farmàcies de Catalunya) amb CIF G-63397865, amb la finalitat de gestionar la seva inscripció a l’esdeveniment. Per a més informació sobre el tractament de les seves dades i els seus drets, pot contactar amb nosaltres a través del correu electrònic fefac@fefac.cat.",
    pageTitle: "Obligacions Empresarials - Oficina de Farmàcia",
    headerTitle: "Obligacions empresarials de la Farmàcia",
    headerDescription:
      "Detecta possibles incompliments i les sancions a les quals podries estar exposat.",
    questions: [
      {
        title: "Protocol per prevenir i abordar l’assetjament laboral",
        description:
          "Totes les empreses estan obligades a adoptar mesures específiques i arbitrar procediments per prevenir i donar resposta a les reclamacions d’assetjament que succeeixen en el lloc o per ocasió del treball.<br><br><b>Disposes d'una avaluació de riscos d'assetjament laboral i de protocols per a prevenir-lo a la teva Farmàcia?</b>",
      },
      {
        title: "Protocol per prevenir i abordar l’assetjament sexual i per raó de sexe",
        description:
          "Totes les empreses estan obligades a adoptar mesures específiques i arbitrar procediments per prevenir i donar resposta a les reclamacions d’assetjament sexual i per raó de sexe.<br><br><b>Disposes d'un protocol per a prevenir l'assetjament sexual i per raó de sexe a la teva Farmàcia?</b>",
      },
      {
        title: "Registre salarial",
        description:
          "Totes les empreses tenen l’obligació de dur un registre dels valors mitjans dels salaris, els complements salarials i les percepcions salarials disgregat per sexes i distribuït per grups professionals, categories professionals o llocs de treball iguals o d’igual valor.<br><br><b>Disposes dels registres salarials desagregats per sexes i actualitzats anualment a la teva Oficina de Farmàcia?</b>",
      },
      {
        title: "Protocol de desconnexió digital",
        description:
          "Les empreses tenen l'obligació de negociar amb la representació legal de les persones treballadores un protocol de desconnexió digital que ha de contenir mesures i accions formatives per tal que les persones que conformen la plantilla donin un ús raonable a les eines tecnològiques en el descans i la vida personal i familiar.<br><br><b>Disposes d'un protocol de desconnexió digital a la teva Farmàcia?</b>",
      },
    ],
    sanctions: [
      {
        questionId: 1,
        text: "No disposar de protocols per a prevenir i abordar l’assetjament laboral",
        sanction: "Sancionable fins a 7.500 €",
        amount: 7500,
      },
      {
        questionId: 2,
        text: "No disposar de protocols per a prevenir i abordar l’assetjament sexual",
        sanction: "Sancionable fins a 7.500 €",
        amount: 7500,
      },
      {
        questionId: 3,
        text: "No disposar del registre salarial",
        sanction:
          "Sancionable fins a 225.018 € si les diferències salarials impliquen discriminació",
        amount: 225018,
      },
      {
        questionId: 4,
        text: "No disposar del protocol de desconnexió digital",
        sanction: "Sancionable fins a 7.500 €",
        amount: 7500,
      },
    ],
    yesButton: "Sí",
    noButton: "No",
    diagnosisTitle: "Diagnòstic",
    continueButton: "Descobreix com resoldre aquests problemes",
    totalSanctionsText: "Sancions totals màximes estimades",
    noIssuesDetectedText: "Felicitats! No s'han detectat incompliments.",
    standMessage:
      "<h4>Places completes a la sessió informativa</h4><p>Les places per a la sessió informativa de FEFAC estàn completes. Et convidem a visitar el nostre Stand F-51 a Infarma per a obtenir més informació sobre les teves obligacions empresarials.</p>",
    formLabels: {
      name: "Nom i cognoms:",
      email: "Correu electrònic:",
      phone: "Telèfon:",
      officeNumber: "Número d'oficina de farmàcia:",
      submitButton: "Enviar inscripció",
    },
  },
  es: {
    diagnosisTitle: "Diagnóstico",
    formIntroText:
      "La FEFAC impartirá una sesión en Infarma con consejos prácticos para cumplir con estas obligaciones empresariales y evitar posibles sanciones a los titulares de farmacia. Rellena el formulario para inscribirte y asegurarte una plaza.",
      gdprClause:
        "De acuerdo con el Reglamento General de Protección de Datos (GDPR), sus datos personales serán tratados por la FEFAC (Federación de Asociaciones de Farmacias de Cataluña) con CIF G-63397865, con la finalidad de gestionar su inscripción al evento. Para más información sobre el tratamiento de sus datos y sus derechos, puede contactarnos a través del correo electrónico fefac@fefac.cat.",
      pageTitle: "Obligaciones Empresariales - Oficina de Farmacia",
      headerTitle: "Obligaciones empresariales de tu Farmacia",
      headerDescription:
        "Detecta posibles incumplimientos y las sanciones a las cuales podrías estar expuesto.",
      questions: [
        {
          title: "Protocolo para prevenir y abordar el acoso laboral",
          description:
            "Todas las empresas están obligadas a adoptar medidas específicas y arbitrar procedimientos para prevenir y dar respuesta a las reclamaciones de acoso que ocurren en el lugar o con ocasión del trabajo.<br><br><b>¿Dispones de una evaluación de riesgos de acoso laboral y protocolos para prevenirlo en tu farmacia?</b>",
        },
        {
          title: "Protocolo para prevenir y abordar el acoso sexual y por razón de sexo",
          description:
            "Todas las empresas están obligadas a adoptar medidas específicas y arbitrar procedimientos para prevenir y dar respuesta a las reclamaciones de acoso sexual y por razón de sexo.<br><br><b>¿Dispones de un protocolo para prevenir el acoso sexual y por razón de sexo en tu farmacia?</b>",
        },
        {
          title: "Registro salarial",
          description:
            "Todas las empresas tienen la obligación de llevar un registro con los valores medios de los salarios, los complementos salariales y las percepciones salariales desglosado por sexos y distribuido por grupos profesionales, categorías profesionales o puestos iguales o equivalentes.<br><br><b>¿Dispones del registro salarial desglosado por sexos y actualizado anualmente en tu farmacia?</b>",
        },
        {
          title: "Protocolo de desconexión digital",
          description:
            "Las empresas tienen la obligación de negociar con la representación legal de los trabajadores un protocolo que incluya medidas formativas para garantizar un uso razonable durante los periodos destinados al descanso.<br><br><b>¿Dispones del protocolo en tu farmacia?</b>",
        },
      ],
      sanctions: [
        {
          questionId: 1,
          text: "No disponer de protocolos para prevenir y abordar el acoso laboral",
          sanction: "Sancionable hasta 7.500 €",
          amount: 7500,
        },
        {
          questionId: 2,
          text: "No disponer de protocolos para prevenir y abordar el acoso sexual",
          sanction: "Sancionable hasta 7.500 €",
          amount: 7500,
        },
        {
          questionId: 3,
          text: "No disponer del registro salarial",
          sanction:
            "Sancionable hasta 225.018 € si las diferencias salariales implican discriminación",
          amount: 225018,
        },
        {
          questionId: 4,
          text: "No disponer del protocolo de desconexión digital",
          sanction: "Sancionable hasta 7.500 €",
          amount: 7500,
        },
      ],
      yesButton: "Sí",
      noButton: "No",
      diagnosisTitle: "Diagnóstico",
      continueButton: "Descubre cómo resolver estos problemas",
      totalSanctionsText: "Sanciones totales máximas estimadas",
      noIssuesDetectedText: "¡Felicidades! No se han detectado incumplimientos.",
      standMessage:
        "<h4>Plazas completas en la sesión informativa</h4><p>Las plazas para la sesión informativa de FEFAC están completas. Te invitamos a visitar nuestro Stand F-51 en Infarma para obtener más información sobre tus obligaciones empresariales.</p>",
      formLabels: {
        name: "Nombre y apellidos:",
        email: "Correo electrónico:",
        phone: "Teléfono:",
        officeNumber: "Número de oficina de farmacia:",
        submitButton: "Enviar inscripción",
      },
    },
  };

    // Parte 4 de 7: Gestión del cambio dinámico de idioma

    // Detectar clics en las banderitas
    document.querySelectorAll(".flag-button").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLanguage = button.getAttribute("data-language");
        changeLanguage(selectedLanguage); // Cambiar idioma dinámicamente
      });
    });

    // Función para cambiar el idioma
    function changeLanguage(language) {
      const t = translations[language]; // Obtener las traducciones del idioma seleccionado

        // Actualizar título del diagnóstico
        document.getElementById("diagnosis-title").textContent = t.diagnosisTitle;


      // Actualizar los textos dinámicos
      document.getElementById("page-title").textContent = t.pageTitle;
      document.getElementById("header-title").textContent = t.headerTitle;
      document.getElementById("header-description").textContent = t.headerDescription;

      // Actualizar preguntas
      t.questions.forEach((question, index) => {
        document.getElementById(`question-${index + 1}-title`).textContent = question.title;
        document.getElementById(`question-${index + 1}-description`).innerHTML = `
          <p style="text-align: justify; margin: 0;">
            ${question.description}
          </p>`;
        document.getElementById(`yes-button${index > 0 ? `-${index + 1}` : ""}`).textContent = t.yesButton;
        document.getElementById(`no-button${index > 0 ? `-${index + 1}` : ""}`).textContent = t.noButton;
      });

      // Actualizar diagnóstico dinámicamente (veremos más detalles en la Parte 5)
      updateDiagnosisTexts(t);

      // Mensaje de plazas completas
      document.getElementById("stand-message").innerHTML = t.standMessage;

      // Actualizar etiquetas del formulario
      updateFormLabels(t);

      // Actualizar texto del botón en la tarjeta de diagnóstico
      document.getElementById("continue-button").textContent = t.continueButton;

      // Actualizar cláusula GDPR
      document.getElementById("gdpr-clause").innerHTML = t.gdprClause;

      // Guardar la preferencia del idioma en localStorage
      localStorage.setItem("preferredLanguage", language);
    }

    // Cargar el idioma preferido al cargar la página
    window.onload = () => {
      const savedLanguage = localStorage.getItem("preferredLanguage") || "ca"; // Catalán por defecto
      changeLanguage(savedLanguage); // Cargar el idioma al inicio
    };
    // Parte 5 de 7: Traducción dinámica del diagnóstico

    // Función para mostrar el diagnóstico
    function showDiagnosis(t) {
      // Verificar que las traducciones y sanciones estén definidas
      if (!t || !t.sanctions) {
        console.error("Las traducciones o sanciones no están definidas.");
        return;
      }

      // Inicializar variables para el diagnóstico
      let totalSanctions = 0;
      let diagnosisText = "";

      // Recorrer las respuestas y procesar solo las respuestas "no"
      responses.forEach((response) => {
        if (response.answer === "no") {
          // Buscar la sanción correspondiente a la pregunta
          const sanction = t.sanctions.find((s) => s.questionId === response.questionId);
          if (sanction) {
            // Añadir el texto de la sanción al diagnóstico
            diagnosisText += `<p>${sanction.text}: ${sanction.sanction}</p>`;
            // Sumar el importe de la sanción al total
            totalSanctions += sanction.amount;
          }
        }
      });

      // Obtener los elementos del DOM donde se mostrará el diagnóstico
      const diagnosisTextElement = document.getElementById("diagnosis-text");
      const totalSanctionsElement = document.getElementById("total-sanctions");

      // Mostrar el diagnóstico o el mensaje de felicitaciones si no hay incumplimientos
      if (diagnosisText) {
        diagnosisTextElement.innerHTML = diagnosisText; // Mostrar los textos de las sanciones
        totalSanctionsElement.innerHTML = `<b>${t.totalSanctionsText}: ${totalSanctions} €</b><br><br>`; // Mostrar el importe total
      } else {
        diagnosisTextElement.innerHTML = `<p>${t.noIssuesDetectedText}</p>`; // Mostrar mensaje de felicitaciones
        totalSanctionsElement.textContent = ""; // No mostrar importe si no hay sanciones
      }

      // Asegurarse de que solo se muestre la tarjeta de diagnóstico
      document.querySelectorAll(".card").forEach((card) => card.classList.add("hidden"));
      document.getElementById("diagnosis").classList.remove("hidden");
    }
 // Actualizar diagnóstico dinámicamente

 function updateDiagnosisTexts(t) {
   // Verificar si la tarjeta de diagnóstico está visible
   const diagnosisCard = document.getElementById("diagnosis");
   if (!diagnosisCard || diagnosisCard.classList.contains("hidden")) {
     return; // Si no está visible, no actualizamos nada
   }

   // Inicializar variables para el diagnóstico
   let totalSanctions = 0;
   let diagnosisText = "";

   // Recorrer las respuestas y procesar solo las respuestas "no"
   responses.forEach((response) => {
     if (response.answer === "no") {
       // Buscar la sanción correspondiente a la pregunta
       const sanction = t.sanctions.find((s) => s.questionId === response.questionId);
       if (sanction) {
         // Añadir el texto de la sanción al diagnóstico
         diagnosisText += `<p>${sanction.text}: ${sanction.sanction}</p>`;
         // Sumar el importe de la sanción al total
         totalSanctions += sanction.amount;
       }
     }
   });

   // Obtener los elementos del DOM donde se mostrará el diagnóstico
   const diagnosisTextElement = document.getElementById("diagnosis-text");
   const totalSanctionsElement = document.getElementById("total-sanctions");

   // Mostrar el diagnóstico o el mensaje de felicitaciones si no hay incumplimientos
   if (diagnosisText) {
     diagnosisTextElement.innerHTML = diagnosisText; // Mostrar los textos de las sanciones
     totalSanctionsElement.innerHTML = `<b>${t.totalSanctionsText}: ${totalSanctions} €</b><br><br>`; // Mostrar el importe total
   } else {
     diagnosisTextElement.innerHTML = `<p>${t.noIssuesDetectedText}</p>`; // Mostrar mensaje de felicitaciones
     totalSanctionsElement.textContent = ""; // No mostrar importe si no hay sanciones
   }
 }


    // Parte 6 de 7: Manejo del formulario

    // Función para actualizar las etiquetas y el botón del formulario
    function updateFormLabels(t) {
      document.getElementById("form-intro-text").textContent = t.formIntroText; // Actualizar texto introductorio
      document.getElementById("name-label").textContent = t.formLabels.name;
      document.getElementById("email-label").textContent = t.formLabels.email;
      document.getElementById("phone-label").textContent = t.formLabels.phone;
      document.getElementById("office-number-label").textContent = t.formLabels.officeNumber;
      document.getElementById("submit-button").textContent = t.formLabels.submitButton;

      // Actualizar cláusula GDPR
      document.getElementById("gdpr-clause").innerHTML = t.gdprClause;
    }


    // Función para enviar el formulario por correo electrónico
    function sendMail(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const officeNumber = document.getElementById("office-number").value;

      // Obtener idioma actual y cláusula GDPR
      const savedLanguage = localStorage.getItem("preferredLanguage") || "ca";
      const t = translations[savedLanguage];

      // Crear el enlace mailto con los datos del formulario
      const mailtoLink = `mailto:mruiz@fefac.cat?subject=Inscripció%20a%20la%20xerrada%20d'Infarma&body=Nom i cognoms: ${encodeURIComponent(
        name
      )}%0D%0ACorreu electrònic: ${encodeURIComponent(
        email
      )}%0D%0ATelèfon: ${encodeURIComponent(phone)}%0D%0ANúmero d'oficina de farmàcia: ${encodeURIComponent(
        officeNumber
      )}%0D%0ARespostes del qüestionari:%0D%0A${encodeURIComponent(JSON.stringify(responses))}%0D%0A%0D%0A${encodeURIComponent(
        t.gdprClause
      )}`;

      window.location.href = mailtoLink;
    }
    // Parte 7 de 7: Otras funciones auxiliares y cierre

    // Función para avanzar entre tarjetas
    function nextCard(currentCardId, answer) {
      // Guardar la respuesta del usuario
      console.log(`Pregunta ${currentCardId}, Respuesta: ${answer}`);
  responses.push({ questionId: currentCardId, answer });

      // Ocultar la tarjeta actual
      document.getElementById(`card-${currentCardId}`).classList.add("hidden");

      // Mostrar la siguiente tarjeta si existe, o el diagnóstico si no hay más preguntas
      const nextCard = document.getElementById(`card-${currentCardId + 1}`);
      if (nextCard) {
        nextCard.classList.remove("hidden");
      } else {
        const savedLanguage = localStorage.getItem("preferredLanguage") || "ca";
        const t = translations[savedLanguage] || translations["ca"];
        showDiagnosis(t); // Mostrar el diagnóstico si no hay más preguntas
      }
    }

    // Función para continuar después del diagnóstico
    function continueAfterDiagnosis() {
      // Ocultar la tarjeta de diagnóstico
      document.getElementById("diagnosis").classList.add("hidden");

      if (isFormDisabled) {
        // Mostrar mensaje de plazas completas
        document.getElementById("info-stand").classList.remove("hidden");
        return;
      }
      if (sendToGoogleForm) {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeqiqmgi336u02nYvr_AzZDr6LkeAgvosRxPjg_wRmWYRPkcQ/viewform?usp=header";
            return;
      }

      // Mostrar formulario
      document.getElementById("form").classList.remove("hidden");
    }
