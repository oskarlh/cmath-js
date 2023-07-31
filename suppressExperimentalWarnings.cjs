"use strict";

// This is a bit of a hack. It suppresses Node's warnings about experimental features.
// Use it like this: node --require=./NAME-OF-THIS-FILE-HERE example.js

const { emitWarning } = process;
process.emitWarning = (warning, ...args) => {
	if (args[0] !== "ExperimentalWarning" && (typeof args[0] !== "object" || args[0].type !== "ExperimentalWarning")) {
		return emitWarning(warning, ...args);
	}
};
