function getCourseInfo() {
    return fetch('https://golf-courses-api.herokuapp.com/courses/11819').then(
        (response) => response.json()
    );
}

let coursePromise = getCourseInfo();

coursePromise.then((data) => {
    const course = data.data;

    course.holes.forEach((hole) => {
        document.body.innerHTML += `
        <div>
            <div class="table-responsive">
                <table class="table">
                
                    <td>${hole.teeBoxes[0].par}</td>
                    <td>${hole.teeBoxes[0].yards}</td>
                    <td>${hole.teeBoxes[0].hcp}</td>
                
                </table>
            </div>
        </div>`
    });
});