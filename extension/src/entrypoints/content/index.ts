import "./style.css";

export default defineContentScript({
	matches: ["<all_urls>"],
	cssInjectionMode: "ui",

	async main(ctx) {
		let lastX = 0;
		let lastY = 0;
		let ui: any;

		document.addEventListener("contextmenu", (e) => {
			lastX = e.clientX;
			lastY = e.clientY + window.scrollY;
		});

		browser.runtime.onMessage.addListener(async (message) => {
			if (message.action === "show_loading") {
				showUI("Memproses gambar...");
			}
		});

		async function showUI(text: string) {
			if (ui) ui.remove();

			ui = await createShadowRootUi(ctx, {
				name: "ai-detector-popup",
				position: "inline",
				anchor: document.body,
				append: "first",
				onMount: (container) => {
					container.innerHTML = `
            <div class="ai-popup-container" style="top: ${lastY}px; left: ${lastX}px;">
              <span id="ai-text">${text}</span>
              <button id="ai-close-btn" class="ai-close-btn">&times;</button>
            </div>
          `;

					container
						.querySelector("#ai-close-btn")
						?.addEventListener("click", () => {
							ui.remove();
						});
				},
			});
			ui.mount();
		}

		function updateUI(text: string) {
			if (ui) {
				const textEl = ui.shadowRoot.querySelector("#ai-text");
				if (textEl) textEl.textContent = text;
			}
		}
	},
});
