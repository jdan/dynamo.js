.PHONY:

test: .PHONY
	@./node_modules/.bin/jshint dynamo.js
	@echo "\nThanks for testing! ~jordan\n"

build: .PHONY
	@./node_modules/.bin/uglifyjs dynamo.js > dynamo.min.js
	@echo "New dynamo.min.js build on `date +%F\ %I:%M%p` :rocket:\n\ndelete me!" > .commit.template
	@git add dynamo.min.js
	@git commit -t .commit.template
	@rm .commit.template
