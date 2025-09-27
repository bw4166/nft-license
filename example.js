const nftLicense = require('./index');

// Example usage
console.log('=== NFT License Package Example ===\n');

// Get standard license
console.log('1. Standard License Terms:');
const standard = nftLicense.getStandardLicense();
console.log(`Title: ${standard.title}`);
console.log(`Creator: ${standard.creator}`);
console.log(`Rights: ${standard.rights.length} items`);
console.log(`Restrictions: ${standard.restrictions.length} items\n`);

// Generate license text
console.log('2. Generated License Text:');
const licenseText = nftLicense.generateLicenseText('standard', {
  assetName: 'JohnWayne Character #001',
  purchaseDate: '2025-09-26'
});
console.log(licenseText + '\n');

// Commercial license example
console.log('3. Commercial License Available:');
const commercial = nftLicense.getCommercialLicense();
console.log(`Title: ${commercial.title}`);
console.log(`Additional Rights: ${commercial.rights.length} items\n`);

console.log('=== Package Ready for Publishing ===');