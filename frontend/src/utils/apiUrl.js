import Config from '../config';

/**
 * Creates a properly formatted API URL by removing trailing slashes
 * @param {string} endpoint - The API endpoint (e.g., '/api/login')
 * @returns {string} - The complete API URL
 */
export const createApiUrl = (endpoint) => {
  const baseUrl = (Config.url || '').replace(/\/$/, ''); // Remove trailing slash from base URL
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`; // Ensure endpoint starts with /
  return `${baseUrl}${cleanEndpoint}`;
};

export default createApiUrl;