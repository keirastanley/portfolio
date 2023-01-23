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
            "Make CSS fully responsive",
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
                    text: "The frontend was fully built in React. I used useReducer to handle the multiple state changes for certain complex areas such as my goals and things to do sections which need to handle adding and removing entries, different sorting algorithms (by name, date, deadline, progress etc.), states such as whether items are starred or their completion status etc.", 
                    images: [""] 
                } 
            }, 
            { 
                topic: "React Router", 
                info: 
                { 
                    text: "I used React Router to build multipage functionality into my app. As well as routes for the different pages, I also built a component to display a 404 message if users try to access any route not listed and an error element to display the appropriate error message if something else goes wrong.", 
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
                    text: "I designed the prototypes for my dashboard on Figma to help me plan the CSS and the different routes and functionality I would need for the site.", 
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
                    text: "My personal dashboard currently has 2 API routes - one for the poems and one for the artwork. The poem generator on the homepage pulls random poems from a poem API but if the user clicks on the heart, they're able to save a poem to their reading list. This makes a POST request to my API which inserts the poem's details into a table in my database hosted on ElephantSQL. The artwork was sourced from the Met Museum's API - I made a few searches for terms relevant to my interests such as Impressionism, Fauvism, Monet etc., and using a loop I added the results to another table in the same database. On the frontend, my reading list and gallery both make GET requests to display all the poems and artwork and there is also a DELETE route for the reading list which allows me to remove any poems I no longer want saved.", 
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
                    text: "Our backend was built using an Express app with dotenv to securely store our database credentials and cors to give our frontend access without being blocked. We used MongoDB to store our data and had 2 API routes, one to get all bars within 20000m of the location entered by the user and another to return the results of a subsequent search using the filters on the frontend.", 
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
                    text: "We used Next.js because we were building a multi-page site. I helped to initialise the Next app with Typescript and lay out the routes in the pages folder. After struggling for a while to determine how to pass props between pages, I discovered we could use the Link component and pass data through its href property. This allowed us to pass the user's location from the landing page to the results page to be inserted in the fetch request.", images: [""] 
                } 
            }, 
            { 
                topic: "TypeScript", 
                info: 
                { 
                    text: "We decided to use TypeScript because we were a group of 6 and thought it would help to keep everyone on the same page. We created a types.tsx file to store our custom types and imported them as needed. This allowed us to find errors in our data, such as a small typo in our database that led to an array being incorrectly formatted.", 
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
                    text: "We used MongoDB for our database because we wanted to leverage the geospatial queries MongoDB offers. Our main GET request after the user types in a location would insert that location's coordinates as a query and all results within 20000m of those coordinates would be returned. If the user applied any of our filters (such as Vibe, Venue or Rating), the user's selection would be stored in an array, reformatted into a MongoDB query in the backend and inserted as an extra query.", 
                    images: [""] 
                } 
            }, 
            { 
                topic: "Teamwork and conflict resolution", 
                info: 
                { 
                    text: "My team and I collaborated over zoom, using a Miro board to hold all our brainstorming and important infortmation and a Trello board to organise our sprints into tickets that could be delegated to each team member. We started each morning with a stand-up to discuss our intentions for the day. Then we'd split into pairs, each working on separate branches, merging to main at the end of the day. We met after lunch and before the end of the day for progress checks and always had an afternoon energiser to chat and play games together. We handled disagreements and decision-making through voting and were always able to come decisions that we could all stick to as a team.", 
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