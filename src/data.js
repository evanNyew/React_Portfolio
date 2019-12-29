import campGround from "./images/campground.jpg";
import powerApps from "./images/PowerApps.jpg";
import inProgress from "./images/inProgress.jpg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "hello",
      slug: "portfolio",
      status: "Done",
      num:1,
      featured: true,
      description:
        " A modern personal portfolio webpage that built for showcasing my projects and resume.",
      extras: [
        " - React",
        " - Contentful",
        " - Netlify"
      ],
      images: [
        {
          fields: {
            file: {
              url: inProgress
            }
          }
        },
        {
          fields: {
            file: {
              url: inProgress
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "CampGround",
      slug: "campground",
      num: 1,
      status: "Done",
      featured: true,
      desciption:
        "A modern webpage that allows user to view, log in, comment, rating on the details of campground.",
      extras: [
        " - NodeJs",
        " - ExpressJs",
        " - MongoDB",
        " - PassportJs",
        " - REST"
      ],
      images: [
        {
          fields: {
            file: {
              url: campGround
            }
          }
        },
        {
          fields: {
            file: {
              url: inProgress
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "PowerApps",
      slug: "powerapps",
      num: 1,
      status: 'Done',
      featured: true,
      description:
        "A mobile application that allows employee to complete task in just an application. THe function of this PowerApps include complete meeting room checklist, complete washroom checklist, show the status of washroom in each floor, check weather condition, update eveyday parking location and order food through company network. The data that collected in each request will stored in Microsoft Sharepoint Online with Microsoft Flow.",
      extras: [
        " - Microsoft PowerApps",
        " - Microsoft SharePoint Online",
        " - Microsoft Flow",
      ],
      images: [
        {
          fields: {
            file: {
              url: powerApps
            }
          }
        },
        {
          fields: {
            file: {
              url: inProgress
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Return 0",
      slug: "return-zero",
      num: 0,
      status: 'In Progress',
      featured: false,
      description:
        "A second hand trading platform that allows user to upload their item, view on others people item and trade their item online easily. This application will focus on student of Minnesota and currently it's in progress. ",
      extras: [
        " - ReactJs",
        " - MySQL"
      ],
      images: [
        {
          fields: {
            file: {
              url: inProgress
            }
          }
        },
        {
          fields: {
            file: {
              url: inProgress
            }
          }
        },
      ]
    }
  },
];
