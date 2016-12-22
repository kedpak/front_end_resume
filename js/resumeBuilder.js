/* Biography */
//////////////
var bio = {
    "name": "Kevin Pak",

    "role": "Web Developer",

    "contacts": {
        "mobile": "925-588-5777",
        "email": "Kedpak@yahoo.com",
        "github": "https://github.com/kedpak",
        "location": "San Francisco"

    },

    "biopic": "/Users/Kpak/Desktop/front end resume resub/images/picTokyo.jpeg",

    "welcomeMessage": "Welcome to my resume page! Take a look!",

    "skills": [
        "HTML",
        "CSS",
        "Javascript"
    ],
};

var data = "%data%";
bio.display = function() {

    /* Header name and role */
    var headerName = HTMLheaderName.replace(data, bio.name);
    var headerRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(headerName);
    $("#header").prepend(headerRole);

    /* Contacts */
    var mobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(mobile);
    var email = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts, #footerContacts").append(email);
    var github = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts, #footerContacts").append(github);
    var myLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts, #footerContacts").append(myLocation);


    /* Biopic */
    var biopic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(biopic);

    /* Welcome Message */
    var welcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(welcomeMessage);



    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skill1 = HTMLskills.replace(data, bio.skills[i]);
            $("#header").append(skill1);
        }
    } else {
        $("#header").append(HTMLskillsStart);
        $("#header").append("<h4>Im still building my skills!</h4>");
    }
};

bio.display();



/* Work Experience */ ///////////   

var work = {
    "employer": [{
            "employer": "Chungdahm Language Institute",
            "title": "English Language Instructor",
            "date": "August 2015 - September 2016",
            "location": "Daegu, South Korea",
            "description": "Worked as an English Language instrctor for elementary school children at a private " +
                "academy. Taught students English reading comprehension, writing, and grammar. Work involved " +
                "several administrative roles at the school. "

        },

        {

            "employer": "Americorps/Federal Emergency Management Agency",
            "title": "Public Assistance Specialist",
            "date": "June 2014- May 2015",
            "location": "New York, New York",
            "description": "Volunteered at the Hurricane Sandy Recovery Office in Queens NY. Assisted FEMA " +
                "staff in the Hazard Mitigation department. Compiled project reports and worked with basic data entry."

        }
    ]


};

work.display = function() {
    $("#workExperience").prepend(HTMLworkStart);

    for (var i = 0; i < work.employer.length; i++) {
        var employer1 = HTMLworkEmployer.replace(data, work.employer[i].employer);
        var title1 = HTMLworkTitle.replace(data, work.employer[i].title);
        var employerTitle1 = employer1 + title1;
        var date1 = HTMLworkDates.replace(data, work.employer[i].date);
        var location1 = HTMLworkLocation.replace(data, work.employer[i].location);
        var description1 = HTMLworkDescription.replace(data, work.employer[i].description);
        $("#workExperience").append(employerTitle1);
        $("#workExperience").append(date1);
        $("#workExperience").append(location1);
        $("#workExperience").append(description1);

    }


};

work.display();



/* Projects */ ///////////

var projects = {
    "projects": [{
            "title": "Interactive Resume",
            "dates": "September 2016",
            "description": "Built an interactive resume that utilizes Jquery",
            
        },

        {
            "title": "Portfolio Website",
            "dates": "August 2016",
            "description": "Created a responsive webiste that utilizes media queries",
            
        }
    ],

    "images": [
        "/Users/Kpak/Desktop/front end resume resub/images/dinosaur.jpg",
        "/Users/Kpak/Desktop/front end resume resub/images/yosemite.jpg"
    ]

};



projects.display = function() {
    $("#projects").prepend(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {
        var projTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        var projDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        var projDscrip = HTMLprojectDescription.replace(data, projects.projects[i].description);


        $("#projects").append(projTitle);
        $("#projects").append(projDates);
        $("#projects").append(projDscrip);



    }

    if (projects.images.length > 0) {

        for (var j = 0; j < projects.images.length; j++) {
            var projImage = HTMLprojectImage.replace(data, projects.images[j]);
            $("#projects").append(projImage);

        }
    } else {
        $("#projects").append("<h2>No Image</h2>");
    }

};

projects.display();

/* Education */ //////////

var education = {
    "schools": [{
            "name": "University of California: Santa Cruz",
            "degree": "Bachelor of Arts: Anthropology",
            "dates": "2011-2013",
            "location": "Santa Cruz, CA",
            "majors": ["Anthroplogy"],
            "url": "https://www.ucsc.edu/"


        }, {
            "name": "Las Positas College",
            "degree": "BA Prerequisites",
            "dates": "2008-2011",
            "location": "Livermore, CA",
            "majors": ["English"],
            "url": "http://www.laspositascollege.edu/"
        },

        {
            "name": "Merrill F. West High School",
            "degree": "High School Diploma",
            "dates": "2004-2008",
            "location": "Tracy, CA",
            "majors": ["High School"],
            "url": "https://www.tracy.k12.ca.us/sites/whs/Pages/default.aspx"
        }

    ],

    "onlineCourses": [{
        "title": "Front-End Web Developer Program",
        "school": "Udacity",
        "dates": "August 2016 - ",
        "url": "www.kevinpak.com"
    }]

};

education.display = function() {
    $("#education").prepend(HTMLschoolStart);

    
    for (var i = 0; i < education.schools.length; i++) {
        var schoolName = HTMLschoolName.replace(data, education.schools[i].name);
        var schoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var schoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var schoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        var schoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);
        var schoolLink = schoolName.replace("#",education.schools[i].url)
        $("#education").append(schoolLink + schoolDegree);
        $("#education").append(schoolDates);
        $("#education").append(schoolLocation);
        $("#education").append(schoolMajor);

    }

    $("#education").append(HTMLonlineClasses);
        var titleLinks = ["https://www.udacity.com/"]
    for (var j = 0; j < education.onlineCourses.length; j++) {
        var title = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
        var titleLink = title.replace("#",titleLinks[j])
        var school = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
        var dates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
        var url = HTMLonlineURL.replace(data, education.onlineCourses[j].url);
        var urlLink = url.replace("#", "https://www.youtube.com/watch?v=s5V0JxyTe7M")
        $("#education").append(titleLink);
        $("#education").append(school);
        $("#education").append(dates);
        $("#education").append(urlLink);
    }

};

education.display();


/* Google Map */


$("#mapDiv").append(googleMap);