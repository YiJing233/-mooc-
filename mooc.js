document.querySelectorAll('textarea').forEach(e => {
    e.value = '思路清晰'
})

var list = document.getElementsByClassName("s")
for (var i = 0; i < list.length; i++) {
    temlist = list[i].querySelectorAll('input')
    temlist[temlist.length - 1].click()
}