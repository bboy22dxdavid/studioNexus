
console.log(" ENTROU NO JS")

function copy(){
  var element= document.getElementById('text');
  var range = document.createRange();
  range.selectNode(element);
  window.getSelection().addRange(range);
    document.execCommand("copy");
}
 