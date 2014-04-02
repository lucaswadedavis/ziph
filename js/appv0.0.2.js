$(document).ready(function(){
	app.c.init();
	app.v.init();
	app.c.listeners();
})
/////////////////////////////////////////////////////////////////////////////////

var app={m:{},v:{},c:{}};

/////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////

app.c.init=function(){
	app.m.metadata={"name":"Ziph","version":"0.0.1"};
};

app.c.listeners=function(){

$("input#count").click(function(){
	var input=$("#input").val();
	var count=$("input[name=count]:checked").val();
	input=app.c.ziph(input,parseInt(count),true);
	var sortable=[];
	for (key in input){sortable.push([key,input[key].count]);}
	sortable.sort(function(a,b){return b[1]-a[1];});
	var d="";
	d+="<table>";
	for (var i=0;i<sortable.length;i++){
		var rowClass="odd";
		if (i%2==0){rowClass="even";}
		d+="<tr class='"+rowClass+"'><td>"+sortable[i][1]+"</td><td>"+sortable[i][0]+"</td></tr>";
	}
	d+="</table>";
	$("#output").html(d);
});

};

app.c.ziph=function(sample,n,spaces){
	var spaces=spaces||false;
	var n=n||7;
	var lex={};
	var sample=sample.toLowerCase();
	if (spaces==true){
		sample=sample.split(" ");
	}
	else{
		sample=sample.split("");
	}

	for (var i=0;i<=(sample.length-n);i++){
		//then populate the lexicon
			var compilation=[];
			for (var j=0;j<n;j++){
				compilation.push(sample[i+j])
			}
			if (spaces==true){
				compilation=compilation.join(" ");
			}
			else{
				compilation=compilation.join("");
			}

		if (!lex[compilation]){
			lex[compilation]={};
			lex[compilation].count=1;
		}
		else{
			lex[compilation].count++;
		}
	}
	return lex;
};


///////////////////////////////////////////

app.v.init=function(){
	app.v.style();
	var d="";
	d+="<table width='100%' id='layout'><tr><td colspan='5' id='area-right'>";
		d+="<h1>ziph</h1>";
		d+="<input type='radio' value='1' name='count' checked><label>count by singletons</label></br>";
		d+="<input type='radio' value='2' name='count'><label>count by doubles</label><br/>";
		d+="<input type='radio' value='3' name='count'><label>count by triples</label><br>";
		d+="<textarea rows='10' cols='5' id='input' autofocus></textarea>";
		d+="<input type='button' value='count' id='count'></input>";
	d+="</td><td id='output'>";
	d+="</td></tr></table>";
	$("body").html(d);
};


app.v.style=function(){
	davis.style("body",{
		"width":"100%",
		"margin":"0px",
		"padding":"0px",
		"text-align":"center",
		"background":"#555",
		"color":"#fff",
		"font-size":"3em"
	});
	davis.style("div",{
		"padding":"0",
		"font-size":"1.5em",
		"margin":"30px"
	});
	davis.style("h1",{
		"text-align":"left"
	});
	davis.style("input[type=button]",{
		"width":"100%",
		"font-size":"2em"
	});
	davis.style("textarea",{
		"width":"100%",
		"font-size":"1.5em",
		"margin":"0",
		"margin-top":"30px"
	});
	davis.style("table",{
		"width":"100%"
	});
	davis.style("table#layout",{
		"height":"100%",
		"table-layout":"fixed"
	});
	davis.style("td",{
		"padding":"20px",
		"margin":"30px",
		"vertical-align":"top",
		"text-align":"left"
	});
	davis.style("td#output",{
		"background":"#f37",
		"text-align":"left",
		"padding":"0"
	});
	davis.style("td#output td",{
		"padding":"3px",
		"margin":"0",
	});
	davis.style("tr.odd td",{
		"background":"#f67"
	});
	davis.style("td#output td:hover",{
		"background":"#555"
	});
};