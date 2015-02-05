var bio = {
  "name" : "John R. Partridge",
  "role" : "Trade Compliance Guru",
  "contacts" : {
    "mobile" : "404-964-2628",
    "email" : "john.r.partridge@gmail.com",
    "github" : "strawberrysocialist",
    "twitter" : "@john",
    "location" : "Phoenix, AZ, US"
  },
  "bioPic" : "./images/me.jpg",
  "welcomeMessage" : "Trade Expertise for a More Complex World",
  "skills" : [
    "US Customs",
    "FDA",
    "FCC",
    "DOT",
    "EPA"
  ]
};
var work = {
  "jobs": [
    {
      "employer" : "Kuehne + Nagel, Inc.",
      "title" : "District License Holder & Business Systems Analyst",
      "location" : "Phoenix, AZ, US",
      "dates" : "June 2013-Present",
      "description" : "Developed reporting solutions and tools for various US brokerage operations. Managed projects ensuring successful completion on time. Conferred with external and internal customers to gather business requirements. Liaised with programmers where necessary to develop larger business and customer solutions. Tested and implemented system enhancements."
    },
    {
      "employer" : "Kuehne + Nagel, Inc.",
      "title" : "District License Holder & Customs Brokerage Manager",
      "location" : "Phoenix, AZ, US",
      "dates" : "June 2013-May 2014",
      "description" : "Cleared goods through US Customs. Advised customers on import compliance including CBP, OGAs (FDA, FCC, CPSC, etc), and the pros and cons of various Incoterms."
    },
    {
      "employer" : "DHL Global Forwarding",
      "title" : "Licensed Customs Broker",
      "location" : "Phoenix, AZ, US",
      "dates" : "Feburary 2012-June 2013",
      "description" : "Cleared goods through US Customs. Advised customers on import compliance including CBP, OGAs (FDA, FCC, CPSC, etc), and the pros and cons of various Incoterms.  Compiled reference materials, created templates and tools and streamlined processes to help other entry writers. Educated other entry writers on import requirements, free trade agreements, AD/CVD scope determinations, etc. Automated numerous aspects of business processes to reduce processing time. Completed numerous special projects to boost efficiency. Worked to unify departmental processes across teams. Facilitated change and boosted communication while serving on the Guiding Coalition."
    },
    {
      "employer" : "Expeditors International",
      "title" : "Business Process Analyst",
      "location" : "Salt Lake City, UT, US",
      "dates" : "May 2008-January 2009",
      "description" : "Monitored company's performance with internal ISO 9001:2000 quality program. Developed and implemented process improvements in coordination with management. Wrote scripts to automate or improve the quality control of processes."
    },
    {
      "employer" : "Expeditors International",
      "title" : "Import Compliance Officer",
      "location" : "Salt Lake City, UT, US",
      "dates" : "May 2007-January 2009",
      "description" : "Drafted and coordinated communications with U.S. Customs (CBP), e.g., PEAs, protests, CF28s, CF29s, etc., and other government agencies (OGAs) for the branch and most importers. Advised importers (including several large sports apparel retailers) on classification, valuation and other issues. Managed the timely submission of duties to CBP (via check & ACH) for all importers. Ensured compliance with all regulations through regular monthly audits and other assessments. Monitored regulatory developments and kept all necessary branch personnel abreast of any changes. Underwrote customs bonds and obtained approval from the surety company where required."
    }
  ]
};
var projects = [
  {
    "title" : "Webpage",
    "dates" : "January 2015",
    "description" : "Build basic webpage using HTML5 and CSS3.",
    "images" : ["./images/me.jpg"]
  }
];
var education = {
  "schools" : [
    {
      "name" : "Emory University School of Law",
      "location" : "Atlanta, GA, US",
      "degree" : "Juris Doctor",
      "majors" : ["Law"],
      "minors" : [],
      "date" : "May 2005",
      "url" : "http:/law.emory.edu"
    },
    {
      "name" : "Oberlin College",
      "location" : "Oberlin, OH, US",
      "degree" : "Bachelor of Arts",
      "majors" : ["History", "Economics", "Political Science"],
      "minors" : [],
      "date" : "May 2000",
      "url" : "http://www.oberlin.edu"
    },
    {
      "name" : "Glendale Community College",
      "location" : "Glendale, AZ, US",
      "degree" : "Associate of Arts",
      "majors" : ["Liberal Arts"],
      "minors" : [],
      "date" : "July 1996",
      "url" : "http://www2.gccaz.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "program" : "Front-End Web Developer Nanodegree",
      "dates" : "January 2015",
      "url" : "http:/www.udacity.com"
    }
  ]
};

bio.display = function() {
  $("#header").append(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
};
work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
};
projects.display = function() {
  for (var project in projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects[project].description));
    if (projects[project].images.length > 0) {
      for (var image in projects[project].images) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects[project].images[image]));
      }
    }
  }
};
education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    $(".education-entry:last").append(HTMLworkDescription.replace("%data%", education.schools[school].majors));
  }
  for (var onlineCourse in education.onlineCourses) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
    $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
    $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
  }
};
var displayFooter = function() {
  $("#main").append(internationalizeButton);
};
var inName = function() {
  var parts = bio.name.split(" ");
  return parts[0] + " " + parts[1] + " " + parts[2].toUpperCase();
};
var displayMap = function() {
  $("#mapDiv").append(googleMap);
};

bio.display();
work.display();
//projects.display();
education.display();
displayFooter();
//displayMap();
$("#mapDiv").append(googleMap);
