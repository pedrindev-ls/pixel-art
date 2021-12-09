addEventListener('click', function(event){
    let lugar = document.querySelectorAll('.pixel')
    if(event.target === lugar){
        console.log('Foi!')
    }
})