import type { Model } from "@earendil-works/pi-ai";

/**
 * Models that require special access or subscription tier.
 * Users should be informed when selecting these models.
 */
const RESTRICTED_MODELS = new Set([
	"glm-5.2",      // Sarvam open-weight, requires access
	"gemma-4",      // Sarvam open-weight, requires access
]);

export function isRestrictedModel(model: Model): boolean {
	return RESTRICTED_MODELS.has(model.id);
}

export function getRestrictedModelWarning(model: Model): string | undefined {
	if (!isRestrictedModel(model)) {
		return undefined;
	}

	switch (model.id) {
		case "glm-5.2":
			return `⚠️  ${model.name}\nThis model requires special access from Sarvam AI.\nRequest access at: https://docs.sarvam.ai/api-reference/models`;
		case "gemma-4":
			return `⚠️  ${model.name}\nThis model requires special access from Sarvam AI.\nRequest access at: https://docs.sarvam.ai/api-reference/models`;
		default:
			return `⚠️  ${model.name}\nThis model may not be available to all users.`;
	}
}
