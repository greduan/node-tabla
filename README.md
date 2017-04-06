# Tabla

**Note that this project never got anywhere.  I keep it here for archival purposes, and to document the idea, but implementation was never done.  Essentially, it was abandoned soon after it was thought up.**

Tabla is a tool inspired by [Tarima][tarima], made by my friend
[pateketrueke][pateketrueke].

[tarima]: https://github.com/gextech/tarima
[pateketrueke]: https://github.com/pateketrueke

While Tarima's concept is awesome, I disagree with some of his decisions in
terms of the scope of the tool and some other things, like how `boop.md` will be
the same as `boop.html.md` by default.

This is another approach to the same problem, with a similar solution.

The name is "tabla" which means "plank", usually of wood, a tarima is made of
planks of wood, so this is my way of saying that this is a smaller version of
tarima.

## Installation

```
$ git clone https://github.com/greduan/node-tabla.git
$ cd node-tabla
$ npm i
$ npm link
```

## Usage

Tabla provides a CLI command named `tabla`, given a file it'll process it and
output on STDOUT the output of processing the file.  If the `-i` (`--inplace`)
flag is used it'll just output the file to it's last output form.

```
$ tabla -i README.html.md
## will create README.html
$ tabla README.html.md
<p>Hello world!</p>
```

## License

Licensed under the permissive ISC license.  Check the `LICENSE` file for further
details.
