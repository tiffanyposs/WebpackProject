# UpStarMusic
Starter Repo for a Webpack course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.  This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

```
git clone https://github.com/StephenGrider/WebpackProject.git
cd WebpackProject
npm install
```

```
npm run serve

```

Minify when built

```
$ webpack -p

```

### Deployment

Surge:

[Surge](https://surge.sh/)

```
$ npm install -g surge
$ surge -p dist

```

Github:

Create a new branch called `gh-pages`.

Then you only want to push the dist folder that you want to deploy:

```
$ git subtree push --prefix dist origin gh-pages

```
