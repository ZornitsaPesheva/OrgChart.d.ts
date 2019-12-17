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
   // nodeMouseClick: OrgChart.action


}) ;

    var nodes = [
                { id: 1, name: "Amber McKenzie", title: "CEO" },
                { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
                { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
            ];

        
        chart.load(nodes);
