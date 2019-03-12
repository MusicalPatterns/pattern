[![Build Status](https://travis-ci.com/MusicalPatterns/pattern.svg?branch=master)](https://travis-ci.com/MusicalPatterns/pattern)

# Musical Patterns - Pattern

Defines the structure of patterns: `{ id, material, metadata, spec }`.
- `id` uniquely identifies each pattern. `@musical-patterns/pattern` is where all patterns must be registered to get one.
- `metadata` has no "effect" per se. It's the blog post, formatted name, timestamps, etc.
- `material` is the code that makes the sounds: its properties and how they affect the output scales and voices and notes.
- `spec` is the controls for the material: configuration for how the user can adjust the properties (constraints, custom validation, etc), and presets.

Starting with `@musical-patterns/pattern` and continuing in `@musical-patterns/playroom` and all pattern repos, to help organize thought, a common module structure matching this structure is used.

## material

This part of how Musical Patterns works is better addressed elsewhere. Check out the READMEs for the `@musical-patterns/compiler` and the `@musical-patterns/performer`.

That said, `@musical-patterns/pattern` does provide some standard settings for materials and some additional materials-related utilities that don't belong with the `@musical-patterns/utilities` because they use Musical Patterns specific resources from `@musical-patterns/performer`, `@musical-patterns/compiler`, or `@musical-patterns/pattern`.

## metadata

```
interface Presentable {
    description?: string,
    formattedName?: string,
    order?: number,
}

interface Metadata extends Presentable {
    mostRecentPublish: string,
    musicalIdeaIllustrated: string,
    originalPublish: string,
    version: string,
}
```

- `mostRecentPublish` and `version` are managed by the `@musical-patterns/cli` service when shipping the code.
- `originalPublish` is set by the `main` repo when running the `new.sh` pattern script.
- `musicalIdeaIllustrated` is a special subtitle for the pattern when displayed in the pattern list of the `@musical-patterns/playroom`.
- `description` is here used to store the HTML string for the post about the pattern which can be super long and contain images and links and all that jazz.
- `formattedName` allows you to specify exactly what you want to show up as the title of your pattern in the `@musical-patterns/playroom`. Otherwise, it will title case your pattern's Id.
- `order` allows you to override the default sorting of your pattern in the `@musical-patterns/playroom`'s pattern list. Any pattern with a provided order will come first, then the patterns are sorted by `originalPublish`.


## spec

```
interface Spec<SpecsType = Specs> {
    computeValidations?: ComputeValidations<SpecsType>,
    configurations: Configurations<SpecsType>,
    initial: SpecsType,
    presets?: ObjectOf<Preset<SpecsType>>,
}
```

`Spec` is the name for this data structure which is attached to `Pattern`. In this context it is used in the conceptual singular sense.
<b>An</b> individual "spec" is one property which controls the materials for the pattern. 
A value for one of these properties is typed as a `SpecValue`, and key is currently just a string but may one day be a nominally-typed string called a `SpecKey`
The object containing such specs is typed as `Specs`.
The `Pattern` type is generic, and takes a type of `Specs` as its single parameter, which is then passed to the pattern's `Spec` property.

- `initial` is what the `@musical-patterns/compiler` will use as your pattern's `Specs` when materializing your pattern if you do not specifically provide a `Specs` object.
- `presets` is an object containing `Specs` that your pattern could materialize with. Use presets when there are a few particular combinations of spec settings you'd like to highlight and make easily accessible.
- `configurations` are again mapped to your `Pattern`'s `SpecsType` argument, and each `Configuration` determines how the control for that spec will work.
	- `inputType` is either ranged (numeric), optioned (set of strings), toggled (boolean), or stringed (an arbitary string, almost certainly heavily custom validated).
	- `isArrayed`, when true, indicates that your spec is actually an array of values of the above type. `@musical-patterns/playroom` provides add and remove buttons for changing the length. These control elements are called `field`s.
	- `arrayedNewFieldInitialValue` so you can make new fields start out with a defined value rather than empty.
	- `hideInput` is used only for the ranged `inputType`, which has two types of inputs, one text-based, one a slider. By default, each field contains both input types, but you can hide one or the other.
	- `constraint` differs by `inputType`. Any time spec is submitted, it is first checked against these constraints before attempting to compile.
		- Ranged inputs have min/max, step sizes, and can be constrained to integers.
		- Optioned inputs - this is where you provide the set of options.
		- Toggled inputs - no constraint, as these are simple booleans.
		- Stringed inputs - min/max length in chars.
- `computeValidations` is a function that will get called by the `@musical-patterns/playroom` whenever a potential object of `Specs` is submitted from the UI. It's necessary whenever the conditions of your `Specs`' validity involve relationships between multiple specs, or just conditions within a single spec which are more complicated than the basic provided `constraint`s.

There are several standard specs, including base duration and base frequency. 
Any pattern should be able to use these, but your pattern's specs type is not forced to extend them.

The `Presentable` interface from the `metadata` module is extended by several other interfaces in the spec module, including `Preset`, `Configuration`, and `OptionedConstraintOption`.
In the case of these spec interfaces, the `description` property will display to the `@musical-patterns/playroom` user as hover text.
