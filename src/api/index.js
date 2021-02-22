import config from '../configs';
import queryString from 'query-string';

/**
 *
 * @param {object} [options]
 * @param {number} [options.page]
 * @param {number} [options.results]
 * @param {string} [options.format]
 * @return {Promise<*>}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: 'json',
    results: config.DEFAULT_AMOUNT,
    seed: config.API_KEY,
    inc: config.DEFAULT_USER,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma' });

  return fetch(`${config.BASE_URL}/?${query}`).then(res => res.json());
};

/* 
const params = {foo: "hi there", bar: "100%", prop:['test','test2'] };

*/
