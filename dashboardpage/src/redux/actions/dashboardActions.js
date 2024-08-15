export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const addWidget = (dashboardId, widget) => ({
    type: ADD_WIDGET,
    payload: { dashboardId, widget }
});

export const removeWidget = (dashboardId, widgetId) => ({
    type: REMOVE_WIDGET,
    payload: { dashboardId, widgetId }
});