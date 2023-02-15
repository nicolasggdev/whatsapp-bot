const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.body) {
    switch (message.body) {
      case "1":
        message.reply(
          `Para la apertura de una cuenta de ahorros por favor acerquese a una sucursal física bancaria; las direcciones las puede encontrar en nuestro portal virtual.`
        );
        break;
      case "2":
        message.reply(
          `Para la cancelación de un producto bancario por favor enviar un email al correo electrónico xxxx@gmail.com; el correo deberá tener una solicitud de cancelación y copia del documento de identificación.`
        );
        break;
      case "3":
        message.reply(
          `Para reportar un fraude, por favor llame a nuestra linea de atención prioritaria (+57) xxxxxxxxx.`
        );
        break;
      case "4":
        message.reply(`En unos minutos uno de nuestros asesores lo atenderá.`);
        break;
      default:
        message.reply(
          `¡Hola! Soy TalkieBot, un bot de prueba. ¿En qué puedo ayudarle hoy?\nMarque el número para la ayuda que necesite:\n1. Aperturar una cuenta de ahorros.\n2. Cancelar un producto con el banco.\n3. Reportar un fraude.\n4. Contactarme con un asesor.`
        );
        break;
    }
  }
});

client.initialize();
