const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const hashFilename = require('gulp-hash')
const del = require('del')
const fs = require('fs')

const ENV = {}

const logFilenameHash = function(){
	const cachebusters = JSON.parse(fs.readFileSync('./cachebusters.json'))
	Object.assign(ENV, cachebusters)
	return hashFilename.manifest('cachebusters.json', {
		append: true,
		sourceDir: './docs',
		space: '\t'
	})
}

function buildCSS(){
	return src([
		'./src/css/**'
	], {base: './src/css'})
	.pipe(concat('main.css'))
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(hashFilename())
	.pipe(dest('./docs/css'))
	.pipe(logFilenameHash())
	.pipe(dest('.'))
}

function buildJS(){
	return src([
		'./src/js/**'
	], {base: './src/js'})
	.pipe(concat('main.js'))
	.pipe(hashFilename())
	.pipe(dest('./docs/js'))
	.pipe(logFilenameHash())
	.pipe(dest('.'))
}

function buildVendorJS(){
	return src([
		'./node_modules/mithril/mithril.min.js'
	])
	.pipe(concat('vendor.js'))
	.pipe(hashFilename())
	.pipe(dest('./docs/vendor'))
	.pipe(logFilenameHash())
	.pipe(dest('.'))
}

function buildMedia(){
	return src([
		'./src/media/**'
	], {base: './src/media'})
	.pipe(hashFilename())
	.pipe(dest('./docs/media'))
	.pipe(logFilenameHash())
	.pipe(dest('.'))
}

function buildHTMLTemplates(){
	return src([
		'./src/html/**/*.html'
	], {base: './src/html'})
	.pipe(replace(/\{\%\s*([a-zA-Z0-9\._-]+)\s*\%\}/ig, (match, varname)=>{
		return ENV[varname] || match
	}))
	.pipe(dest('./docs'))
}

exports.build = series([
	()=>del(['./docs']),
	buildCSS,
	buildJS,
	buildVendorJS,
	buildMedia,
	buildHTMLTemplates
])

exports.watch = ()=>{
	return watch('./src/**', {ignoreInitial: false}, series([
		()=>del(['./docs/**/*.html', '!./docs', './docs/css', './docs/js']),
		buildCSS,
		buildJS,
		buildHTMLTemplates
	]))
}