///<reference path="OrgChart.d.ts" />


var chart = new OrgChart(document.getElementById("tree"), {
    lazyLoading: true,
    enableSearch: false,
    orientation: OrgChart.orientation.top,
    mouseScrool: OrgChart.action.none,
    nodeBinding: {
        field_0: "name",
        field_1: "title"
    },
    enableDragDrop: false,
    enableTouch: false,
    nodeMenu: null,
    nodeContextMenu: null,
    dragDropMenu: null,
    menu: null,
    toolbar: false,
    sticky: true,
    nodeMouseClick: OrgChart.action.none,
    nodeMouseDdClick: OrgChart.action.zoom,
    showXScroll: OrgChart.none,
    showYScroll: OrgChart.scroll.visible,
    template: "ana",
    tags: {},
    linkBinding: {},
    searchFields: [],
    nodes: [],
    clinks: [],
    slinks: [],
    levelSeparation: 60,
    siblingSeparation: 20,
    subtreeSeparation: 40,
    mixedHierarchyNodesSeparation: 15,
    padding: 30,
    layout: OrgChart.normal,
    





}) ;

    var nodes = [
                { id: 1, name: "Amber McKenzie", title: "CEO" },
                { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
                { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
            ];

        
        chart.load(nodes);
