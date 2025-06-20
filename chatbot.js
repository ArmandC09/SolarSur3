const responses = {
    juego: {
        keywords: ["chiste", "quieres jugar", "dime un chiste", "cuentame un chiste", "hazme reir", "me aburro", "dime algo divertido"],
        response: (() => {
        const chistes = [
            "¿Por qué los paneles solares no van a fiestas? Porque siempre están cargados.",
            "¿Qué hace una terma solar en el gimnasio? ¡Calienta!",
            "¿Por qué el sol no necesita WiFi? Porque ya tiene conexión directa con la energía.",
            "¿Qué le dijo un panel solar a otro? ¡No te pongas opaco, que hoy es tu día brillante!",
            "¿Qué hace un técnico solar cuando está triste? ¡Se recarga al sol!",
            "¿Por qué los paneles solares son buenos amigos? Porque siempre están ahí cuando brilla el sol.",
            "¿Cómo se despide un sistema solar? ¡Hasta la próxima instalación!"
        ];
        return () => chistes[Math.floor(Math.random() * chistes.length)];
        })()
    },

    saludo: {
        keywords: ["hola", "que tal", "buenas", "buen dia", "buenas tardes", "buenas noches", "saludos", "hey", "hi", "hello"],
        response: "¡Hola! Soy el asistente virtual de SolarSur ☀️. ¿En qué puedo ayudarte hoy?"
    },

    despedida: {
        keywords: ["adios", "hasta luego", "chao", "nos vemos", "hasta pronto", "bye", "goodbye"],
        response: "¡Hasta luego! Si necesitas algo más, no dudes en preguntar."
    },

    ayuda: {
        keywords: ["ayuda", "necesito ayuda", "necesito asistencia", "ayuda tecnica"],
        response: "Claro, estoy aquí para ayudarte. ¿Qué necesitas saber?, puedes contactarnos y hacernos saber tu problema a través de nuestro número de contacto: (052) 243863"
    },

    contacto: {
        keywords: ["contacto", "hablar con alguien", "atencion al cliente", "comunicacion", "contactar", "escribir", "enviar un mensaje", "enviar un correo", "correo electronico", "llamar", "telefono", "numero de telefono", "numero de contacto", "numero de atencion al cliente", "numero de soporte tecnico", "numero de asistencia", "numero de ayuda"],
        response: "Puedes contactarnos a través de nuestro correo electrónico: solarsurperu1@gmail.com o por teléfono al (052) 243863. Estamos aquí para ayudarte."
    },

    precios: {
        keywords: ["precios", "costos", "tarifas", "valor", "costo", "cuanto vale", "cuanto es", "cuanto sale", "cuanto cobra"],
        response: "Nuestros precios varían según el producto o servicio. Por favor, contáctanos para más información."
    },

    quejas: {
        keywords: ["queja", "reclamo", "problema", "insatisfaccion", "mala experiencia", "no estoy satisfecho", "no estoy contento", "queja sobre el servicio", "reclamo sobre el producto"],
        response: "Lamentamos que hayas tenido una mala experiencia. Por favor, envíanos un correo electrónico con los detalles o directamente a nuestro número de contacto: (052) 243863. Estamos aquí para ayudarte."
    },

    productos: {
        keywords: ["productos", "materiales", "nuestros productos", "catálogo", "artículos", "mercancías", "existencias", "disponibilidad"],
        response: `Aquí tienes nuestra lista de productos disponibles en <b>SolarSur</b> ☀️<br><br>Podemos ayudarte con información y cotizaciones sobre:<br><ul style="list-style: disc; padding-left: 20px;"><li style="font-weight: bold;">Termas solares</li><li style="font-weight: bold;">Calentadores solares para piscina</li><li style="font-weight: bold;">Cocinas solares</li><li style="font-weight: bold;">Paneles solares</li><li style="font-weight: bold;">Sistemas de bombeo solar</li><li style="font-weight: bold;">Instalación y mantenimiento</li></ul>¿Sobre cuál de estos productos te gustaría recibir más información? 😊`
    },

    servicios: {
        keywords: ["servicio", "servicios", "aplicaciones", "nuestros servicios", "servicio al cliente"],
        response: "Nuestros servicios incluyen soporte técnico, mantenimiento y asistencia personalizada. ¿Qué necesitas?"
    },

    ayudaGeneral: {
        keywords: ["ayuda general", "preguntas frecuentes", "faq", "dudas"],
        response: "Puedes consultar nuestra sección de preguntas frecuentes en nuestro sitio web para obtener más información."
    },

    contactoGeneral: {
        keywords: ["contacto general"],
        response: "Puedes contactarnos a través de nuestro correo electrónico o por teléfono para recibir asistencia."
    },

    horarios: {
        keywords: ["horario", "horarios", "horario de atencion", "dias de atencion", "horas de trabajo", "horario de servicio", "horario de atencion al cliente", "horario de soporte tecnico", "horario de asistencia"],
        response: "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 horas."
    },

    ubicacion: {
        keywords: ["ubicacion", "direccion", "donde estamos", "donde encontrarnos", "nuestra ubicacion", "nuestra direccion", "donde se encuentra", "donde esta"],
        response: "Estamos ubicados en Tacna, Calle Arica Nº15."
    },

    garantia: {
        keywords: ["garantia", "politica de garantia", "cobertura de garantia", "plazo de garantia", "condiciones de garantia", "requisitos de garantia", "proceso de garantia", "reclamacion de garantia"],
        response: "Ofrecemos una garantía de 1 año en nuestros productos. Para más información, consulta nuestra política de garantía."
    },

    termas: {
        keywords: ["terma", "termas solares", "agua caliente", "ducha solar", "ahorro de luz"],
                response: `<p style="line-height: 1.3;">Aquí tienes nuestras termas solares y sus características principales:</p>
            <ul style="list-style: disc; padding-left: 20px;"><br>
                <li><b>Terma de 120L</b>: Para 4 personas. <span style="color:#001E83;">Espacio necesario: 1.10m x 2.00m</span></li>
                <li><b>Terma de 150L</b>: Para 5 personas. <span style="color:#001E83;">Espacio necesario: 1.30m x 2.00m</span></li>
                <li><b>Terma de 180L</b>: Para 6 personas. <span style="color:#001E83;">Espacio necesario: 1.60m x 2.00m</span></li>
                <li><b>Terma de 240L</b>: Para 8 personas. <span style="color:#001E83;">Espacio necesario: 2.10m x 2.00m</span></li>
                <li><b>Terma de 300L</b>: Para 10 personas. <span style="color:#001E83;">Espacio necesario: 2.60m x 2.00m</span></li>
                <li><b>Terma de 500L</b>: Para 15 personas. <span style="color:#001E83;">Espacio necesario: 4.00m x 2.00m</span></li>
            </ul>`
    },

    cotizar: {
        keywords: ["cotizar", "cotizacion", "precio", "presupuesto", "cuanto cuesta", "quiero cotizar"],
        response: "Para cotizar nuestros productos o servicios, puedes contactarnos por estos medios:\n\n📞 *Teléfono*: 908 823 893\n📱 *WhatsApp*: +51 908823893\n✉️ *Correo*: contacto@solarsur.com\n📍 *Ubicación*: Tacna - Perú - Calle Arica Nº15\n\n¡Estaremos encantados de ayudarte con una propuesta personalizada! ☀️"
    },

    paneles: {
        keywords: ["panel solar", "paneles", "paneles solares", "energia solar", "electricidad solar", "fotovoltaico"],
        response: "Contamos con paneles solares de alta eficiencia para viviendas, comercios y zonas rurales. Te ayudarán a reducir tu consumo eléctrico y aprovechar la energía del sol."
    },

    piscina: {
        keywords: ["piscina", "calentador", "agua tibia", "calentar agua", "calentar piscina", "calentador solar piscina"],
        response: "Ofrecemos calentadores solares para piscinas que mantienen el agua templada durante todo el año sin consumir electricidad ni gas. Ideales para hogares y hoteles."
    },

    instalacion: {
        keywords: ["instalacion", "instalar", "quien instala", "colocacion", "servicio de instalacion"],
        response: "Nosotros nos encargamos de la instalación de paneles, termas solares y calentadores de piscina. Nuestro equipo técnico garantiza un servicio rápido, seguro y certificado."
    },

    bombeo: {
        keywords: ["bombeo solar", "agua solar", "bomba de agua", "riego solar", "sistema de bombeo"],
        response: "También ofrecemos sistemas de bombeo solar ideales para zonas agrícolas o rurales sin acceso a red eléctrica."
    },

    certificacion: {
        keywords: ["certificacion", "homologacion", "cumple normas", "aprobado", "legal", "regulado"],
        response: "Todos nuestros productos cumplen con los estándares de calidad y están certificados para su uso en el Perú. Garantizamos tecnología segura y eficiente."
    },


    duracion: {
        keywords: ["cuanto dura", "vida util", "durabilidad", "resistencia", "cuanto tiempo funciona"],
        response: "Nuestros equipos tienen una vida útil de más de 10 años con mantenimiento mínimo. ¡Una inversión a largo plazo!"
    },

    beneficios: {
        keywords: ["beneficios", "ventajas", "por que usar solar", "que gano", "que beneficio tiene"],
        response: "Ahorrarás dinero, reducirás tu impacto ambiental y mejorarás tu independencia energética. La energía solar es limpia, silenciosa y confiable."
    },

    mantenimiento: {
    keywords: ["mantenimiento", "limpieza", "cada cuanto se limpia", "se limpia", "se revisa", "revisiones", "cuidados", "cuanto mantenimiento necesita"],
    response: "Los sistemas solares requieren poco mantenimiento. Solo recomendamos limpiar los paneles o tubos de la terma 1 o 2 veces al año para garantizar su eficiencia. ¡Es muy sencillo!"
    },

    consumo: {
        keywords: ["cuanto consume", "consumo de energia", "gasta energia", "cuanto gasta", "consume electricidad", "sube la luz"],
        response: "Nuestros sistemas funcionan con energía solar, por lo tanto no consumen electricidad ni gas. ¡Al contrario, ayudan a reducir tu factura!"
    },

    compatibilidad: {
        keywords: ["es compatible", "con que funciona", "funciona con tanque", "funciona con termo", "necesita algo adicional"],
        response: "Nuestros sistemas son compatibles con redes de agua tradicionales y no requieren gas ni energía eléctrica. Podemos adaptar la instalación según tu necesidad."
    },

    uso: {
        keywords: ["como se usa", "instrucciones", "manual", "guia", "dificil de usar", "facil de usar"],
        response: "Los sistemas solares son muy fáciles de usar. Se activan automáticamente con la radiación solar y no necesitas hacer ajustes diarios. Recibirás una guía de uso después de la instalación."
    },

    recomendaciones: {
        keywords: ["que me recomiendan", "que me conviene", "mejor opcion", "mejor modelo", "modelo recomendado"],
        response: "Podemos ayudarte a elegir el producto ideal según el tamaño de tu familia, tu consumo y tu presupuesto. ¿Nos das más detalles para asesorarte mejor?"
    },

    disponibilidad: {
        keywords: ["tienen en stock", "hay disponible", "puedo comprar", "disponible", "disponibilidad de producto"],
        response: "Sí, tenemos disponibilidad inmediata de termas solares, paneles y calentadores de piscina. ¿Sobre cuál te gustaría consultar?"
    },

    promociones: {
        keywords: ["promociones", "ofertas", "descuentos", "oferta especial", "rebajas", "hay promo"],
        response: "Actualmente tenemos promociones especiales en termas solares y combos con instalación incluida. ¡Pregúntanos por los detalles!"
    },

    tiempoInstalacion: {
        keywords: ["cuanto demora", "cuanto tarda", "demora en instalar", "tiempo de instalacion", "rapido", "es rapido"],
        response: "La instalación de una terma o panel solar toma generalmente entre 2 a 4 horas. Podemos coordinar según tu disponibilidad."
    },

    lluvia: {
        keywords: ["lluvia", "dias nublados", "si no hay sol", "cuando llueve", "mal clima", "funciona sin sol"],
        response: "Nuestros equipos están diseñados para funcionar incluso en días nublados. En caso de varios días sin sol, puedes complementarlos con energía auxiliar si lo deseas."
    },

    garantiaExtendida: {
        keywords: ["garantia extendida", "mas garantia", "garantia adicional", "puedo ampliar garantia"],
        response: "Sí, puedes extender la garantía hasta 3 años dependiendo del producto. Consúltanos por las opciones disponibles."
    },

    cupones: {
    keywords: [
    "cupon", "cupones", "codigo de descuento", "codigo promocional", "descuento especial", "tienen cupones", "hay cupon", "hay codigo de descuento"],
    response: "Actualmente no contamos con cupones ni códigos promocionales activos. Sin embargo, puedes consultar nuestras promociones vigentes escribiéndonos directamente. ☀️"
    },

    amistoso: {
    keywords: [
        "como estas", "que haces", "quien eres", "eres real", "eres un robot", "me caes bien",
        "me gusta este chat", "gracias por responder", "que bonito chatbot", "hablas bien",
        "estas ahi", "te puedo hacer una pregunta", "eres muy amable", "jajaja", "jeje", "me da risa"
    ],
    response: "¡Gracias por tu mensaje! 😊 Soy el asistente virtual de SolarSur y estoy aquí para ayudarte con todo lo relacionado a energía solar, termas, paneles y más. ¡Pregúntame lo que necesites!"
    },
    
    humor: {
        keywords: ["jajaja", "jejeje", "jaja", "eres gracioso", "te pasas", "que gracioso", "buen chiste", "me haces reir", "te gusta bromear"],
        response: "😄 ¡Me alegra sacarte una sonrisa! Aunque soy un bot solar, también tengo buen humor. ¿En qué más puedo ayudarte?"
    },

    curiosidad: {
    keywords: [
    "quien te creo", "de donde vienes", "como funcionas", "eres inteligente", "usas inteligencia artificial", "te programaron", "como sabes eso", "como aprendes"
    ],
    response: "Fui creado por SolarSur para ayudarte con todo sobre energía solar ☀️. Estoy entrenado para responder preguntas frecuentes y aprender cada día más."
    },

    presente: {
        keywords: ["estas ahi", "hay alguien", "me puedes ayudar", "me escuchas", "puedo hablar contigo", "hola estas activo", "estoy solo aqui"],
        response: "¡Sí! Estoy aquí para ayudarte 😊. Pregúntame sobre termas, paneles solares, calentadores o cualquier servicio que ofrecemos en SolarSur."
    },

    agradecimiento: {
    keywords: [
    "gracias", "muchas gracias", "te agradezco", "muy amable", "excelente atencion", "que buen servicio", "me ayudaste mucho"
    ],
    response: "¡Gracias a ti por confiar en SolarSur! 🌞 Si necesitas algo más, aquí estaré."
    },

    elogio: {
    keywords: [
    "me encanta su empresa", "muy buen servicio", "que bonito diseño", "felicidades", "excelente trabajo", "todo funciona bien", "estan haciendo bien las cosas"
    ],
    response: "¡Qué bonito leer eso! ☀️ En SolarSur trabajamos con pasión para llevar energía limpia y soluciones reales a más personas. ¡Gracias por tu apoyo!"
    },

    confusion: {
    keywords: [
    "no se", "no entiendo", "no estoy seguro", "me puedes guiar", "que hago", "que opciones tengo", "que productos hay", "como empiezo", "me ayudas con algo"
    ],
    response: "¡No te preocupes! Estoy aquí para ayudarte. Puedes preguntarme por termas solares, paneles solares, calentadores de piscina, precios, instalación o promociones actuales. ¿Por cuál quieres empezar?"
    },

    persona: {
    keywords: [
    "quiero hablar con una persona", "puedo hablar con un asesor", "hay alguien real", "me atiende un humano", "quiero un humano"
    ],
    response: "Claro. Puedes comunicarte directamente con nuestro equipo humano por WhatsApp al +51 908823893 o llamarnos al (052) 243863. ¡Con gusto te atenderán!"
    },

    identidad: {
    keywords: [
    "como te llamas", "quien eres", "cual es tu nombre", "tienes nombre", "eres un chatbot", "quien me responde"
    ],
    response: "¡Hola! Soy el asistente virtual de SolarSur. Estoy aquí para ayudarte con lo que necesites sobre nuestros productos solares ☀️"
    },

    cambiarTema: {
    keywords: [
    "hablame mas", "quiero saber mas", "hablemos de otra cosa", "cambiar de tema", "cuentame algo mas", "continua", "que mas sabes", "quiero seguir hablando"
    ],
    response: "Claro, puedo contarte más sobre nuestros productos o sobre energía solar en general."
    },

    ofensa: {
        keywords: [
            "tonto", "idiota", "estupido", "no sirves", "no sabes nada", "inutil", "que porqueria", 
            "me haces perder el tiempo", "eres una basura", "imbecil", "desgraciado", "maldito", "no sirves para nada"
        ],
        response: "😔 Lamento que te sientas así. Estoy aquí para ayudarte con lo que necesites sobre nuestros productos y servicios solares. Si algo no te funciona, puedo intentar ayudarte mejor."
    },

    cocinas: {
        keywords: ["cocinas solares", "cocina solar", "cocina ecologica", "cocina con sol", "horno solar", "cocina", "cocinas"],
        response: "Nuestras cocinas solares permiten preparar alimentos utilizando solo la energía del sol. Son ideales para zonas rurales, campamentos y lugares con alta radiación solar."
    },

    instalacionMantenimiento: {
        keywords: ["instalación y mantenimiento", "servicio de instalación", "servicio técnico", "revisión técnica", "soporte solar"],
        response: "Ofrecemos servicios completos de instalación y mantenimiento para todos nuestros productos. Nuestro equipo técnico está capacitado y certificado para garantizar una instalación segura y eficiente."
    },

    solarGeneral: {
        keywords: [
            "energia solar", "sistema solar", "sistemas solares", "solar", "como funciona la energia solar", 
            "quiero saber sobre energia solar", "explicame la energia solar", "que es energia solar", 
            "como funciona un sistema solar", "informacion sobre energia solar"
        ],
        response: "La energía solar es una fuente limpia y renovable que aprovecha la radiación del sol para generar electricidad o calentar agua. En SolarSur usamos esta tecnología en termas, paneles, calentadores de piscina y más. ¿Sobre qué producto te gustaría saber más? ☀️"
    },

    ecologia: {
    keywords: [
        "ecologico", "medio ambiente", "cuidar el planeta", "impacto ambiental", 
        "energía limpia", "ecoamigable", "ecologia", "contaminacion"
    ],
    response: "Nuestros productos están diseñados para reducir la huella de carbono y proteger el medio ambiente. ¡La energía solar es una opción sostenible y limpia!"
    },

    financiamiento: {
    keywords: [
        "financiamiento", "formas de pago", "cuotas", "credito", "se puede pagar en partes", 
        "pago en cuotas", "plan de pago", "puedo financiar", "puedo pagar despues"
    ],
    response: "Ofrecemos opciones de pago flexibles. Puedes consultar con nuestro equipo si deseas financiar tu compra o conocer nuestros planes de pago disponibles."
    },

    devolucion: {
    keywords: [
        "devolucion", "reembolso", "si no me gusta", "puedo devolver", "garantia de satisfaccion",
        "que pasa si no me gusta", "reclamo por devolucion", "quiero mi dinero"
    ],
    response: "Si no estás satisfecho con el producto, contáctanos. Evaluamos cada caso y buscamos siempre una solución justa y rápida."
    },


    demostracion: {
    keywords: [
        "tienen video", "puedo ver como funciona", "ejemplo", "demostracion", "caso real", 
        "video explicativo", "ver en funcionamiento"
    ],
    response: "Podemos enviarte videos de instalación o funcionamiento de nuestros productos. Escríbenos por WhatsApp y te compartimos contenido útil."
    },

    comparacionProductos: {
    keywords: [
        "comparar productos", "diferencias entre productos", "cual me conviene", 
        "cual es mejor", "que producto elegir", "que producto recomiendan", 
        "diferencias entre paneles y termas", "paneles vs termas", 
        "cual es mejor terma o panel", "mejor producto solar", "comparo panel con terma"
    ],
    response: "Podemos ayudarte a comparar nuestros productos solares. Por ejemplo:\n\n- 🔥 *Termas solares*: ideales para calentar agua para duchas familiares.\n- ⚡ *Paneles solares*: generan electricidad limpia para tu hogar o negocio.\n- 💧 *Calentadores solares de piscina*: mantienen el agua tibia todo el año sin consumo de energía.\n\nCuéntame qué necesitas y te recomiendo la mejor opción según tu caso 😊."
    },

    queEsTerma: {
    keywords: [
        "que es una terma solar", "como funciona una terma solar", "terma solar concepto", 
        "explicame terma solar", "que hace una terma solar"
    ],
    response: "Una *terma solar* es un sistema que calienta agua utilizando la energía del sol. Funciona mediante tubos o paneles solares que absorben el calor solar y lo transfieren al agua. Es ideal para duchas, lavabos y uso doméstico sin necesidad de electricidad ni gas."
    },

    queEsPanel: {
    keywords: [
        "que es un panel solar", "como funciona un panel solar", "panel solar concepto", 
        "explicame panel solar", "panel solar definicion"
    ],
    response: "Un *panel solar* convierte la luz del sol en electricidad mediante células fotovoltaicas. Es una forma limpia y sostenible de generar energía para casas, negocios y zonas rurales."
    },

    queEsCocina: {
    keywords: [
        "que es una cocina solar", "como funciona una cocina solar", "cocina solar concepto", 
        "explicame cocina solar", "definicion cocina solar"
    ],
    response: "Una *cocina solar* permite preparar alimentos usando solo la energía del sol. Funciona como un horno cerrado que concentra la radiación solar. Es ecológica, segura y útil en lugares sin acceso a gas o electricidad."
    },

    queEsBombeo: {
    keywords: [
        "que es un sistema de bombeo solar", "bombeo solar concepto", "como funciona el bombeo solar",
        "sistema de bombeo solar explicacion", "para que sirve el bombeo solar"
    ],
    response: "El *bombeo solar* es un sistema que usa energía solar para extraer y mover agua, ideal para riego agrícola, zonas rurales o viviendas alejadas. Funciona con paneles solares conectados a bombas de agua."
    },

    queEsCalentadorPiscina: {
    keywords: [
        "que es un calentador solar de piscina", "como funciona el calentador de piscina solar", 
        "calentador de piscina solar concepto", "explicame calentador de piscina solar"
    ],
    response: "Un *calentador solar de piscina* utiliza la energía del sol para calentar el agua de una piscina. Funciona con colectores solares por donde circula el agua que se calienta naturalmente. Es eficiente y no requiere electricidad."
    },

    conceptosGenerales: {
    keywords: [
        "que es la energia solar", "energia solar definicion", "como funciona la energia solar",
        "que es un sistema solar", "sistema solar termico", "sistema solar fotovoltaico",
        "diferencia entre energia solar y electrica", "energía renovable", "que es energia limpia"
    ],
    response: `
        <b>🔆 ¿Qué es la energía solar?</b><br>
        La energía solar es una fuente de energía renovable que se obtiene del sol. Puede ser usada para generar electricidad (paneles solares fotovoltaicos) o para calentar agua (sistemas solares térmicos como las termas o calentadores de piscina).<br><br>
        <b>✅ Beneficios:</b> no contamina, es inagotable, reduce tu consumo eléctrico y es ideal para zonas alejadas de la red eléctrica.<br><br>
        ¿Quieres saber cómo se aplica esta tecnología en nuestros productos? Pregúntame sobre termas, paneles, bombas o cocinas solares. 😊
    `
    }

















};


let chatbotIniciado = false;



// Normaliza el texto del usuario para ignorar tildes y signos
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,]/g, "")
        .trim();
}

// Función para manejar el mensaje del usuario
function handleUserMessage(userMessage) {
    const mensajeNormalizado = normalizarTexto(userMessage);
    let defaultResponse = "Lo siento, no entiendo tu pregunta. Por favor, intenta de nuevo.";

    for (const category in responses) {
        const data = responses[category];
        for (const keyword of data.keywords) {
            if (mensajeNormalizado.includes(normalizarTexto(keyword))) {
                // ✔️ Esta línea se asegura de que si es función, se ejecuta
                return typeof data.response === "function"
                    ? data.response()
                    : data.response;
            }
        }
    }

    return defaultResponse;
}





// Vincula el chatbot con el HTML
document.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chat-container");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

chatButton.addEventListener("click", () => {
    if (chatContainer.classList.contains("visible")) {
        chatContainer.classList.remove("visible");
        setTimeout(() => { chatContainer.style.display = "none"; }, 250);
    } else {
        chatContainer.style.display = "flex";
        setTimeout(() => { chatContainer.classList.add("visible"); }, 10);
        setTimeout(() => userInput.focus(), 200);

        // Mostrar el mensaje inicial solo la primera vez
        if (!chatbotIniciado) {
            const mensajeInicial = `
                ¡Hola! 👋 Soy el asistente virtual de <b>SolarSur</b> ☀️<br><br>
                Te puedo ayudar con información y cotizaciones sobre nuestros productos:<br>
                <ul style="list-style: disc; padding-left: 20px;">
                    <li style="font-weight: bold;">Termas solares</li>
                    <li style="font-weight: bold;">Calentadores solares para piscina</li>
                    <li style="font-weight: bold;">Cocinas solares</li>
                    <li style="font-weight: bold;">Paneles solares</li>
                    <li style="font-weight: bold;">Sistemas de bombeo solar</li>
                    <li style="font-weight: bold;">Instalación y mantenimiento</li>
                    <li style="font-weight: bold;">Y mucho más...</li>
                </ul>
                ¿Sobre qué te gustaría consultar primero? 😊
            `;
            addMessage(mensajeInicial, "chatbot");
            chatbotIniciado = true;
        }
    }
});


function addMessage(content, sender, isTyping = false) {
    if (sender === "user") {
        const wrapper = document.createElement("div");
        wrapper.classList.add("message-wrapper", "user-wrapper");

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "user");
        messageDiv.innerHTML = `<span class="message-text">${content}</span>`;

        const icon = document.createElement("img");
        icon.src = "usuario-chatbot.png";
        icon.alt = "Usuario";
        icon.className = "icono-usuario-chatbot";
        icon.style.marginTop = "16px";

        wrapper.appendChild(messageDiv);
        wrapper.appendChild(icon);

        chatMessages.appendChild(wrapper);
    } else {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "chatbot");

        if (isTyping) {
            messageDiv.innerHTML = `
            <span class="message-text typing-indicator">
                <span></span><span></span><span></span>
            </span>
            `;
        } else {
            messageDiv.innerHTML = `<span class="message-text">${content}</span>`;
        }


        chatMessages.appendChild(messageDiv);
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


        sendBtn.addEventListener("click", () => {
            const userMessage = userInput.value.trim();
            if (userMessage) {
                addMessage(userMessage, "user");

                // Mostrar puntos suspensivos
                addMessage("...", "chatbot", true);

                // Esperar 2 segundos y luego reemplazarlo por la respuesta real
                setTimeout(() => {
                    // Elimina el último mensaje del chatbot (los puntos)
                    const mensajes = chatMessages.querySelectorAll(".message.chatbot");
                    if (mensajes.length > 0) {
                        mensajes[mensajes.length - 1].remove();
                    }

                    const botResponse = handleUserMessage(userMessage);
                    addMessage(botResponse, "chatbot");

                }, 1800);

                userInput.value = "";
            }
        });


    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendBtn.click();
        }
    });
});

// Cierra el chat al hacer clic fuera
document.addEventListener("click", function(event) {
    const chatContainer = document.getElementById("chat-container");
    const chatButton = document.getElementById("chat-button");
    if (
        chatContainer.classList.contains("visible") &&
        !chatContainer.contains(event.target) &&
        !chatButton.contains(event.target)
    ) {
        chatContainer.classList.remove("visible");
        setTimeout(() => { chatContainer.style.display = "none"; }, 250);
    }
});
