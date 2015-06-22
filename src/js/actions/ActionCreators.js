import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {

    createChart: (chartName) => {
        Dispatcher.handleViewAction({
          type: Constants.ActionTypes.CREATE_CHART,
          chartName: chartName
        });
    };

};
