const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const hash = require('gulp-hash')
const del = require('del')
const fs = require('fs')

const ENV = {}

const cachebust = function(){
	return hash.manifest('cachebusters.json', {
		append: true,
		sourceDir: './docs',
		space: '\t'
	})
}

function clean(){
	return del(['./docs'])
}

function buildCSS(){
	return src([
		'./src/css/**'
	])
	.pipe(concat('main.css'))
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(hash())
	.pipe(dest('./docs'))
	.pipe(cachebust())
	.pipe(dest('.'))
}

function buildJS(){
	return src([
		'./src/js/**'
	])
	.pipe(concat('main.js'))
	.pipe(hash())
	.pipe(dest('./docs'))
	.pipe(cachebust())
	.pipe(dest('.'))
}

function buildVendorJS(){
	return src([
		'./node_modules/mithril/mithril.min.js'
	])
	.pipe(concat('vendor.js'))
	.pipe(hash())
	.pipe(dest('./docs'))
	.pipe(cachebust())
	.pipe(dest('.'))
}

function buildHTMLTemplates(){
	const env = JSON.parse(JSON.stringify(ENV))

	const cachebusters = JSON.parse(fs.readFileSync('./cachebusters.json'))
	Object.assign(env, cachebusters)

	return src([
		'./src/html/**'
	], {base: './src/html'})
	.pipe(replace(/\{\%\s*([a-zA-Z0-9\._-]+)\s*\%\}/ig, (match, varname)=>{
		return env[varname] || match
	}))
	.pipe(dest('./docs'))
}

exports.build = series([
	clean,
	buildCSS,
	buildJS,
	buildVendorJS,
	buildHTMLTemplates
])

exports.watch = ()=>{
	return watch('./src/**', {ignoreInitial: false}, series([
		clean,
		buildCSS,
		buildJS,
		buildHTMLTemplates
	]))
}