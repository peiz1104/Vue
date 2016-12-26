fis.hook('amd')
fis.match('**.less',{
	parser:'less',
	rExt:'.css'
})
fis.match('**.css',{
	optimizer:'clean-css',
	packTo:'static/pkg/css/app.css',
	useHash : true
})
fis.match('**.js',{
	optimizer:'uglify-js',
	useHash : true
})
fis.match('js/lib/**.js',{
	packTo:'static/pkg/js/lib.js'
})
fis.match('js/{modules,route}/**.js',{
	packTo:'static/pkg/js/app.js',
	isMod:true
})
 fis.match('::package',{
	postpackager:'loader'
})