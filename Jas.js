console.log('run');
function setClass(className){
   // let el = document.getElementById('mypara');
   // el.className = className;
   document.getElementById('mypara').className = className;
}
console.log('run');

 document.getElementById('make-warning').addEventListener('click', function(){
    setClass( 'warning');
});
 document.getElementById('make-tip').addEventListener('click', function(){
    setClass( 'tip');
});
document.getElementById('make-clear').addEventListener('click', function(){
    setClass( 'clear');
});

