window.addEventListener("load", () => {
  let name = localStorage.getItem("name");
  let profession = localStorage.getItem("profession");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("address");
  let contact = localStorage.getItem("contact");
  let about = localStorage.getItem("aboutme");
  let pic = localStorage.getItem("profile");
  let deg1 = localStorage.getItem("degree1");
  let inst1 = localStorage.getItem("institue1");
  let start_year1 = localStorage.getItem("start_year1");
  let deginfo1 = localStorage.getItem("deginfo1");
  let deg2 = localStorage.getItem("degree2");
  let inst2 = localStorage.getItem("institue2");
  let start_year2 = localStorage.getItem("start_year2");
  let deginfo2 = localStorage.getItem("deginfo2");
  let job_name1 = localStorage.getItem("job_name1");
  let company1 = localStorage.getItem("company1");
  let job_start_year1 = localStorage.getItem("job_start_year1");
  let job_info1 = localStorage.getItem("job_info1");
  let job_name2 = localStorage.getItem("job_name2");
  let company2 = localStorage.getItem("company2");
  let job_start_year2 = localStorage.getItem("job_start_year2");
  let job_info2 = localStorage.getItem("job_info2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let skill5 = localStorage.getItem("skill5");
  let skill6 = localStorage.getItem("skill6");
  let skill7 = localStorage.getItem("skill7");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let lang3 = localStorage.getItem("lang3");
  let lang4 = localStorage.getItem("lang4");
  let awa_year1 = localStorage.getItem("awa_year1");
  let comp_name1 = localStorage.getItem("comp_name1");
  let title1 = localStorage.getItem("title1");
  let awa_year2 = localStorage.getItem("awa_year2");
  let comp_name2 = localStorage.getItem("comp_name2");
  let title2 = localStorage.getItem("title2");

  // NAME AND CONTACTS

  let clientName: any = document.getElementById("clientname");
  clientName.textContent = name;
  let clientProfession: any = document.getElementById("clientProfession");
  clientProfession.textContent = profession;
  let clientEmail: any = document.getElementById("clientemail");
  clientEmail.textContent = email;
  let clientAdd: any = document.getElementById("clientadd");
  if (clientAdd) {
    clientAdd.textContent = add;
  }
  let clientContact: any = document.getElementById("clientcontact");
  clientContact.textContent = contact;
  let clientAbout: any = document.getElementById("clientabout");
  if (clientAbout) {
    clientAbout.textContent = about;
  }
  let clientimg: any = document.getElementById("picimg");
  clientimg.src = pic;

  // EDUCATION

  let clientdegname1: any = document.getElementById("clientdegname1");
  clientdegname1.textContent = deg1;
  let clientdeginst1: any = document.getElementById("clientdeginst1");
  clientdeginst1.textContent = inst1;
  let clientstartyear1: any = document.getElementById("clientstartandendyear1");
  clientstartyear1.textContent = start_year1;
  let clientDegInfo1: any = document.getElementById("clientdeginfo1");
  clientDegInfo1.textContent = deginfo1;
  let clientdegname2: any = document.getElementById("clientdegname2");
  if (clientdegname2) {
    clientdegname2.textContent = deg2;
  }
  let clientdeginst2: any = document.getElementById("clientdeginst2");
  if (clientdeginst2) {
    clientdeginst2.textContent = inst2;
  }
  let clientstartyear2: any = document.getElementById("clientstartandendyear2");
  clientstartyear2.textContent = start_year2;
  let clientDegInfo2: any = document.getElementById("clientdeginfo2");
  if (clientDegInfo2) {
    clientDegInfo2.textContent = deginfo2;
  }

  //EXPERIENCE

  let clientJobName1: any = document.getElementById("clientjobname1");
  clientJobName1.textContent = job_name1;
  let clientJobName2: any = document.getElementById("clientjobname2");
  clientJobName2.textContent = job_name2;
  let clientJobCompany1: any = document.getElementById("clientjobcompany1");
  clientJobCompany1.textContent = company1;
  let clientJobCompany2: any = document.getElementById("clientjobcompany2");
  clientJobCompany2.textContent = company2;
  let clientJobYear1: any = document.getElementById(
    "clientjobstartandendyear1"
  );
  clientJobYear1.textContent = job_start_year1;
  let clientJobYear2: any = document.getElementById(
    "clientjobstartandendyear2"
  );
  clientJobYear2.textContent = job_start_year2;
  let clientJobInfo1: any = document.getElementById("clientjobinfo1");
  clientJobInfo1.textContent = job_info1;
  let clientJobInfo2: any = document.getElementById("clientjobinfo2");
  clientJobInfo2.textContent = job_info2;

  // SKILLS

  let clientSkill1: any = document.getElementById("clientskill1");
  let clientSkill2: any = document.getElementById("clientskill2");
  let clientSkill3: any = document.getElementById("clientskill3");
  let clientSkill4: any = document.getElementById("clientskill4");
  let clientSkill5: any = document.getElementById("clientskill5");
  let clientSkill6: any = document.getElementById("clientskill6");
  let clientSkill7: any = document.getElementById("clientskill7");
  clientSkill1.textContent = skill1;
  clientSkill2.textContent = skill2;
  clientSkill3.textContent = skill3;

  if (!clientSkill4) {
    clientSkill4.style.display = "none";
  } else {
    clientSkill4.textContent = skill4;
  }

  if (!clientSkill5) {
    clientSkill5.style.display = "none";
  } else {
    clientSkill5.textContent = skill5;
  }
  if (!clientSkill6) {
    clientSkill6.style.display = "none";
  } else {
    clientSkill6.textContent = skill6;
  }
  if (!clientSkill7) {
    clientSkill7.style.display = "none";
  } else {
    clientSkill7.textContent = skill7;
  }
  // LANGUAGES

  let clientLang1: any = document.getElementById("clientlang1");
  let clientLang2: any = document.getElementById("clientlang2");
  let clientLang3: any = document.getElementById("clientlang3");
  let clientLang4: any = document.getElementById("clientlang4");
  clientLang1.textContent = lang1;
  clientLang2.textContent = lang2;
  clientLang3.textContent = lang3;
  clientLang4.textContent = lang4;

  // Award

  let clientAwa_Year1: any = document.getElementById("clientawa-year1");
  let clientCompName1: any = document.getElementById("clientCompanyname1");
  let clientAwaTitle1: any = document.getElementById("clienttitle1");
  let clientAwa_Year2: any = document.getElementById("clientawa-year2");
  let clientCompName2: any = document.getElementById("clientCompanyname2");
  let clientAwaTitle2: any = document.getElementById("clienttitle2");
  clientAwa_Year1.textContent = awa_year1;
  clientAwa_Year2.textContent = awa_year2;
  clientCompName1.textContent = comp_name1;
  clientCompName2.textContent = comp_name2;
  clientAwaTitle1.textContent = title1;
  clientAwaTitle2.textContent = title2;
});

let contact = document.getElementById("contact");
let cont_btn = document.getElementById("cont-btn");
cont_btn?.addEventListener("click", () => {
  contact!.classList.toggle("hide");
});

let skills = document.getElementById("Skills");
let skill_btn = document.getElementById("skill-btn");

skill_btn?.addEventListener("click", () => {
  skills!.classList.toggle("hide");
});

let lang = document.getElementById("Languages");
let lan_btn = document.getElementById("lang-btn");

lan_btn?.addEventListener("click", () => {
  lang!.classList.toggle("hide");
});
let Award = document.getElementById("Award");
let Awa_btn = document.getElementById("Awa-btn");

Awa_btn?.addEventListener("click", () => {
  Award!.classList.toggle("hide");
});

let About = document.getElementById("about");
let about_btn = document.getElementById("abt-btn");

about_btn?.addEventListener("click", () => {
  About!.classList.toggle("hide");
});
let experience = document.getElementById("experience");
let exp_btn = document.getElementById("exp-btn");

exp_btn?.addEventListener("click", () => {
  experience!.classList.toggle("hide");
});

let education = document.getElementById("education");
let edu_btn = document.getElementById("edu-btn");

edu_btn!.addEventListener("click", () => {
  education!.classList.toggle("hide");
});
let print_btn = document.getElementById("print-btn");
print_btn!.addEventListener("click", () => {
  window.print();
});
