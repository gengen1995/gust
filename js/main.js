// JavaScript Document
(function () {
    'use strict';
	
	const btn = document.getElementById('assessment');
	const te = document.getElementById('allmenu');
	
		function removeAllChildren(element){
				　 	   // 診断結果表示エリアの作成
    while (element.firstChild) { // 子どもの要素があるかぎり削除
        element.removeChild(element.firstChild);
    　 }　 }
	
let menu=[
	'シーフードサラダ',
	'カニとポテトのサラダ',
	'ミックスサラダ',
	'ほうれん草とベーコンのソテー',
	'2種の春巻きの盛り合わせ',
	'キムチ＆豆腐サラダ',
	'ポパイエッググラタン',
	'単品ソーセージ＆コーン',
	'小あったかうどん',
	'寄せ豆腐のヘルシーサラダ',
	
	
	
	
	
		
];

let price=[    //お値段
	418, //シーフードサラダ
	313, //カニとポテトのサラダ
	313, //ミックスサラダ
	208, //ほうれん草とベーコンのソテー
	229, //肉野菜春巻き＆チンジャオ春巻き
	208, //単品キムチ＆豆腐サラダ
	208, //単品ポパイエッググラタン
	208, //単品ソーセージ＆コーン
	313, //小あったかうどん
	313, //寄せ豆腐のヘルシーサラダ
	
	
];

let kcal=[　 //カロリー
	119, //シーフードサラダ
	120, //カニとポテトのサラダ
	134, //ミックスサラダ
	138, //ほうれん草とベーコンのソテー
	155, //肉野菜春巻き＆チンジャオ春巻き
	162, //単品キムチ＆豆腐サラダ
	164, //単品ポパイエッググラタン
	169, //単品ソーセージ＆コーン
	179, //小あったかうどん
	226, //寄せ豆腐のヘルシーサラダ
	
];
	
	let allprice =0; 　 　　//合計金額
	let allkcal=0; 　 　　　//合計カロリー
	let checkallprice=0;　 //金額2000円以上になってないかチェックする変数
	
	btn.onclick =()=>{
		 removeAllChildren(te);
	while(allprice<1000){
		
	let number = Math.floor(Math.random()*(menu.length));  //配列番号をランダムで取ってくる変数
		
		checkallprice = allprice+price[number];  
		allkcal = allkcal + kcal[number];
		
		   if (checkallprice>1000) { break; }   //checkallpriceが2000円を超えてしまったらループ終了
		
		allprice = allprice+price[number];
		
		 const div= document.createElement('div');
		div.className = 'red_box';
	 const paragraph= document.createElement('p');
		paragraph.className = 'text1';
		const paragraph2= document.createElement('p');
			paragraph2.className = 'text2';
	paragraph.innerText = menu[number];
		paragraph2.innerText=price[number]+'円'+kcal[number]+'kcal';
	 te.appendChild(div);
	div.appendChild(paragraph);	
	div.appendChild(paragraph2);	
		
		
		
	};
   
	const paragraph= document.createElement('p');
		paragraph.className = 'text3';
	 paragraph.innerText = '合計金額は'+allprice+'円、'+'\n'+'カロリーは全部合わせると'+allkcal+'kcalでした';
	te.appendChild(paragraph);
		
		allprice=0;  
		checkallprice=0; //金額リセット
		allkcal =0;
	




}
		
})();
