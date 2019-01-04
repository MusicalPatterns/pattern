[![Build Status](https://travis-ci.com/MusicalPatterns/pattern.svg?branch=master)](https://travis-ci.com/MusicalPatterns/pattern)

# Musical Patterns - Pattern

Utilities shared by the patterns.

Similar to the `@musical-patterns/cli` repo, upon installation, copies configuration files common to all pattern repos into the repo.

These files are:

- Makefile.snapshot
- test/snapshot.test.ts

In tandem with installing the `@musical-patterns/compiler`, this will allow your patterns to update their snapshots and test against them.
