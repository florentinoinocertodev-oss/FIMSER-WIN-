/**
 * socketService
 * Small service shim to centralize socket creation for future extension (reconnect policies, logging, metrics).
 * Currently re-exports the existing network service implementation.
 */

import { createNetworkService } from "../network/networkService.js";

export function createSocketService(opts) {
  return createNetworkService(opts);
}