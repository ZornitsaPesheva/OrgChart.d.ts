///<reference path="OrgChart.d.ts" />

var chart = new OrgChart(document.getElementById("tree"), {

    nodeBinding: {
        field_0: "name",
        field_1: "title"
    },

}) ;

    var nodes = [
                { id: 1, name: "Amber McKenzie", title: "CEO" },
                { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
                { id: 3, pid: 1, name: "Peter Stevens", title: "HR Manager" }
            ];

        
    chart.load(nodes);
