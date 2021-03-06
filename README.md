# process_maker_api

ProcessMakerApi - JavaScript client for process_maker_api
This ProcessMaker I/O API provides access to a BPMN 2.0 compliant workflow engine api that is designed to be used as a microservice to support enterprise cloud applications.  The current alpha 1.0 version supports most of the descriptive class of the BPMN 2.0 specification.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2017-06-01T08:08:35.890+03:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.processmaker.io/](https://www.processmaker.io/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install process_maker_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProcessMakerApi = require('process_maker_api');

var defaultClient = ProcessMakerApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = "YOUR ACCESS TOKEN"

var api = new ProcessMakerApi.ProcessmakerApi()

var userId = "userId_example"; // {String} ID of the user related to the Oauth client

var clientCreateItem = new ProcessMakerApi.ClientCreateItem(); // {ClientCreateItem} JSON API with the Oauth Client object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addClient(userId, clientCreateItem, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProcessMakerApi.ProcessmakerApi* | [**addClient**](docs/ProcessmakerApi.md#addClient) | **POST** /users/{user_id}/clients | 
*ProcessMakerApi.ProcessmakerApi* | [**addEvent**](docs/ProcessmakerApi.md#addEvent) | **POST** /processes/{process_id}/events | 
*ProcessMakerApi.ProcessmakerApi* | [**addEventConnector**](docs/ProcessmakerApi.md#addEventConnector) | **POST** /processes/{process_id}/events/{event_id}/connectors | 
*ProcessMakerApi.ProcessmakerApi* | [**addFlow**](docs/ProcessmakerApi.md#addFlow) | **POST** /processes/{process_id}/flows | 
*ProcessMakerApi.ProcessmakerApi* | [**addGateway**](docs/ProcessmakerApi.md#addGateway) | **POST** /processes/{process_id}/gateways | 
*ProcessMakerApi.ProcessmakerApi* | [**addGroup**](docs/ProcessmakerApi.md#addGroup) | **POST** /groups | 
*ProcessMakerApi.ProcessmakerApi* | [**addGroupsToTask**](docs/ProcessmakerApi.md#addGroupsToTask) | **PUT** /processes/{process_id}/tasks/{task_id}/groups | 
*ProcessMakerApi.ProcessmakerApi* | [**addInputOutput**](docs/ProcessmakerApi.md#addInputOutput) | **POST** /processes/{process_id}/tasks/{task_id}/inputoutput | 
*ProcessMakerApi.ProcessmakerApi* | [**addInstance**](docs/ProcessmakerApi.md#addInstance) | **POST** /processes/{process_id}/instances | 
*ProcessMakerApi.ProcessmakerApi* | [**addProcess**](docs/ProcessmakerApi.md#addProcess) | **POST** /processes | 
*ProcessMakerApi.ProcessmakerApi* | [**addTask**](docs/ProcessmakerApi.md#addTask) | **POST** /processes/{process_id}/tasks | 
*ProcessMakerApi.ProcessmakerApi* | [**addTaskConnector**](docs/ProcessmakerApi.md#addTaskConnector) | **POST** /processes/{process_id}/tasks/{task_id}/connectors | 
*ProcessMakerApi.ProcessmakerApi* | [**addUser**](docs/ProcessmakerApi.md#addUser) | **POST** /users | 
*ProcessMakerApi.ProcessmakerApi* | [**addUsersToGroup**](docs/ProcessmakerApi.md#addUsersToGroup) | **PUT** /groups/{id}/users | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteClient**](docs/ProcessmakerApi.md#deleteClient) | **DELETE** /users/{user_id}/clients/{client_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteEvent**](docs/ProcessmakerApi.md#deleteEvent) | **DELETE** /processes/{process_id}/events/{event_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteEventConnector**](docs/ProcessmakerApi.md#deleteEventConnector) | **DELETE** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteFlow**](docs/ProcessmakerApi.md#deleteFlow) | **DELETE** /processes/{process_id}/flows/{flow_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteGateway**](docs/ProcessmakerApi.md#deleteGateway) | **DELETE** /processes/{process_id}/gateways/{gateway_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteGroup**](docs/ProcessmakerApi.md#deleteGroup) | **DELETE** /groups/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteInputOutput**](docs/ProcessmakerApi.md#deleteInputOutput) | **DELETE** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteInstance**](docs/ProcessmakerApi.md#deleteInstance) | **DELETE** /processes/{process_id}/instances/{instance_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteProcess**](docs/ProcessmakerApi.md#deleteProcess) | **DELETE** /processes/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteTask**](docs/ProcessmakerApi.md#deleteTask) | **DELETE** /processes/{process_id}/tasks/{task_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteTaskConnector**](docs/ProcessmakerApi.md#deleteTaskConnector) | **DELETE** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**deleteUser**](docs/ProcessmakerApi.md#deleteUser) | **DELETE** /users/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**eventTrigger**](docs/ProcessmakerApi.md#eventTrigger) | **POST** /processes/{process_id}/events/{event_id}/trigger | 
*ProcessMakerApi.ProcessmakerApi* | [**findClientById**](docs/ProcessmakerApi.md#findClientById) | **GET** /users/{user_id}/clients/{client_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findClients**](docs/ProcessmakerApi.md#findClients) | **GET** /users/{user_id}/clients | 
*ProcessMakerApi.ProcessmakerApi* | [**findDataModel**](docs/ProcessmakerApi.md#findDataModel) | **GET** /processes/{process_id}/instances/{instance_id}/datamodel | 
*ProcessMakerApi.ProcessmakerApi* | [**findEventById**](docs/ProcessmakerApi.md#findEventById) | **GET** /processes/{process_id}/events/{event_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findEventConnectorById**](docs/ProcessmakerApi.md#findEventConnectorById) | **GET** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findEventConnectors**](docs/ProcessmakerApi.md#findEventConnectors) | **GET** /processes/{process_id}/events/{event_id}/connectors | 
*ProcessMakerApi.ProcessmakerApi* | [**findEvents**](docs/ProcessmakerApi.md#findEvents) | **GET** /processes/{process_id}/events | 
*ProcessMakerApi.ProcessmakerApi* | [**findFlowById**](docs/ProcessmakerApi.md#findFlowById) | **GET** /processes/{process_id}/flows/{flow_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findFlows**](docs/ProcessmakerApi.md#findFlows) | **GET** /processes/{process_id}/flows | 
*ProcessMakerApi.ProcessmakerApi* | [**findGatewayById**](docs/ProcessmakerApi.md#findGatewayById) | **GET** /processes/{process_id}/gateways/{gateway_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findGateways**](docs/ProcessmakerApi.md#findGateways) | **GET** /processes/{process_id}/gateways | 
*ProcessMakerApi.ProcessmakerApi* | [**findGroupById**](docs/ProcessmakerApi.md#findGroupById) | **GET** /groups/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findGroups**](docs/ProcessmakerApi.md#findGroups) | **GET** /groups | 
*ProcessMakerApi.ProcessmakerApi* | [**findInputOutputById**](docs/ProcessmakerApi.md#findInputOutputById) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
*ProcessMakerApi.ProcessmakerApi* | [**findInputOutputs**](docs/ProcessmakerApi.md#findInputOutputs) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput | 
*ProcessMakerApi.ProcessmakerApi* | [**findInstanceById**](docs/ProcessmakerApi.md#findInstanceById) | **GET** /processes/{process_id}/instances/{instance_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findInstances**](docs/ProcessmakerApi.md#findInstances) | **GET** /processes/{process_id}/instances | 
*ProcessMakerApi.ProcessmakerApi* | [**findProcessById**](docs/ProcessmakerApi.md#findProcessById) | **GET** /processes/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findProcesses**](docs/ProcessmakerApi.md#findProcesses) | **GET** /processes | 
*ProcessMakerApi.ProcessmakerApi* | [**findTaskById**](docs/ProcessmakerApi.md#findTaskById) | **GET** /processes/{process_id}/tasks/{task_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findTaskConnectorById**](docs/ProcessmakerApi.md#findTaskConnectorById) | **GET** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findTaskConnectors**](docs/ProcessmakerApi.md#findTaskConnectors) | **GET** /processes/{process_id}/tasks/{task_id}/connectors | 
*ProcessMakerApi.ProcessmakerApi* | [**findTaskInstanceById**](docs/ProcessmakerApi.md#findTaskInstanceById) | **GET** /task_instances/{task_instance_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findTaskInstances**](docs/ProcessmakerApi.md#findTaskInstances) | **GET** /task_instances | 
*ProcessMakerApi.ProcessmakerApi* | [**findTasks**](docs/ProcessmakerApi.md#findTasks) | **GET** /processes/{process_id}/tasks | 
*ProcessMakerApi.ProcessmakerApi* | [**findUserById**](docs/ProcessmakerApi.md#findUserById) | **GET** /users/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**findUsers**](docs/ProcessmakerApi.md#findUsers) | **GET** /users | 
*ProcessMakerApi.ProcessmakerApi* | [**importBpmnFile**](docs/ProcessmakerApi.md#importBpmnFile) | **POST** /processes/import | 
*ProcessMakerApi.ProcessmakerApi* | [**myselfUser**](docs/ProcessmakerApi.md#myselfUser) | **GET** /users/myself | 
*ProcessMakerApi.ProcessmakerApi* | [**removeGroupsFromTask**](docs/ProcessmakerApi.md#removeGroupsFromTask) | **DELETE** /processes/{process_id}/tasks/{task_id}/groups | 
*ProcessMakerApi.ProcessmakerApi* | [**removeUsersFromGroup**](docs/ProcessmakerApi.md#removeUsersFromGroup) | **DELETE** /groups/{id}/users | 
*ProcessMakerApi.ProcessmakerApi* | [**syncGroupsToTask**](docs/ProcessmakerApi.md#syncGroupsToTask) | **POST** /processes/{process_id}/tasks/{task_id}/groups | 
*ProcessMakerApi.ProcessmakerApi* | [**syncUsersToGroup**](docs/ProcessmakerApi.md#syncUsersToGroup) | **POST** /groups/{id}/users | 
*ProcessMakerApi.ProcessmakerApi* | [**updateClient**](docs/ProcessmakerApi.md#updateClient) | **PUT** /users/{user_id}/clients/{client_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateEvent**](docs/ProcessmakerApi.md#updateEvent) | **PUT** /processes/{process_id}/events/{event_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateEventConnector**](docs/ProcessmakerApi.md#updateEventConnector) | **PUT** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateFlow**](docs/ProcessmakerApi.md#updateFlow) | **PUT** /processes/{process_id}/flows/{flow_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateGateway**](docs/ProcessmakerApi.md#updateGateway) | **PUT** /processes/{process_id}/gateways/{gateway_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateGroup**](docs/ProcessmakerApi.md#updateGroup) | **PUT** /groups/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateInputOutput**](docs/ProcessmakerApi.md#updateInputOutput) | **PUT** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateInstance**](docs/ProcessmakerApi.md#updateInstance) | **PUT** /processes/{process_id}/instances/{instance_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateProcess**](docs/ProcessmakerApi.md#updateProcess) | **PUT** /processes/{id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateTask**](docs/ProcessmakerApi.md#updateTask) | **PUT** /processes/{process_id}/tasks/{task_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateTaskConnector**](docs/ProcessmakerApi.md#updateTaskConnector) | **PUT** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateTaskInstance**](docs/ProcessmakerApi.md#updateTaskInstance) | **PATCH** /task_instances/{task_instance_id} | 
*ProcessMakerApi.ProcessmakerApi* | [**updateUser**](docs/ProcessmakerApi.md#updateUser) | **PUT** /users/{id} | 


## Documentation for Models

 - [ProcessMakerApi.BpmnFile](docs/BpmnFile.md)
 - [ProcessMakerApi.BpmnFileAttributes](docs/BpmnFileAttributes.md)
 - [ProcessMakerApi.BpmnImportItem](docs/BpmnImportItem.md)
 - [ProcessMakerApi.Client](docs/Client.md)
 - [ProcessMakerApi.ClientAttributes](docs/ClientAttributes.md)
 - [ProcessMakerApi.ClientCollection](docs/ClientCollection.md)
 - [ProcessMakerApi.ClientCreateItem](docs/ClientCreateItem.md)
 - [ProcessMakerApi.ClientItem](docs/ClientItem.md)
 - [ProcessMakerApi.ClientUpdateItem](docs/ClientUpdateItem.md)
 - [ProcessMakerApi.DataModel](docs/DataModel.md)
 - [ProcessMakerApi.DataModelAttributes](docs/DataModelAttributes.md)
 - [ProcessMakerApi.DataModelItem](docs/DataModelItem.md)
 - [ProcessMakerApi.DataModelItem1](docs/DataModelItem1.md)
 - [ProcessMakerApi.DataModelItemAttributes](docs/DataModelItemAttributes.md)
 - [ProcessMakerApi.Error](docs/Error.md)
 - [ProcessMakerApi.ErrorArray](docs/ErrorArray.md)
 - [ProcessMakerApi.Event](docs/Event.md)
 - [ProcessMakerApi.EventAttributes](docs/EventAttributes.md)
 - [ProcessMakerApi.EventCollection](docs/EventCollection.md)
 - [ProcessMakerApi.EventConnector](docs/EventConnector.md)
 - [ProcessMakerApi.EventConnector1](docs/EventConnector1.md)
 - [ProcessMakerApi.EventConnectorAttributes](docs/EventConnectorAttributes.md)
 - [ProcessMakerApi.EventConnectorCreateItem](docs/EventConnectorCreateItem.md)
 - [ProcessMakerApi.EventConnectorUpdateItem](docs/EventConnectorUpdateItem.md)
 - [ProcessMakerApi.EventConnectorsCollection](docs/EventConnectorsCollection.md)
 - [ProcessMakerApi.EventCreateItem](docs/EventCreateItem.md)
 - [ProcessMakerApi.EventItem](docs/EventItem.md)
 - [ProcessMakerApi.EventUpdateItem](docs/EventUpdateItem.md)
 - [ProcessMakerApi.Flow](docs/Flow.md)
 - [ProcessMakerApi.FlowAttributes](docs/FlowAttributes.md)
 - [ProcessMakerApi.FlowCollection](docs/FlowCollection.md)
 - [ProcessMakerApi.FlowCreateItem](docs/FlowCreateItem.md)
 - [ProcessMakerApi.FlowItem](docs/FlowItem.md)
 - [ProcessMakerApi.FlowUpdateItem](docs/FlowUpdateItem.md)
 - [ProcessMakerApi.Gateway](docs/Gateway.md)
 - [ProcessMakerApi.GatewayAttributes](docs/GatewayAttributes.md)
 - [ProcessMakerApi.GatewayCollection](docs/GatewayCollection.md)
 - [ProcessMakerApi.GatewayCreateItem](docs/GatewayCreateItem.md)
 - [ProcessMakerApi.GatewayItem](docs/GatewayItem.md)
 - [ProcessMakerApi.GatewayUpdateItem](docs/GatewayUpdateItem.md)
 - [ProcessMakerApi.Group](docs/Group.md)
 - [ProcessMakerApi.GroupAddUsersItem](docs/GroupAddUsersItem.md)
 - [ProcessMakerApi.GroupAttributes](docs/GroupAttributes.md)
 - [ProcessMakerApi.GroupCollection](docs/GroupCollection.md)
 - [ProcessMakerApi.GroupCreateItem](docs/GroupCreateItem.md)
 - [ProcessMakerApi.GroupIds](docs/GroupIds.md)
 - [ProcessMakerApi.GroupItem](docs/GroupItem.md)
 - [ProcessMakerApi.GroupRemoveUsersItem](docs/GroupRemoveUsersItem.md)
 - [ProcessMakerApi.GroupSyncUsersItem](docs/GroupSyncUsersItem.md)
 - [ProcessMakerApi.GroupUpdateItem](docs/GroupUpdateItem.md)
 - [ProcessMakerApi.InlineResponse200](docs/InlineResponse200.md)
 - [ProcessMakerApi.InputOutput](docs/InputOutput.md)
 - [ProcessMakerApi.InputOutputAttributes](docs/InputOutputAttributes.md)
 - [ProcessMakerApi.InputOutputCollection](docs/InputOutputCollection.md)
 - [ProcessMakerApi.InputOutputCreateItem](docs/InputOutputCreateItem.md)
 - [ProcessMakerApi.InputOutputItem](docs/InputOutputItem.md)
 - [ProcessMakerApi.InputOutputUpdateItem](docs/InputOutputUpdateItem.md)
 - [ProcessMakerApi.Instance](docs/Instance.md)
 - [ProcessMakerApi.InstanceAttributes](docs/InstanceAttributes.md)
 - [ProcessMakerApi.InstanceCollection](docs/InstanceCollection.md)
 - [ProcessMakerApi.InstanceCreateItem](docs/InstanceCreateItem.md)
 - [ProcessMakerApi.InstanceItem](docs/InstanceItem.md)
 - [ProcessMakerApi.InstanceUpdateItem](docs/InstanceUpdateItem.md)
 - [ProcessMakerApi.Meta](docs/Meta.md)
 - [ProcessMakerApi.MetaLog](docs/MetaLog.md)
 - [ProcessMakerApi.Pagination](docs/Pagination.md)
 - [ProcessMakerApi.PaginationLinks](docs/PaginationLinks.md)
 - [ProcessMakerApi.Process](docs/Process.md)
 - [ProcessMakerApi.ProcessAttributes](docs/ProcessAttributes.md)
 - [ProcessMakerApi.ProcessCollection](docs/ProcessCollection.md)
 - [ProcessMakerApi.ProcessCollection1](docs/ProcessCollection1.md)
 - [ProcessMakerApi.ProcessCreateItem](docs/ProcessCreateItem.md)
 - [ProcessMakerApi.ProcessItem](docs/ProcessItem.md)
 - [ProcessMakerApi.ProcessUpdateItem](docs/ProcessUpdateItem.md)
 - [ProcessMakerApi.ResultSuccess](docs/ResultSuccess.md)
 - [ProcessMakerApi.ResultSuccessMeta](docs/ResultSuccessMeta.md)
 - [ProcessMakerApi.Task](docs/Task.md)
 - [ProcessMakerApi.TaskAddGroupsItem](docs/TaskAddGroupsItem.md)
 - [ProcessMakerApi.TaskAttributes](docs/TaskAttributes.md)
 - [ProcessMakerApi.TaskCollection](docs/TaskCollection.md)
 - [ProcessMakerApi.TaskConnector](docs/TaskConnector.md)
 - [ProcessMakerApi.TaskConnector1](docs/TaskConnector1.md)
 - [ProcessMakerApi.TaskConnectorAttributes](docs/TaskConnectorAttributes.md)
 - [ProcessMakerApi.TaskConnectorCreateItem](docs/TaskConnectorCreateItem.md)
 - [ProcessMakerApi.TaskConnectorUpdateItem](docs/TaskConnectorUpdateItem.md)
 - [ProcessMakerApi.TaskConnectorsCollection](docs/TaskConnectorsCollection.md)
 - [ProcessMakerApi.TaskCreateItem](docs/TaskCreateItem.md)
 - [ProcessMakerApi.TaskInstance](docs/TaskInstance.md)
 - [ProcessMakerApi.TaskInstanceAttributes](docs/TaskInstanceAttributes.md)
 - [ProcessMakerApi.TaskInstanceCollection](docs/TaskInstanceCollection.md)
 - [ProcessMakerApi.TaskInstanceUpdateItem](docs/TaskInstanceUpdateItem.md)
 - [ProcessMakerApi.TaskItem](docs/TaskItem.md)
 - [ProcessMakerApi.TaskRemoveGroupsItem](docs/TaskRemoveGroupsItem.md)
 - [ProcessMakerApi.TaskSyncGroupsItem](docs/TaskSyncGroupsItem.md)
 - [ProcessMakerApi.TaskUpdateItem](docs/TaskUpdateItem.md)
 - [ProcessMakerApi.TriggerEventCreateItem](docs/TriggerEventCreateItem.md)
 - [ProcessMakerApi.User](docs/User.md)
 - [ProcessMakerApi.UserAttributes](docs/UserAttributes.md)
 - [ProcessMakerApi.UserCollection](docs/UserCollection.md)
 - [ProcessMakerApi.UserCreateItem](docs/UserCreateItem.md)
 - [ProcessMakerApi.UserIds](docs/UserIds.md)
 - [ProcessMakerApi.UserItem](docs/UserItem.md)
 - [ProcessMakerApi.UserUpdateItem](docs/UserUpdateItem.md)


## Documentation for Authorization


### PasswordGrant

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A

