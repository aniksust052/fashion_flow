import { createContext, useState } from 'react';
import './styles/styles.scss';
import './styles/response.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recent from "./components/Recent";
import Category from "./components/Category";
import FashionHistory from "./components/FashionHistory";
import Banner from "./components/Banner";
import Winter from "./components/Winter";
import RecentPostFashionGallery from './components/RecentPostFashionGallery';
import EditorsPick from './components/EditorsPick';
import Footer from './components/Footer';

export const ThemeContext = createContext(false);

const App =  () => {
    
    const [theme, setTheme] = useState(false);
    const cls = theme? " dark" : " light";

    const data = {
        head : {
            fashionFlowIcon : '/svgs/fashion-flow-icon.svg',
            searchIcon : '/svgs/search-icon.svg',
            loginIcon : '/svgs/login-icon.svg',
            modeChangeIcon : '/svgs/mode-change-icon.svg',
            log : 'Log In',
            mode : 'Light Mode',
            navBar : [
                'home', 'category', 'blog', 'author', 'about', 'contact'
            ] 
        },
        hero : {
            celebrity : {
                img : '/images/fashion021.jpg',
                btn1Txt : 'Women World',
                btn2Txt : 'Celebrity Style',
                title : 'Fashion Forward: Unleash Your Style in the Fashion Zone!',
                createdBy : 'By Anayatul Nayeem',
                time : {
                    month : 'April',
                    day : '04',
                    year : '2024'
                }
            },
            menAndWomenWorld : [
                {
                    img : '/images/image11.jpg',
                    btnTxt : 'Men World',
                    title : 'Spring Trends Unveiled: The Ultimate Fashion Forecast',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }
                },
                {
                    img : '/images/image7.jpg',
                    btnTxt : 'Women World',
                    title : 'From the Runway to Your Wardrobe: Must-Have Looks of the Season',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }
                }
            ],
        },
        recent : {
            headline : 'Recently Added',
            list : [
                {
                    img : '/images/image10.jpg',
                    title : `Spotlight: Who's Slying The Red Carpet Right Now?`,
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }
                },
                {
                    img : '/images/image77.jpg',
                    title : `Accessorize Like a Pro: Top Picks For Statement Pieces`,
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }
                },
                {
                    img : '/images/image1.jpg',
                    title : 'Fashion Hacks: Transform Your Old Cloths Into New Trends',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }
                },
                {
                    img : '/images/unsplash_TT.jpg',
                    title : 'Fashion Forward: Emerging Designers To Watch Out For',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }
                },
            ]
        },
        category : {
            headline : 'Categories',
            menuList : ['All', `Women's Fashion`, `Men's Fashion`, 'Fashion Trends', 'Beauty & Makeup'],
            btnTxt : 'Men World',
            title : 'Sustainable : Eco-Friendly Brands Making Waves',
            img : '/images/image22.jpg',
            list : [
                {
                    img : '/images/image9.jpg',
                    btnTxt : `Women's Fashion`,
                    title : 'Street Style Inspo: Trendsetting Looks from Around the Glob',
                },
                {
                    img : '/images/unsplash_7.jpg',
                    btnTxt : 'Men World',
                    title : 'Fashion Icons: Time;less Beauty and Style Through the Decades',
                },{
                    img : '/images/image1010.jpg',
                    btnTxt : `Women's Fashion`,
                    title : 'Beauty Beyond Size: Embracing Body Positivity in Fashion',
                },
            ],
            createdBy : 'By Anayatul Nayeem',
            time : {
                month : 'April',
                day : '04',
                year : '2024'
            },
            bannerImg : '/images/postx_banner.jpg'

        },
        fashionHistory : {
            headline : 'trending fashion history',
            btn1Txt : 'Men World',
            btn2Txt : 'Celebrity Style',
            bIcon : '/svgs/bday-icon.svg',
            hIcon : '/svgs/h-icon.svg',
            createdBy : 'By Anayatul Nayeem',
            time : {
                month : 'April',
                day : '04',
                year : '2024'
            },
            histories : [
                {
                    img : '/images/unsplash_TT1.jpg',
                    title : 'Future of Authenticity: Empowring Innovation through Tech...',
                    txt : `As the winter chill fades away, it's time to embrace the fresh and vibreant trends of the spring season. From 
                    breezy florals to bold pastels. Our fashion forecast unveils the...`
                },
                {
                    img : '/images/unsplash_KI.jpg',
                    title : 'The Power of Color: How to Rock the Hottest Shades of the Season',
                    txt : `From the Runway to Your Wardrobe: Must Have Looks of the Season Step into the world of high fashion as we 
                    bring the runway straight to your wardrobe. Our curated selection... `
                }
            ],
            catTitle : 'categories',
            categories : [
                {
                    category : 'Celebrity',
                    numOfPost : 9
                },
                {
                    category : 'Fashion News',
                    numOfPost : 1
                },
                {
                    category : `Men's Fashion`,
                    numOfPost : 7
                },
                {
                    category : 'Security Zone',
                    numOfPost : 2
                },
                {
                    category : 'Beauty & Makeup',
                    numOfPost : 7
                },{
                    category : 'Fashion for All',
                    numOfPost : 3
                },
                {
                    category : `Women's Fashion`,
                    numOfPost : 8
                }
            ],
        },
        banner : '/images/dcdcd1.jpg',
        winter : {
            headline : 'winter fashion',
            list : [
                {
                    id : 1,
                    img : '/images/image91.jpg',
                    btnTxt : 'Women World',
                    title : 'Fashionista Travel Guide: Shopping Destinations Around the World',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }, 
                },
                {
                    id : 2,
                    img : '/images/image101.jpg',
                    btnTxt : 'Women World',
                    title : 'Fashion Faux Pas: Common Mistakes to Avoid at All Cost',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }, 
                },
                {
                    id : 3,
                    img : '/images/unsplash_q.jpg',
                    btnTxt : 'Men World',
                    title : 'Vintage: How to Incorporate Retro Chic into Your Look',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }, 
                },
                {
                    id : 4,
                    img : '/images/image6.jpg',
                    btnTxt : 'Women World',
                    title : 'Fitness Activewear That Takes You from Gym to Street',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    }, 
                },
            ],
        },
        recentPostFashionGallery : {
            recentPost : {
                headline : 'recent post list',
                items : [
                    {
                        img : '/images/image12.jpg',
                        btn1Txt : 'Women World',
                        btn2Txt : 'Celebrity Style',
                        title : 'Fashion: Timeless Wardrobe Stapless Worth Spurgling On',
                        bIcon : '/svgs/bday-icon.svg',
                        hIcon : '/svgs/h-icon.svg',
                        createdBy : 'By Anayatul Nayeem',
                        time : {
                            month : 'April',
                            day : '04',
                            year : '2024'
                        },
                        txt : `Get ready to channel your inner celebrity as we shine the spotlight on Hollywood's fashion elite. 
                        From glamorous award shows to chic street style, we uncover the secrets ...`
                    },
                    {
                        img : '/images/unsplash1.jpg',
                        btn1Txt : 'Men World',
                        btn2Txt : 'Celebrity Style',
                        title : 'Fashionable Feats: Record Breaking Moments in Fashion History',
                        bIcon : '/svgs/bday-icon.svg',
                        hIcon : '/svgs/h-icon.svg',
                        createdBy : 'By Anayatul Nayeem',
                        time : {
                            month : 'April',
                            day : '04',
                            year : '2024'
                        },
                        txt : `They say accessories make the outfit, and we couldn't agree more. From statement jewelry to 
                        eye-catching bags, our top picks will elevate your look from ordinary to ...`
                    },
                    {
                        img : '/images/image71.jpg',
                        btn1Txt : 'Women World',
                        btn2Txt : 'Celebrity Style',
                        title : 'The Art of Layering: Mastering the Perfect Ensemble for Any Occasion',
                        bIcon : '/svgs/bday-icon.svg',
                        hIcon : '/svgs/h-icon.svg',
                        createdBy : 'By Anayatul Nayeem',
                        time : {
                            month : 'April',
                            day : '04',
                            year : '2024'
                        },
                        txt : `Who says you need to break the bank to stay stylish? With our DIY fashion hacks, you can 
                        transform your old clothes into trendy masterpieces in no time. Whether ...`
                    }
                ],
            },
            fashionGallery : {
                headline : 'fashion gallery',
                photos : [
                    '/images/unsplash1.jpg',
                    '/images/image5.jpg',
                    '/images/image71.jpg',
                    '/images/fashion021.jpg',
                    '/images/image2.jpg',
                    '/images/image6.jpg',
                    '/images/image8.jpg',
                    '/images/unsplash2.jpg',
                    '/images/image11.jpg',
                    '/images/unsplash3.jpg',
                    '/images/unsplash_TT1.jpg',
                    '/images/image91.jpg'
                ],
                img : '/images/image17.jpg'
            }
        },
        editors : {
            headline : 'editors pick',
            items : [
                {
                    img : '/images/image92.jpg',
                    btn1Txt : 'Women World',
                    btn2Txt : 'Celebrity Style',
                    title : 'Fashion Revolution: Redefining Norms and Breaking Boundaries',
                    bIcon : '/svgs/bday-icon.svg',
                    hIcon : '/svgs/h-icon.svg',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    },
                    txt : `The fashion world is always evolving, and so are the designers behind it. Discover the next 
                    big names in fashion as we shine a spotlight on emerging designers who are pushing...`
                },
                {
                    img : '/images/image13.jpg',
                    btn1Txt : 'Women World',
                    btn2Txt : 'Celebrity Style',
                    title : 'Summer Style Secrets: How to Stay Cool and Chic in the Heat',
                    bIcon : '/svgs/bday-icon.svg',
                    hIcon : '/svgs/h-icon.svg',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    },
                    txt : `In a world where sustainability is more important than ever, fashion is no exception. 
                    Join us as we celebrate eco-friendly brands that are leading the charge towards....`
                },
                {
                    img : '/images/unsplash4.jpg',
                    btn1Txt : 'Men World',
                    btn2Txt : 'Celebrity Style',
                    title : 'Fashion: Exploring the Intersection of Fashion and Technology',
                    bIcon : '/svgs/bday-icon.svg',
                    hIcon : '/svgs/h-icon.svg',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    },
                    txt : `Street style has become a global phenomenon, with fashionistas around the world 
                    showcasing their unique sense of style on the sidewalks of cities everywhere....`
                },
                {
                    img : '/images/image102.jpg',
                    btn1Txt : 'Women World',
                    btn2Txt : 'Celebrity Style',
                    title : 'The Evolution of Denim: From Workwear Staple to Fashion Icon',
                    bIcon : '/svgs/bday-icon.svg',
                    hIcon : '/svgs/h-icon.svg',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    },
                    txt : `From Audrey Hepburn's iconic little black dress to Rihanna's boundary-pushing red carpet looks, 
                    fashion icons have always captivated us with their timeless beauty and style. Join us as we take a trip down memory lane...`
                },
                {
                    img : '/images/image5.jpg',
                    btn1Txt : 'Men World',
                    btn2Txt : 'Celebrity Style',
                    title : 'Haute Couture Highlights: Behind the Scenes at Fashion Week',
                    bIcon : '/svgs/bday-icon.svg',
                    hIcon : '/svgs/h-icon.svg',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    },
                    txt : `In a society that often equates beauty with size, it's time to rewrite the rules and celebrate beauty in all its 
                    forms. Join us as we shine a spotlight on body-positive fashion brands that are challenging beauty standards...`
                },
                {
                    img : '/images/image7.jpg',
                    btn1Txt : 'Women World',
                    btn2Txt : 'Celebrity Style',
                    title : 'The Power of Prints: How to Mix and Match Patterns Like a Pro',
                    bIcon : '/svgs/bday-icon.svg',
                    hIcon : '/svgs/h-icon.svg',
                    createdBy : 'By Anayatul Nayeem',
                    time : {
                        month : 'April',
                        day : '04',
                        year : '2024'
                    },
                    txt : `Color has the power to transform your mood and elevate your style, so why not embrace the hottest shades of the season? 
                    From vibrant neons to classic neutrals, our guide will show you how to incorporate color..`
                }
            ],
            btnTxt : 'Load More'
        },
        footer : {
            newsletterForm : {
                headline : 'Join Our Newsletter',
                subHeadLine : 'Daily Free Our Fashion News Straight To Your Inbox',
                placeHolderText : 'Your Email',
                buttonText : 'Sign Up'
            },
            aboutUs : {
                title : 'About Us',
                logo : '/svgs/layer-1.svg',
                para1 : `At Fashion Flow, we believe that fashion is more than just clothing—it's a form 
                    of self-expression, a way to showcase your unique personality to`,
                para2 : `Join us as we navigate the ever-evolving landscape of fashion, where each piece 
                    tells a story and every outfit is a canvas waiting to be painted. Let's embark on this journey together, where the only limit is your imagination.`,
                contact : {
                    header : 'Contact us using the details below',
                    email : 'contact@fashionflow.com',
                    phone : '+1 (123) 456-7890',
                },
                logos : [
                    '/svgs/vector1.svg', '/svgs/vector2.svg', '/svgs/vector3.svg', '/svgs/vector4.svg', '/svgs/vector5.svg'
                ]
            },
            recentAndMostPopular : [
                {
                    headline : 'Recent Post',
                    items :  [
                        {
                            img : '/images/ft1.jpg',
                            title : 'Affordable Makeup and Skincare Finds That Deliver',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        },
                        {
                            img : '/images/ft2.jpg',
                            title : 'The Impact of Clothing Choices on Mood',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        },
                        {
                            img : '/images/ft3.jpg',
                            title : 'The Rise of Gender-Neutral Fashion',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        },
                        {
                            img : '/images/ft4.jpg',
                            title : 'Fashion: Making a Difference One Outfit at a Time',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        }
                    ],
                },
                {
                    headline : 'Most Popular',
                    items :  [
                        {
                            img : '/images/ft5.jpg',
                            title : 'Statement Accessories for Every Personality',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        },
                        {
                            img : '/images/ft6.jpg',
                            title : 'Forward: Unleash Your Style in the Fashion Zone!',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        },
                        {
                            img : '/images/ft7.jpg',
                            title : 'Recap: Best Dressed Moments from Award Season',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        },
                        {
                            img : '/images/ft8.jpg',
                            title : 'Wardrobe Essentials: Building a Closet That Works for You',
                            createdBy : 'By Anayatul Nayeem',
                            time : {
                                month : 'April',
                                day : '04',
                                year : '2024'
                            }
                        }
                    ],
                }
            ],
            copyrightTxt : 'Copyright © 2024 | Designed By',
            copyrightBy : 'WPXPO',
            menuList : [
                'Home', 'Category', 'Blog', 'About Us'
            ]
        }
    }


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={cls}>
                <Header data={data.head} />
                <Hero data={data.hero} />
                <Recent data={data.recent} />
                <Category data={data.category} />
                <FashionHistory data={data.fashionHistory} />
                <Banner data={data.banner} />
                <Winter data={data.winter} />
                <RecentPostFashionGallery data={data.recentPostFashionGallery} />
                <EditorsPick data={data.editors} />
                <Footer data={data.footer} />
            </div>
        </ThemeContext.Provider>
    );
}


export default App
