/**
 * License definitions for JohnWayne (B. John Werler) NFT assets
 */

const standard = {
  title: "NFT Standard License Agreement",
  creator: "JohnWayne (B. John Werler)",
  
  rights: [
    "Trade, sell, or transfer the NFT",
    "Use the rigged character model in personal gaming platforms and applications",
    "Display the digital asset in virtual worlds, games, and metaverse platforms",
    "Create derivative works for personal, non-commercial use"
  ],
  
  restrictions: [
    "Use the asset for commercial purposes without explicit written permission",
    "Modify, alter, or edit the original 3D model or rigging",
    "Claim ownership of the underlying intellectual property",
    "Remove or alter copyright notices or attribution",
    "Create commercial derivatives or sell modified versions"
  ],
  
  reservedRights: [
    "Full copyright ownership of the original digital asset",
    "Exclusive rights to modify, update, or alter the model",
    "Creative control over the character design and associated IP",
    "Commercial licensing rights - all commercial use requires separate agreement",
    "Right to revoke license for violations of these terms"
  ],
  
  attribution: "Character by JohnWayne (B. John Werler)",
  
  generateText: function(options = {}) {
    const { assetName = "Digital Asset", purchaseDate = new Date().toLocaleDateString() } = options;
    
    return `
# ${this.title} for "${assetName}"

**Creator:** ${this.creator}
**Purchase Date:** ${purchaseDate}

## Grant of Rights
By purchasing this NFT, you are granted a **non-exclusive, non-commercial license** to:

${this.rights.map(right => `- ${right}`).join('\n')}

## Restrictions
You **may NOT**:

${this.restrictions.map(restriction => `- ${restriction}`).join('\n')}

## Reserved Rights
The creator "${this.creator}" retains:

${this.reservedRights.map(right => `- **${right}**`).join('\n')}

## Attribution
When displaying or using the asset, you must include: "${this.attribution}"

## Commercial Licensing
For commercial use, contact the creator for separate licensing arrangements.

---
*This license is governed by applicable copyright and intellectual property laws.*
    `.trim();
  }
};

const commercial = {
  title: "NFT Commercial License Agreement",
  creator: "JohnWayne (B. John Werler)",
  
  rights: [
    "All rights granted in the standard license",
    "Commercial use of the digital asset",
    "Marketing and promotional use",
    "Monetized content creation",
    "Game development integration for profit"
  ],
  
  restrictions: [
    "Modify, alter, or edit the original 3D model or rigging without permission",
    "Claim ownership of the underlying intellectual property",
    "Remove or alter copyright notices or attribution",
    "Sublicense the commercial rights to third parties"
  ],
  
  reservedRights: [
    "Full copyright ownership of the original digital asset",
    "Exclusive rights to modify, update, or alter the model",
    "Creative control over the character design and associated IP",
    "Right to revoke license for violations of these terms"
  ],
  
  attribution: "Character by JohnWayne (B. John Werler)",
  
  generateText: function(options = {}) {
    const { 
      assetName = "Digital Asset", 
      purchaseDate = new Date().toLocaleDateString(),
      licensee = "[Licensee Name]",
      validUntil = "[Expiration Date]"
    } = options;
    
    return `
# ${this.title} for "${assetName}"

**Creator:** ${this.creator}
**Licensee:** ${licensee}
**Purchase Date:** ${purchaseDate}
**Valid Until:** ${validUntil}

## Grant of Commercial Rights
This commercial license grants you the right to:

${this.rights.map(right => `- ${right}`).join('\n')}

## Restrictions
Even with commercial rights, you **may NOT**:

${this.restrictions.map(restriction => `- ${restriction}`).join('\n')}

## Reserved Rights
The creator "${this.creator}" retains:

${this.reservedRights.map(right => `- **${right}**`).join('\n')}

## Attribution
Commercial use requires prominent attribution: "${this.attribution}"

## Terms
This commercial license is valid for the specified period and may be renewed by mutual agreement.

---
*This license is governed by applicable copyright and intellectual property laws.*
    `.trim();
  }
};

module.exports = {
  standard,
  commercial
};