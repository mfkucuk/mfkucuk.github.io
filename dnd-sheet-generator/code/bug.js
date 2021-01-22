var bugReports = [];

function getBugReport() {
	var bugReport = {
		email: document.getElementById("email").value,
		message: document.getElementById("text").value
	};

	bugReports.push(bugReport);

	window.localStorage.setItem('bugReport', JSON.stringify(bugReports));

	alert("Your bug has been reported.");
}