//$("#main").append("John R. Partridge");

//var awesomeThoughts = "I am John and I am AWESOME!"
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

//var name = "John R. Partridge";
//var role ="Trade Compliance Guru";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//var audacity = "audacity";
//var udacity = "U" + audacity.slice(2);
//console.log(udacity);

//var skills = ["aweseomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//console.log(skills.length);
//console.log(skills[skills.length-1]);

//var nums = [1, 2, 3, 5];
//nums[3] = nums[3] + 1;
//$("#main").append(nums[3]);
//console.log(nums.pop() + 1);
//nums.push(nums.pop() + 1);
//console.log(nums);

//var name = "cAmEROn PittMAN";
//var names = name.split(" ");
//var firstName = names[0].toLowerCase();
//firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
//var lastName = names[1].toUpperCase();
//var finalName = firstName + " " + lastName;
//console.log(finalName);

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
  "bioPic" : "/images/me.jpg",
  "welcomeMessage" : "Trade Expertise for a More Complex World",
  "skills" : [
    "US Customs",
    "FDA",
    "FCC",
    "DOT",
    "EPA"
  ]
};
var work = [
  {
    "employer" : "Kuehne + Nagel, Inc.",
    "title" : "District License Holder & Business Systems Analyst",
    "location" : "Phoenix, AZ, US",
    "dates" : 2014,
    "description" : ""
  },
  {
    "employer" : "Kuehne + Nagel, Inc.",
    "title" : "District License Holder & Customs Brokerage Manager",
    "location" : "Phoenix, AZ, US",
    "dates" : 2013,
    "description" : ""
  },
  {
    "employer" : "DHL Global Forwarding",
    "title" : "Licensed Customs Broker",
    "location" : "Phoenix, AZ, US",
    "dates" : 2011,
    "description" : ""
  }
];
var projects = [
  {
    "title" : "",
    "dates" : 2014,
    "description" : "",
    "images" : []
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
      "date" : 2005,
      "url" : "http:/law.emory.edu"
    },
    {
      "name" : "Oberlin College",
      "location" : "Oberlin, OH, US",
      "degree" : "Bachelor of Arts",
      "majors" : ["History", "Economics", "Political Science"],
      "minors" : [],
      "date" : 2000,
      "url" : "http://www.oberlin.edu"
    },
    {
      "name" : "Glendale Community College",
      "location" : "Glendale, AZ, US",
      "degree" : "Associate of Arts",
      "majors" : ["Liberal Arts"],
      "minors" : [],
      "date" : 1996,
      "url" : "http://www2.gccaz.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "program" : "Front-End Web Developer Nanodegree",
      "date" : 2015,
      "url" : "http:/www.udacity.com"
    }
  ]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(HTMLcontactGeneric.replace("%data%", bio.contactInfo));
$("#header").append(work["position"]);
$("#header").append(education.name);
