/*
	@Author: Kristinita
	@Date: 2025-05-15 08:22:30
	@Last Modified by: SashaChernykh
	@Last Modified time: 2025-05-17 12:07:21
*/
export default {

	// "output": "messages/{{newVersion}}.txt",

	/* [OPTION] Allowed types in commits

	[LEARN][GIT][COMMITS] Commit structure:
	https://www.conventionalcommits.org

	[COMMIT][INFO] Default types in Changelogen:
	https://github.com/unjs/changelogen/blob/fb9e8b2b21b8f2b27f260897b37b59158518d20e/src/config.ts#L41-L54
	User doesn’t need adding these default types to the configuration file,
	Changelogen automatically adds these types to releases.


	[COMMIT][INFO] I use default and personal types defined in the file “.commitlintrc.yaml”.

	[NOTE][REQUIRED] Double addition types to Changelogen and Commitlint configurations.
	Changelogen and Commitlint not integrated.
	Don’t forget adding types to the file “.commitlintrc.yaml” after adding them to this configuration!


	[EMOJI][INFO] EmojiDB — emoji auto-selection service.
	Enter a query for getting possible emojis for this query:
	https://emojidb.org/ */
	"types": {

		"debug": {
			"title": "🪲 Debugging"
		},

		"del": {
			"title": "🧹 Deletions"
		},

		"deploy": {
			"title": "📢 Deployment"
		},

		"init": {
			"title": "🆕 Initialization of the project"
		},

		"lint": {
			"title": "🔎 Linting"
		},

		"migrate": {
			"title": "🛶 Migration between tools"
		},

		// [INFO] Default Commitlint type, but not default Changelogen type
		"revert": {
			"title": "↩️ Undo changes"
		},

		"sec": {
			"title": "🛡 Security"
		},

		"upd": {
			"title": "⏫ Updatings"
		},

		"vcs": {
			"title": "🔀 VCS changes"
		}

	}

}
