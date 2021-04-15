let rightAnswers = [];
let allAnswers = [];

let data = fetch("../test.json").then(response => response.json()).then(data =>
{
	let text = data.text;
	let html = "";

	for (let section of text)
	{
		if (Array.isArray(section))
		{
			allAnswers.push(section);

			html += "<div class=\"dropdown\">";
			html += "<button class=\"dropbtn\">__________</button>";
			html += "<div class=\"content\">";

			rightAnswers.push(section[0]);

			let shuffledArray = shuffle(section);
			for (let input of shuffledArray)
			{
				html += "<a>" + input + "</a>";
			}

			html += "</div></div>";
		}
		else
		{
			html += section;
		}
	}

	$(function ()
	{
		$("p").html(html);

		$(document).on("click", ".dropdown", function ()
		{
			$(this).find(".content").toggleClass("show");
		});

		$(document).on("click", "a", function ()
		{
			let button = $(this).parent().prev();
			button.html($(this).text());
		});
	});
});

function test()
{
	let filledUp = true;
	let buttonTexts = [];
	let indexes = [];
	let base64 = "";

	$(".dropdown").each(function (i)
	{
		$(this).find(".dropbtn").each(function (j)
		{
			if ($(this).text() != "__________")
			{
				buttonTexts.push($(this).text());
				indexes.push(allAnswers[i].indexOf($(this).text()));
			}
			else
			{
				filledUp = false;
			}
		});
	});

	if (filledUp)
	{
		for (let i = 0; i < indexes.length; i++)
		{
			if (i == indexes.length - 1)
			{
				base64 += indexes[i];
			}
			else
			{
				base64 += indexes[i] + " ";
			}
		}

		base64 = window.btoa(base64);
		alert(base64);
	}
	else
	{
		alert("Please fill out all options");
	}
}

let arraysMatch = function (first, second)
{
	for (var i = 0; i < first.length; i++)
	{
		if (first[i] !== second[i]) return false;
	}

	return true;
};

function shuffle(array)
{
	let currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex)
	{
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}