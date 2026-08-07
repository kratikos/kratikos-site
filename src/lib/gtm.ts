import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Utilitário seguro para disparar eventos para o Google Tag Manager (dataLayer)
 * @param eventName Nome do evento (ex: 'click_cta_download', 'generate_lead')
 * @param payload Parâmetros adicionais para o dataLayer
 */
export function trackEvent(
	eventName: string,
	payload?: Record<string, unknown>,
) {
	if (typeof window === "undefined") return;

	try {
		sendGTMEvent({
			event: eventName,
			...payload,
		});
	} catch (error) {
		console.warn("[GTM] Falha ao disparar evento:", error);
	}
}
