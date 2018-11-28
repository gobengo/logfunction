/**
 * Logging tools.
 */

export default logfunction

type LogLevel = "silly" | "debug" | "info" | "warn" | "error";
type LoggableThing = object | string | undefined;

// Log a log message at a certain logLevel
export const log = (level: LogLevel, ...args: LoggableThing[]): void => {
	// tslint:disable:no-console
	switch (level) {
		case "silly":
			break;
		case "debug":
			const [firstArg, ...restArgs] = args.map(
				arg => (typeof arg === "string" ? arg : JSON.stringify(arg, null, 2)),
			);
			debuglog(firstArg, ...restArgs);
			break;
		case "info":
			console.info(...args);
			break;
		case "warn":
			console.warn(...args);
			break;
		case "error":
			console.error(...args);
			break;
	}
	// tslint:enable:no-console
};

function debuglog(...strs: string[]) {
  console.debug(strs)
}

function logfunction(level: LogLevel, ...args: LoggableThing[]) {
	log(level, ...args)
}
