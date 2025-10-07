# Security Policy

## Overview

This repository contains SaberGuard's public-facing Trust Center, which provides transparency into our security and compliance program. This is a **static website** with no backend infrastructure, databases, or user authentication.

## Scope

**What this repository contains:**
- Static HTML/CSS/JavaScript files
- Public security posture information
- Self-attested compliance documentation
- No sensitive data, credentials, or PHI/ePHI

**What this repository does NOT contain:**
- Customer data or protected health information (PHI)
- Internal security documentation
- Credentials, API keys, or secrets
- Proprietary security tools or configurations

## Reporting Security Issues

If you discover a security vulnerability in this Trust Center website, please report it responsibly:

### For Security Researchers

**DO NOT** open a public GitHub issue for security vulnerabilities.

Instead, please email: **security@saberguard.tech**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested remediation (if applicable)

### Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 5 business days
- **Resolution Target:** Based on severity (Critical: 7 days, High: 14 days, Medium: 30 days)

## Security Considerations for Deployment

### GitHub Pages Deployment

This site is designed for GitHub Pages hosting with the following security considerations:

1. **HTTPS Only** - GitHub Pages enforces HTTPS by default
2. **No Server-Side Code** - Pure static site, no server vulnerabilities
3. **No Data Collection** - No cookies, tracking, or user data storage
4. **CDN Security** - Tailwind CSS loaded from official CDN only

### Content Security

- All content is version-controlled
- Changes require commit history
- No user-generated content accepted
- No file uploads or form submissions

### Third-Party Dependencies

**Current Dependencies:**
- Tailwind CSS (via CDN: `https://cdn.tailwindcss.com`)

**Security Measures:**
- CDN uses HTTPS
- No npm packages or build dependencies
- No client-side data processing of sensitive information

## Compliance & Attestations

This Trust Center represents SaberGuard's **self-attested** security program. We have not undergone third-party certification unless explicitly stated.

For detailed security documentation, penetration test results, or compliance evidence:
- Requires executed NDA and/or BAA
- Contact: security@saberguard.tech

## Data Privacy

**This website does NOT:**
- Collect personal information
- Use cookies or tracking
- Store user data
- Require authentication
- Process forms or submissions

**User Privacy:**
- No analytics or tracking scripts
- No third-party advertising
- Theme preference stored in browser localStorage only (optional)

## Responsible Disclosure Recognition

We appreciate security researchers who report vulnerabilities responsibly. While we don't currently offer a bug bounty program, we will:

- Acknowledge your contribution (with permission)
- Provide updates on remediation progress
- Credit you in our security acknowledgments (if desired)

## Security Updates

This repository is actively maintained. Security updates will be:
- Applied promptly upon discovery
- Documented in commit messages
- Announced if user action is required

## Contact

**Security Team:** security@saberguard.tech  
**General Inquiries:** info@saberguard.tech

---

*Last Updated: January 2025*  
*Version: 1.0*
