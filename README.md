# @johnwayne/nft-license

NFT licensing terms package for JohnWayne (B. John Werler) digital assets.

## Installation

```bash
npm install @johnwayne/nft-license
```

Or install directly from Git:

```bash
npm install git+https://github.com/yourusername/nft-license.git
```

## Usage

```javascript
const nftLicense = require('@johnwayne/nft-license');

// Get standard license terms
const standardLicense = nftLicense.getStandardLicense();

// Get commercial license terms
const commercialLicense = nftLicense.getCommercialLicense();

// Generate license text for display
const licenseText = nftLicense.generateLicenseText('standard', {
  assetName: 'JohnWayne Character #001',
  purchaseDate: '2025-09-26'
});

console.log(licenseText);
```

## License Types

### Standard License (Non-Commercial)
- Personal use in games and virtual worlds
- Trading and display rights
- No commercial use without permission

### Commercial License
- All standard rights plus commercial usage
- Marketing and promotional use
- Monetized content creation
- Requires separate agreement

## API

### `getStandardLicense()`
Returns the standard non-commercial license terms object.

### `getCommercialLicense()`
Returns the commercial license terms object.

### `getLicense(type)`
- `type` (string): 'standard' or 'commercial'
Returns the specified license terms object.

### `generateLicenseText(type, options)`
- `type` (string): License type ('standard' or 'commercial')
- `options` (object): Optional parameters
  - `assetName`: Name of the NFT asset
  - `purchaseDate`: Date of purchase
  - `licensee`: Name of licensee (commercial only)
  - `validUntil`: Expiration date (commercial only)

Returns formatted license text as a string.

## Files Included

- `licenses/STANDARD-LICENSE.md` - Standard license template
- `licenses/COMMERCIAL-LICENSE.md` - Commercial license template
- `lib/licenses.js` - License definitions and generators

## Creator

**JohnWayne (B. John Werler)**

All digital assets and licensing terms are protected by copyright law.

## Repository

Update the repository URLs in `package.json` to match your actual Git repository.

## License

SEE LICENSE IN LICENSE file.