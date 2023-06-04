const persons = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
    ];
    
    //Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
    const new_persons = persons.filter(person => person.age > 30);
    console.log(new_persons);


    //Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
      const javascriptBilenKisi = persons.filter(person => person.languages.includes("JavaScript"));
      console.log(javascriptBilenKisi);
      