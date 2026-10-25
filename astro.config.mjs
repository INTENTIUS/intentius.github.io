// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// intentius.io itself, at the root of the domain. The tool sites (terragucci,
// choudoufu, chant, ...) are served beside it under their own paths from
// their own repositories.
export default defineConfig({
	site: 'https://intentius.io',
	// The control planes page became the terragucci, HCP Terraform and Spacelift arenas.
	redirects: {
		'/compare/control-planes/': '/compare/terraform-platforms/',
		// chant, CDK and Pulumi is argued on the blog and in chant's docs.
		'/compare/chant-cdk-and-pulumi/': 'https://intentius.io/chant/',
		// The Accessible Ops scorecard is retired; the spec lives on its own site.
		'/accessible-ops/': 'https://accessibleops.net/',
	},
	integrations: [
		starlight({
			title: 'Intentius',
			description: 'Intentius is an infrastructure consultancy. I build behold, chant, choudoufu and terragucci, and help teams put them to work.',
			// The pixel eye and the brain (scripts/brand/), Geist, and the palette
			// as tokens for both themes.
			customCss: ['./src/styles/intentius.css'],
			// The site title and footer carry the logo, the header a Contact link,
			// each page title its one-line description, and the theme starts dark.
			components: {
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			// public/favicon.svg is the brain mark, drawn by scripts/brand/mark.py;
			// the PNG is the fallback for browsers without SVG favicons.
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/intentius' }],
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon-48.png', sizes: '48x48', type: 'image/png' } },
				// The preview card for links to any page; the comparison sets its own.
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://intentius.io/og.png' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://intentius.io/og.png' } },
				{
					tag: 'script',
					content: `
						!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
						posthog.init('phc_mjyjBEHnta5mh6ZHhkY2kh83XBsqUfP7LVnB83mEEtwM', {
							api_host: 'https://us.i.posthog.com',
							defaults: '2026-05-30',
						})
					`,
				},
			],
			// Every group starts collapsed; Starlight opens the one holding the
			// current page. "Help me" lists the pages under /for/
			// (src/pages/for/[id].astro) in the order of src/data/rooms.mjs;
			// scripts/check-rooms.mjs fails the build when the two disagree, and it
			// reads this list as plain text, so keep it literal.
			sidebar: [
				{
					label: 'Help me',
					collapsed: true,
					items: [
						{ label: 'Carve up a large estate', link: '/for/estate/' },
						{ label: 'Move off another runner', link: '/for/moving/' },
						{ label: 'Roll out terragucci', link: '/for/rollout/' },
						{ label: 'Run agents on real infrastructure', link: '/for/agents/' },
						{ label: 'Generate deploys and pipelines', link: '/for/releases/' },
					],
				},
				'work',
				{
					label: 'Open source',
					collapsed: true,
					items: [
						'tools',
						{ label: 'behold', link: 'https://intentius.io/behold/' },
						{ label: 'chant', link: 'https://intentius.io/chant/' },
						{ label: 'choudoufu', link: 'https://intentius.io/choudoufu/' },
						{ label: 'terragucci', link: 'https://intentius.io/terragucci/' },
					],
				},
				{
					label: 'Compare',
					collapsed: true,
					items: ['compare', 'compare/terraform-platforms', 'compare/choudoufu-and-terraform-state'],
				},
				{
					label: 'About',
					collapsed: true,
					items: ['about', 'writing', 'contact'],
				},
			],
		}),
	],
});
