import { useNuxtApp } from 'nuxt/app'

export const useAnalytics = () => {
	const nuxtApp = useNuxtApp()

	const trackLinkEvent = (linkType, linkLocation, linkName, linkText) => {
		// Implementation
	}

	const trackCollapseEvent = (eventType, eventAction, eventCategory, eventLocation, eventName, eventText) => {
		// Implementation
	}

	return {
		trackLinkEvent,
		trackCollapseEvent
	}
}