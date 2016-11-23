// imports resources
import {testResources} from './resources'

// exports
export default {
  //api methods will write to here
    postData: function (testId,data) {
        return testResources.save({testId:testId},data);
    }
}
