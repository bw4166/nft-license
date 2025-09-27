/**
 * NFT License Terms for JohnWayne (B. John Werler) Digital Assets
 * @module nft-license
 */

const licenses = require('./lib/licenses');

module.exports = {
  /**
   * Get the standard NFT license terms
   * @returns {Object} License terms object
   */
  getStandardLicense: () => licenses.standard,
  
  /**
   * Get commercial license terms
   * @returns {Object} Commercial license terms object
   */
  getCommercialLicense: () => licenses.commercial,
  
  /**
   * Get license by type
   * @param {string} type - License type ('standard' or 'commercial')
   * @returns {Object} License terms object
   */
  getLicense: (type) => licenses[type] || licenses.standard,
  
  /**
   * Generate license text for display
   * @param {string} type - License type
   * @param {Object} options - Additional options (assetName, purchaseDate, etc.)
   * @returns {string} Formatted license text
   */
  generateLicenseText: (type = 'standard', options = {}) => {
    const license = licenses[type] || licenses.standard;
    return license.generateText(options);
  }
};