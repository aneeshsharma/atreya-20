/*
Workshop box
 */

$('.workshop_btn').click(function(e) {
	$('body').css('overflow', 'hidden');
	var imageurl;
	var workshop_number;
	var workshop_title;
	var workshop_desc;
	var workshop_title_selector = $('.workshop_box_title>h1');
	var workshop_text_selector = $('.workshop_box_text>p');
	workshop_number = $(this).parent().attr('workshop_no');
	imageurl = "url('images/workshop_box_" + workshop_number + ".jpg')";
	$('.workshop_box').css('background-image', imageurl);

	switch (workshop_number) {
		case '1':
			workshop_title = 'Construction Project Management ';
			workshop_desc =
				'The creation of a masterpiece, from the sketchbook all the way till the last stroke of paint is the journey every creator wishes to master. As you put together your dream fort, summon the manager in you to give wings to your fantasies. ISTE in association with HT India Labs presents to you an opportunity to get those blueprints to life through a workshop on Construction Project Management. Don’t miss this and lots more at ATREYA’20.';
			makedesc();
			break;
		case '2':
			workshop_title = 'Neural networking with Python';
			workshop_desc =
				'Since its rebirth in recent years, neural networking has found a niche of its own in the technical realm. In a field that absorbs novelty and tries to make the most of it, neural networking has been put to effective use by pairing it with an adaptable programming language. ISTE in association with HT India Labs presents an all you need to know workshop on neural networking with Python. Get ready to demystify and uncover the different layers of neural networks this ATREYA’20.';
			makedesc();
			break;
		case '3':
			workshop_title = 'Android App Development';
			workshop_desc =
				'Are you content to be a bystander in our world swarming with apps? Or do you dare to make that climb to unravel the complexities behind App development? Then this is your opportunity to absorb the latest trends, dig your virtual fingers deep and fulfill that dream of launching top rated apps in PlayStore. This ATREYA’20, ISTE along with HT India Labs presents to you the Android App Development Workshop.';
			makedesc();
			break;
		case '4':
			workshop_title = 'Augmented Reality';
			workshop_desc =
				'With the success of applications like Google glass and Pokémon Go, Augmented reality has swept the world like fire .AR has stirred up a revolution in the fields of gaming and app creation using technological advances to superimpose different layers of information to the world we see. The immense potential of this technology makes it imperative to keep an eye out for new developments. In order to turn your imagination to reality, ATREYA in collaboration with HT labs brings you a workshop on augmented reality and the endless possibilities associated with it. Clear your calendars and grab your seats to delve into the realms of this astounding technology.';
			makedesc();
			break;
		default:
			workshop_title = '--Unknown workshop--';
			workshop_desc = '--no description--';
	}

	function makedesc() {
		workshop_desc +=
			"<span>Contact</span>JERIN JOHNNY: +91 73561 23886 <br>ARUN SEBASTIAN: +91 70257 74464 <span style='margin-top: 30px;'><a style='border: solid 0px 0px 2px 0px; border-radius: 5px; padding: 4px 12px; align-self: center' href='https://www.townscript.com/widget/atreya-19-340430'>Register</a></span>";
	}

	workshop_title_selector.html(workshop_title);
	workshop_text_selector.html(workshop_desc);
	$('#wbox_1').lightbox_me({
		centered: true,
		onClose: function() {
			$('body').css('overflow', 'visible');
		},
		overlayCSS: { background: 'black', opacity: 0.9 }
	});
	e.preventDefault();
});

// Lecture Box

$('.lecture_btn').click(function(e) {
	$('body').css('overflow', 'hidden');
	var imageurl;
	var workshop_number;
	var workshop_title;
	var lecturer;
	var workshop_desc;
	var workshop_title_selector = $('.workshop_box_title>h1');
	var workshop_text_selector = $('.workshop_box_text>p');
	workshop_number = $(this).parent().attr('lecture_no');
	imageurl = "url('images/lecture_box_" + workshop_number + ".jpg')";
	$('.workshop_box').css('background-image', imageurl);

	switch (workshop_number) {
		case '1':
			workshop_title = 'The New Space Ecosystem In India & World';
			lecturer = 'Suraj Jana';
			workshop_desc =
				"Founder of india’s first space technology research start-ups - 'opencube labs' and the ai based healthcare platform, 'hey medy' - mr. Suraj kumar jana is a pronounced entrepreneur and a brilliant technologist with vast knowledge and experience which span from hard core technology disciplines like cloud computing, artificial intelligence, mobile applications to sophisticated consumer industries.";
			break;
		case '2':
			workshop_title = 'Is There A Science Of Stories?';
			lecturer = 'Anil Menon';
			workshop_desc =
				"Known for his intriguing writing, this bestselling science fiction writer also holds a ph.D in computer science from syracuse university. His debut novel, 'the beast with nine billion feet' was a bestseller and shortlisted for two esteemed awards.";
			break;
		case '3':
			workshop_title = 'Gravitational Waves: A New Window To The Universe';
			lecturer = 'Dr. Rahul Kashyap, ICTS';
			workshop_desc =
				'IITian and currently a post doctoral fellow at icts, dr. Rahul kashyap is a very erudite person with vast knowledge and interest in the field of astrophysics and related maths. Having completed his ph.D from the university of massachusetts, he currently has two astrophysical journals and a certification under his name.';
			break;
		case '4':
			workshop_title = 'Generative Adversarial Network (Gan) Applications And Theory';
			lecturer = 'Dr. Deepak Mishra';
			workshop_desc =
				'Dr. Deepak mishra, renowned for his brilliance in the field of neural networks and computer vision, is an iitian and is currently an associate professor at iist, trivandrum. Being a post doctoral fellow from the university of louisville, kentucky, he is a young scientist awardee from the system society of india. This versatile veteran has published research papers in journals of national and international repute.';
			break;
		case '5':
			workshop_title = 'Challenging the IAS Dream';
			lecturer = 'Dr. A U Prasad';
			workshop_desc =
				"Dr. A U Prasad, the South India head of ALS IAS, India's largest IAS coaching network, is a towering titan in the field of media with fourteen magnificent years of expertise . This erudite person was the General Manager Operations in person for a Multinational company operating from London, for seven glorious years.";
			break;

		default:
			workshop_title = '--Unknown workshop--';
			workshop_desc = '--no description--';
	}
	workshop_title = workshop_title + '<span><br>-- ' + lecturer + '</span>';
	workshop_desc =
		'<span>About the lecturer</span>' +
		workshop_desc +
		"<span>Contact</span>KUNCHERIA JOSE: +91 70257 59120 <br> DIYA KAMNANI: +91 80868 33068 <span style='margin-top: 30px;'><a style='border: solid 0px 0px 2px 0px; border-radius: 5px; padding: 4px 12px; align-self: center' href='https://www.townscript.com/widget/atreya-19-340430'>Register</a></span>";

	workshop_title_selector.html(workshop_title);
	workshop_text_selector.html(workshop_desc);
	$('#wbox_1').lightbox_me({
		centered: true,
		onClose: function() {
			$('body').css('overflow', 'visible');
		},
		overlayCSS: { background: 'black', opacity: 0.9 }
	});
	e.preventDefault();
});
