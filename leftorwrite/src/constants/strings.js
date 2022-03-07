const strings = {
    name: "Left or Write",
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
    }
}
export default strings