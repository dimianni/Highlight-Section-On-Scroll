import 'waypoints/lib/noframework.waypoints.min.js';
import './scss/style.scss';


let sections = document.querySelectorAll('.section');
let links = document.querySelectorAll('.link');


sections.forEach(section => {
    new Waypoint({
        element: section,
        handler: function (direction) {
            let active_section;

            active_section = document.getElementById(this.element.id);

            if (direction === 'up') active_section = active_section.previousElementSibling;

            let active_link = document.querySelector(`a[href="#${active_section.getAttribute('id')}"]`)

            links.forEach(link => link.classList.remove('active'))

            active_link.classList.add('active')
        }
    })
})

