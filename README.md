[![Build Status](https://travis-ci.com/MusicalPatterns/pattern.svg?branch=master)](https://travis-ci.com/MusicalPatterns/pattern)

# Musical Patterns - Pattern

Defines the structure of patterns, including how to configure their spec, provide metadata, presets, and custom validation.
It is also the place where all patterns must be registered.
It also provides standard settings and some additional utilities that don't belong with the `@musical-patterns/utilities` because they use Musical Patterns specific resources from `@musical-patterns/performer`, `@musical-patterns/compiler`, or `@musical-patterns/pattern`.
