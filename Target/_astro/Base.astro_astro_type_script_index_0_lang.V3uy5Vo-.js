const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	g = function (d, i, E) {
		let a = Promise.resolve();
		if (i && i.length > 0) {
			document.getElementsByTagName("link");
			const n = document.querySelector("meta[property=csp-nonce]"),
				e = n?.nonce || n?.getAttribute("nonce");
			a = Promise.allSettled(
				i.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const s = t.endsWith(".css"),
						u = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${u}`)) return;
					const r = document.createElement("link");
					if (
						((r.rel = s ? "stylesheet" : f),
						s || (r.as = "script"),
						(r.crossOrigin = ""),
						(r.href = t),
						e && r.setAttribute("nonce", e),
						document.head.appendChild(r),
						s)
					)
						return new Promise((m, p) => {
							r.addEventListener("load", m),
								r.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(n) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = n), window.dispatchEvent(e), !e.defaultPrevented))
				throw n;
		}
		return a.then((n) => {
			for (const e of n || []) e.status === "rejected" && c(e.reason);
			return d().catch(c);
		});
	};
(
	await g(async () => {
		const { initializeApp: o } = await import("./index.esm.D9h2tUuG.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyA2-PGZUDCvuMP-et1ajAWb2r6QXY4WGl4",
	authDomain: "grenadierjs.firebaseapp.com",
	databaseURL: "https://grenadierjs.firebaseio.com",
	projectId: "grenadierjs",
	storageBucket: "grenadierjs.appspot.com",
	messagingSenderId: "16903102826",
	appId: "1:16903102826:web:f85c7fd237548c3edf4513",
	measurementId: "G-EQHF084T2N",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.V3uy5Vo-.js.map
