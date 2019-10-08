# simple-open-url

A simple cli for open a web page url from a command line.

This is helpful to open urls in npm scripts.

> Note:
> This tool is used for a limited cross platform env usage,  
> if you run command only on one platform, use the native  
> open commands instead.  
> E.g, if you are using Windows 10, maybe you use `start <URL>`.  
> If you are using a Mac, `open <URL>` is perfect for you. 

## Usage

Install:

```
# for global
npm install --global simple-open-url

# or
# for development
npm install --dev simple-open-url
```

Run the following command in npm script to open a url:

```
# single url
simple-open-url <URL>

# or, multiple urls
simple-open-url <URL 1> <URL 2> <URL more ...>

# run once by using npx
npx simple-open-url <URL>
npx simple-open-url <URL 1> <URL 2> <URL more ...>
```

## LICENSE

© 2019 Richard Libre. 

The MIT License.
