const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["academiesofloudoun.jpg","byu.jpg","clock.jpg","covid19.webp","cyborg.png","davidBorn.jpg","davidCoolness.jpg","davidElementary.jpg","daviduniversity.jpg","immortality.jpg","jacobBorn.png","kitties.jpg","momBorn.jpg","momHighschool.jpg","rachelBorn.jpg","resistance.jpg","riots.jpg","robots.txt","sarahBorn.png","shadowgovernment.jpg","smartsmill.png","styles.css","temple.jpg","timetravel.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.e0d57b3f.js","app":"_app/immutable/entry/app.f533efbe.js","imports":["_app/immutable/entry/start.e0d57b3f.js","_app/immutable/chunks/index.61146136.js","_app/immutable/chunks/singletons.080c0fc6.js","_app/immutable/entry/app.f533efbe.js","_app/immutable/chunks/index.61146136.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-cbf0ea3e.js'),
			() => import('./chunks/1-6189e3b8.js'),
			() => import('./chunks/2-1dffbc17.js'),
			() => import('./chunks/3-5e31a6ed.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/future",
				pattern: /^\/future\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
