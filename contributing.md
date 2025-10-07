# Contributing to SaberGuard Trust Center

Thank you for your interest in improving our Trust Center! This document provides guidelines for contributing.

## 🎯 Project Purpose

This Trust Center serves as a **public transparency portal** for SaberGuard's security and compliance program. It's designed to help potential clients, auditors, and partners understand our security posture.

## 🤝 How to Contribute

### Reporting Issues

**Security Vulnerabilities:** See [SECURITY.md](SECURITY.md)

**Bugs or Improvements:**
1. Check existing issues first
2. Open a new issue with:
   - Clear description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Browser/device information

### Suggesting Enhancements

We welcome suggestions for:
- Improved accessibility
- Better mobile responsiveness
- Enhanced print formatting
- Additional compliance frameworks
- UI/UX improvements

**Please note:** Content changes (security controls, certifications, etc.) are managed internally and require verification.

## 🔧 Development Guidelines

### Code Style

**HTML:**
- Semantic HTML5 elements
- Proper ARIA labels for accessibility
- Mobile-first responsive design

**CSS:**
- Tailwind CSS utility classes
- Dark mode support required
- Print-friendly styles

**JavaScript:**
- Vanilla JS (no frameworks)
- ES6+ syntax
- Minimal dependencies
- Browser compatibility: Modern browsers (last 2 versions)

### Testing Checklist

Before submitting a pull request:

- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Verify dark mode works
- [ ] Test print/PDF generation
- [ ] Check accessibility (WCAG 2.1 AA)
- [ ] Validate HTML
- [ ] No console errors

### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement-name`)
3. **Make** your changes
4. **Test** thoroughly (see checklist above)
5. **Commit** with clear messages
6. **Push** to your fork
7. **Submit** a pull request

**PR Description Should Include:**
- What changed and why
- Screenshots (for UI changes)
- Testing performed
- Any breaking changes

## 📋 Content Guidelines

### What We Accept

- Bug fixes
- Accessibility improvements
- Performance optimizations
- Documentation updates
- UI/UX enhancements

### What We Don't Accept

- Changes to security controls or certifications (internal only)
- Addition of tracking/analytics
- Third-party dependencies without justification
- Breaking changes without discussion

## 🎨 Design Principles

1. **Transparency First** - Clear, honest communication
2. **Accessibility** - WCAG 2.1 AA compliance minimum
3. **Performance** - Fast load times, minimal dependencies
4. **Privacy** - No tracking, no cookies, no data collection
5. **Simplicity** - Clean, professional design

## 📝 Commit Message Format

```
type: brief description

Detailed explanation of what changed and why.

Fixes #issue-number (if applicable)
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

## 🏆 Recognition

Contributors will be acknowledged in:
- GitHub contributors list
- Release notes (for significant contributions)

## ❓ Questions?

- **Technical Questions:** Open an issue
- **Security Questions:** security@saberguard.tech
- **General Inquiries:** info@saberguard.tech

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make our Trust Center better! 🛡️
