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
  CalloutBanner,
  View,
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
      root.createComponent(BlockStack, { spacing: "loose" }, [
        root.createComponent(
          CalloutBanner,
          { title: "Post-purchase extension template" },
          "Use this template as a starting point to build a great post-purchase extension."
        ),
        root.createComponent(
          Layout,
          {
            maxInlineSize: 0.95,
            media: [
              { viewportSize: "small", sizes: [1, 30, 1] },
              { viewportSize: "medium", sizes: [300, 30, 0.5] },
              { viewportSize: "large", sizes: [400, 30, 0.33] },
            ],
          },
          [
            root.createComponent(View, {}, [
              root.createComponent(Image, {
                source:
                  "https://cdn.shopify.com/static/images/examples/img-placeholder-1120x1120.png",
              }),
            ]),
            root.createComponent(View),
            root.createComponent(BlockStack, { spacing: "xloose" }, [
              root.createComponent(TextContainer, {}, [
                root.createComponent(Heading, {}, "Post-purchase extension"),
                root.createComponent(
                  TextBlock,
                  {},
                  "Here you can cross-sell other products, request a product review based on a previous purchase, and much more."
                ),
              ]),
              root.createComponent(
                Button,
                {
                  submit: true,
                  onPress: () => {
                    // eslint-disable-next-line
                    console.log(
                      `Extension point ${extensionPoint}`,
                      initialState
                    );
                  },
                },
                "Primary button"
              ),
            ]),
          ]
        ),
      ])
        
    );

    root.mount();
  
  }
);