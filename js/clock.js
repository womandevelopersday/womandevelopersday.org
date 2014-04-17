function divInt(a,b)
{
	return parseInt(a/b);
}
function calctime()
{
	var goal = new Date("2014 5 3 10:00:00");
	var now = new Date();
	result = goal - now;
	result = divInt(result,1000);
	sn = result % 60;
	result = divInt(result,60);
	dk = result % 60;
	result = divInt(result,60);
	saat = result % 24;
	result = divInt(result,24);
	gun = result;

	$("#timeleft").html(gun+" Gün"+saat+ " Saat " + dk + " Dakika ");

	// console.log();
	setTimeout(function() {
		calctime();
	}, 999);
}
