const WHATSAPP_NUMBER = "5511974418038";
const WHATSAPP_MESSAGE = "Olá! Gostaria de um orçamento para rodízio de pizza.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.296.297-.495.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.57 9.57 0 0 0-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.086 6.443L12 21l-1.725-1.025A9.708 9.708 0 0 1 2.38 9.536c.003-5.461 4.418-9.889 9.884-9.891 5.452 0 9.887 4.434 9.889 9.884a9.86 9.86 0 0 1-1.51 5.26L24 22l-1.607-3.978A9.88 9.88 0 0 0 21 9.529c-.003-5.448-4.428-9.881-9.88-9.881-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26L0 22l6.472-2.175Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-black-rich shadow-gold transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
