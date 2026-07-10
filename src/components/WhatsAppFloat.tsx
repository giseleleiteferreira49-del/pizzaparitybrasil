import { Phone } from "lucide-react";

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
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-black-rich shadow-gold transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_-10px_rgba(201,168,76,0.6)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
    >
      <Phone className="w-6 h-6 fill-current" strokeWidth={2.5} />
    </a>
  );
}
