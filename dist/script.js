var toggleEl = document.getElementsByTagName("input")[0];

function handle(isDark) {
	document.documentElement.className = isDark
		? "uk-background-secondary uk-light"
		: "uk-background-muted";
}

toggleEl.addEventListener("change", function (event) {
	handle(event.target.checked);
});

handle(toggleEl.checked);