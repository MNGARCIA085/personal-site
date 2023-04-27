const data = [
    {
        'id':1,
        'image':'https://angular.io/assets/images/logos/angular/shield-large.svg',
        'link':'https://www.udemy.com/course/angular-fernando-herrera/',
        'name':'Angular: de 0 a experto',
        'certificate':'https://www.udemy.com/certificate/UC-d22bbf60-1b18-41d0-b45b-a06c05d96e19/',
        'tuthor':'Fernando Herrera',
    },
    {
        'id':2,
        'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        'link':'https://www.udemy.com/course/react-redux/',
        'name':'Modern react with redux',
        'certificate':'https://www.udemy.com/certificate/UC-6a3c9ac1-bf87-4a38-b116-22386044560e/',
        'tuthor':'Stephen Grider',
    },
    {
        'id':3,
        'image':'https://miro.medium.com/max/1400/1*XOMTPWTpDLypkp079p9XXg.png',
        'link':'https://www.udemy.com/course/solid-design/',
        'name':'SOLID Principles',
        'certificate':'https://www.udemy.com/certificate/UC-b21f0137-fa02-4f4b-b850-f2b45a5c32cc/',
        'tuthor':'Sujith George',
    },
    
    {
        'id':4,
        'image':'data:image/png;base64,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',
        'link':'https://www.coursera.org/professional-certificates/google-project-management',
        'name':'Google Project Management', 
        'certificate':'https://coursera.org/share/fe9739bebe353b6e0df6d63f5da5a141',
        'tuthor':'Google',
    },
    {
        'id':5,
        'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        'link':'https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/',
        'name':'Complete NodeJS Developer',
        'certificate':'https://www.udemy.com/certificate/UC-ab846ff1-6080-465a-a8ae-1658995f37d9/',
        'tuthor':'From 0 to Mastery',
    },
    
    {
        'id':6,
        'image':'https://pbs.twimg.com/profile_images/1493905126670675969/y_hQBo95_400x400.jpg',
        'link':'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer',
        'name':'IBM Full Stack Cloud Developer',
        'certificate':'https://coursera.org/share/d0a65d3be23a4e091a7ec8fb33bae951',
        'tuthor':'IBM',
    },
    {
        'id':7,
        'image':'https://pbs.twimg.com/profile_images/1493905126670675969/y_hQBo95_400x400.jpg',
        'link':'https://www.coursera.org/professional-certificates/ai-engineer',
        'name':'IBM AI Engineering',
        'certificate':'https://coursera.org/share/f8919915a860021569a6e5db275fcb8b',
        'tuthor':'IBM',
    },
    {
        'id':8,
        'image':'https://pbs.twimg.com/profile_images/1493905126670675969/y_hQBo95_400x400.jpg',
        'link':'https://www.coursera.org/specializations/applied-data-science',
        'name':'IBM Data Science',
        'certificate':'https://coursera.org/share/d74710e529a045ef2f6ba55c4e05f70d',
        'tuthor':'IBM',
    },
    {
        'id':9,
        'image':'https://www.atriainnovation.com/wp-content/uploads/2021/02/portada.jpg',
        'link':'https://www.coursera.org/specializations/deep-learning',
        'name':'Deep Learning AI',
        'certificate':'https://coursera.org/share/d74710e529a045ef2f6ba55c4e05f70d',
        'tuthor':'Deep Learning AI (Andrew Ng)',
    },
    {
        'id':10,
        'image':'https://avatars.githubusercontent.com/u/18133?s=200&v=4',
        'link':'https://www.coursera.org/learn/version-control-with-git',
        'name':'Version Control with GIT',
        'certificate':'https://coursera.org/share/d0f8582e9f4cac592e5b46ca73edd1de',
        'tuthor':'Atlassian',
    },
    {
        'id':11,
        'image':'https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png',
        'link':'https://www.udemy.com/course/sql-and-postgresql/',
        'name':'SQL and PostgreSQL: The complete developers guide',
        'certificate':'https://www.udemy.com/certificate/UC-00f5a066-fb89-4386-8b1b-7205fc464ac2/',
        'tuthor':'Stephen Grider',
    },
    {
        'id':12,
        'image':'https://i0.wp.com/prometeusgs.com/wp-content/uploads/2021/06/deep-learning.jpg?fit=1299%2C559&ssl=1',
        'link':'https://www.coursera.org/specializations/generative-adversarial-networks-gans',
        'name':'Generativa Adversarial Networks (GANs)',
        'certificate':'https://www.coursera.org/account/accomplishments/specialization/7H27NYS9RXXD',
        'tuthor':'Deep Learning AI (Sharon Zou)',
    }
    
]


export default data;









