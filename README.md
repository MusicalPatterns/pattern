[![Build Status](https://travis-ci.com/MusicalPatterns/pattern.svg?branch=master)](https://travis-ci.com/MusicalPatterns/pattern)

# Musical Patterns - Pattern

Defines the structure of patterns: `{ material, metadata, spec }`.
- `metadata` has no "effect" per se. It's the blog post, formatted name, timestamps, etc.
- `material` is the code that makes the sounds: its properties and how they affect the output scales and voices and notes.
- `spec` is the controls for the material: configuration for how the user can adjust the properties (constraints, custom validation, etc), and presets.
Starting with `@musical-patterns/pattern` and continuing in `@musical-patterns/playroom` and all pattern repos, to help organize thought, a common module structure matching this structure is used.

`@musical-patterns/pattern` is also the place where all patterns must be registered to get an ID.
This service also provides standard settings and some additional utilities that don't belong with the `@musical-patterns/utilities` because they use Musical Patterns specific resources from `@musical-patterns/performer`, `@musical-patterns/compiler`, or `@musical-patterns/pattern`.
