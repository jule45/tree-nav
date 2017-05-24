var test = '<ul id=“baum“><li><span class="ausklappen">Kategorie A</span><ul><li><a href="#">Sound 1</a></li><li><a href="#">Sound 2</a></li><li><a href="#">Sound 3</a></li><li><a href="#">Sound 4</a></li></ul></li><li><span class="ausklappen">Kategorie B</span><ul><li><a href="#">Sound 1</a></li><li><a href="#">Sound 2</a></li><li><a href="#">Sound 3</a></li><li><a href="#">Sound 4</a></li></ul></li>';

var div = document.getElementById("soundnav");
div.innerHTML = div.innerHTML + test;