# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js: the `EADDRINUSE` error, which occurs when your server attempts to bind to a port that's already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` presents a solution.

## Setup

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to observe the error.
4. Run `node bugSolution.js` to see how to handle this gracefully.

## Problem

The `bug.js` file contains a simple HTTP server that tries to listen on port 8080.  If another process is already using this port (e.g., another Node.js server, or another application), the server will fail and throw an `EADDRINUSE` error.

## Solution

The `bugSolution.js` shows how to handle this gracefully.  We attempt to listen on the port; if it fails, we wait for a short period and try again, up to a specified number of retries. This approach is more robust for production environments.