// MARK: - Model

class Job {
  constructor(name, textColor, bgColor) {
    this.name = name;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
}


// MARK: - Constant

const jobs = [
  new Job("Developer", "#ABB2BF", "#282C34"),
  new Job("Designer", "#A6C1EE", "#FBC2EB"),
  new Job("Trader", "#E9ECF1", "#093687"),
  new Job("Traveler", "#68E0CF", "#209CFF"),
  new Job("Footballer", "#EEEEEE", "#0BA360")
]


// MARK: - Function

function update() {
    if(jobIdx < jobs.length - 1) {
      jobIdx++;
    } else {
      jobIdx = 0;
    }

    let job = jobs[jobIdx];

    let body = document.getElementsByTagName("body")[0];
    let title = document.getElementById("Title");
    let jobName = document.getElementById("JobName");

    body.style.backgroundColor = job.bgColor;
    title.style.color = job.textColor;
    jobName.innerText = job.name;
}


var jobIdx = -1;

update();
setInterval(update, 3000);
