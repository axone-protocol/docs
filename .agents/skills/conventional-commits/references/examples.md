# Conventional Commit Examples

## Features

```text
feat(home): redesign landing page layout
feat(home): organize references by protocol layer
feat(theme): support dark mode toggle
feat(search): implement local search indexing
```

## Bug Fixes

```text
fix(theme): correct dark mode color contrast
fix(predicate): point to the predicate docs introduction
fix(search): handle empty query gracefully
```

## Refactoring

```text
refactor(scss): consolidate color variables
refactor(home): enhance technical reference layout and styling
refactor(site): serve technical reference only
```

## Build & Dependencies

```text
build(deps): bump mermaid from 11.10.0 to 11.15.0
build(deps): bump docusaurus from 3.9.0 to 3.10.1
build(project): prepare Docusaurus config for v4
```

## CI

```text
ci(workflow): tighten linting rules
ci(dependabot): align update schedule
```

## Documentation

> ⚠️ Use `docs` only for README and repo meta-docs. Site content changes are `feat`.

```text
docs(README): document deployment workflow
docs(README): re-introduce website screenshot
```

## Chores

```text
chore(docs): sync external documentation
chore(repo): document technical reference scope
chore(skills): migrate copilot instructions to agent skills format
```

## Performance

```text
perf(build): optimize static asset bundling
perf(search): reduce index size
```

## Breaking Changes

```text
feat(routes)!: restructure technical reference paths
refactor(config)!: enforce stricter plugin schema
```

## Bad Examples

| Bad                                                                            | Why                                       |
| ------------------------------------------------------------------------------ | ----------------------------------------- |
| `feat(home): add section`                                                      | Weak verb, vague                          |
| `fix: fix bug`                                                                 | Meaningless                               |
| `refactor: refactor code`                                                      | Says nothing                              |
| `docs(commands): update command docs`                                          | Site content should be `feat`, not `docs` |
| `docs: update docs`                                                            | Generic                                   |
| `feat(home): add new hero section that displays the protocol overview with...` | Too long                                  |
