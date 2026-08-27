const activities = [

    {
        title: "Start a personal project",
        description: "Build something you're genuinely interested in. It could become a portfolio piece, extracurricular, or something you're proud of.",
        interests: ["business", "technology", "creative", "learning"],
        moods: ["productive", "creative"],
        energy: ["medium", "high"],
        time: ["30min", "1hour", "afternoon", "days"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["medium", "high"],
        goals: ["learning", "productive_goal", "future", "extracurricular"],
        future: true,
        unexpected: false
    },

    {
        title: "Try a photography challenge",
        description: "Take 10 photos based on one theme such as reflections, shadows, colours, textures, or interesting architecture.",
        interests: ["photography", "creative", "art"],
        moods: ["creative", "fun"],
        energy: ["low", "medium", "high"],
        time: ["15min", "30min", "1hour"],
        social: ["alone", "friends"],
        location: ["anywhere", "outside"],
        cost: ["free"],
        effort: ["low", "medium"],
        goals: ["fun_goal", "learning", "productive_goal"],
        future: true,
        unexpected: false
    },

    {
        title: "Learn something completely random",
        description: "Choose a topic you've never studied and spend 30 minutes learning about it.",
        interests: ["learning", "science", "technology", "history"],
        moods: ["productive", "fun"],
        energy: ["low", "medium"],
        time: ["15min", "30min", "1hour"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["low", "medium"],
        goals: ["learning", "productive_goal", "future"],
        future: true,
        unexpected: true
    },

    {
        title: "Make something with your hands",
        description: "Try crafting, painting, jewelry-making, decorating, or creating something completely from scratch.",
        interests: ["creative", "art", "fashion"],
        moods: ["creative", "relax"],
        energy: ["low", "medium"],
        time: ["30min", "1hour", "afternoon"],
        social: ["alone", "friends", "family"],
        location: ["home", "anywhere"],
        cost: ["free", "cheap"],
        effort: ["low", "medium"],
        goals: ["fun_goal", "learning", "relax_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Plan a day out",
        description: "Pick somewhere you've never been and create a mini adventure around it.",
        interests: ["travel", "food", "fashion", "photography"],
        moods: ["fun", "social"],
        energy: ["medium", "high"],
        time: ["afternoon", "days"],
        social: ["friends", "family"],
        location: ["outside"],
        cost: ["cheap", "money"],
        effort: ["medium"],
        goals: ["fun_goal", "learning"],
        future: false,
        unexpected: true
    },

    {
        title: "Start learning about money",
        description: "Learn the basics of budgeting, saving, investing, credit, or how businesses make money.",
        interests: ["business", "money", "learning"],
        moods: ["productive"],
        energy: ["low", "medium"],
        time: ["15min", "30min", "1hour"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["low", "medium"],
        goals: ["learning", "productive_goal", "future"],
        future: true,
        unexpected: false
    },

    {
        title: "Make a new playlist",
        description: "Create a playlist around a specific mood, memory, season, or imaginary movie soundtrack.",
        interests: ["music", "creative"],
        moods: ["fun", "relax", "creative"],
        energy: ["low", "medium"],
        time: ["15min", "30min"],
        social: ["alone", "friends"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["low"],
        goals: ["fun_goal", "relax_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Volunteer somewhere",
        description: "Find a local organization where you could help out and gain experience while doing something useful.",
        interests: ["community", "learning", "business"],
        moods: ["productive", "social"],
        energy: ["medium", "high"],
        time: ["afternoon", "days"],
        social: ["people", "friends"],
        location: ["outside"],
        cost: ["free"],
        effort: ["medium", "high"],
        goals: ["future", "extracurricular", "productive_goal"],
        future: true,
        unexpected: false
    },

    {
        title: "Start a mini business",
        description: "Come up with a simple product or service you could realistically sell and create a mini business plan.",
        interests: ["business", "money", "creative", "fashion"],
        moods: ["productive", "creative"],
        energy: ["medium", "high"],
        time: ["1hour", "afternoon", "days"],
        social: ["alone", "friends"],
        location: ["home", "anywhere"],
        cost: ["free", "cheap"],
        effort: ["medium", "high"],
        goals: ["money_goal", "future", "extracurricular", "productive_goal"],
        future: true,
        unexpected: false
    },

    {
        title: "Have a movie night",
        description: "Pick a movie you've never seen, make a snack, get comfortable, and have a proper movie night.",
        interests: ["anything"],
        moods: ["fun", "relax"],
        energy: ["low", "medium"],
        time: ["1hour", "afternoon"],
        social: ["alone", "friends", "family"],
        location: ["home"],
        cost: ["free", "cheap"],
        effort: ["low"],
        goals: ["fun_goal", "relax_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Try a new recipe",
        description: "Find a recipe you've never made before and challenge yourself to make it from scratch.",
        interests: ["food", "creative"],
        moods: ["creative", "fun", "productive"],
        energy: ["medium", "high"],
        time: ["30min", "1hour", "afternoon"],
        social: ["alone", "friends", "family"],
        location: ["home"],
        cost: ["cheap", "money"],
        effort: ["medium"],
        goals: ["fun_goal", "learning"],
        future: false,
        unexpected: false
    },

    {
        title: "Create a vision board",
        description: "Make a digital or physical vision board for the person you want to become and the things you want to accomplish.",
        interests: ["creative", "art", "fashion", "writing"],
        moods: ["creative", "relax"],
        energy: ["low", "medium"],
        time: ["30min", "1hour"],
        social: ["alone", "friends"],
        location: ["home"],
        cost: ["free", "cheap"],
        effort: ["low", "medium"],
        goals: ["future", "productive_goal", "relax_goal"],
        future: true,
        unexpected: false
    },

    {
        title: "Go on a photo walk",
        description: "Take your camera or phone and explore your neighbourhood while looking for interesting things to photograph.",
        interests: ["photography", "nature", "creative"],
        moods: ["creative", "fun", "relax"],
        energy: ["medium", "high"],
        time: ["30min", "1hour", "afternoon"],
        social: ["alone", "friends", "family"],
        location: ["outside"],
        cost: ["free"],
        effort: ["low", "medium"],
        goals: ["fun_goal", "learning", "relax_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Learn a new language",
        description: "Learn 10 useful words and phrases in a language you've always been curious about.",
        interests: ["learning", "writing"],
        moods: ["productive"],
        energy: ["low", "medium"],
        time: ["15min", "30min", "1hour"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["low", "medium"],
        goals: ["learning", "future", "productive_goal"],
        future: true,
        unexpected: true
    },

    {
        title: "Declutter and redesign your room",
        description: "Choose one area of your room, clean it out, reorganize it, and give it a small makeover.",
        interests: ["creative", "art", "fashion"],
        moods: ["productive"],
        energy: ["medium", "high"],
        time: ["30min", "1hour", "afternoon"],
        social: ["alone", "family"],
        location: ["home"],
        cost: ["free", "cheap"],
        effort: ["medium", "high"],
        goals: ["productive_goal", "fun_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Start journaling",
        description: "Write about what's happening in your life, what you're thinking about, or where you want to be a year from now.",
        interests: ["writing", "creative"],
        moods: ["relax", "productive"],
        energy: ["low", "medium"],
        time: ["15min", "30min"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["low"],
        goals: ["relax_goal", "future", "productive_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Try a new workout",
        description: "Put on some music and try a workout, stretching routine, dance workout, or a completely new physical activity.",
        interests: ["fitness", "music"],
        moods: ["fun", "productive"],
        energy: ["medium", "high"],
        time: ["15min", "30min", "1hour"],
        social: ["alone", "friends"],
        location: ["home", "outside"],
        cost: ["free"],
        effort: ["medium", "high"],
        goals: ["fun_goal", "productive_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Create something for your future self",
        description: "Make a plan, portfolio piece, personal website, project, or skill that future-you will thank you for.",
        interests: ["business", "technology", "writing", "creative", "learning"],
        moods: ["productive"],
        energy: ["medium", "high"],
        time: ["1hour", "afternoon", "days"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["medium", "high"],
        goals: ["future", "extracurricular", "learning", "productive_goal"],
        future: true,
        unexpected: false
    },

    {
        title: "Make a random Wikipedia adventure",
        description: "Start with a random topic and follow interesting links until you discover something completely unexpected.",
        interests: ["learning", "history", "science", "anything"],
        moods: ["fun", "creative"],
        energy: ["low", "medium"],
        time: ["15min", "30min", "1hour"],
        social: ["alone"],
        location: ["home", "anywhere"],
        cost: ["free"],
        effort: ["low"],
        goals: ["fun_goal", "learning"],
        future: false,
        unexpected: true
    },

    {
        title: "Design your dream room",
        description: "Create a mood board for your dream room using colours, furniture, decorations, and layouts you love.",
        interests: ["art", "creative", "fashion"],
        moods: ["creative", "relax"],
        energy: ["low", "medium"],
        time: ["30min", "1hour", "afternoon"],
        social: ["alone", "friends"],
        location: ["home"],
        cost: ["free"],
        effort: ["low", "medium"],
        goals: ["fun_goal", "creative", "relax_goal"],
        future: false,
        unexpected: false
    },

    {
        title: "Create a mini documentary",
        description: "Choose something interesting around you and make a short video telling its story.",
        interests: ["photography", "creative", "technology", "writing"],
        moods: ["creative", "productive"],
        energy: ["medium", "high"],
        time: ["1hour", "afternoon", "days"],
        social: ["alone", "friends", "family"],
        location: ["anywhere", "outside"],
        cost: ["free"],
        effort: ["medium", "high"],
        goals: ["learning", "productive_goal", "future"],
        future: true,
        unexpected: true
    }

];
