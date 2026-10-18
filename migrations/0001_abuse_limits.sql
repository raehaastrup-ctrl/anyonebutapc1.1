CREATE TABLE IF NOT EXISTS abuse_limits (
 id TEXT PRIMARY KEY, count INTEGER NOT NULL, expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS abuse_limits_expiry ON abuse_limits(expires_at);
