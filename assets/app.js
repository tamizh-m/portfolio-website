const accordion1 = document.getElementById("collapseOne")
const accordion2 = document.getElementById("collapseTwo")
const options = {
    attributes: true
}
const observer = new MutationObserver(callback);
const observer1 = new MutationObserver(callback);
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
const javaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-java');
        }
    });
});
const springObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-spring');
        }
    });
});
const angularObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-angular');
        }
    });
});
const devopsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-devops');
        }
    });
});
const sqlObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-sql');
        }
    });
});
const htmlObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-html');
        }
    });
});
const cssObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-bar-css');
        }
    });
});

const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate__animated');
                entry.target.classList.add('animate__shakeY');
            }, 5000);
        }
    });
});

javaObserver.observe(document.querySelector('.java'));
devopsObserver.observe(document.querySelector('.devops'));
springObserver.observe(document.querySelector('.spring'));
angularObserver.observe(document.querySelector('.angular'));
htmlObserver.observe(document.querySelector('.html'));
cssObserver.observe(document.querySelector('.css'));
sqlObserver.observe(document.querySelector('.sql'));
scrollObserver.observe(document.querySelector('.scroll'));

function callback(mutationList) {
    mutationList.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (mutation.target.className.endsWith('show')) {
                document.getElementById("experience").style.height = "240vh"
            } else {
                document.getElementById("experience").style.height = "100vh"
            }
        }
    })
}

observer.observe(accordion1, options);
observer1.observe(accordion2, options);

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
    console.log(ul.classList);
});

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);
