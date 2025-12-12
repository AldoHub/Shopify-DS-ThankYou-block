import {
  extension,
  Button,
  Heading,
  BlockStack,
  TextBlock,
  Image,
  BlockSpacer,
  Modal, Link
} from "@shopify/ui-extensions/checkout";



export default extension("purchase.thank-you.block.render", (root, api) => {
  api.lines.subscribe((lines) => {   
    let itemsArr = [];
    lines.map(async (line) => {
      itemsArr.push(line.merchandise.title);
    });
    console.log("ITEMS ARRAY ---->", itemsArr)
    //window.location="https://join.dailystoic.com/2026-dsl-upgrade/"; ---> we want to redirect here
    //2026 New Year, New You Challenge
    if(itemsArr.includes('2026 New Year, New You Challenge')){
    
      const textBlock = root.createComponent(BlockStack, undefined, [
      
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
     //root.append(link);
     root.append(textBlock); 
 }

  });
 
});