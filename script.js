function ubahMode() {
    let badanweb = document.body;
    badanweb.classList.toggle("dark-mode");
}

let daftarSkill = ["HTML", "CSS", "Java Script", "React", "Git", "Figma"];
let kotakSkill = document.getElementById("skill");

for (let i = 0; i < daftarSkill.length; i++) {
    kotakSkill.innerHTML += "<div>" + daftarSkill[i] + "</div>"
}
