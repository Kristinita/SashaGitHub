###
@Author: SashaChernykh
@Date: 2025-05-14 10:04:57
@Last Modified by: SashaChernykh
@Last Modified time: 2025-05-14 10:19:55
###
module.exports = (grunt) ->

	kiraDotenvxObject = require "@dotenvx/dotenvx"

	kiraDotenvxObject.config

		path: [
			".env"
			".env.credentials"
		]

		strict: true

	amazingGraceConfig: grunt.file.readYAML("amazing_grace_your_variables.yaml")

	dotenvx:
		encryptedTokenForReleaseIt: kiraDotenvxObject.get "TOKEN_FOR_RELEASE_IT"

	git:
		releaseItReleaseType: grunt.option("ReleaseType")
