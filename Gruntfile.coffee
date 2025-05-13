module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	kiraDotenvxObject.config
		path: [
			".env.credentials"
		]
		strict: true

	kiraTokenForReleaseIt = kiraDotenvxObject.get "TOKEN_FOR_RELEASE_IT"

	grunt.loadNpmTasks "grunt-shell"

	grunt.initConfig

		shell:
			"gh-pages":
				command: "npx gh-pages --branch KiraBranchForDeployment --dist KiraFolderForDeployment --dotfiles
							--message \"Deployed from AppVeyor CI\"
							--nojekyll --repo
							https://Kristinita:<%= templates.tokens.kiraTokenForGhPages %>@gitlab.com\
							/Kristinita/KristinitaDebugging.gitlab.io
							--user \"Kristinita <806166-Kristinita@users.noreply.gitlab.com>\""

			"release-it":
				command: "npx release-it <%= templates.git.releaseItReleaseType %>
							--ci --<%= templates.services.kiraRemoteHosting %>.release
							--<%= templates.services.kiraRemoteHosting %>.tokenRef TOKEN_FOR_RELEASE_IT"
				options:
					execOptions:
						env:
							TOKEN_FOR_RELEASE_IT: kiraTokenForReleaseIt
					preferLocal: false

		templates:

			git:
				releaseItReleaseType: grunt.option("ReleaseType")

			services:
				kiraRemoteHosting: "github"

			tokens:
				kiraTokenForGhPages: kiraDotenvxObject.get "TOKEN_FOR_GH_PAGES"
