
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').textContent = initPerson.firstName;
    document.querySelector('#surnameOutput').textContent = initPerson.Surname;
    document.querySelector('#genderOutput').textContent = initPerson.gender;
    document.querySelector('#patronomicOutput').textContent = initPerson.patronomic;
    document.querySelector('#professionOutput').textContent = initPerson.profession;
    document.querySelector('#birthYearOutput').textContent = initPerson.birthYear;
};