// 1
document.querySelectorAll('ol li').forEach(function(item){
    item.addEventListener('click', function(){
        this.style.textDecoration = 'line-through'
    })
})
2
document.querySelectorAll('ul li').forEach(function(item){
    item.addEventListener('click', function(){
        this.style.opacity = '0'
    })
})

// 3
document.querySelectorAll('#row img').forEach(function(img) {
    img.addEventListener('click', function() {
      this.style.visibility = 'hidden';
    });
  })