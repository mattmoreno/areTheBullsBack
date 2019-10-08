// @codekit-prepend "../bower_components/jquery/dist/jquery.js", "../bower_components/bootstrap/dist/js/bootstrap.js", "../bower_components/fullpage.js/dist/jquery.fullpage.js", "../bower_components/FitText.js/jquery.fittext.js", "../bower_components/moment/moment.js";

$( document ).ready(function() {

    $('#fullpage').fullpage({
	    autoScrolling: false,
	    fitToSection: false,
	    //verticalCentered: false
    });

    $(".arethey h2").fitText(0.5, { minFontSize: '80px', maxFontSize: '180px' });

    var genNo = ["No", "Nope", "Nah", "Nay", "No Chance", "No Way", "Umm no", "Get Real", "Yea Right"],
    	genNo = genNo[Math.floor(Math.random() * genNo.length)];

    var genYes = ["Yes", "Yea", "Uh-Huh", "Yup", "We Back", "Yessir", "Totally", "Sure", "You Bet", "Totes", "You know it"],
    	genYes = genYes[Math.floor(Math.random() * genYes.length)];

    var genNotSure = ["..."],
    	genNotSure = genNotSure[Math.floor(Math.random() * genNotSure.length)];

	//$(".arethey h2").append(genNo);


    /* JSON
	=============================== */

	$.ajaxSetup({ cache: false });

	$.getJSON("feed/1819/bulls_schedule_02.json?nocache=" + (new Date()).getTime(),
	function(data){

		console.log(data);

		var game = data.gscd.g;

    // CHANGE THIS NUMBER
		var gamenum = 82;

		gamenum = gamenum - 1;
		var getfinal = "Final";

		console.log(game[game.length - 1]['stt']);

		// FINAL
		var status = game[gamenum].stt;

		if (status == "Final") {
			$(".arethey h2").append(genNo);
		} else {
			$(".arethey h2").append(genNotSure);
		}

		console.log(genYes);

		// DATE - ARENA
		var newDate = moment(game[gamenum].gdte).format('dddd, MMMM D, YYYY');

		$("#gamedate").text(newDate);
		$("#gamearena").text(game[gamenum].an + " | " + game[gamenum].ac + ", " + game[gamenum].as);

		// VISITOR
		var visTeam = game[gamenum].v;
		var visCode = visTeam.ta.toLowerCase();
		var visRecord = visTeam.re;
		var visScore = visTeam.s;

		var visBlock = '<div class="team '+ visCode +'"><img src="http://i.cdn.turner.com/nba/nba/assets/logos/teams/secondary/web/'+ visCode +'.svg" class="img-responsive center-block" /></div>';

		if (status == "Final") {
			visBlock += '<div class="score">'+ visScore +'</div>';
		}


		$("#vis").html(visBlock);

		// HOME
		var homeTeam = game[gamenum].h;
		var homeCode = homeTeam.ta.toLowerCase();
		var homeRecord = homeTeam.re;
		var homeScore = homeTeam.s;

		var homeBlock = '<div class="team '+ homeCode +'"><img src="http://i.cdn.turner.com/nba/nba/assets/logos/teams/secondary/web/'+ homeCode +'.svg" class="img-responsive center-block" /></div>';

		if (status == "Final") {
			homeBlock += '<div class="score">'+ homeScore +'</div>';
		}


		$("#home").html(homeBlock);

		// BOX SCORE
		var boxscore = '<a href="http://www.nba.com/games/'+ game[gamenum].gcode +'#/boxscore" target="_blank">Full Box Score</a>';
		$("#fullbox").html(boxscore);
	});


});
