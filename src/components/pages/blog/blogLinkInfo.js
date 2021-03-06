const blogLinkList = [
  {
    key: 'HelloWorld',
    path: '/HelloWorld',
    title: 'Load Balancing AWS Lambdas',
    date: '12-14-1991',
    description: 'How to properly generate AWS Lambda responses for targets of Application Load Balancers',
  }
  // {
  //   title: 'Dynamic DynamoDB Updates',
  //   date: '12-14-1991',
  //   description: 'How to perform partial updates of DynamoDB Items using DynamoDB DocumentClient',
  // },
  // {
  //   title: 'The App who Cried Wolf',
  //   date: '12-14-1991',
  //   description: 'A satirical fake fairytale about error reporting',
  // }
];

const blogLinkMap = blogLinkList.reduce((obj, linkInfo) => {
  obj[linkInfo.key] = linkInfo;
  return obj;
},{});

export {blogLinkList, blogLinkMap};
