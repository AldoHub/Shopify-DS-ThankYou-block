import {
  extension,
  Button,
  Heading,
  BlockStack,
  TextBlock,
  Image,
  BlockSpacer
} from "@shopify/ui-extensions/checkout";


export default extension("purchase.thank-you.block.render", (root, api) => {

  api.lines.subscribe((lines) => {
    
    let itemsArr = [];

    lines.map(async (line) => {
      itemsArr.push(line.merchandise.title);
    });


    console.log("ITEMS ARRAY ---->", itemsArr)
    //window.location="https://join.dailystoic.com/2026-dsl-upgrade/";

    //2026 New Year, New You Challenge
    if(itemsArr.includes('2026 New Year, New You Challenge')){

      const textBlock = root.createComponent(BlockStack, undefined, [
      /*
        root.createComponent(Image, {
          source: 'https://cdn.shopify.com/s/files/1/1757/6457/files/DSL_LOGO_Black.png?v=1734127927',
        }),
        root.createComponent(
          Button,
          {
            appearance: 'critical',
            to: "https://dailystoic.memberful.com/checkout?plan=28320&coupon=NYNYDSL25"
          },
          root.createComponent(
            TextBlock,
            undefined,
            'BUY NOW $150',
          ),
        ),
        root.createComponent(Heading, undefined, 'Welcome to New Year, New You'),
        
        root.createComponent(
          TextBlock,
          undefined,
          'We are so excited to have you here and can’t wait to send you the first challenge in your inbox starting January 1st.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'You’ve made a great investment in yourself: an investment to become a better version of yourself and become the person you know you’re capable of being.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'But this is just the beginning, if you choose it to be.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'The New Year, New You course is a launchpad—and if you’re serious about making this the year everything changes, I’d like to invite you to take the next step and join…',
        ),
        root.createComponent(Heading, undefined, 'Daily Stoic Life'),
        root.createComponent(
          TextBlock,
          undefined,
          'Daily Stoic Life isn’t just a membership. It’s a commitment to the entire year ahead—a commitment to live by the principles you’ve just invested in.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'Here’s what you’ll get:',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          '1.- Exclusive Daily Meditations: Delivered directly to your inbox, ad-free, every day of the year. These aren’t just reminders; they’re tools to center you daily.',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          '2.- A Hardcover Book: A beautifully crafted collection of the best Stoic wisdom from last year’s meditations—a resource you’ll return to time and time again.',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          '3.- Private Community Access: Surround yourself with like-minded individuals who are committed to living with wisdom, courage, temperance, and justice.',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          '4.- Members-Only Discounts: Enjoy exclusive savings on everything in the Daily Stoic store.',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          '5.- A New Member Gift Set: This isn’t just a gift—it’s a toolkit to keep you grounded, inspired, and aligned with your values.',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          '6.- And most valuable of all - Free Access to Every Course and Challenge: From Stoicism 101 to Taming Your Temper, from parenting better to mastering habits—you’ll get full access to all of it.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'This is how you stay committed—not just for a few weeks, but for the entire year.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'And here’s the best part: the $99 you just spent? We’ll credit it toward your membership.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'This is your chance to make 2025 the year of transformation—not a fleeting resolution, but a sustained practice.',
        ),
        root.createComponent(
          TextBlock,
          {emphasis: 'bold'},
          'Click below to upgrade to Daily Stoic Life and step into the year fully committed.',
        ),
        root.createComponent(
          TextBlock,
          undefined,
          'Let’s make this the year you live as the person you’re meant to be.',
        ),
        */
        root.createComponent(
          BlockSpacer,
          {
           spacing: 'loose'
          }
        ),
        root.createComponent(
          Button,
          {
            appearance: 'critical',
            to: "https://join.dailystoic.com/2026-dsl-upgrade/"
          },
          root.createComponent(
            TextBlock,
            undefined,
            'CLICK HERE FOR THE NEXT STEP >',
          ),
        ),
         root.createComponent(
          BlockSpacer,
          {
           spacing: 'loose'
          }
        ),
          root.createComponent(
          BlockSpacer,
          {
           spacing: 'loose'
          }
        )
    
      ]);
      root.appendChild(textBlock);


      }

  });
 
});