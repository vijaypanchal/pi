import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { SARVAM_MODELS } from "./sarvam.models.ts";

export function sarvamProvider(): Provider<"openai-completions"> {
	return createProvider({
		id: "sarvam",
		name: "Sarvam AI",
		baseUrl: "https://api.sarvam.ai/v1",
		auth: { apiKey: envApiKeyAuth("Sarvam API key", ["SARVAM_API_KEY"]) },
		models: Object.values(SARVAM_MODELS),
		api: openAICompletionsApi(),
	});
}
