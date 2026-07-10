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
      className="fixed bottom-4 right-4 z-[60] inline-flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black sm:bottom-6 sm:right-6 sm:w-16 sm:h-16"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingRight: 'env(safe-area-inset-right)' }}
    >
      <img
        src={whatsappButton.url}
        alt="Falar no WhatsApp"
        width={64}
        height={64}
        className="w-14 h-14 rounded-full object-contain drop-shadow-lg sm:w-16 sm:h-16"
        loading="eager"
      />
    </a>
  );
}
