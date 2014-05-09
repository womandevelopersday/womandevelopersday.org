function divInt(a,b)
{
	return parseInt(a/b);
}

function calctime()
{
	var goal = new Date(2014,4,3,10,0,0);
	var now = new Date();
	result =goal.getTime() - now.getTime();
	result = divInt(result,1000);
	sn = result % 60;
	result = divInt(result,60);
	dk = result % 60;
	result = divInt(result,60);
	saat = result % 24;
	result = divInt(result,24);
	gun = result;
	if(result < 0)
	{
		gun = 0;
		dk = 0;
		saat = 0;
		$("#timeleft").html("<span>"+ gun + "</span><span>Gün</span><span>" + saat + "</span><span>Saat</span><span> " + dk + "</span> <span>Dakika</span>");

	}
	else
	{
		$("#timeleft").html("<span>"+ gun + "</span><span>Gün</span><span>" + saat + "</span><span>Saat</span><span> " + dk + "</span> <span>Dakika</span>");
	setTimeout(function() {
		calctime();
	}, 999);
	}
	
}