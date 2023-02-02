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
        name: "Cheers",
        description: "A site to help you find the perfect bar. This was a full-stack team project completed in 3 sprints over 4 weeks.",
        collaborators: [
            { name: "Rhona MacKay", link: "https://github.com/rhonamackay" },
            { name: "Suzi Clark", link: "https://github.com/Suzi-Clark" },
            { name: "Remi Akinfoyeku", link: "https://github.com/remiyeku" },
            { name: "Greg Rutnam", link: "https://github.com/gregrutnam" },
            { name: "Faseeh Ahmed", link: "https://github.com/faseehahmed1" }
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
                    text: "We decided to use TypeScript because it provides improved code readability and maintainability by catching errors early in the development process and allows for better collaboration among team members. Using TypeScript helped us catch some formatting errors in our database that might otherwise have been missed. We created a types.tsx file to store our custom types and imported them as needed.", 
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
                topic: "Teamwork and agile methodology", 
                info: 
                { 
                    text: "My team and I collaborated remotely on Zoom, using Miro for brainstorming and information sharing, and Trello for sprint organization and task delegation. We incorporated the principles of Agile methodology into our sprint planning, allowing us to respond to user feedback and changing requirements as needed. We had daily stand-ups in the morning and retros in the afternoon to make sure we were staying on track. We worked in pairs on separate branches and then reviewed finished code in groups of 3 because we had set up git branch protection to ensure that no one could push to main without 2 approvals.", 
                    images: [""] 
                } 
            },
            { 
                topic: "Testing", 
                info: 
                { 
                    text: "Our team adopted a test-driven development approach, utilizing Jest and the React Testing Library to test that each page was rendering the components we expected and Cypress for end-to-end testing. We followed the practice of writing tests before building components, resulting in comprehensive test coverage and ensuring that the site functions as desired.", 
                    images: [""] 
                } 
            }
        ]
    },
    {
        name: "Personal dashboard",
        description: "My personal homepage, combining organisation tools with sources of inspiration.",
        collaborators: [],
        images: ["/images/personal_dashboard/main/personaldashboard1.png", "/images/personal_dashboard/main/personaldashboard2.png", "/images/personal_dashboard/main/personaldashboard3.png"],
        link: "https://personal-dashboard-keirastanley.vercel.app",
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
        name: "Cyber-mix",
        description: "An app that makes use of the Spotify API to allow users to build and manage playlists that they can share with others.",
        collaborators: [
            { name: "Greg Rutnam", link: "https://github.com/gregrutnam"  }
        ],
        images: [
            "/images/cyber_mix/main/cybermix1.png", 
            "/images/cyber_mix/main/cybermix2.png", 
            // "/images/cyber_mix/main/cybermix3.png", 
            "/images/cyber_mix/main/cybermix4.png", 
            "/images/cyber_mix/main/cybermix5.png", 
            "/images/cyber_mix/main/cybermix6.png",
            "/images/cyber_mix/main/cybermix7.png", 
            "/images/cyber_mix/main/cybermix8.png"
        ],
        link: "https://playlistapp-nine.vercel.app",
        repo: "https://github.com/gregrutnam/playlistapp",
        todos: [
            "Allow users to log out of Spotify if desired", 
            "Allow users to add comments to songs added to their playlists",
            "Allow users to delete a playlist both from their Spotify account and from our database",
            "Update the database to include columns for the playlist's images and external url",
            "Finish the design and CSS for all pages"
        ],
        tags: [
            { 
                topic: "React.js", 
                info: 
                { 
                    text: "We used React.js to create a dynamic and interactive user interface, using reusable components for adding songs, displaying tracks and handling authorising Spotify users the view the playlists you make on the site.", 
                    images: [""]
                } 
            }, 
            { 
                topic: "React Router", 
                info: 
                { 
                    text: "The multipage functionality for this website was implemented using React Router. Users can log in with their Spotify account and navigate to the landing page where they can create and manage playlists, add songs, and view their existing playlists. Each playlist's pathname is conditionally rendered using its unique ID, eliminating the need for separate pages for each playlist.", 
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
                topic: "Spotify Authorisation flow", 
                info: 
                { 
                    text: "We implemented an authorization flow in our website that controlled access to Spotify's API. On our landing page, users are prompted to log in with their Spotify account where they can grant our website permission to access their Spotify account with the appropriate scopes. We then use the access token provided by Spotify to authenticate the user and make authorized API calls on their behalf to create, update, and delete playlists on their Spotify account.", 
                    images: [""]
                } 
            },
            { 
                topic: "Authorisation", 
                info: 
                { 
                    text: "When creating a new playlist, users can give access to other Spotify users by searching for their username. A fetch request is made to GET that user's details using Spotify's API. If successful, the user's details are displayed and can be confirmed for access. If the request returns a 404, the user is prompted to enter a valid Spotify username. After the playlist is created, the usernames of the creator and any granted users are added to the 'access' column of our database, allowing only those users to view the playlist when visiting the 'My mixes' page on our site.", 
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
            },
        ]
    },
    {
        name: "Trivia game",
        description: "A throwback to my first JavaScript project - a 2-player quiz game that makes use of a trivia API.",
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