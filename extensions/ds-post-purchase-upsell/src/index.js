/**
 * Extend Shopify Checkout with a custom Post Purchase user experience This
 * Shopify Checkout template provides two extension points:
 *  1. ShouldRender - Called first, during the checkout process.
 *  2. Render - If requested by `ShouldRender`, will be rendered after checkout
 *     completes
 */
import {
  extend,
  BlockStack,
  Button,
  Heading,
  Image,
  Layout,
  TextBlock,
  TextContainer,
  Link,
  InlineStack
} from "@shopify/post-purchase-ui-extensions";


/**
 * Entry point for the `ShouldRender` Extension Point.
 *
 * Returns a value indicating whether or not to render a PostPurchase step, and
 * optionally allows data to be stored on the client for use in the `Render`
 * extension point.
 */
extend("Checkout::PostPurchase::ShouldRender", async ({ inputData, storage}) => {
  let render = false; 
  const lineItems = inputData.initialPurchase.lineItems;
  const product = await getRenderData(lineItems);
  if(product.length > 0){
    //render the stuff
    console.log('product found')
    render = true;
    // Saves initial state, provided to `Render` via `storage.initialData`
    await storage.update(storage.initialData);
    
  }else{
    console.log('Specified product not found!')
  }
  console.log("RENDER----", render)
  return {
    render
  }

});

// Simulate results of network call, etc.
async function getRenderData(items) {
  //console.log(items)
  //check the line items for the desired product
  let product = items.filter((item) => item.product.title === "Ocean Blue Shirt");
  console.log(product)
  return product;
}

/**
 * Entry point for the `Render` Extension Point
 *
 * Returns markup composed of remote UI components.  The Render extension can
 * optionally make use of data stored during `ShouldRender` extension point to
 * expedite time-to-first-meaningful-paint.
 */
extend(
  "Checkout::PostPurchase::Render",
  (root, { extensionPoint, storage }) => {
    
    const initialState = storage.initialData;

    root.appendChild(
        root.createComponent(
          Layout,
          {
            maxInlineSize: 0.95,
            media: [
              { viewportSize: "small", sizes: [1, 30, 1] },
              { viewportSize: "medium", sizes: [500, 30, 0.5] },
              { viewportSize: "large", sizes: [700, 30, 0.33] },
            ],
          },[
                root.createComponent(BlockStack, { spacing: "loose" }, [
                root.createComponent(Image, {
                  source: 'https://lh3.googleusercontent.com/roDh4BFeqBaw-oYFbjaUU_YSFk0fuHfwr_J4z9u0ejEMNbUTbJkt2M3XvgOmQR5O_RfscD30SEHQ36lC3bCQdUwrzGv3AbnIiL82=w828',
                }),
                root.createComponent(TextContainer, undefined, [
                  root.createComponent(Heading, {
                  }, 'Welcome to New Year, New You!'),
                  root.createComponent(TextBlock, undefined, 'You’ve made a great investment in yourself. An investment to become the person you know you’re capable of being.'),
                  root.createComponent(TextBlock, undefined, 'But this is just the beginning, if you choose it to be.'),
                  root.createComponent(TextBlock, undefined, 'The New Year, New You course is a launchpad and if you’re serious about making this the year everything changes, I’d like to invite you to take the next step and join…')
                ]),
                root.createComponent(TextContainer, undefined, [
                  root.createComponent(Heading, {
                  }, 'Daily Stoic Life'),
                  root.createComponent(TextBlock, undefined, 'Daily Stoic Life isn’t just a membership.'),
                  root.createComponent(TextBlock, undefined, 'It’s a commitment to the entire year ahead - a commitment to live by the principles you’ve just invested in.'),
                  root.createComponent(Heading, {
                    level: 2
                  }, 'Get the ultimate resource for becoming the person you want to be:'),
                ]),
                 root.createComponent(TextContainer, undefined, [
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Get This Course Free and Free Access to Every Course and Challenge!'),
                  root.createComponent(TextBlock, undefined, 'From Stoicism 101, to Taming Your Temper, to The Stoic Parent, to Read to Lead - you’ll get full access to it all - a $700 value! This more than pays for itself!'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Exclusive Daily Meditations: '),
                  root.createComponent(TextBlock, undefined, 'Ad-free, daily insights to start each morning with clarity and purpose.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ The Best Stoic Wisdom Hardcover Book: '),
                  root.createComponent(TextBlock, undefined, 'A beautifully crafted collection of the best Stoic wisdom from last year’s meditations - a resource you’ll return to time and time again'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Private Community Access: '),
                  root.createComponent(TextBlock, undefined, 'Connect with like-minded individuals worldwide for support and inspiration.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Members-Only Discounts: '),
                  root.createComponent(TextBlock, undefined, 'Exclusive savings on everything in the Daily Stoic store. '),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ A New Member Gift Set: '),
                  root.createComponent(TextBlock, undefined, 'This isn’t just a gift - it’s a toolkit to keep you grounded, inspired, and aligned with your values.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, 'And here’s the best part: '),
                  root.createComponent(TextBlock, undefined, 'The $99 you just spent? We’ll credit it toward your membership.'),
                 ]),
                  root.createComponent(TextContainer, undefined, [
                    root.createComponent(TextBlock, undefined, 'This is your chance to make 2026 the year of transformation - not a fleeting resolution, but a sustained practice to carry for the rest of your life.'),
                    root.createComponent(TextBlock, undefined, 'Click below to upgrade to Daily Stoic Life and step into the year fully committed.'),
                    root.createComponent(TextBlock, undefined, 'Let’s make this the year you live as the person you’re meant to be.'),
                    root.createComponent(TextBlock, undefined, 'This is the very best Daily Stoic has to offer and is the only upgrade being offered.'),
                    root.createComponent(TextBlock, undefined, 'I hope you take us up on this. '),
                    root.createComponent(TextBlock, {
                    }, '- Ryan Holiday'),
                    root.createComponent(Heading, {
                    level: 2
                  }, 'Apply your $99 New Year New You purchase towards Daily Stoic Life below.')
                  ]),
                  root.createComponent(TextContainer, {
                    alignment: 'center'
                  }, [
                    root.createComponent(
                      Button,
                      {  
                        to: 'https://dailystoic.memberful.com/checkout?coupon=NYNYDSL26&plan=28320'
                      },
                      'Make The Commitment To Yourself & Upgrade Now',
                    )
                  ]),
                  root.createComponent(TextContainer, {
                    alignment: 'center'
                  }, [
                    root.createComponent(TextBlock, {
                    }, '"It is an honor to be here. The best thing I ever did was to become a Daily Stoic Life member." -David Cox"'),
                    root.createComponent(TextBlock, {
                      emphasized: true
                    }, 'Join today and you’ll receive the Daily Stoic Life books from 2021, 2022, 2023, and 2024. Not just a single book like typical DSL members.'),
                    root.createComponent(TextBlock, {
                      emphasized: true
                    }, 'Plus, All challenges and courses are included to make sure you are equipped with the best Ryan Holiday and Daily Stoic have to offer...'),
                     root.createComponent(Image, {
                    source: 'https://lh3.googleusercontent.com/l6HqX2uIyRiRbzVjv5R9Nea-_6CuUQ3una7n123KjSB3gV7RMsNOskbaxfzv4ikxubdag3YC07YDClTk-SzYL_tp_WWeyK11I5k=w307',
                    }),
                   
                  ]),
                 
                  root.createComponent(
                  InlineStack,
                  {
                    spacing: 'base',
                  },
                  [
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/BbvOssv5DlS3gBlKVb53qtBykElwbC-RTjjzXmnKL_rz5CRCDUuuzqgeJQUosiusY4eXEIoIynZ0cr7p1672xft4mbi3yWb929c=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/Yoo1Wn_iVvnnC_xsPoL2-2DUK8hxQBdshte3ct6qxPQoMU5MvbAUNG7F7jYdOwOOje1u6Nrnpw9D4dzhDpRQeycoGZ8GrnAmpJg=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                     root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/xl0-8yIOkoYwswCwL35q2_BGpbTeg-HPw7OYDlF_9Q_2UqUNr1krSn6b3wau4aC01FKHHJa9bWwt6CuDYGK-mKUwZ8vAXVd_KA=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                  ]),

                   root.createComponent(
                  InlineStack,
                  {
                    spacing: 'base',
                  },
                  [
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/o13swQ-BseH1buavF0LS_pZBvcu4lOKxSzOi9lTEr-cKdWB7rqS-ckTd3TA57aH8p1bbqYsXzgEqSSF6mulS5Zg4UnS9Z7lAAd8=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/edzP9P26390O2-ANxln0W-fOZh4qiZzHxVTQiQoej-rmRM8qKlm8kFH2Uh2RT4hwh0FXiLussO0tZ33SRGth2ixyIzB_jh8b-w=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                     root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/a20OUEesNh9cBWSzcWeJPv_otorHB2vstalSePrT8tUJJU3W0Rhurit2JU1sUt0DaVkYBC69Sa342U_jlr_9rKq3tMa-E1CKkuUH=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                  ]),

  root.createComponent(
                  InlineStack,
                  {
                    spacing: 'base',
                  },
                  [
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/EeculINKqv9GmwjgFskp-sNX_MYFD9t_k7QwlyziMXi5o1kyHqI44xUeh5nBafzBYQqt00PgV6oSkovwNsfUgC1Ga928wuOWv8N5=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/vgb6KZNIMyNgUmR7YBVLFU0JqT_EhxWJ2RT7xBEdeTa5E34G2W2--PcIEtkunVaycqXjWQPqCtB8RQ0pzav5q8bcEk50oSfBXZU=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                     root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/gFJZAQV4uvaW0iYxQ0yQSSANWxmXpOK14fkl-_lwHsgnbUwciRr86V3Dhhwv9T4kBL2Xb_-58jCF_yRmB2IsMcjMwCC3srzHMw=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                  ]),


                    root.createComponent(
                  InlineStack,
                  {
                    spacing: 'base',
                  },
                  [
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/sURsJ7ctaOAzGjvtuSwkdUHUYtrj7kw46z1uW63bLruVQKJP00UfusD_x2F6aW421w_3my6ZKWUWUq1bUKAHBvTlg5yubg2p0BA=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                    root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/YuhFcZXLXIsnFrJyHrtLx6B1vplSMd3SQvzaw-uKi6c0g6yjb8bgCehSr_269h_hra7A8qJUbS0tXuew9wADqc6kV4o3MMU8OXA=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                     root.createComponent(TextContainer, {
                      alignment: 'center',
                      spacing: 'xloose'
                      }, [
                      root.createComponent(Image, {
                        source: 'https://lh3.googleusercontent.com/KUxtwqhUYwBuycEFdTo7lRZgNWVwcwcY_e8mCz15ztjCBwlDeZ5srlIJD2yvwGajS04FdLT47wBAN1ZJ5A2pwBhIhRIeof_2f7E=w277',
                      }),
                       root.createComponent(TextBlock, {
                        emphasized: true
                      }, 'Free'),
                    ]),
                  ]),

                  
                  root.createComponent(TextContainer, {
                    alignment: 'center',
                    spacing: 'xloose'
                  }, [
                    root.createComponent(
                      Button,
                      {  
                        to: 'https://dailystoic.memberful.com/checkout?coupon=NYNYDSL26&plan=28320'
                      },
                      'Upgrade To Daily Stoic Life',
                    ),
                    root.createComponent(Heading, {
                    }, 'The Membership Designed to Help You Live Like a Stoic — Not Just Endlessly Learn About It'),
                  ]),
                  root.createComponent(TextContainer, undefined, [
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ All Current (& Future) Daily Stoic Challenges & Courses'),
                  root.createComponent(TextBlock, undefined, 'Not lessons but new paths. Journey through them at your own pace and then return to them when life gets hard or you are facing a specific challenge. Use them when you feel off track. And join us for all event-based challenges to make sure you stay accountable.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Private Community Discussion Forum'),
                  root.createComponent(TextBlock, undefined, 'Your digital stoa. A space for reflection, collaboration, and collective wisdom. Connect with fellow stoics, ask questions, share ideas. No trolls. No noise. Just like-minded individuals dedicated to becoming the best versions of themselves.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Daily Meditations, 7 Days a Week'),
                  root.createComponent(TextBlock, undefined, 'Your daily reset button. Start each day grounded, not scattered. These include 100+ weekend-only meditations you can’t get anywhere else—delivered ad-free, straight to your inbox.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ The DSL Coin + Members Gift Set'),
                  root.createComponent(TextBlock, undefined, 'Your talisman. A daily tactile reminder to choose discipline over impulse, and virtue over ego. Carry it. Touch it. Let it bring you back when your mind wanders.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ The Stoic Meditations Hardcover Book (Limited Edition)'),
                  root.createComponent(TextBlock, undefined, 'Your anchor. A 400-page physical collection of our best emails from the year—bound, printed, and made to live on your desk, not your screen. You’ll annotate it. You’ll return to it. It becomes part of your environment.'),
                  root.createComponent(TextBlock, undefined, '**Join today and you’ll receive the Daily Stoic Life books from 2021, 2022, 2023, and 2024. Not just a single book like typical DSL members.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ The Daily Stoic Interviews eBook'),
                  root.createComponent(TextBlock, undefined, 'Your perspective shift. Conversations with Robert Greene, Nancy Sherman, Kevin Rose and more. Insights from modern thinkers on how Stoic ideas apply in real life.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ Live Q&As + Audio Content'),
                  root.createComponent(TextBlock, undefined, 'Your ongoing recalibration. Hear from Ryan and others in the community. Ask questions. Reflect together. Stay connected to the path.'),
                  root.createComponent(TextBlock, {
                    emphasized: true
                  }, '→ 10% Off in the Daily Stoic Store'),
                  root.createComponent(TextBlock, undefined, 'Your reward for commitment. Discounts on physical goods that support your practice—books, coins, journals, and more.'),
                  root.createComponent(TextContainer, {
                    alignment: 'center'
                  }, [
                    root.createComponent(
                        Button,
                        {  
                          to: 'https://dailystoic.memberful.com/checkout?coupon=NYNYDSL26&plan=28320'
                        },
                        'Solidify Your Commitment And Upgrade Now',
                      )
                    ]),
                  ]),
                   root.createComponent(TextContainer, {
                    alignment: 'center',
                    spacing: 'xloose'
                  }, [
                  
                    root.createComponent(
                        Link,
                        {  
                          to: 'https://join.dailystoic.com/2026-dsl-upgrade/#LB-Sf3YQXQNvtxg9QzUrzN5LY'
                        },
                        'FAQ',
                      ),
                      root.createComponent(TextBlock, undefined, 'Daily Stoic courses and challenges are non-refundable.'),
                      root.createComponent(TextBlock, undefined, '© 2025 Daily Stoic, All Rights Reserved'),
                      root.createComponent(Image, {
                      source: 'https://lh3.googleusercontent.com/l6HqX2uIyRiRbzVjv5R9Nea-_6CuUQ3una7n123KjSB3gV7RMsNOskbaxfzv4ikxubdag3YC07YDClTk-SzYL_tp_WWeyK11I5k=w100',
                    }),
                  ])
                  
                  

              ])

          ]) 
     
    );

    root.mount();
  
  }
);