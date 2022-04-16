const strings = {
    name: "Left or Write",
    defaultUsername: "test",
    container: {
        i: "intro",
        r: "reader",
        a: "author"
    },
    tabs: {
        read: [
            {id: "recent", name: "Recently Updated"}, 
            {id: "bytitle", name: "All Stories by Title"},
            {id: "bytag", name: "Search by Tag"}, 
            {id: "byauthor", name: "Search by Author"},
            {id: "favorites", name: "Favorite Stories"}
        ],
        writeAll: [
            {id: "recent", name: "Recently Edited"},
            {id: "published", name: "Published"},
            {id: "unpublished", name: "Unpublished"},
            {id: "settings", name: "Profile Settings"}
        ],
        writeOne: [
            {id: "storysettings", name: "Story Settings"},
            {id: "storymap", name: "Story Map"},
            {id: "recentpages", name: "Recently Edited"}, 
            {id: "unfinished", name: "Unfinished Writing"}, 
            {id: "tbcs", name: "TBC Pages"}, 
            {id: "unlinked", name: "Unlinked Pages"},
            {id: "orphans", name: "Orphan Pages"}
        ]
    },
    searchBools: {
        and: "AND",
        or: "OR",
        not: "NOT"
    },
    warnings: {
        chooseNotToWarn: "Choose Not To Warn", 
        violence: "Violence/Gore", 
        characterDeath: "Character Death", 
        nsfw: "Not Safe For Work", 
        nonConsent: "NonConsent", 
        profanity: "Profanity"
    },
    storyButtons: {
        saveChanges: "Save Changes", 
        viewStory: "View Story", 
        createNewPage: "Create New Page", 
        deleteStory: "Delete Story"
    },
    createUser: {
        message: "Please create a unique username. Username must be between 3 and 50 characters long.",
        label: "Username: "
    },
    login: "Log In",
    logout: "Log Out",
    loginMsg: "You are not logged in.",
    hello: "Hello, ",
    introPage: {
        choose: "Which\nwill\nyou\nchoose?",
        blurb: "Left or Write is ....   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    formlabels: {
        story: {
            title: "Story Title: "
        },
        page: {
            title: "Page Title: ",
            content: "Page Content: ",
            finished: "Is this page finished? Check the box to mark the page content as finished. You can easily see all unfinished pages when you edit your story."
        }
    },
    routes: {
        server: 'http://localhost:3001',
        user: '/user',
        login: '/login',
        auth: '/oauth-callback',
        logout: '/logout',
        story: '/story',
        page: '/page',
        create: '/create',
        update: '/update',
        delete: '/delete',
        allPages: '/allpages', 
        publish: '/publish',
        tagsByCount: '/bycount'
    },
    fRoutes: {
        home: "/",
        newUser: "/newuser",
        dashboard: "/dashboard",
        writes: "/write/story/:storyid",
        writep: "/write/page/:pageid",
        read: "/read",
        readp: "/read/page/:pageid",
    },
    errors: {
        noLogin: "Sorry, you need to be logged in to do that.",
        username: "Sorry, that username won't work. Please check the restrictions and try again.",
        default: "Sorry, something went wrong."
    }
}
export default strings