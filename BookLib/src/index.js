const { DynamoDBClient,GetItemCommand} = require( "@aws-sdk/client-dynamodb");
const dbClient = new DynamoDBClient({region:'us-east-1'})

const params = {
  TableName : 'Library',
  /* Item properties will depend on your application concerns */
  Key: {
     "bookID" : {S: '001A'},
  }
}

exports.handler = async (event) => {
  console.log(params)
   const response = await dbClient.send(new GetItemCommand(params));
    return response
   
};