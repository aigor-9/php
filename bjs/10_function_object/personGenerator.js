/*const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Олег",
            "id_12": "Георгий",
            "id_13": "Денис",
            "id_14": "Павел",
            "id_15": "Сергей",
            "id_16": "Борис"
        }
    }`,
    firstNameFemaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "Мария",
            "id_2": "Наталья",
            "id_3": "Ирина",
            "id_4": "Дарья",
            "id_5": "Анастасия",
            "id_6": "Марина",
            "id_7": "Анна",
            "id_8": "Алевтина",
            "id_9": "Инна",
            "id_10": "Полина",
            "id_11": "Ольга",
            "id_12": "Яна",
            "id_13": "Олеся",
            "id_14": "Юлия",
            "id_15": "Ангелина",
            "id_16": "Эльвира"
        }
    }`,
    professionMaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "программист",
            "id_2": "плотнок",
            "id_3": "слесарь",
            "id_4": "машинист",
            "id_5": "пилот",
            "id_6": "слесарь",
            "id_7": "агроном",
            "id_8": "сантехник",
            "id_9": "педагог",
            "id_10": "актер"
            "id_11": "хирург",
            "id_12": "спасатель",
            "id_13": "депутат",
            "id_14": "адвокат",
            "id_15": "инженер",
            "id_16": "пекарь"
        }
    }`,
    professionFemaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "педагог",
            "id_2": "актриса",
            "id_3": "дизайнер",
            "id_4": "визажист",
            "id_5": "парикмахер",
            "id_6": "косметолог",
            "id_7": "стамотолог",
            "id_8": "хареограф",
            "id_9": "повар",
            "id_10": "проводник",
            "id_11": "вахтер",
            "id_12": "администратор",
            "id_13": "менеджер",
            "id_14": "искусствовед",
            "id_15": "химик",
            "id_16": "астроном"
        }
    }`,

    
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomGender: function() {

        return this.randomIntNumber() === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;

        console.log(this.randomGender());
    },


    randomFirstName: function(gender) {

        const json = gender === this.GENDER_MALE ? this.firstNameMaleJson : this.firstNameFemaleJson;
        return this.randomValue(json);

        console.log(this.randomFirstName());
    },


    randomSurname: function(gender) {

        const surnameJson1 = this.randomValue(this.surnameJson);
        return gender === this.GENDER_MALE ? surnameJson1 : surnameJson1 + 'а'; 

    },


    randomPatronomic: function(gender) {

        const patronomic1 = this.randomValue(this.firstNameMaleJson);
        let patronomic2;
        if (gender === this.GENDER_MALE) {
            patronomic2 = patronomic1 + 'ович';
            if (patronomic1.slice(patronomic1.length - 2) === 'ий') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'ьевич';
            } else if (patronomic1 === 'Никита') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'ич';
            } else if (patronomic1 === 'Михаил') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'йлович';
            } else if (patronomic1.slice(patronomic1 - 2) === 'ей') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'евич';
            } else if (patronomic1 === 'Павел') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'лович';
        } else {
            patronomic2 = patronomic1 + 'овна';
            if (patronomic1.slice(patronomic1.length - 2) === 'ий') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'ьевна';
            } else if (patronomic1 === 'Никита') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'ична';
            } else if (patronomic1 === 'Михаил') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'йловна';
            } else if (patronomic1.slice(patronomic1 - 2) === 'ей') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'евна';
            } else if (patronomic1 === 'Павел') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'ловна';
            }
        }
        return patronomic2;
        }
    },

    randomProfession: function(gender) {

        const json = (gender === this.GENDER_MALE) ? this.professionMaleJson : this.professionFemaleJson;
        return this.randomValue(json);

    },


    randombirthYear: function() {

        return this.randomIntNumber(2005, 1950);
    },


    getPerson: function () {
        const gender = personGenerator.randomGender();
        this.person = {};
        this.person.gender = gender;// фамилии
        this.person.firstName = personGenerator.randomFirstName(gender);
        this.person.Surname = personGenerator.randomSurname(gender);
        this.person.patronomic = personGenerator.randomPatronomic(gender);
        this.person.profession = personGenerator.randomProfession(gender);
        this.person.birthYear = personGenerator.randombirthYear();
        return this.person;
    }
};*/




/////////////////

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Олег",
            "id_12": "Георгий",
            "id_13": "Денис",
            "id_14": "Павел",
            "id_15": "Сергей",
            "id_16": "Борис"
        }
    }`,
    firstNameFemaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "Мария",
            "id_2": "Наталья",
            "id_3": "Ирина",
            "id_4": "Дарья",
            "id_5": "Анастасия",
            "id_6": "Марина",
            "id_7": "Анна",
            "id_8": "Алевтина",
            "id_9": "Инна",
            "id_10": "Полина",
            "id_11": "Ольга",
            "id_12": "Яна",
            "id_13": "Олеся",
            "id_14": "Юлия",
            "id_15": "Ангелина",
            "id_16": "Эльвира"
        }
    }`,
    professionMaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "программист",
            "id_2": "плотник",
            "id_3": "слесарь",
            "id_4": "машинист",
            "id_5": "пилот",
            "id_6": "слесарь",
            "id_7": "агроном",
            "id_8": "сантехник",
            "id_9": "педагог",
            "id_10": "актер",
            "id_11": "хирург",
            "id_12": "спасатель",
            "id_13": "депутат",
            "id_14": "адвокат",
            "id_15": "инженер",
            "id_16": "пекарь"
        }
    }`,
    professionFemaleJson: `{  
        "count": 15,
        "list": {
            "id_1": "педагог",
            "id_2": "актриса",
            "id_3": "дизайнер",
            "id_4": "визажист",
            "id_5": "парикмахер",
            "id_6": "косметолог",
            "id_7": "стамотолог",
            "id_8": "хареограф",
            "id_9": "повар",
            "id_10": "проводник",
            "id_11": "вахтер",
            "id_12": "администратор",
            "id_13": "менеджер",
            "id_14": "искусствовед",
            "id_15": "химик",
            "id_16": "астроном"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomGender: function() {

        return this.randomIntNumber() === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },


    randomFirstName: function(gender) {

        const json = gender === this.GENDER_MALE ? this.firstNameMaleJson : this.firstNameFemaleJson;
        return this.randomValue(json);

    },


    randomSurname: function(gender) {

        const surnameJson1 = this.randomValue(this.surnameJson);
        return gender === this.GENDER_MALE ? surnameJson1 : surnameJson1 + 'а';

    },


    randomPatronomic: function(gender) {

        const patronomic1 = this.randomValue(this.firstNameMaleJson);
        let patronomic2;
        if (gender === this.GENDER_MALE) {
            patronomic2 = patronomic1 + 'ович';
            if (patronomic1.slice(patronomic1.length - 2) === 'ий') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'ьевич';
            } else if (patronomic1 === 'Никита') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'ич';
            } else if (patronomic1 === 'Михаил') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'йлович';
            } else if (patronomic1.slice(patronomic1 - 2) === 'ей') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'евич';
            } else if (patronomic1 === 'Павел') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'лович';
            } 
        } else {
            patronomic2 = patronomic1 + 'овна';
            if (patronomic1.slice(patronomic1.length - 2) === 'ий') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'ьевна';
            } else if (patronomic1 === 'Никита') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'ична';
            } else if (patronomic1 === 'Михаил') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'йловна';
            } else if (patronomic1.slice(patronomic1.length - 2) === 'ей') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 1) + 'евна';
            } else if (patronomic1 === 'Павел') {
                patronomic2 = patronomic1.slice(0, patronomic1.length - 2) + 'ловна';
            }
        }
        return patronomic2;
        
    },


    randomProfession: function(gender) {
;
        const json = (gender === this.GENDER_MALE) ? this.professionMaleJson : this.professionFemaleJson;
        return this.randomValue(json);

    },


    randombirthYear: function() {

        return this.randomIntNumber(2005, 1950);
    },


    getPerson: function () {
        const gender = this.randomGender();
        this.person = {};
        this.person.gender = gender;
        this.person.firstName = this.randomFirstName(gender);
        this.person.Surname = this.randomSurname(gender);
        this.person.patronomic = this.randomPatronomic(gender);
        this.person.profession = this.randomProfession(gender);
        this.person.birthYear = this.randombirthYear();
        return this.person;
    }
};