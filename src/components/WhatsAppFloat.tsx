import whatsappButton from "@/assets/whatsapp-button.png.asset.json";

const WHATSAPP_NUMBER = "5511974418038";
const WHATSAPP_MESSAGE = "Olá! Gostaria de um orçamento para rodízio de pizza.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
    >
      <img
        src={whatsappButton.url}
        alt="Falar no WhatsApp"
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-contain drop-shadow-lg"
        loading="eager"
      />
    </a>
  );
}
