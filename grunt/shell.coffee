module.exports =

	"release-it":
		command: "npx release-it --ci
					--<%= templates.amazingGraceConfig.REMOTE_REPOSITORY_HOSTING %>.release
					--<%= templates.amazingGraceConfig.REMOTE_REPOSITORY_HOSTING %>.tokenRef TOKEN_FOR_RELEASE_IT
					--increment=<%= templates.git.releaseItReleaseType %>"

		options:
			execOptions:
				env:
					TOKEN_FOR_RELEASE_IT: "<%= templates.dotenvx.encryptedTokenForReleaseIt %>"
			preferLocal: false
