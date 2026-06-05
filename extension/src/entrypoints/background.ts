export default defineBackground(() => {
	const ID = "ai-slop-detector";
	browser.runtime.onInstalled.addListener(() => {
		browser.contextMenus.create({
			id: ID,
			title: "Deteksi Gambar AI",
			contexts: ["image"],
		});
	});

	browser.contextMenus.onClicked.addListener(async (info, tab) => {
		if (info.menuItemId === ID && info.srcUrl && tab?.id) {
			browser.tabs.sendMessage(tab.id, { action: "show_loading" });
		}
	});
});
