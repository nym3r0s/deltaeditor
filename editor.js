
function addtag(x,y)
{
	var txt = document.getElementById("edit");
	var modtext = txt.value;
	
	var startstr= modtext.substring(0,txt.selectionStart); //till selectedtext
	var modstr = modtext.substring(txt.selectionStart,txt.selectionEnd); //
	var endstr = modtext.substring(txt.selectionEnd);
	
	modstr = x + modstr + y;

	modtext = startstr + modstr + endstr;
	
	txt.value = modtext;
}

function showreplace()
{
	var str = document.getElementById("edit").value;
	
	str = str.replace(/\[b\]/g,'<b>');
	str = str.replace(/\[\/b\]/g,'</b>');
	
	str = str.replace(/\[i\]/g,"<i>");
	str = str.replace(/\[\/i\]/g,"</i>");

	str = str.replace(/\[u\]/g,"<u>");
	str = str.replace(/\[\/u\]/g,"</u>");

	str = str.replace(/\[p\]/g,"<p>");
	str = str.replace(/\[\/p\]/g,"</p>");
	
	str = str.replace(/\[dold\]/g,"<b>");
	str = str.replace(/\[\/dold\]/g,"</b>");

	str = str.replace(/\[ditalic\]/g,"<i>");
	str = str.replace(/\[\/ditalic\]/g,"</i>");

	//colors

	str = str.replace(/\[blue\]/g,"<div style=\"color:blue\">");
	str = str.replace(/\[\/blue\]/g,"</div>");
	
	str = str.replace(/\[red\]/g,"<div style=\"color:red\">");
	str = str.replace(/\[\/red\]/g,"</div>");

	str = str.replace(/\[green\]/g,"<div style=\"color:green\">");
	str = str.replace(/\[\/green\]/g,"</div>");

	str = str.replace(/\[gold\]/g,"<div style=\"color:gold\">");
	str = str.replace(/\[\/gold\]/g,"</div>");
	
	str = str.replace(/\[yellow\]/g,"<div style=\"color:yellow\">");
	str = str.replace(/\[\/yellow\]/g,"</div>");
	
	str = str.replace(/\[aqua\]/g,"<div style=\"color:aqua\">");
	str = str.replace(/\[\/aqua\]/g,"</div>");
	
	str = str.replace(/\[violet\]/g,"<div style=\"color:violet\">");
	str = str.replace(/\[\/violet\]/g,"</div>");
	
	str = str.replace(/\[orange\]/g,"<div style=\"color:orange\">");
	str = str.replace(/\[\/orange\]/g,"</div>");
	
	str = str.replace(/\[indigo\]/g,"<div style=\"color:indigo\">");
	str = str.replace(/\[\/indigo\]/g,"</div>");
	
	str = str.replace(/\[size:/g,"<div style=\"font-size:");
	str = str.replace(/\[\/size\]/g,"</div>");
	str = str.replace(/\]/g,";\">");


	str = str.replace(/\n/g,"</br>"); 

	
	

	

	document.getElementById("preview").innerHTML = str;
}


function syncer()
{
	setInterval(function(){
		showreplace();
	},10);
}

function fdold()
{	
	var txt = document.getElementById("edit");
	var modtext = txt.value;
	
	var startstr= modtext.substring(0,txt.selectionStart); //till selectedtext
	var modstr = modtext.substring(txt.selectionStart,txt.selectionEnd); //
	var endstr = modtext.substring(txt.selectionEnd);
	var doldstr = "";

	for(var i=0;i<modstr.length;i++)
	{
		if(i%2===0)
		{
			doldstr += modstr.charAt(i).toUpperCase();
		}
		else
		{
			doldstr += modstr.charAt(i).toLowerCase();
		}
	}

	modtext = startstr + doldstr + endstr;
	
	txt.value = modtext;
	
	addtag('[dold]','[/dold]'); 
}
function fditalic()
{	
	var txt = document.getElementById("edit");
	var modtext = txt.value;
	
	var startstr= modtext.substring(0,txt.selectionStart); //till selectedtext
	var modstr = modtext.substring(txt.selectionStart,txt.selectionEnd); //
	var endstr = modtext.substring(txt.selectionEnd);
	var doldstr = "";

	for(var i=0;i<modstr.length;i++)
	{
		if(i%2===0)
		{
			doldstr += modstr.charAt(i).toUpperCase();
		}
		else
		{
			doldstr += modstr.charAt(i).toLowerCase();
		}
	}

	modtext = startstr + doldstr + endstr;
	
	txt.value = modtext;
	
	addtag('[ditalic]','[/ditalic]'); 
}
