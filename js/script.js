(function($){//функция обертка используется для избежания конфликтов между библиотеками использующими $
    $(function(){//короткий вызов $(document).ready()
    //КУКИ
//для записи куки
function setCookie(name, value, day=0)
{
	var now=new Date();//получили текущую дату
	now.setDate(now.getDate()+day);//установили 
	document.cookie=name+'='+encodeURIComponent(value)+';expires='+now.toUTCString();
}
//функция удаления куки
function deleteCookie(name)
{
	setCookie(name, '', -1);
}
//считать куки
function getCookie(name)
{
	var result='';
	var cookie=document.cookie;
	if(cookie!='')
	{
		cookie=cookie.split('; ');//получили массив
		for(var i=0; i<cookie.length; i++)
			{
				var cook=cookie[i].split('=');//массив
				if(cook[0]==name)
				{
					result=cook[1];
				}
			}
	}
	return result;
}
//


//Функция РАНДОМ - возвращает случайное целое число от min до max
function rand(min, max){
	return Math.round(Math.random()*(max-min))+min;
}

//Создаем функцию ВСТАВИТЬ ПОСЛЕ
function insertAfter(elem, afterElem){//Создаем функцию вставить после
	afterElem.parentElement.insertBefore(elem,afterElem.nextElementSibling);
}
//Функция создает таблицу для 1000000
function createTabl(){//Функция создает таблицу для 1000000
	var list=document.createElement('tabl');
	list.setAttribute('id', 'prizi');
	var str='';
	var sum=100;
	for (var i=0; i<15; i++)
	{
		if (i==0)
		{sum=100;}
		else if (i==2)
			{sum=sum*2-100}
		else if (i==3)
			{sum=sum*2-100}
		else if (i==11)
			{sum=sum*2-3000}
		else
			{sum=sum*2}
		str='<td>'+(i+1)+': </td><td>'+sum+'</td>';
		var stroc=document.createElement('tr');
		stroc.innerHTML=str;
		list.insertBefore(stroc, list.firstChild);
	}
	return list;
}

//Функ.созд.див
function createDiv(imia, iD='', cLass=''){
	var imia=document.createElement('div');
	if(iD!=''){
		imia.setAttribute('id', iD);
	}
	if(cLass!=''){
		imia.setAttribute('class', cLass);
	}
	return imia;
}
///////
	var vDen=0;
	//console.log(vDen);
	var cenaSig=0;
	var yrSave=0;//экономи
	var neVik=0;//не выкуренно сигарет
	var jizn=0;//если предположить что одна сигарета - 3часа жизни
var dayV=['Day', 'Week', 'Month', 'Months', 'Year', 'Years', 'Years', 'Years'];
var dayS=[1, 1, 1, 6, 1, 5, 10, 20];
var dayG=[1, 7, 30, 180, 365, 1825, 3650, 7300];
var neKuri=createDiv('neKuri', 'osnova', '');
document.body.insertBefore(neKuri, document.body.firstChild);
neKuri.innerHTML='<h2>Если бросить курить</h2>';
var form=document.createElement('form');
form.setAttribute('name', 'kurit');
neKuri.appendChild(form);
var scokaVden=document.createElement('input');
scokaVden.setAttribute('name', 'scokaVden');
scokaVden.setAttribute('id', 'scokaVden');
scokaVden.setAttribute('type', 'text');
form.appendChild(scokaVden);
var vopraz=document.createElement('h2');
vopraz.innerHTML='Сколько выкуриваете сигарет в день?';
form.appendChild(vopraz);
var scokaStoit=document.createElement('input');
scokaStoit.setAttribute('name', 'scokaStoit');
scokaStoit.setAttribute('id', 'scokaStoit');
scokaStoit.setAttribute('type', 'text');
form.appendChild(scokaStoit);
var vopdva=document.createElement('h2');
vopdva.innerHTML='Сколько стоит одна сигарета?';
insertAfter(vopdva, scokaStoit);
var reset=document.createElement('button');
reset.setAttribute('type', 'reset');
reset.setAttribute('id', 'resset');
var calc=document.createElement('button');
calc.setAttribute('type', 'submit');
calc.setAttribute('id', 'calcul');
reset.innerHTML='RESET';
calc.innerHTML='CALC';
insertAfter(reset, vopdva);
insertAfter(calc, reset);
scokaStoit.addEventListener('change', function(){
	var reg=new RegExp('^[0-9]{0,10}$', 'i', 'g');
	var lg=$(this).val();
	if (reg.test(lg))
		{
			$('#scokaStoit').css(
				'background', '#FFD700'
			);
			
		}
		else
		{
			alert('Только цифры от 1 до 9 не более 10 знаков')
		}
});
scokaVden.addEventListener('change', function(){
	var reg=new RegExp('^[0-9]{0,10}$', 'i', 'g');
	var lc=$(this).val();
	if (reg.test(lc))
		{
			$('#scokaVden').css(
				'background', '#FFD700'
			);
			
		}
		else
		{
			alert('Только цифры от 1 до 9 не более 10 знаков')
		}
});
calc.addEventListener('click', function(e){
	e.preventDefault();
	var tttt=document.getElementById('tablica');
	console.log(tttt);
	if(tttt!=null){
		$('#tablica').remove();
	}
	var tablica=createTabl();
	tablica.setAttribute('id', 'tablica');
	neKuri.appendChild(tablica);
})
function createTabl(){//Функция создает таблицу
	var list=document.createElement('tabl');
	list.setAttribute('id', 'rasch');
	var str='';
	var day=0;
	var dayt=0;
	var dayO=0;
	for (var i=0; i<8; i++)
	{
		day=dayG[i];
		dayt=dayS[i];
		dayO=dayV[i];
		vDen=parseInt($('#scokaVden').val());
		console.log(vDen);
		cenaSig=parseInt($('#scokaStoit').val());
		console.log(cenaSig);
		yrSave=(vDen*cenaSig)*day+' UAH';//экономи
		neVik=vDen*day;//не выкуренно сигарет
		jizn=(vDen*day)*3+' часов жизни';//если предположить что одна сигарета - 3часа жизни
		
		if(i==0){
			str='<td>Период времени</td><td>Экономия</td><td>Сколько сигарет не выкуренно</tr><td>Жизни сэкономленно</td>';
			var stroc=document.createElement('tr');
			stroc.innerHTML=str;
			list.appendChild(stroc);
		}
		else{
			day=dayG[i];
			dayt=dayS[i];
			dayO=dayV[i];
			yrSave=(vDen*cenaSig)*day+' UAH';//экономи
			neVik=vDen*day;//не выкуренно сигарет
			jizn=(vDen*day)*3+' часов жизни';//если предположить что одна сигарета - 3часа жизни
			str='<td>'+dayt+' '+dayO+'</td><td>'+yrSave+'</td><td>'+neVik+'</td><td>'+jizn+'</td>';
			var stroc=document.createElement('tr');
			stroc.innerHTML=str;
			list.appendChild(stroc);
		}
	
	}
	return list;
}
reset.addEventListener('click', function(){
	$('#tablica').remove();
})




    });

})(jQuery);
