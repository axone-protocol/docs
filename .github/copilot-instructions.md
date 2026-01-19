# Axone Protocol Documentation AI Agent Instructions

You are working in the Axone Protocol documentation repository.
Your role is to contribute to documentation authoring, support and extend the Docusaurus configuration and features, and maintain CI/CD workflows when explicitly requested.

The following guides provide the permanent knowledge and rules you must apply when working in this repository.

## 1. Documentation Authoring Guide

### Purpose

Document the **Axone Protocol** ecosystem, including its architecture, smart contracts, governance, APIs, and developer experience.  
Target audience: builders, developers, blockchain enthusiasts, and Web3 users interested in the knowledge economy and AI orchestration.

### Repository Structure Overview

- `docs/` → Main documentation content (editable)
- `static/` → Static assets (WebP, SVG, ICO files only)
- `src/` → React components, SCSS styling, theme overrides
- `modules/`, `predicates/`, `commands/`, `contracts/`, `ontology/` → Auto-generated content (DO NOT EDIT)
- `*_versioned_docs/` → Auto-generated versioned documentation (DO NOT EDIT)
- `docusaurus.config.js` → Main site configuration
- `sidebars.js` → Navigation structure

### Content Types and Locations

- **Getting Started**: `docs/getting-started/` → Onboarding content for new users
- **Architecture**: `docs/architecture/` → Technical specifications and system design
- **API Reference**: `docs/api-reference/` → REST APIs, RPC endpoints
- **Tutorials**: `docs/tutorials/` → Step-by-step guides and practical examples  
- **Node Operations**: `docs/nodes/` → Validator and node setup guides
- **Connectors**: `docs/connectors/` → Integration guides for external systems
- **Whitepaper**: `docs/whitepaper/` → Academic and theoretical documentation
- **FAQ**: `docs/faq/` → Frequently asked questions
- **Contributing**: `docs/contribute/` → Contribution guidelines

### Authoring Rules

- **Accuracy**: Always align content with the actual protocol implementation (code, smart contracts, APIs). Cross-reference with official Axone repositories.
- **Terminology**: Use precise Axone domain language consistently.
- **Style Guidelines**:  
  - Technical and rigorous for specifications, architecture, and contracts
  - Pedagogical and step-by-step for guides, onboarding, and tutorials
  - Use active voice and present tense
  - Write in clear, concise English
  - Include practical examples and code snippets
- **Markdown Standards**:
  - Use proper heading hierarchy (H1 for page title, H2-H6 for sections)
  - Include frontmatter with appropriate metadata
  - Use descriptive alt text for images
  - Prefer relative links for internal navigation
- **Content Enhancement**:
  - Include Mermaid diagrams for complex processes
  - Use Kroki for specialized diagrams (PlantUML, GraphViz, etc.)
  - Add KaTeX for mathematical expressions
  - Provide code examples in relevant languages
  - Cross-reference related documentation
- **Structure**: Organize content logically following the information architecture:
  1. Getting Started (onboarding)
  2. Tutorials (practical guides)  
  3. Architecture (technical specifications)
  4. API Reference (technical details)
  5. Node Operations (infrastructure)
  6. Whitepaper (theoretical foundation)

⚠️ **CRITICAL: Never edit auto-generated documentation files** (see excluded paths section).

## 2. Docusaurus Configuration & Features Guide

### Purpose

Maintain and extend the documentation platform (Docusaurus). Ensure the site remains navigable, consistent, feature-complete, and performant.

### Platform Architecture

- **Docusaurus**: Modern static site generator with React-based theming
- **Node.js**: Runtime environment (specified in package.json engines)
- **Yarn**: Package manager (frozen lockfile for reproducible builds)
- **Deployment**: Vercel hosting with GitHub Actions CI/CD

### Key Configuration Files

- `docusaurus.config.js` → Global site configuration, plugins, theme settings, navbar/footer
- `sidebars.js` → Auto-generated sidebar navigation for main docs
- `package.json` → Dependencies, scripts, Node.js/Yarn version constraints
- `vercel.json` → Deployment configuration for Vercel platform

### Enabled Features & Plugins

- **Search**: Local search via `@easyops-cn/docusaurus-search-local`
- **Diagrams**: Mermaid support via `@docusaurus/theme-mermaid` + Kroki via `remark-kroki`
- **Math**: KaTeX rendering via `rehype-katex` and `remark-math`
- **SCSS**: Custom styling via `docusaurus-plugin-sass`
- **Multi-docs**: Separate instances for contracts, ontology, predicates, modules, commands
- **Versioning**: Automated versioning for auto-generated content
- **Reading Time**: Custom MDX plugin for estimated reading times
- **Performance**: Experimental faster builds with SWC, Rspack, persistent cache

### Component & Styling Architecture

- `src/components/` → Reusable React components for documentation features
- `src/pages/` → Custom pages (landing page, etc.)
- `src/theme/` → Docusaurus theme overrides and customizations  
- `src/scss/` → SCSS stylesheets following BEM methodology
- `static/` → Static assets (images, favicons, external scripts)

### Configuration Management Rules

- **Multi-docs Setup**: Each content type (contracts, predicates, etc.) has its own plugin instance with dedicated routing
- **Plugin Configuration**: Always specify exact version constraints for reproducible builds
- **Performance**: Utilize experimental faster build options for improved CI/CD performance
- **SEO**: Maintain proper meta tags, structured data, and OpenGraph settings
- **Theme Customization**: Minimal overrides, prefer CSS custom properties over complex component swizzling
- **Static Assets**: Only use WebP, SVG, and ICO formats for images
- **Build Validation**: Every configuration change must pass `yarn build` successfully

### Development & Build Process Rules

- **Dependencies**: Use `yarn --frozen-lockfile`
- **Development**: Use `yarn start`
- **Production Build**: Use `yarn build`
- **Serving**: Use `yarn serve`
- **Search**: Search functionality requires production build (`yarn build` then `yarn serve`)  

## 3. CI/CD Workflows Guide

### Purpose

Ensure automation guarantees documentation quality, consistency, and reliable deployment.  
Modify or extend workflows **only when explicitly requested**.

### Rules

- Workflows in `.github/workflows/` (build, lint, capture-website, etc.) must remain functional.  
- All changes must pass:
  1. Successful build (`yarn build`)  
  2. Linting (`yarn lint`)  
  3. Link validation (internal/external)  
  4. Formatting and style checks  
  5. Web performance and accessibility audits  

### Notes

- Dependabot manages dependency updates → ensure compatibility.  
- Never hardcode dependency versions in documentation.  
- Workflow changes are only allowed if explicitly requested.  

### CI/CD Management Rules

- **Workflow Modifications**: Only when explicitly requested by users
- **Quality Gates**: All checks must pass before merge to main branch
- **Auto-fixes**: Utilize available auto-fix commands when appropriate
- **Node.js Version**: Locked to v20.20 across all workflows for consistency
- **Cache Strategy**: Yarn cache enabled for faster CI runs
- **Concurrency**: Group management to cancel in-progress runs on new commits  

## 4. Operational Rules & Development Workflow

### Pre-Change Requirements

Before making any changes, always:

1. `yarn --frozen-lockfile`
2. `yarn build` (must succeed)
3. `yarn lint` (must pass)

### Post-Change Validation

After making changes, always:

1. `yarn build` (must succeed)
2. `yarn lint` (must pass)
3. `yarn lint:fix` (if needed)
4. `yarn serve` (test production build)

### Development Commands

- **Local development**: `yarn start`
- **Production build**: `yarn build`
- **Production preview**: `yarn serve`
- **Clear cache**: `yarn clear`
- **Lint**: `yarn lint`
- **Auto-fix**: `yarn lint:fix`

### Critical Success Criteria

- ✅ Build succeeds without errors
- ✅ All linting checks pass
- ✅ No broken links
- ✅ Auto-generated content unmodified

### Error Resolution Strategy

1. **Build Errors**: Check `docusaurus.config.js` syntax and plugin compatibility
2. **Lint Errors**: Use `yarn lint:fix` for auto-fixable issues, manual fix for others
3. **Link Errors**: Verify file paths and external URL accessibility
4. **Performance Issues**: Optimize images, reduce bundle size, check plugin impact

---

## 5. Auto-Generated Content & Excluded Paths

### Critical Rule: DO NOT EDIT

The following directories contain auto-generated documentation that is managed by automated workflows. **Never modify these files directly**:

#### Version-Controlled Auto-Generated Content

- `modules/**/*.md` → Protocol module documentation
- `modules_versioned_docs/**/*.md` → Versioned module documentation
- `predicates/**/*.md` → Logic predicate documentation  
- `predicates_versioned_docs/**/*.md` → Versioned predicate documentation
- `commands/**/*.md` → CLI command documentation
- `commands_versioned_docs/**/*.md` → Versioned command documentation
- `contracts/**/*.md` → Smart contract documentation
- `contracts_versioned_docs/**/*.md` → Versioned contract documentation
- `ontology/**/*.md` → Ontology documentation
- `ontology_versioned_docs/**/*.md` → Versioned ontology documentation

#### Auto-Generated Configuration Files

- `*_versions.json` → Version tracking files
- `*_versioned_sidebars/` → Versioned navigation structures
- `i18n/` → Internationalization files (auto-managed)

### Identification Markers

Auto-generated files typically contain these identifying markers:

- `[//]: # (This file is auto-generated. Please do not modify it yourself.)`
- Version frontmatter with auto-generation notices
- Consistent file naming patterns with CLI command structures

### Workflow Impact

These files are updated by:

- `generate-doc-bundles.yml` → Generates documentation from source repositories
- `update-versioned-docs.yml` → Manages version releases and documentation
- `bump-axoned-version.yml` → Updates version references across documentation

### Safe Edit Zones

You **CAN** safely edit:

- `docs/**/*.md` → Main documentation content
- `src/**/*` → React components, SCSS, theme customizations
- `static/**/*` → Static assets (images, favicons, etc.)
- `docusaurus.config.js` → Site configuration
- `sidebars.js` → Main documentation navigation
- Root level markdown files (`README.md`, etc.)
