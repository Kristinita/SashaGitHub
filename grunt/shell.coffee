module.exports =

	"release-it":
		command: "npx release-it <%= templates.git.releaseItReleaseType %>
					--ci --<%= templates.amazingGraceConfig.REMOTE_REPOSITORY_HOSTING %>.release
					--<%= templates.amazingGraceConfig.REMOTE_REPOSITORY_HOSTING %>.tokenRef TOKEN_FOR_RELEASE_IT"

		options:
			execOptions:
				env:
					TOKEN_FOR_RELEASE_IT: "<%= templates.dotenvx.encryptedTokenForReleaseIt %>"
			preferLocal: false
