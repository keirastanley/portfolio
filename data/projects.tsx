import { projectArrType } from "./types"

export const topics = [
    "Backend",
    "React.js",
    "React Router", 
    "JavaScript", 
    "Figma", 
    "API", 
    "SQL", 
    "Database", 
    "Next.js", 
    "TypeScript", 
    "MongoDB", 
    "Teamwork and conflict resolution", 
    "Spotify API", 
    "Authorisation flow"
]

export const projects: projectArrType = [
    {
        name: "Personal dashboard",
        description: "My personal dream homepage, combining organisation tools with sources of inspiration.",
        collaborators: [],
        images: ["/images/personal_dashboard/main/personaldashboard1.png", "/images/personal_dashboard/main/personaldashboard2.png", "/images/personal_dashboard/main/personaldashboard3.png"],
        link: "https://keirastanley.github.io/personal-dashboard/",
        repo: "https://github.com/keirastanley/personal-dashboard",
        todos: [
            "Make all CSS fully responsive",
            "Make API routes for things to do, idea generator, favourited links and goals",
            "Swap hard-coded images for art from my database", "Flesh out about and help pages"
        ],
        tags: [
            { 
                topic: "Backend", 
                info: 
                { 
                    text: "The backend for my personal dashboard was built using Express to interact with a database I have hosted on ElephantSQL. My backend is fully deployed with Render and currently supports GET, POST and DELETE reuqests to my poem and art databases.", 
                    images: [""] 
                } 
            },
            { 
                topic: "React.js", 
                info: 
                { 
                    text: "The frontend was built entirely with React, utilising useReducer for handling multiple state changes in complex areas such as the goals and tasks sections which include adding and removing entries, sorting algorithms (by name, date, deadline, progress, etc.), and states like starred or completion status.", 
                    images: [""] 
                } 
            }, 
            { 
                topic: "React Router", 
                info: 
                { 
                    text: "I implemented React Router for multipage functionality in my app, including routes for different pages, a custom component for displaying a 404 message for non-existent routes, and an error element for displaying error messages.", 
                    images: [""] 
                } 
            },
            { 
                topic: "JavaScript", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            },
            { 
                topic: "Figma", 
                info: 
                { 
                    text: "", 
                    images: [
                        "/images/personal_dashboard/figma/personal_dashboard_figma1.png", 
                        "/images/personal_dashboard/figma/personal_dashboard_figma2.png"
                    ] 
                } 
            },
            { 
                topic: "API", 
                info: 
                { 
                    text: "My personal dashboard has two API routes, one for poems and one for artwork. The homepage's poem generator pulls random poems from a poem API and allows users to save them to their reading list with a POST request to my API, adding the poem's details to a table in my ElephantSQL hosted database. The artwork was sourced from the Met Museum's API through searches for specific terms, like Impressionism, Fauvism, Monet, etc. and added to another table in the same database. The frontend's reading list and gallery make GET requests to display all poems and artwork, and there is also a DELETE route for the reading list to remove any unwanted poems.", 
                    images: [""] 
                } 
            },
            { 
                topic: "SQL", 
                info: 
                { 
                    text: "I used ElephantSQL to host my database, so my GET, POST and DELETE requests call functions that inject SQL queries into my database.", 
                    images: [""] 
                } 
            },
            { 
                topic: "Database", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            }
        ]
    },
    {
        name: "Cheers",
        description: "An app to find the perfect bar. This was a team project. My main focuses were React.js and the backend.",
        collaborators: [
            { name: "Rhona MacKay", link: "" },
            { name: "Suzi Clark", link: "" },
            { name: "Anthony Akinfoyeku", link: "" },
            { name: "Greg Rutnam", link: "" },
            { name: "Faseeh Ahmed", link: "" }
        ],
        images: [
            "/images/cheers/main/cheers1.png", 
            "/images/cheers/main/cheers2.png", 
            "/images/cheers/main/cheers3.png", 
            "/images/cheers/main/cheers4.png"
        ],
        link: "https://cheersy.vercel.app",
        repo: "https://github.com/SchoolOfCode/bc13_final-project_front-end-beast-code",
        todos: [],
        tags: [
            { 
                topic: "Backend", 
                info: 
                { 
                    text: "Our backend was built with Express, dotenv for secure database credentials storage, and cors for unrestricted frontend access. We used MongoDB as our database and have 4 API routes: to get all bars, all bars within 20000m of the user-entered location, get a bar by id and return filtered search results from the frontend.", 
                    images: [
                        "/images/cheers/backend/cheersbackend1.png", 
                        "/images/cheers/backend/cheersbackend2.png"
                    ] 
                } 
            },
            { 
                topic: "React.js", 
                info: 
                { 
                    text: "The frontend was built using Next.js and React. This was one of the areas where I contributed most heavily to the project. My main focus was the results page, including the filter dropdowns and their functionality, the advanced filter panel, the fetch requests to the backend, displaying the results of the request on the screen and some CSS.", 
                    images: [""] 
                } 
            }, 
            { 
                topic: "Next.js", 
                info: 
                { 
                    text: "We used Next.js for building a multi-page site. I helped to initialize the Next app with Typescript, set up routes in the pages folder and found a way to pass props between pages with the Link component and its href property, to pass the user's location entered in the landing page to the results page to be put in the fetch request.", images: [""] 
                } 
            }, 
            { 
                topic: "TypeScript", 
                info: 
                { 
                    text: "We decided to use TypeScript because it provides improved code readability and maintainability by catching errors early in the development process and allows for better collaboration among team members, as TypeScript's type system makes it easier for developers to understand the codebase. We created a types.tsx file to store our custom types and imported them as needed.", 
                    images: [""] 
                } 
            },
            { 
                topic: "API", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            },
            { 
                topic: "MongoDB", 
                info: 
                { 
                    text: "We chose MongoDB for our database because of its geospatial query capabilities. Our main GET request uses the user's location coordinates as a query to return all results within 20000m. If the user applies any filters (such as Vibe, Venue or Rating), the selection is stored in an array, reformatted into a MongoDB query and inserted as an extra query.", 
                    images: [""] 
                } 
            }, 
            { 
                topic: "Teamwork and conflict resolution", 
                info: 
                { 
                    text: "My team and I collaborated remotely on Zoom, using Miro for brainstorming and information sharing, and Trello for sprint organization and task delegation. We had daily stand-ups, worked in pairs on separate branches, and had progress checks and afternoon energizers to boost morale. We handled disagreements and decision-making through group discussions and voting and were always able to come decisions that we could all stick to as a team.", 
                    images: [""] 
                } 
            }
        ]
    },
    {
        name: "Cyber-mix",
        description: "An app that makes use of the Spotify API to allow users to build playlists, eventually with the idea that they would be like digital mixtapes made for loved ones.",
        collaborators: [
            { name: "Greg Rutnam", link: "" }
        ],
        images: [
            "/images/cyber_mix/main/cybermix1.png", 
            "/images/cyber_mix/main/cybermix2.png", 
            "/images/cyber_mix/main/cybermix3.png", 
            "/images/cyber_mix/main/cybermix4.png", 
            "/images/cyber_mix/main/cybermix5.png", 
            "/images/cyber_mix/main/cybermix6.png"
        ],
        link: "",
        repo: "https://github.com/gregrutnam/playlistapp",
        todos: [
            "Deploy the backend to allow users to save their mixes",
            "Allow users to add comments, messages and dedications to their playlist",
            "Finish CSS"
        ],
        tags: [
            { 
                topic: "React.js", 
                info: 
                { 
                    text: "", 
                    images: [""]
                } 
            }, 
            { 
                topic: "React Router", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            },
            { 
                topic: "JavaScript", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            },
            { 
                topic: "Spotify API", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            },
            { 
                topic: "Authorisation flow", 
                info: 
                { 
                    text: "", 
                    images: [""]
                } 
            },
            { 
                topic: "Teamwork and conflict resolution", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            }
        ]
    },
    {
        name: "Trivia game",
        description: "A 2-player quiz game that makes use of a trivia API.",
        collaborators: [],
        images: [
            "/images/trivia_game/main/triviagame1.png", 
            "/images/trivia_game/main/triviagame2.png", 
            "/images/trivia_game/main/triviagame3.png", 
            "/images/trivia_game/main/triviagame4.png", 
            "/images/trivia_game/main/triviagame5.png", 
            "/images/trivia_game/main/triviagame6.png"
        ],
        link: "",
        repo: "https://github.com/keirastanley/trivia-game",
        todos: [
            "Allow for single-player functionality",
            "Allow users to select the category and difficulty"
        ],
        tags: [
            { 
                topic: "JavaScript", 
                info: 
                { 
                    text: "", 
                    images: [""] 
                } 
            }
        ]
    },
]