
// ==================================
// EDULEARN ONLINE SCHOOL WEBSITE
// Complete JavaScript
// ==================================

// Email address that receives enquiries
const recipient = "insightwebinar91@gmail.com";

// COURSE DATABASE
const courses = [
  {
    title: "Web Development Basics",
    category: "technology",
    description: "Learn the foundations of building websites using HTML, CSS and JavaScript.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "JavaScript for Beginners",
    category: "technology",
    description: "Discover programming fundamentals and learn to make websites interactive.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Computer Networking",
    category: "technology",
    description: "Explore computer networks, connectivity and essential networking concepts.",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Marketing",
    category: "business",
    description: "Understand online promotion, social media and digital communication.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Business Management",
    category: "business",
    description: "Explore business planning, management and basic decision-making.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Entrepreneurship",
    category: "business",
    description: "Discover business ideas, planning and the fundamentals of entrepreneurship.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Graphic Design",
    category: "design",
    description: "Explore visual communication, layouts, colours and creative design.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UI/UX Design",
    category: "design",
    description: "Learn about user interfaces, user experiences and digital layouts.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Creative Thinking",
    category: "personal",
    description: "Explore practical approaches to creativity and problem-solving.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Communication Skills",
    category: "personal",
    description: "Develop clear communication and effective listening skills.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Time Management",
    category: "personal",
    description: "Explore ways to organise tasks and manage your time effectively.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Personal Development",
    category: "personal",
    description: "Discover goal-setting, self-improvement and lifelong learning.",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=800&q=80"
  }
];

// GET HTML ELEMENTS
const courseGrid = document.getElementById("courseGrid");
const courseSearch = document.getElementById("courseSearch");
const filterButtons = document.getElementById("filterButtons");
const noResults = document.getElementById("noResults");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

const studentCourse = document.getElementById("studentCourse");

// CURRENT FILTER
let activeCategory = "all";

// DISPLAY COURSE CARDS
function displayCourses(courseList) {
  courseGrid.innerHTML = "";

  if (courseList.length === 0) {
    noResults.hidden = false;
    return;
  }

  noResults.hidden = true;

  courseList.forEach(function(course) {
    const card = document.createElement("article");
    card.className = "course-card";

    const image = document.createElement("img");
    image.src = course.image;
    image.alt = course.title;
    image.loading = "lazy";

    image.onerror = function() {
      this.onerror = null;
      this.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="#eee9ff"/><text x="50%" y="50%" font-size="30" text-anchor="middle" fill="#673de6">EduLearn</text></svg>'
        );
    };

    const info = document.createElement("div");
    info.className = "course-info";

    const category = document.createElement("span");
    category.className = "course-category";
    category.textContent = course.category;

    const heading = document.createElement("h3");
    heading.textContent = course.title;

    const description = document.createElement("p");
    description.textContent = course.description;

    const bottom = document.createElement("div");
    bottom.className = "course-bottom";

    const level = document.createElement("span");
    level.className = "course-level";
    level.textContent = course.level;

    const link = document.createElement("a");
    link.className = "course-link";
    link.href = "#register";
    link.textContent = "Enquire Now →";
    link.dataset.course = course.title;

    bottom.appendChild(level);
    bottom.appendChild(link);

    info.appendChild(category);
    info.appendChild(heading);
    info.appendChild(description);
    info.appendChild(bottom);

    card.appendChild(image);
    card.appendChild(info);

    courseGrid.appendChild(card);
  });
}

// SEARCH AND FILTER COURSES
function filterCourses() {
  const searchTerm = courseSearch.value.trim().toLowerCase();

  const filteredCourses = courses.filter(function(course) {
    const matchesCategory =
      activeCategory === "all" ||
      course.category === activeCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  displayCourses(filteredCourses);
}

// SEARCH INPUT
courseSearch.addEventListener("input", filterCourses);

// CATEGORY FILTER BUTTONS
filterButtons.addEventListener("click", function(event) {
  const button = event.target.closest(".filter-btn");

  if (!button) {
    return;
  }

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter-btn").forEach(function(item) {
    item.classList.remove("active");
  });

  button.classList.add("active");

  filterCourses();
});

// COURSE ENQUIRY LINKS
courseGrid.addEventListener("click", function(event) {
  const link = event.target.closest(".course-link");

  if (!link) {
    return;
  }

  studentCourse.value = link.dataset.course;
});

// MOBILE NAVIGATION
menuToggle.addEventListener("click", function() {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MOBILE MENU WHEN A LINK IS CLICKED
navLinks.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// STUDENT REGISTRATION ENQUIRY FORM
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const selectedCourse = studentCourse.value;
  const message = document.getElementById("studentMessage").value.trim();

  if (!name || !email || !selectedCourse) {
    formMessage.textContent =
      "Please complete your name, email and course selection.";
    return;
  }

  const subject = "EduLearn Student Course Enquiry";

  const body =
    "Hello EduLearn,%0D%0A%0D%0A" +
    "I would like to make a course enquiry.%0D%0A%0D%0A" +
    "Full Name: " + encodeURIComponent(name) + "%0D%0A" +
    "Email Address: " + encodeURIComponent(email) + "%0D%0A" +
    "Selected Course: " + encodeURIComponent(selectedCourse) + "%0D%0A" +
    "Message: " + encodeURIComponent(message || "No additional message") +
    "%0D%0A%0D%0AThank you.";

  const mailtoLink =
    "mailto:" + recipient +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + body;

  formMessage.textContent =
    "Your email application should open with your enquiry. Please review and send it.";

  window.location.href = mailtoLink;
});

// UPDATE FOOTER YEAR
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// INITIALISE WEBSITE
displayCourses(courses);
filterCourses();
