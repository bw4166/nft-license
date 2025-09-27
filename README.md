# @johnwayne/nft-license

Professional NFT licensing terms package for JohnWayne (B. John Werler) digital assets. Provides standardized licensing for 3D models, rigged characters, and game-ready assets.

## Why This Package?

- ✅ **Legal Clarity**: Clear terms for both creators and buyers
- ✅ **Automated Generation**: Programmatic license text creation
- ✅ **Dual Licensing**: Non-commercial and commercial options
- ✅ **Game-Ready**: Specifically designed for 3D/gaming NFTs
- ✅ **Copyright Protection**: Maintains creator rights

## Installation

```bash
npm install git+https://github.com/bw4166/nft-license.git
```

Or for development:
```bash
git clone https://github.com/bw4166/nft-license.git
cd nft-license
npm install
```t-license

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

## Use Cases

This package is perfect for:
- **NFT Marketplaces**: Standardized licensing for 3D assets
- **Game Developers**: Clear terms for using purchased NFT models
- **3D Artists**: Professional licensing framework
- **Legal Compliance**: Automated license generation

## Integration Examples

### In NFT Metadata
```json
{
  "name": "JohnWayne Character #001",
  "external_url": "https://github.com/bw4166/nft-license",
  "license": "https://raw.githubusercontent.com/bw4166/nft-license/main/licenses/STANDARD-LICENSE.md"
}
```

### In Smart Contracts
Reference the license URLs in your NFT contract metadata for automatic compliance.

## Contributing

Issues and pull requests welcome for improving the licensing terms or API.

## License

MIT License for the package code. See LICENSE file.

**Note**: The NFT licensing terms themselves (in `/licenses/`) are separate legal documents.