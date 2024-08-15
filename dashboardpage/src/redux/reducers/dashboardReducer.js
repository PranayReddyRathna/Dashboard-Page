
import { ADD_WIDGET, REMOVE_WIDGET } from '../actions/dashboardActions';

const initialState = {
    categoryName: "CNAPP Dashboard",
    dashboards: [
        {
            dashboardId: 1,
            dashboardName: "CSPM Executive Dashboard",
            widgets: [
                { widgetId: 1, widgetName: "Cloud Accounts", widgetData: { "connected devices": 2, "not connected devices": 0 } },
                { widgetId: 2, widgetName: "Cloud Account Risk Management", widgetData: { "Failed": 800, "Warning": 560, "Passes": 400, "Not available": 36 } }
            ]
        },
        {
            dashboardId: 2,
            dashboardName: "CWPP Dashboard",
            widgets: [
                { widgetId: 3, widgetName: "Top 5 Namespace Specific Alerts", widgetData: { "data": "not available" } },
                { widgetId: 4, widgetName: "Workload Alerts", widgetData: { "data": "not available" } }
            ]
        },
        {
            dashboardId: 3,
            dashboardName: "Registry Scan",
            widgets: [
                { widgetId: 5, widgetName: "Image Risk Management", widgetData: { "critical": 350, "solved": 400, "unsolved": 200, "high": 250 } },
                { widgetId: 6, widgetName: "Image Security Issues", widgetData: { "critical": 350, "solved": 400, "unsolved": 200, "high": 250 } }
            ]
        }
    ]
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return {
                ...state,
                dashboards: state.dashboards.map(dashboard =>
                    dashboard.dashboardId === action.payload.dashboardId
                        ? { ...dashboard, widgets: [...dashboard.widgets, action.payload.widget] }
                        : dashboard
                )
            };
        case REMOVE_WIDGET:
            return {
                ...state,
                dashboards: state.dashboards.map(dashboard =>
                    dashboard.dashboardId === action.payload.dashboardId
                        ? {
                            ...dashboard,
                            widgets: dashboard.widgets.filter(widget => widget.widgetId !== action.payload.widgetId)
                        }
                        : dashboard
                )
            };
        default:
            return state;
    }
};

export default dashboardReducer;
