 

(function( prime, $, kendo, undefined) {

    prime.menu_english = 
    [
        {
            text: "Home", imageUrl: "../content/shared/icons/sports/baseball.png"
        },
        {
            text: "Services", imageUrl: "../content/shared/icons/sports/golf.png",
            items: [
                { text: "Consulting", imageUrl: "../content/shared/icons/16/star.png",
                  items: [
                    { text: "IT Infrastructure Consulting", imageUrl: "../content/shared/icons/16/photo.png" },
                    { text: "Enterprise Architect Consulting", imageUrl: "../content/shared/icons/16/photo.png" },
                    { text: "Cloud Architect Consulting", imageUrl: "../content/shared/icons/16/photo.png" }
                  ]
                },
                { text: "APP Development", imageUrl: "../content/shared/icons/16/photo.png" },
                { text: "Big Data Analysis", imageUrl: "../content/shared/icons/16/photo.png" },
                { text: "Bioinformatics and Bio/Medical Images", imageUrl: "../content/shared/icons/16/video.png" }
            ]
        },
        {
            text: "Solutions", imageUrl: "../content/shared/icons/sports/swimming.png",
            items: [
                { text: "Intelligent City Solutions", imageUrl: "../content/shared/icons/16/star.png" },
                { text: "Intelligent Transportation Solutions", imageUrl: "../content/shared/icons/16/photo.png" }
            ]
        },
        {
            text: "Successful Cases", imageUrl: "../content/shared/icons/sports/snowboarding.png",
            items: [
                { text: "Case 1", imageUrl: "../content/shared/icons/16/photo.png" },
                { text: "Case 2", imageUrl: "../content/shared/icons/16/video.png" }
            ]
        },
        {
            text: "About", imageUrl: "../content/shared/icons/sports/snowboarding.png",
            items: [
                { text: "Company Overview", imageUrl: "../content/shared/icons/16/photo.png" },
                { text: "Who We Are", imageUrl: "../content/shared/icons/16/video.png" },
                { text: "What We Believe", imageUrl: "../content/shared/icons/16/photo.png" },
                { text: "What We Do", imageUrl: "../content/shared/icons/16/video.png" },
                { text: "Contact Us", imageUrl: "../content/shared/icons/16/video.png" }
            ]
        }
    ];

}(window.prime = window.prime || {}, jQuery, kendo ));