const diplomas = [
  {
    name: "Information and Technology",
    id: "3d-printing-and-design",
    modules: [
      {
        name: "C218 UI/UX Design for Apps",
        id: "3d-printing-metal",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module..",
        lecturer: {
          name: "Azhar Kamar",
          title: "Lecturer",
          org: "Republic Polytechnic.",
          bio: "Azhar Kamar has a keen eye for detail.",
        },
      },
      {
        name: "C346 Mobile App Development",
        id: "homebuilding-and-3d-printing",
        desc: "In this module, students will learn the basics of creating Android Applications..",
        lecturer: {
          name: "Derek Lee",
          title: "Lecturer",
          org: "Republic Polytechnic",
          bio: "Derek Lee has lots of experience in mobile app development.",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "ai-and-robotics",
    modules: [
      {
        name: "C237 Software Application Development",
        id: "automating-user-testing",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        lecturer: {
          name: "Hannah Lim",
          title: "Lecturer",
          org: "Republic Polytechnic",
          bio: "An experienced software developer with a keen eye for detail.",
        },
      },
      {
        name: "C237 Payment Technologies",
        id: "security-in-age-of-ai",
        desc: "This module introduces students to different payment technologies and systems.",
        lecturer: {
          name: "Magdalene Lim",
          title: "Lecturer",
          org: "Republic Polytechnic",
          bio: "An experienced developer.",
        },
      },
    ],
  },
];

export function getModule({ moduleId, diplomaId }) {
  return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}
