async function getData() {
    let request = await fetch("https://skboard.herokuapp.com/api/student/all")
    let data = request.json();
    return data
}

$(document).ready(() => {
    getData()
    .then(data => {
        data.docs.forEach(student => {  
          // console.log(student.skills)
            $('#cards-container').append(`
            <div class="container-fluid round-border border" id="i-container">
              <div class="row cardPadding">
                <div class="col sm-12 column-border">
                  <img alt="Profile" class="i-img" src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"/>  
                </div>
                <div class="col sm-12 cardTextCenter student">
                  <div>
                    <h4>${student.personal.name}</h4>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span><br>
                    <span>${student.personal.year}</span><br>
                    <span>${student.personal.department}</span>
                  </div>
                </div>
                <div class="mobile"></div>
                <div class="col sm-12 cardTextCenter">
                  <span class="tsSkill">TOP SKILLS</span>
                  <h4>${student.skills.primaryskill}</h4>
                  <a style="font-size: small;">PROJECT LINK</a>
                </div>
                <div class="col sm-12 cardTextCenter">
                  <span class="tsSkill">SECONDARY SKILL</span>
                  <h4>${student.skills.secondaryskill}</h4>
                  <a style="font-size: small;">PROJECT LINK</a>
                </div>
                <div class="mobile"></div>
                <div class="col sm-12 i-icon cardTextCenter">  
                  <ion-icon name="logo-github" style="transform:scale(2);"></ion-icon>
                  <ion-icon name="logo-linkedin" style="transform: scale(2);"></ion-icon>
                  <ion-icon name="logo-whatsapp" style="transform: scale(2);"></ion-icon>
                </div>
                <div class="col sm-6 align-self-center mx-auto"> 
                <a href="https://skboard.herokuapp.com/api/student/${student._id}">
                <button type="button" class="card-button"> 
                    View Profile
                </button>
                </a>

              </div>
              <div class="mobile"></div> 
            </div>
          </div>
            `)     
    })
})
})