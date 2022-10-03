# Musical Patterns - Pattern

Defines the structure of patterns: `{ id, material, metadata, spec }`.
- `id` uniquely identifies each pattern.
- `metadata` has no "effect" per se. It's the blog post, formatted name, timestamps, etc.
- `material` is the code that makes the sounds: its properties and how they affect the output scales and voices and notes.
- `spec` is the controls for the material: configuration for how the user can adjust the properties (constraints, custom validation, etc), and presets.

A dedicated service exists for each of these properties.

Continuing in `@musical-patterns/playroom` and all pattern repos, to help organize thought, a common module structure matching this structure is used.



