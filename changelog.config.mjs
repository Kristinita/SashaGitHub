/*
	@Author: Kristinita
	@Date: 2025-05-15 08:22:30
	@Last Modified by: Kristinita
	@Last Modified time: 2025-05-17 17:50:06
*/
/* ############
# Changelogen #
###############
[OVERVIEW] Changelogen — a CLI tool for generating a changelog, releases and bumping project versions:
https://github.com/unjs/changelogen

[WRAPPER] release-it-changelogen — Changelogen wrapper for Release It:
https://github.com/jcamp-code/release-it-changelogen

[WRAPPER][INFO] I use Release It wrapper instead of using Changelogen directly because:
1. Changelogen doesn’t support GitLab releases.
2. Changelogen haven’t the setting “hooks”, allowing to run custom commands.
3. Release It is more customizable than Changelogen.


[OPTIONS][CLI][CONFIGURATION]
https://github.com/unjs/changelogen#cli-usage

[CONFIGURATION]
https://github.com/unjs/changelogen#configuration

[CONFIGURATION][NOTE] Changelogen doesn’t support simple configuration formats like YAML and TOML.
Therefore, I use “.mjs” format:
https://github.com/unjs/changelogen/issues/276


[COMPARISON] I prefer Changelogen to generate-changelog because:
1. Developers doesn’t update generate-changelog since 2021:
https://github.com/lob/generate-changelog/commits/master/
2. generate-changelog doesn’t support configuration files:
https://github.com/lob/generate-changelog/pull/56

[COMPARISON] I prefer Changelogen to conventional-changelog and keep-a-changelog because
conventional-changelog and keep-a-changelog doesn’t group commits with same types:
https://github.com/release-it/conventional-changelog/releases/
https://github.com/release-it/keep-a-changelog/releases


[ALTERNATIVE][TRY] Changesets:
https://github.com/changesets/changesets
https://github.com/changesets/changesets/releases
https://github.com/abeforgit/changesets-release-it-plugin

[ALTERNATIVE][TRY] Lerna-changelog:
https://github.com/lerna/lerna-changelog
https://github.com/lerna/lerna-changelog/releases
https://github.com/release-it-plugins/lerna-changelog

[ALTERNATIVE][TRY] news-fragments:
https://github.com/gbtech-oss/news-fragments
https://github.com/gbtech-oss/news-fragments/releases



[FIXME][NOTE][SUBLIME] I don’t understand, how I can append changelog to multiple files.
I need it, when I create releases of Sublime Text packages.
Maintainers of Sublime Text packages should append a changelog to the beginning of the file “CHANGELOG.md”
and add a changelog to the file “messages/${version}”:
https://github.com/unjs/changelogen/issues/277
https://github.com/jcamp-code/release-it-changelogen/issues/22

If developers of Changelogen and/or release-it-changelogen will ignore or close my issues, I will need:
1. Think how I can append a changelog to both files. Possibly, a temporary file will be required.
2. Return to generate-changelog
3. Migration to Changesets, Lerna-changelog or news-fragments.


[NOTE] Changelogen generates non-valid changelog, which also may be inconsistent with another
Markdown files of a codebase.
Users need ignoring the file “CHANGELOG.md” in settings of Markdown linters or manually editing it:
https://github.com/unjs/changelogen/issues/279

[FIXME][ISSUE][NOTE] Changelogen groups commits solely by types.
It would be nice if it will group commits by scopes too. */
export default {

	/* [OPTION] Allowed types in commits.

	[LEARN][GIT][COMMITS] Commit structure:
	https://www.conventionalcommits.org

	[COMMIT][INFO] Default types in Changelogen:
	https://github.com/unjs/changelogen/blob/fb9e8b2b21b8f2b27f260897b37b59158518d20e/src/config.ts#L41-L54
	User doesn’t need adding these default types to the configuration file,
	Changelogen automatically adds these types to releases.


	[COMMITS][INFO] I use default and personal types defined in the file “.commitlintrc.yaml”.

	[NOTE][REQUIRED] Double addition of types to Changelogen and Commitlint configurations.
	Changelogen and Commitlint aren’t integrated.
	Don’t forget adding types to the file “.commitlintrc.yaml” after adding them to this configuration!


	[EMOJI][INFO] EmojiDB — a service for auto-selection emojis.
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
			"title": "⏫ Updates"
		},

		"vcs": {
			"title": "🔀 VCS changes"
		}

	}

}
