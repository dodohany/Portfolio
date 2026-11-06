/* ===== EDIT YOUR PROJECTS HERE =====
   Each project opens project.html?id=<id>.
   imgs   : screenshots inside assets/projects/ (add more files and list them here)
   stats  : [value, label] pairs
   reels  : view counts of selected reels
   url    : page link (leave "" to hide the button)
   logo   : (optional) logo file in assets/logos/, e.g. logo:"assets/logos/pixel.png"
   thumb  : (optional) full-size picture for the card instead of a logo
   logoBg : (optional) background color behind the logo, e.g. logoBg:"#ffffff"
*/
const PROJECTS=[
{id:"px",thumb:"assets/logos/px.webp",cls:"t-px",mark:"PX<br>Pixel Media",name:"Pixel Media",cat:"Marketing & Media Production",
 period:"September – October 2026 (2 months)",role:"Full Social Media Management & Content Production",url:"https://www.facebook.com/profile.php?id=61593843703164",
 challenge:"The page was newly created from scratch, requiring a complete content strategy and visual identity for its social media presence.",
 did:["Created and managed the page from scratch","Developed content plans and creative ideas","Created graphic designs and visual content","Wrote captions, marketing copy and video scripts","Managed content production, publishing and page communication","Executed the client’s monthly content requirements"],
 plan:["5 Reels per month","8 Graphic posts per month"],
 stats:[["15,752","Total views"],["3,560","Viewers"],["2.1K","3-second views"],["898","Content interactions"],["10h 37m","Watch time"],["0","Paid views"]],
 reels:[],ads:"No paid advertising campaigns.",note:"Facebook Insights, January 1 – November 6.",
 imgs:["assets/projects/px-1.webp","assets/projects/px-2.webp","assets/projects/px-3.webp"]},
{id:"mm",thumb:"assets/logos/mm.webp",cls:"t-mm",mark:"المتميزون",name:"Al Motamayezoon",cat:"Real Estate",
 period:"September – October 2026 (2 months)",role:"Full Page Management & Content Creation",url:"https://www.facebook.com/share/19GHhkgYcj/",
 challenge:"The page had been inactive for about 6 months, with no content publishing or paid advertising.",
 did:["Reactivated the page after 6 months of inactivity","Developed content ideas and monthly content plans","Created graphic designs and visual content","Wrote captions and marketing copy","Managed and executed the page’s content strategy","Handled customer inquiries and messages"],
 plan:["8 Posts per month","8 Reels per month"],
 stats:[["66,067","Total views"],["15,852","Viewers"],["15.7K","3-second views"],["1.5K","Content interactions"],["4d 19h","Watch time"],["100%","Organic views"]],
 reels:[],ads:"No paid advertising campaigns.",note:"Facebook Insights, January 1 – November 6.",
 imgs:["assets/projects/mm-1.webp","assets/projects/mm-2.webp"]},
{id:"nw",thumb:"assets/logos/nw.webp",cls:"t-nw",mark:"Nawara<br>Group",name:"Nawara Group",cat:"Real Estate",
 period:"1 month",role:"Full Social Media Management & Content Creation",url:"https://www.facebook.com/share/14uVJrprkvB/",
 challenge:"",
 did:["Managed the social media page end to end","Developed content ideas and content planning","Created graphic designs","Wrote captions and marketing copy","Prepared Reels scripts","Managed video editing and content publishing","Handled customer messages and inquiries","Managed client communication"],
 plan:["8 Graphic posts","8 Reels"],
 stats:[["66.1K","Best Reel views"],["9","Selected Reels"],["232.1K","Combined views (selected Reels)"]],
 reels:["66.1K","57.8K","32.8K","23.9K","18.7K","13.2K","8.3K","7.2K","4.1K"],ads:"",note:"Multiple Reels passed 50K views with strong organic visibility.",
 imgs:["assets/projects/nw-1.webp","assets/projects/nw-2.webp","assets/projects/nw-3.webp"]},
{id:"zz",thumb:"assets/logos/zz.webp",cls:"t-zz",mark:"Dr. Zeina<br>Zayed",name:"Dr. Zeina Zayed",cat:"Personal Branding – Education & Coaching",
 period:"1 year (still active)",role:"Full Social Media Management, Content Strategy & Community Management",url:"https://www.facebook.com/share/19er1ixaCB/",
 challenge:"",
 did:["Managed the Facebook page and daily operations","Developed content strategies and creative ideas","Wrote posts, captions and marketing content","Wrote Reels scripts and prepared video content ideas","Managed content scheduling and publishing","Handled comments and audience engagement","Maintained the page’s brand voice and consistency"],
 plan:[],
 stats:[["1.57M","Total views"],["604,744","Viewers"],["319,543","Organic views"],["1,250,453","Paid views"],["17.1K","3-second views"],["5.2K","Content interactions"],["2d 16h","Watch time"]],
 reels:[],ads:"Paid advertising was managed by another team member and ran for one month only. The rest of the period relied on organic content and audience engagement.",note:"Facebook Insights, January 1 – November 5.",
 imgs:["assets/projects/zz-1.webp","assets/projects/zz-2.webp"]},
{id:"pm",thumb:"assets/logos/pm.webp",cls:"t-pm",mark:"ProMedia",name:"ProMedia",cat:"Marketing, Media Production & Content Creation",
 period:"1 year (still active)",role:"Producer & Head of Departments",url:"",
 challenge:"",
 did:["Manage three departments: Video Editing, Graphic Design and Social Media Management","Run projects from planning to final delivery and coordinate workflows between departments","Distribute tasks, set priorities, review deliverables and keep quality and deadlines on track","Communicate directly with clients: briefs, feedback and revision requests","Develop content ideas, write captions, marketing copy and Reels scripts","Manage ProMedia’s social media presence and follow up on publishing and performance"],
 plan:[],
 stats:[["487,290","Total views"],["218,102","Viewers"],["87,276","Organic views"],["400,014","Paid views"],["21.4K","3-second views"],["2.2K","Content interactions"],["4 days","Watch time"]],
 reels:["23.8K"],ads:"",note:"Facebook Insights, January 1 – November 5.",
 imgs:["assets/projects/pm-1.webp"]},
{id:"to",thumb:"assets/logos/to.webp",cls:"t-to",mark:"Trip One",name:"Trip One",cat:"Hajj, Umrah & Travel Services",
 period:"4 months",role:"Content Creator & Client Relations Manager",url:"",
 challenge:"",
 did:["Developed content strategies and monthly content plans","Created content ideas tailored to the target audience","Wrote marketing posts, captions and Reels scripts","Prepared promotional campaigns and marketing concepts","Communicated directly with the client","Handled client requirements, feedback and approvals","Coordinated content revisions and delivery"],
 plan:[],
 stats:[["116,448","Total views"],["51,268","Viewers"],["7.5K","3-second views"],["2.3K","Content interactions"],["1d 15h","Watch time"],["0","Paid views"]],
 reels:["171.6K","141.7K","12.8K","5.4K"],ads:"No paid views recorded in the provided Insights.",note:"Facebook Insights, January 6 – January 11, as shown in the screenshot.",
 imgs:["assets/projects/to-1.webp","assets/projects/to-2.webp"]},
{id:"al",thumb:"assets/logos/al.webp",cls:"t-al",mark:"Dr. Abdel<br>Latif",name:"Dr. Abdel Latif",cat:"Personal Branding & Educational Content",
 period:"",role:"Content Creator & Scriptwriter",url:"",
 challenge:"",
 did:["Developed creative content ideas","Researched and selected relevant content topics","Wrote Reels scripts","Wrote social media posts and captions","Created content concepts tailored to the target audience","Developed educational and informative content"],
 plan:[],
 stats:[["796,349","Total views"],["119.4K","Reach"],["9.8K","Content interactions"],["660,160","Organic views"],["136,189","Paid views"]],
 reels:["41.6K","38.6K","37K","36.6K","34.9K"],ads:"",note:"Social media Insights, January 1 – November 5.",
 imgs:["assets/projects/al-1.webp","assets/projects/al-2.webp"]},
{id:"jo",thumb:"assets/logos/jo.webp",cls:"t-jo",mark:"Joo",name:"Joo Barbershop",cat:"Beauty, Grooming & Barbershop",
 period:"3 months (2025), multiple branches",role:"Content Creator, Social Media Manager & Client Relations",url:"",
 challenge:"",
 did:["Developed creative content ideas","Prepared video concepts and Reels ideas","Took part in content filming and production","Managed the social media page","Planned and organized content publishing","Followed up on page activity and audience engagement","Communicated directly with the client and followed up on feedback"],
 plan:[],
 stats:[["664,177","Total views"],["94.3K","3-second views"],["5.9K","Content interactions"],["18d 11h","Watch time"],["188,634","Organic views"],["475,543","Paid views"]],
 reels:["187.5K","168.4K","150.9K","79.7K","33.7K"],ads:"",note:"Facebook & Instagram Insights, January 10, 2025 – January 1, 2026.",
 imgs:["assets/projects/jo-1.webp","assets/projects/jo-2.webp"]}
];

/* helpers used by index.html and project.html */
function vis(p){return p.thumb?`<img class="thumb" src="${p.thumb}" alt="${p.name}">`:p.logo?`<img class="logo-img" src="${p.logo}" alt="${p.name}">`:`<span class="mark">${p.mark}</span>`}
function tst(p){return p.logoBg&&p.logo?` style="background:${p.logoBg}"`:""}
