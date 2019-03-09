const {src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const hash = require('gulp-hash')
const fs = require('fs')

const hashManifest = function(){
	return hash.manifest('cachebusters.json', {
		append: true,
		deleteOld: true,
		sourceDir: './docs',
		space: '\t'
	})
}

function buildCSS(){
	return src([
		'./src/css/*.scss'
	])
	.pipe(concat('main.css'))
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(hash())
	.pipe(dest('./docs'))
	.pipe(hashManifest())
	.pipe(dest('.'))
}

function buildJS(){
	return src([
		'./src/js/*.js'
	])
	.pipe(concat('main.js'))
	.pipe(hash())
	.pipe(dest('./docs'))
	.pipe(hashManifest())
	.pipe(dest('.'))
}

function buildVendorJS(){
	return src([
		'./node_modules/mithril/mithril.min.js'
	])
	.pipe(concat('vendor.js'))
	.pipe(hash())
	.pipe(dest('./docs'))
	.pipe(hashManifest())
	.pipe(dest('.'))
}

function buildHTMLTemplates(){
	const ENV = {}

	const cachebusters = JSON.parse(fs.readFileSync('./cachebusters.json'))
	Object.assign(ENV, cachebusters)

	return src([
		'./src/*.html'
	])
	.pipe(replace(/\$([a-zA-Z0-9\._-]+)\$/ig, (match, varname)=>{
		return ENV[varname] || match
	}))
	.pipe(dest('./docs'))
}

exports.build = series([
	buildCSS,
	buildJS,
	buildVendorJS,
	buildHTMLTemplates
])

exports.watch = parallel([
	()=>watch('./src/css/*.scss', {ignoreInitial: false}, series([
		buildCSS,
		buildHTMLTemplates
	])),
	()=>watch('./src/js/*.js', {ignoreInitial: false}, series([
		buildJS,
		buildHTMLTemplates
	])),
	()=>watch('./src/*.html', {ignoreInitial: false}, series([
		buildHTMLTemplates
	]))
])