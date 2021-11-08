function getCourseInfo() {
    return fetch('https://golf-courses-api.herokuapp.com/courses/11819').then(
        (response) => response.json()
    );
}

let coursePromise = getCourseInfo();

coursePromise.then((data) => {
    const course = data.data;
    var tableContent = `<table class="table table-bordered">`;

    tableContent += `<tr>`;
    tableContent += `<td>Hole</td>`;
    for(let i = 0; i < course.holes.length; i++) {
        tableContent += ` 
            <td>${course.holes[i].hole}</td>   
        `;
    }
    tableContent += `</tr>`;

    tableContent += `<tr>`;
    tableContent += `<td>Par</td>`;
    for(let i = 0; i < course.holes.length; i++) {
        tableContent += ` 
            <td>${course.holes[i].teeBoxes[0].par}</td>   
        `;
    }
    tableContent += `</tr>`;

    tableContent += `<tr>`;
    tableContent += `<td>Yards</td>`;
    for(let i = 0; i < course.holes.length; i++) {
        tableContent += ` 
            <td>${course.holes[i].teeBoxes[0].yards}</td>   
        `;
    }
    tableContent += `</tr>`;

    tableContent += '</table>';
    document.getElementById('insideScorecard').innerHTML += tableContent;
});