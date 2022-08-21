'use strict';
/**
 * Module dependencies.
*/

import app from '../app';
import * as http from 'http';

interface ErrnoException extends Error {
  errno?: number
  code?: string
  path?: string
  syscall?: string
  stack?: string
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening (): void {
  const addr = server.address();
  if (addr != null) {
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log('Listening on ' + bind);
  }
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError (error: ErrnoException): void {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(bind + 'requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + 'is already in use')
      process.exit(1)
    default:
      throw error
  }
}
/**
 * Normalize a port into a number,string,or false.
 */

function normalizePort(val: any): number|string|boolean {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || 4747);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port,on all network interfaces.
 */

server.listen(port, onListening);
server.on('error', onError);
