const audio=new Audio("Sad Girl");const sonidos=document.querySelectorAll(".clickSound");sonidos.forEach(sonidos=>{sonidos.addEventListener("click",()=>{audio.play();});});$(function(){var cant=document.getElementsByClassName("multisteps_form_panel").length;var i=1;for(i;i<=cant;i++){var clase=".step_"+i;$(clase).on('click',function(){$(clase).removeClass("active");$(this).addClass("active");});}});
var currentTab=0;showTab(currentTab);
function resize_to_fit_preg(pregunta){var pregText=$(pregunta).find(".cont-pregunta");
var fontsize=$(pregunta).find(".cont-pregunta").css('font-size');if(pregText.outerHeight()>pregText.parent().outerHeight()){$(pregText).css('fontSize',parseFloat(fontsize)-1);resize_to_fit_preg(pregunta);};};
function showTab(n){var x=document.getElementsByClassName("multisteps_form_panel");x[n].style.display="block";resize_to_fit_preg(x[n]);}
function nextPrev(n){var x=document.getElementsByClassName("multisteps_form_panel");if(n==1&&!validateForm())return false;x[currentTab].style.display="none";currentTab=currentTab+n;if(currentTab>=x.length){
    return false;}
showTab(currentTab);}
function validateForm(){var x,y,i,valid=true;x=document.getElementsByClassName("multisteps_form_panel");y=x[currentTab].getElementsByTagName("input");for(i=0;i<y.length;i++){if(y[i].value==""){y[i].className+=" invalid";valid=false;}}
if(valid){document.getElementsByClassName("step")[currentTab].className+=" finish";}
return valid;}
function fixStepIndicator(n){var i,x=document.getElementsByClassName("step");for(i=0;i<x.length;i++){x[i].className=x[i].className.replace(" active","");}
x[n].className+=" active";}
function move(){
    var elem=document.getElementById("myBar");
    var width=parseInt(elem.innerHTML);
    var aim=width+25;
    function frame(){if(width>=aim){clearInterval(id);}else if(width>=100){width=0;aim=25;elem.style.width=width+'%';elem.innerHTML=width*1+'%';}else{width++;elem.style.width=width+'%';elem.innerHTML=width*1+'%';}}}