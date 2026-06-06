---
name: conventional-commits
description: Guide for writing conventional commit messages. Use when committing changes, writing commit messages, or reviewing commit history.
license: BSD-3-Clause
metadata:
  author: axone.xyz
  version: '1.0'
---

# Conventional Commits

## Commit Message Format

```text
<type>(<scope>): <verb> <subject>
```

One line only. No body. No footer (except for breaking changes).

## Subject Line Rules

- **Imperative mood, present tense**
- **Short, dense, unambiguous**
- **Describes the intent**, not the implementation
- **One line only**
- No capitalization at start
- No period at end

## Verb Selection

> ⚠️ **Avoid weak verbs**: `add`, `change`, `update`, `modify`

Use **precise, action-oriented verbs**:

| Verb        | Use When                              |
| ----------- | ------------------------------------- |
| `enforce`   | Adding constraints or rules           |
| `implement` | Building out functionality            |
| `prevent`   | Blocking undesired behavior           |
| `fix`       | Correcting bugs                       |
| `refactor`  | Restructuring without behavior change |
| `clarify`   | Improving readability/naming          |
| `align`     | Making consistent with standards      |
| `tighten`   | Strengthening validation/constraints  |
| `harden`    | Security or robustness improvements   |
| `validate`  | Input/state verification              |
| `handle`    | Managing edge cases                   |
| `support`   | Enabling new use cases                |
| `ensure`    | Guaranteeing invariants               |
| `document`  | Documentation work                    |
| `bump`      | Dependency version updates            |
| `sync`      | Synchronization tasks                 |
| `migrate`   | Moving to new patterns/locations      |
| `remove`    | Deleting features, files, or code     |
| `restore`   | Bringing back previous behavior       |

## Type

| Type       | Description                         | Triggers           |
| ---------- | ----------------------------------- | ------------------ |
| `feat`     | New site content, pages, or styling | Minor version bump |
| `fix`      | Bug fix                             | Patch version bump |
| `docs`     | README or repo meta-docs only       | No release         |
| `style`    | Formatting, whitespace              | No release         |
| `refactor` | Code restructuring                  | No release         |
| `perf`     | Performance improvement             | Patch version bump |
| `test`     | Adding/updating tests               | No release         |
| `build`    | Build system, dependencies          | No release         |
| `ci`       | CI/CD configuration                 | No release         |
| `chore`    | Maintenance tasks                   | No release         |

> ⚠️ **This is a documentation site** — adding site content is `feat`, not `docs`. Use `docs` only for README and repo meta-documentation.

## Scope

- **Mandatory when it adds clarity**
- Short, meaningful, component or area oriented
- Examples: `home`, `theme`, `scss`, `search`, `deps`, `README`, `workflow`, `dependabot`
- **If unsure, omit it**

## Examples

See [examples](./references/examples.md) for comprehensive good and bad examples.

Quick reference:

```text
feat(home): redesign landing page layout
fix(theme): correct dark mode color contrast
refactor(scss): consolidate color variables
chore(docs): sync external documentation
build(deps): bump docusaurus from 3.9.0 to 3.10.1
```

## Granularity

Rule: **One commit = one intention**

| Instead of...                 | Prefer...                |
| ----------------------------- | ------------------------ |
| One big mixed commit          | Multiple focused commits |
| `feat: implement X and fix Y` | Two separate commits     |
| Tests bundled with feature    | Separate `test:` commit  |
| Build changes with feature    | Separate `build:` commit |

## What to Avoid

- ❌ Generic messages hiding what changed
- ❌ Explanations or rationale in the message
- ❌ Marketing language or inflated wording
- ❌ Multiple intentions in one commit
- ❌ Vague subjects like "improve", "update", "fix issue"

## Breaking Changes

Use `!` after type/scope:

```text
feat(routes)!: restructure technical reference paths
refactor(config)!: enforce stricter plugin schema
```

## Commit Linting

Commits are validated using [commitlint](https://commitlint.js.org/). Ensuring lint passes is **mandatory**.

Validate locally:

```bash
npm i -g @commitlint/cli @commitlint/config-conventional
echo "feat(theme): support dark mode toggle" | commitlint --extends @commitlint/config-conventional
```
