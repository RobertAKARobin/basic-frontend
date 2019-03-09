document.addEventListener('DOMContentLoaded', ()=>{
	m.mount(document.getElementById('output'), {
		view: ()=>{
			return m('p', 'Hello, world!')
		}
	})
})