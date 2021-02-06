class AlyxJSError extends Error {
	constructor(message) {
		super(message);
		this.name = "AlyxJS Error";
		this.error = "AlyxxJS Error";
	}
}

class RateLimitException extends AlyxJSError {
	constructor(message) {
	super(message);
	this.name = "RateLimitException";
	this.error = "RatelimitedException";
 }
}

class DiscordForbidden extends AlyxJSError {
	constructor(message) {
		super(message);
		this.name = "DiscordForbidden";
		this.error = "Forbidden";
	}
}

class NotFound extends AlyxJSError {
	constructor(message) {
		super(message);
		this.name = "NotFound";
		this.error = "NotFound";
	}
}

module.exports.RateLimitException = RateLimitException;
module.exports.NotFound = NotFound;
module.exports.DiscordForbidden = DiscordForbidden;
