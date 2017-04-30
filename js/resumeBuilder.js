var bio = {
    "name": "Andrew Higton",
    "role": "subeditor",
    "contacts": {
        "mobile": "+44 7894 346804",
        "email": "andrewhigton@outlook.com",
        "github": "tytytyty",
        "location": "London"
    },
    "welcomeMessage": "tytytytytyt tytytyty ttytytty tytytytyt tytytytytty",
    "skills": ["editor", "front-end developer", "tytytytyty", "tytytytyty"],
    "biopic": "https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97170&w=200&h=170"
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    $("#header").prepend(formattedRole);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $(".flex-box").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $(".flex-box").append(formattedEmail);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    $(".flex-box").append(formattedGit);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $(".flex-box").append(formattedLocation);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Lancaster University",
        "dates": "1996-2000",
        "location": "Lancaster, UK",
        "degree": "Economics and English Literature",
        "majors": "English Literature, Economics"
    }, {
        "name": "Llandrillo College",
        "dates": "1993-1995",
        "location": "Rhos-on-Sea",
        "degree": "A levels",
        "majors": "English, Economics, History"
    }],
    "onlineCourses": [{
        "title": "front-end developer degree",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }, {
        "title": "front-end development program",
        "school": "Free Code Camp",
        "dates": "2016",
        "url": "www.freecodecamp.com"
    }]
};


education.display = function() {

    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formatName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formatName);

        var formatLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formatLocation);

        var formatDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formatDegree);

        // var formatMajors = HTMLschoolMajor.replace("%data%", school.majors);
        // $(".education-entry:last").append(formatMajors);	

        var formatDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formatDates);

    });


    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    education.onlineCourses.forEach(function(course) {

        var formatOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        // $(".education-entry:last").append(formatOnlineTitle);
        var formatOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        // $(".education-entry:last").append(formatOnlineSchool);
        $(".education-entry:last").append(formatOnlineTitle + formatOnlineSchool);

        var formatOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formatOnlineDates);

        var formatOnlineUrl = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formatOnlineUrl);
    });
};

education.display();


var work = {
    "jobs": [{
        "employer": "financial times",
        "title": "arts subeditor",
        "location": "London",
        "dates": "Nov 2010 - Jul 2017",
        "description": "loreum ipsum dolor loreum ipsum dolor loreum ipsum dolor loreum ipsum dolor"
    }, {
        "employer": "Daily Mirror",
        "title": "news subeditor",
        "location": "London",
        "dates": "Apr 2006 - Nov 2010",
        "description": "loreum ipsum dolor loreum ipsum dolor loreum ipsum dolor loreum ipsum dolor"
    }, {
        "employer": "Chester Chronicle",
        "title": "news subeditor",
        "location": "Chester",
        "dates": "May 2002 - Nov 2005",
        "description": "loreum ipsum dolor loreum ipsum dolor  loreum ipsum dolor loreum ipsum dolor"
    }]
};


work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocations = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocations);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};


work.display();


var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": 2014,
        "description": "fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre",
        "images": ["https://placeholdit.imgix.net/~text?txtsize=30&txt=320%C3%97280&w=320&h=280",
            "https://placeholdit.imgix.net/~text?txtsize=30&txt=320%C3%97280&w=320&h=280"
        ]
    }, {
        "title": "Sample Project 2",
        "dates": 2016,
        "description": "fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre fgfgf retertret dfsdfdsfd rretretre",
        "images": ["https://placeholdit.imgix.net/~text?txtsize=30&txt=320%C3%97280&w=320&h=280",
            "https://placeholdit.imgix.net/~text?txtsize=30&txt=320%C3%97280&w=320&h=280"
        ]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            for (var i = 0; i < project.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    });
};

projects.display();


// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x,y);
// })

// function inName(name) {
// name = name.split(" ");
// name[1] = name[1].toUpperCase();
// name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// return name[0] + " " + name[1];
// }

// $("#main").append(internationalizeButton);

// function inName(name) {
// interName = name.split(" ");
// interName[1] = interName[1].toUpperCase();
// interName[0] = interName[0].slice(0,1).toUpperCase() + interName[0].slice(1).toLowerCase();
// return interName.join(" ");
// }

// $("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);