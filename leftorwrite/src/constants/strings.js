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
            {id: "recent", name: "Recent Stories"}, 
            {id: "bytag", name: "By Tag"}, 
            {id: "byauthor", name: "By Author"}
        ],
        writeAll: [
            {id: "recent", name: "Recently Edited"},
            {id: "published", name: "Published"},
            {id: "unpublished", name: "Unpublished"},
            {id: "settings", name: "Profile Settings"}
        ],
        wrtieOne: [
            {id: "allpages", name: "All Pages in Use"}, 
            {id: "unlinked", name: "Unlinked Pages"}, 
            {id: "unfinished", name: "Unfinished Writing"}, 
            {id: "orphans", name: "Orphan Pages"}, 
            {id: "tbcs", name: "TBC Pages"},
            {id: "recentpages", name: "Recently Edited"}
        ]
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
        newUser: "/newuser",
        dashboard: "/dashboard",
        write: "/write",
        writep: "/write/page",
        read: "/read",
        readp: "read/page"
    },
    errors: {
        noLogin: "Sorry, you need to be logged in to do that.",
        username: "Sorry, that username won't work. Please check the restrictions and try again.",
        default: "Sorry, something went wrong."
    }
}
export default strings